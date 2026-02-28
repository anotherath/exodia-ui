"use client";

import { useState } from "react";
import { Zap, Lock } from "lucide-react";
import TerminalTab from "./TerminalTab";

export default function TradePositions() {
  const [activeTab, setActiveTab] = useState<"positions" | "pending" | "logs">(
    "positions",
  );

  const positions = [
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
      market: "2,490.12",
      size: "800.00",
      pnl: "+$12.20",
      pnlPercent: "1.5%",
      isPositive: true,
    },
  ];

  return (
    <div className="flex-1 min-h-[400px] flex flex-col ">
      <div className="w-full h-full flex flex-col">
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
        <div className="flex-1 overflow-auto no-scrollbar flex flex-col">
          {activeTab === "positions" ? (
            <table className="w-full text-left border-collapse ">
              <thead>
                <tr className="border-b border-white/5 bg-white/2">
                  <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                    Pair
                  </th>
                  <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                    Side
                  </th>
                  <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                    Entry_Price
                  </th>
                  <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                    Market_Price
                  </th>
                  <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                    Size
                  </th>
                  <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                    Unrealized_PnL
                  </th>
                  <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs font-mono">
                {positions.map((pos, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/5 hover:bg-white/2 transition-colors group"
                  >
                    <td className="px-4 py-5 font-bold tracking-tighter text-sm whitespace-nowrap">
                      {pos.pair}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      <span
                        className={`font-bold px-3 py-1 border text-xs ${pos.isPositive ? "border-green-500/20 bg-green-500/5 text-green-500" : "border-red-500/20 bg-red-500/5 text-red-500"}`}
                      >
                        {pos.side}
                      </span>
                    </td>
                    <td className="px-4 py-5 text-muted-foreground text-sm whitespace-nowrap">
                      {pos.entry}
                    </td>
                    <td className="px-4 py-5 text-sm whitespace-nowrap">
                      {pos.market}
                    </td>
                    <td className="px-4 py-5 text-sm whitespace-nowrap">
                      {pos.size}{" "}
                      <span className="text-xs text-muted-foreground">
                        USDT
                      </span>
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span
                          className={`font-bold text-sm ${pos.isPositive ? "text-green-500" : "text-red-500"}`}
                        >
                          {pos.pnl}
                        </span>
                        <span className="text-xs text-muted-foreground opacity-70">
                          ({pos.pnlPercent})
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-right whitespace-nowrap">
                      <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-foreground hover:bg-primary transition-all border border-primary/20 bg-primary/5 px-4 py-1.5 cursor-pointer active:scale-95">
                        Close_Node
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-32 text-muted-foreground bg-black/20">
              <Lock className="w-12 h-12 mb-8 opacity-10" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">
                {activeTab === "pending" ? "Queue_Empty" : "No_Logs_Found"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
