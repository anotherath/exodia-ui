import {
  ShieldCheck,
  Wallet,
  ArrowUpRight,
  ArrowRightLeft,
} from "lucide-react";
import { WalletGuard } from "@/components/providers/WalletGuard";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/back-button";
import {
  FundingAssetTable,
  FundingAssetRecord,
} from "@/components/portfolio/FundingAssetTable";

export default function FundingAccountPage() {
  const assets: FundingAssetRecord[] = [
    { asset: "USDT", total: "15,000.00" },
    { asset: "ETH", total: "0.85" },
  ];
  return (
    <div className="min-h-screen pb-32">
      {/* SSR Framework */}
      <div className="border-b border-white/5 pt-16 pb-12 transition-opacity duration-300">
        <div className="container px-4 md:px-8">
          <BackButton href="/portfolio" label="Return to Assets" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-current text-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                  SPOT ACCOUNT
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter text-foreground uppercase">
                Funding Account
              </h1>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-2">
                Total Balance
              </span>
              <WalletGuard>
                <span className="text-4xl font-bold tracking-tighter text-foreground">
                  $18,084.22
                </span>
              </WalletGuard>
            </div>
          </div>
        </div>
      </div>

      {/* CSR Data */}
      <div className="container px-4 md:px-8 mt-16 transition-opacity duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Asset Breakdown
            </h2>
            <WalletGuard>
              <FundingAssetTable records={assets} />
            </WalletGuard>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <section className="p-8 border border-white/5 bg-white/2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Account Stats
              </h3>
              <WalletGuard>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
                      Platform Status
                    </span>
                    <span className="text-lg font-bold text-green-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>{" "}
                      Operational
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
                      Asset Count
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      2 Assets
                    </span>
                  </div>
                </div>
              </WalletGuard>
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                <Button variant="default" size="lg" className="px-4">
                  Deposit
                </Button>
                <Button variant="outline" size="lg" className="px-4">
                  Transfer
                </Button>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Wallet className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                  Direct Settlement
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your Spot account is used for direct deposits and withdrawals on
                supported blockchains. Funds here can be transferred freely to
                your Trading Account.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
