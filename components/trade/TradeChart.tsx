"use client";

import { useState } from "react";
import { ChartColumn } from "lucide-react";
import { useTradingChart } from "@/hooks/useTradingChart";
import { TRADING_CONFIG } from "@/configs/trading";

export default function TradeChart() {
  const [interval, setInterval] = useState(TRADING_CONFIG.DEFAULT_INTERVAL);
  const currentPair = TRADING_CONFIG.DEFAULT_PAIR;

  const { chartContainerRef } = useTradingChart({
    currentPair,
    interval,
  });

  const intervals = ["1m", "5m", "15m", "1H", "4H", "1D"];

  return (
    <div className="flex-none flex flex-col border-r border-white/5 bg-black/20 min-w-0">
      <div className="p-8 flex-none border-b border-white/5">
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-1 p-1 bg-white/5 border border-white/5">
            {intervals.map((time) => (
              <button
                key={time}
                onClick={() => setInterval(time)}
                className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer active:scale-95 active:opacity-80 ${
                  time === interval
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {time === interval && (
                  <span className="absolute inset-0 bg-primary -z-10 animate-in zoom-in-95 fade-in duration-300 ease-out" />
                )}
                <span className="relative z-10">{time}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] cursor-pointer">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              Engine_Latency: 0.12ms
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
              <ChartColumn size={16} className="text-primary" />
              Feed: OKX_DIRECT
            </div>
          </div>
        </div>

        {/* Real Chart Area */}
        <div className="h-[460px] w-full relative overflow-hidden rounded-sm">
          <div ref={chartContainerRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
