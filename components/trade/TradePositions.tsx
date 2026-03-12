"use client";

import { useState } from "react";
import { Zap, Lock } from "lucide-react";
import { useAccount } from "wagmi";
import TerminalTab from "./TerminalTab";
import { EmptyState } from "@/components/ui/empty-state";
import { ActivePositionsTable, PositionRecord } from "./ActivePositionsTable";

export default function TradePositions() {
  const { isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<"positions" | "pending" | "logs">(
    "positions",
  );

  const positions: PositionRecord[] = isConnected ? [
    {
      pair: "BTCUSDT",
      side: "LONG 20x",
      entry: "63,450.00",
      market: "64,842.21",
      size: "1,500.00",
      pnl: "+$321.45",
      pnlPercent: "21.4%",
      isPositive: true,
    },
    {
      pair: "ETHUSDT",
      side: "SHORT 10x",
      entry: "2,510.50",
      market: "2,485.12",
      size: "800.00",
      pnl: "+$8.12",
      pnlPercent: "1.02%",
      isPositive: true,
    },
    {
      pair: "SOLUSDT",
      side: "LONG 15x",
      entry: "142.25",
      market: "138.40",
      size: "500.00",
      pnl: "-$13.55",
      pnlPercent: "-2.71%",
      isPositive: false,
    },
    {
      pair: "BNBUSDT",
      side: "LONG 10x",
      entry: "585.10",
      market: "592.30",
      size: "1,200.00",
      pnl: "+$14.80",
      pnlPercent: "1.23%",
      isPositive: true,
    },
    {
      pair: "XRPUSDT",
      side: "SHORT 5x",
      entry: "0.5210",
      market: "0.5340",
      size: "2,000.00",
      pnl: "-$25.00",
      pnlPercent: "-1.25%",
      isPositive: false,
    },
    {
      pair: "ADAUSDT",
      side: "LONG 8x",
      entry: "0.4520",
      market: "0.4580",
      size: "400.00",
      pnl: "+$5.30",
      pnlPercent: "1.32%",
      isPositive: true,
    },
    {
      pair: "DOTUSDT",
      side: "SHORT 12x",
      entry: "7.125",
      market: "6.950",
      size: "600.00",
      pnl: "+$14.75",
      pnlPercent: "2.45%",
      isPositive: true,
    },
    {
      pair: "AVAXUSDT",
      side: "LONG 25x",
      entry: "35.20",
      market: "36.85",
      size: "1,000.00",
      pnl: "+$46.80",
      pnlPercent: "4.68%",
      isPositive: true,
    },
    {
      pair: "LINKUSDT",
      side: "LONG 10x",
      entry: "14.15",
      market: "13.90",
      size: "300.00",
      pnl: "-$5.30",
      pnlPercent: "-1.76%",
      isPositive: false,
    },
    {
      pair: "MATICUSDT",
      side: "SHORT 20x",
      entry: "0.6850",
      market: "0.6720",
      size: "900.00",
      pnl: "+$17.10",
      pnlPercent: "1.90%",
      isPositive: true,
    },
    {
      pair: "NEARUSDT",
      side: "LONG 15x",
      entry: "5.450",
      market: "5.620",
      size: "750.00",
      pnl: "+$23.35",
      pnlPercent: "3.11%",
      isPositive: true,
    },
    {
      pair: "ARBUSDT",
      side: "SHORT 10x",
      entry: "1.050",
      market: "1.085",
      size: "1,100.00",
      pnl: "-$36.65",
      pnlPercent: "-3.33%",
      isPositive: false,
    },
  ] : [];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <div className="w-full h-full flex flex-col min-h-0">
        {/* Tab Header */}
        <div className="px-8 border-b border-white/5   flex items-center justify-between">
          <div className="flex items-center gap-12 h-16">
            <TerminalTab
              label={`Active_Positions (${positions.length})`}
              isActive={activeTab === "positions"}
              onClick={() => setActiveTab("positions")}
              className="h-full"
            />
            <TerminalTab
              label="Pending_Queue"
              isActive={activeTab === "pending"}
              onClick={() => setActiveTab("pending")}
              className="h-full"
            />
            <TerminalTab
              label="Node_Logs"
              isActive={activeTab === "logs"}
              onClick={() => setActiveTab("logs")}
              className="h-full"
            />
          </div>
          <div className="flex items-center gap-2.5 px-4 py-1.5 border border-white/10 text-xs font-bold text-muted-foreground uppercase tracking-widest cursor-default">
            <Zap size={14} className="text-primary" />
            State_Root: 0x7d5a...9e32
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto no-scrollbar flex flex-col min-h-0">
          {activeTab === "positions" ? (
            positions.length > 0 ? (
              <ActivePositionsTable records={positions} />
            ) : (
              <EmptyState message="Positions_Empty" className="flex-1 py-32" />
            )
          ) : (
            <EmptyState
              message={
                activeTab === "pending" ? "Queue_Empty" : "No_Logs_Found"
              }
              className="flex-1 py-32"
            />
          )}
        </div>
      </div>
    </div>
  );
}
