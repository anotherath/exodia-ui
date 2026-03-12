"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpDown, Info } from "lucide-react";
import TerminalInput from "@/components/trade/TerminalInput";
import { Button } from "@/components/ui/button";
import { SelectableButton } from "@/components/ui/selectable-button";
import { BackButton } from "@/components/ui/back-button";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { WalletGuard } from "@/components/providers/WalletGuard";

export default function TransferPage() {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  return (
    <div className="min-h-screen pb-32">
      <div className="border-b border-white/5 pt-16 pb-12">
        <div className="container px-4 md:px-8">
          <BackButton href="/portfolio" label="Return to Portfolio" />
          <h1 className="text-3xl font-bold tracking-tighter text-foreground uppercase mb-2">
            Internal Transfer
          </h1>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Move assets between your Exodia accounts
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8 mt-16 flex justify-center">
        <div className="w-full max-w-xl space-y-12">
          {/* Transfer Accounts */}
          <div className="relative group/flow">
            <div className="space-y-1">
              <div className="p-7 border border-white/5 bg-white/2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/10"></div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-4">
                  Transfer From
                </label>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xl font-bold text-foreground uppercase tracking-tight block mb-1">
                      Funding Account
                    </span>
                    <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
                      SPOT ACCOUNT
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase block mb-2">
                      Available Balance
                    </span>
                    <span className="text-lg font-mono font-bold text-primary">
                      $18,084.22
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-7 border border-white/5 bg-white/2 relative overflow-hidden pt-10">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/10"></div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-4">
                  Transfer To
                </label>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xl font-bold text-foreground uppercase tracking-tight block mb-1">
                      Trading Account
                    </span>
                    <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
                      FUTURES ACCOUNT
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase block mb-2">
                      Current Balance
                    </span>
                    <span className="text-lg font-mono font-bold text-foreground">
                      $124,500.00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="w-px h-6 bg-white/10"></div>
              <button className="w-11 h-11 bg-black border border-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center group relative shadow-2xl cursor-pointer active:scale-95">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <ArrowUpDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-500 ease-out" />
              </button>
              <div className="w-px h-6 bg-white/10"></div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Asset Selection */}
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-4">
                Select Asset
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <SelectableButton selected>USDT</SelectableButton>
                <SelectableButton disabled>BTC</SelectableButton>
                <SelectableButton disabled>ETH</SelectableButton>
                <SelectableButton disabled>SOL</SelectableButton>
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <TerminalInput
                label="Amount"
                suffix="USDT"
                placeholder="0.00"
                action={
                  <Button variant="link" size="link">
                    Max: 12,000.00 USDT
                  </Button>
                }
              />
            </div>

            {/* Info Box */}
            <div className="p-4 bg-primary/5 border border-primary/20 flex gap-4 items-start">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Internal transfers are processed instantly with zero network
                fees. Ensure you have sufficient margin if transferring from a
                trading account.
              </p>
            </div>

            {/* Submit Button */}
            {!isConnected ? (
              <Button
                onClick={openConnectModal}
                type="button"
                variant="outline"
                size="xl"
                className="w-full gap-2 font-bold uppercase tracking-widest text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                variant="default"
                size="xl"
                className="w-full gap-2 font-bold uppercase tracking-widest text-sm"
              >
                Confirm Transfer
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
