"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

export function PortfolioHistory() {
  const [activeTab, setActiveTab] = useState<"transactions" | "funding">(
    "transactions",
  );

  return (
    <div className="lg:col-span-8">
      <div dir="ltr" data-orientation="horizontal" className="w-full">
        <div className="flex items-center justify-between mb-8 border-b border-white/5">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="inline-flex items-center justify-center rounded-none text-muted-foreground bg-transparent h-auto p-0 gap-10"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "transactions"}
              onClick={() => setActiveTab("transactions")}
              className={`inline-flex cursor-pointer items-center justify-center whitespace-nowrap py-1.5 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-none border-b-2 px-0 pb-4 text-xs font-bold uppercase tracking-widest active:scale-95 active:opacity-80 transition-all ${
                activeTab === "transactions"
                  ? "text-foreground shadow-sm border-primary bg-transparent"
                  : "border-transparent hover:text-foreground"
              }`}
            >
              Transactions
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "funding"}
              onClick={() => setActiveTab("funding")}
              className={`inline-flex cursor-pointer items-center justify-center whitespace-nowrap py-1.5 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-none border-b-2 px-0 pb-4 text-xs font-bold uppercase tracking-widest active:scale-95 active:opacity-80 transition-all ${
                activeTab === "funding"
                  ? "text-foreground shadow-sm border-primary bg-transparent"
                  : "border-transparent hover:text-foreground"
              }`}
            >
              Funding
            </button>
          </div>
          <div className="pb-4">
            <button className="text-xs cursor-pointer font-bold text-muted-foreground hover:text-primary uppercase tracking-widest active:scale-95 active:opacity-80 transition-all flex items-center gap-2 group/link">
              <span>Full History</span>
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {activeTab === "transactions" && (
          <div
            role="tabpanel"
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 outline-none"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                      Asset
                    </th>
                    <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                      Type
                    </th>
                    <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                      Amount
                    </th>
                    <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                      Status
                    </th>
                    <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] text-right">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="group hover:bg-white/2 transition-colors">
                    <td className="py-6 text-xs font-bold text-foreground uppercase tracking-tight">
                      BTC/USDT
                    </td>
                    <td className="py-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      Trade
                    </td>
                    <td className="py-6 text-xs font-mono font-bold text-foreground">
                      0.45 BTC
                    </td>
                    <td className="py-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-green-500">
                        Completed
                      </span>
                    </td>
                    <td className="py-6 text-xs font-mono text-muted-foreground text-right uppercase tracking-wider">
                      2024-05-12 14:22
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/2 transition-colors">
                    <td className="py-6 text-xs font-bold text-foreground uppercase tracking-tight">
                      USDT
                    </td>
                    <td className="py-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      Transfer
                    </td>
                    <td className="py-6 text-xs font-mono font-bold text-foreground">
                      5,000.00 USDT
                    </td>
                    <td className="py-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-green-500">
                        Completed
                      </span>
                    </td>
                    <td className="py-6 text-xs font-mono text-muted-foreground text-right uppercase tracking-wider">
                      2024-05-12 11:05
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/2 transition-colors">
                    <td className="py-6 text-xs font-bold text-foreground uppercase tracking-tight">
                      ETH/USDT
                    </td>
                    <td className="py-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      Trade
                    </td>
                    <td className="py-6 text-xs font-mono font-bold text-foreground">
                      1.20 ETH
                    </td>
                    <td className="py-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-green-500">
                        Completed
                      </span>
                    </td>
                    <td className="py-6 text-xs font-mono text-muted-foreground text-right uppercase tracking-wider">
                      2024-05-11 09:45
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "funding" && (
          <div
            role="tabpanel"
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 outline-none text-center py-20 text-muted-foreground font-mono text-xs uppercase tracking-widest"
          >
            No funding records found
          </div>
        )}
      </div>
    </div>
  );
}
