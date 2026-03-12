"use client";

import Link from "next/link";
import { ArrowLeft, ArrowDownLeft, ArrowUpRight, Zap } from "lucide-react";
import TerminalInput from "@/components/trade/TerminalInput";
import { Button } from "@/components/ui/button";
import { SelectableButton } from "@/components/ui/selectable-button";
import { TextTab } from "@/components/ui/text-tab";
import { BackButton } from "@/components/ui/back-button";
import { EmptyState } from "@/components/ui/empty-state";
import { useState } from "react";
import {
  FundingHistoryTable,
  FundingRecord,
} from "@/components/portfolio/FundingHistoryTable";

export default function WithdrawPage() {
  const [historyTab, setHistoryTab] = useState<
    "all" | "deposits" | "withdrawals"
  >("all");

  const records: FundingRecord[] = [
    {
      asset: "USDT",
      action: "Deposit",
      amount: "10,000.00",
      status: "Confirmed",
      date: "2024-05-10 15:30",
    },
    {
      asset: "ETH",
      action: "Withdraw",
      amount: "0.50",
      status: "Confirmed",
      date: "2024-05-08 12:15",
    },
    {
      asset: "BTC",
      action: "Deposit",
      amount: "0.15",
      status: "Confirmed",
      date: "2024-05-05 08:20",
    },
  ];
  return (
    <div className="min-h-screen pb-32">
      <div className="border-b border-white/5 pt-16 pb-12">
        <div className="container px-4 md:px-8">
          <BackButton href="/portfolio" label="Return to Portfolio" />
          <h1 className="text-3xl font-bold tracking-tighter text-foreground uppercase mb-2">
            Withdraw Assets
          </h1>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Extract funds from the Exodia smart contract
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Action Form */}
          <div className="lg:col-span-5 space-y-10">
            <section className="space-y-8">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-4">
                  Select Asset
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <SelectableButton
                    selected
                    className="text-left flex items-center justify-start gap-3"
                  >
                    USDT
                  </SelectableButton>
                  <SelectableButton
                    disabled
                    className="text-left flex items-center justify-start gap-3"
                  >
                    BTC
                  </SelectableButton>
                  <SelectableButton
                    disabled
                    className="text-left flex items-center justify-start gap-3"
                  >
                    ETH
                  </SelectableButton>
                  <SelectableButton
                    disabled
                    className="text-left flex items-center justify-start gap-3"
                  >
                    SOL
                  </SelectableButton>
                </div>
              </div>

              <div>
                <TerminalInput
                  label="Amount"
                  suffix="USDT"
                  placeholder="0.00"
                  action={
                    <Button
                      variant="link"
                      size="link"
                      className="hover:text-primary/80"
                    >
                      Max: 12,000.00 USDT
                    </Button>
                  }
                />
              </div>

              <div className="p-5 border border-white/5 bg-white/2 space-y-4">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Network Verification
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Withdrawals require smart contract state root commitment
                  before finalization. This process typically completes within
                  2-3 minutes.
                </p>
              </div>

              <Button
                variant="default"
                size="xl"
                className="w-full gap-2 font-bold uppercase tracking-widest text-sm"
              >
                <ArrowUpRight className="w-4 h-4" /> Confirm Withdrawal
              </Button>
            </section>
          </div>

          {/* Right Column - Funding History */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Funding History
              </h2>
              <div className="flex gap-4">
                <TextTab
                  selected={historyTab === "all"}
                  onClick={() => setHistoryTab("all")}
                >
                  All
                </TextTab>
                <TextTab
                  selected={historyTab === "deposits"}
                  onClick={() => setHistoryTab("deposits")}
                >
                  Deposits
                </TextTab>
                <TextTab
                  selected={historyTab === "withdrawals"}
                  onClick={() => setHistoryTab("withdrawals")}
                >
                  Withdrawals
                </TextTab>
              </div>
            </div>

            <FundingHistoryTable records={records} filterAction={historyTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
