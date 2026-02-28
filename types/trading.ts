import { UTCTimestamp } from "lightweight-charts";

export interface CandleData {
  time: UTCTimestamp;
  open: number;
  high: number;
  low: number;
  close: number;
}

export type TradingInterval = "1m" | "5m" | "15m" | "1H" | "4H" | "1D";

export interface TickerData {
  last: string;
  instId: string;
}
