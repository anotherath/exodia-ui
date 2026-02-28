"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  createChart,
  ColorType,
  IChartApi,
  ISeriesApi,
  UTCTimestamp,
  CandlestickSeries,
} from "lightweight-charts";
import { CandleData, TradingInterval } from "@/types/trading";
import { getIntervalMs } from "@/lib/trading-utils";

import { TRADING_CONFIG } from "@/configs/trading";

interface UseTradingChartProps {
  currentPair: string;
  interval: string;
}

export function useTradingChart({
  currentPair,
  interval,
}: UseTradingChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick", UTCTimestamp> | null>(
    null,
  );
  const [currentPrice, setCurrentPrice] = useState<string>("0.00");
  const [priceChange, setPriceChange] = useState<number>(0);

  // Persistence refs for history loading
  const allCandlesRef = useRef<CandleData[]>([]);
  const isFetchingOlderRef = useRef(false);
  const oldestTimestampRef = useRef<number | null>(null);

  const loadHistory = useCallback(
    async (
      series: ISeriesApi<"Candlestick", UTCTimestamp>,
      isInitial: boolean,
      params: {
        pair: string;
        interval: string;
        oldestTimestamp: number | null;
      },
    ): Promise<{
      lastCandle?: CandleData;
      newData?: CandleData[];
      oldestTimestamp: number;
      allCandles?: CandleData[];
    } | null> => {
      try {
        let url = `${TRADING_CONFIG.OKX.API_URL}/history-candles?instId=${params.pair}&bar=${params.interval}&limit=100`;
        if (!isInitial && params.oldestTimestamp) {
          url += `&after=${params.oldestTimestamp}`;
        }

        const response = await fetch(url);
        const result = await response.json();

        if (result.code === "0" && result.data && result.data.length > 0) {
          const newData: CandleData[] = result.data
            .map((item: string[]) => ({
              time: (parseInt(item[0]) / 1000) as UTCTimestamp,
              open: parseFloat(item[1]),
              high: parseFloat(item[2]),
              low: parseFloat(item[3]),
              close: parseFloat(item[4]),
            }))
            .sort(
              (a: CandleData, b: CandleData) =>
                (a.time as number) - (b.time as number),
            );

          const ts = parseInt(result.data[result.data.length - 1][0]);

          if (isInitial) {
            series.setData(newData);
            const last = newData[newData.length - 1];
            setCurrentPrice(last.close.toLocaleString());
            const first = newData[0];
            setPriceChange(((last.close - first.open) / first.open) * 100);
            return {
              lastCandle: last,
              oldestTimestamp: ts,
              allCandles: newData,
            };
          } else {
            return {
              newData,
              oldestTimestamp: ts,
            };
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      return null;
    },
    [],
  );

  useEffect(() => {
    if (!chartContainerRef.current) return;

    let lastCandle: CandleData = {
      time: 0 as UTCTimestamp,
      open: 0,
      high: 0,
      low: 0,
      close: 0,
    };

    const currentIntervalMs = getIntervalMs(interval);

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#A1A1AA",
        fontFamily: "Inter, system-ui, sans-serif",
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderColor: "transparent",
        visible: true,
      },
      rightPriceScale: {
        borderColor: "transparent",
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
      },
      crosshair: {
        mode: 0,
        vertLine: {
          color: "#3B82F6",
          width: 1,
          style: 3,
          labelBackgroundColor: "#3B82F6",
        },
        horzLine: {
          color: "#3B82F6",
          width: 1,
          style: 3,
          labelBackgroundColor: "#3B82F6",
        },
      },
      handleScroll: true,
      handleScale: true,
    });

    const candlestickSeriesInstance = chart.addSeries(CandlestickSeries, {
      upColor: "#10B981",
      downColor: "#EF4444",
      borderVisible: false,
      wickUpColor: "#10B981",
      wickDownColor: "#EF4444",
    }) as ISeriesApi<"Candlestick", UTCTimestamp>;

    chartRef.current = chart;
    seriesRef.current = candlestickSeriesInstance;

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };
    window.addEventListener("resize", handleResize);

    // Reset persistence refs on pair/interval change
    allCandlesRef.current = [];
    isFetchingOlderRef.current = false;
    oldestTimestampRef.current = null;

    const init = async () => {
      const res = await loadHistory(candlestickSeriesInstance, true, {
        pair: currentPair,
        interval,
        oldestTimestamp: null,
      });
      if (res && res.lastCandle && res.allCandles) {
        lastCandle = res.lastCandle;
        oldestTimestampRef.current = res.oldestTimestamp;
        allCandlesRef.current = res.allCandles;
      }
    };

    init();

    chart.timeScale().subscribeVisibleLogicalRangeChange(async (range) => {
      if (
        range &&
        range.from < 10 &&
        !isFetchingOlderRef.current &&
        oldestTimestampRef.current
      ) {
        isFetchingOlderRef.current = true;
        const res = await loadHistory(candlestickSeriesInstance, false, {
          pair: currentPair,
          interval,
          oldestTimestamp: oldestTimestampRef.current,
        });
        if (res && res.newData) {
          allCandlesRef.current = [...res.newData, ...allCandlesRef.current];
          candlestickSeriesInstance.setData(allCandlesRef.current);
          oldestTimestampRef.current = res.oldestTimestamp;
        }
        isFetchingOlderRef.current = false;
      }
    });

    const ws = new WebSocket(TRADING_CONFIG.OKX.WSS_URL);

    const checkTimer = setInterval(() => {
      const now = Date.now();
      const currentCandleExpectedStart =
        Math.floor(now / currentIntervalMs) * currentIntervalMs;
      const nextCandleStart = (currentCandleExpectedStart /
        1000) as UTCTimestamp;

      if (lastCandle.time !== 0 && nextCandleStart > lastCandle.time) {
        const newCandle = {
          time: nextCandleStart,
          open: lastCandle.close,
          high: lastCandle.close,
          low: lastCandle.close,
          close: lastCandle.close,
        };

        // Sync with ref
        allCandlesRef.current.push(newCandle);

        lastCandle = newCandle;
        candlestickSeriesInstance.update(newCandle);
      }
    }, 1000);

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          op: "subscribe",
          args: [
            { channel: `candle${interval}`, instId: currentPair },
            { channel: "tickers", instId: currentPair },
          ],
        }),
      );
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (!msg.data || msg.data.length === 0) return;

      const channel = msg.arg.channel;
      const item = msg.data[0];

      if (channel.startsWith("candle")) {
        const timestamp = (parseInt(item[0]) / 1000) as UTCTimestamp;
        const update = {
          time: timestamp,
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low: parseFloat(item[3]),
          close: parseFloat(item[4]),
        };

        // Sync with ref for scroll-back history
        const candles = allCandlesRef.current;
        if (
          candles.length > 0 &&
          candles[candles.length - 1].time === update.time
        ) {
          candles[candles.length - 1] = update;
        } else {
          candles.push(update);
        }

        lastCandle = update;
        candlestickSeriesInstance.update(update);
        setCurrentPrice(update.close.toLocaleString());
      } else if (channel === "tickers") {
        const lastPrice = parseFloat(item.last);
        setCurrentPrice(lastPrice.toLocaleString());
        if (lastCandle.time > 0) {
          const updatedCandle = {
            ...lastCandle,
            close: lastPrice,
            high: Math.max(lastCandle.high, lastPrice),
            low:
              lastCandle.low === 0
                ? lastPrice
                : Math.min(lastCandle.low, lastPrice),
          };

          // Sync with ref
          const candles = allCandlesRef.current;
          if (
            candles.length > 0 &&
            candles[candles.length - 1].time === updatedCandle.time
          ) {
            candles[candles.length - 1] = updatedCandle;
          }

          lastCandle = updatedCandle;
          candlestickSeriesInstance.update(updatedCandle);
        }
      }
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
      ws.close();
      clearInterval(checkTimer);
    };
  }, [currentPair, interval, loadHistory]);

  return {
    chartContainerRef,
    currentPrice,
    priceChange,
  };
}
