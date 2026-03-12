"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextTab } from "@/components/ui/text-tab";
import { EmptyState } from "@/components/ui/empty-state";
import {
  TransactionHistoryTable,
  TransactionRecord,
} from "@/components/portfolio/TransactionHistoryTable";
import {
  FundingHistoryTable,
  FundingRecord,
} from "@/components/portfolio/FundingHistoryTable";

export function PortfolioHistory() {
  const [activeTab, setActiveTab] = useState<"positions" | "funding">(
    "positions",
  );

  const transactionRecords: TransactionRecord[] = [
    {
      asset: "BTC/USDT",
      type: "Trade",
      amount: "0.45 BTC",
      status: "Completed",
      time: "2024-05-12 14:22",
    },
    {
      asset: "USDT",
      type: "Transfer",
      amount: "5,000.00 USDT",
      status: "Completed",
      time: "2024-05-12 11:05",
    },
    {
      asset: "ETH/USDT",
      type: "Trade",
      amount: "1.20 ETH",
      status: "Completed",
      time: "2024-05-11 09:45",
    },
  ];

  const fundingRecords: FundingRecord[] = [];

  return (
    <div className="lg:col-span-8">
      <div dir="ltr" data-orientation="horizontal" className="w-full">
        <div className="flex items-center justify-between mb-8 border-b border-white/5">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="inline-flex items-center justify-center rounded-none text-muted-foreground bg-transparent h-auto p-0 gap-10"
          >
            <TextTab
              selected={activeTab === "positions"}
              onClick={() => setActiveTab("positions")}
              className="pb-4"
            >
              Positions
            </TextTab>
            <TextTab
              selected={activeTab === "funding"}
              onClick={() => setActiveTab("funding")}
              className="pb-4"
            >
              Funding
            </TextTab>
          </div>
          <div className="pb-4">
            <button className="text-xs cursor-pointer font-bold text-muted-foreground hover:text-primary uppercase tracking-widest active:scale-95 active:opacity-80 transition-all flex items-center gap-2 group/link">
              <span>Full History</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {activeTab === "positions" && (
          <div
            role="tabpanel"
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 outline-none"
          >
            <TransactionHistoryTable records={transactionRecords} />
          </div>
        )}

        {activeTab === "funding" && (
          <div
            role="tabpanel"
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 outline-none"
          >
            <FundingHistoryTable records={fundingRecords} />
          </div>
        )}
      </div>
    </div>
  );
}
