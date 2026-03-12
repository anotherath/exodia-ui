import Link from "next/link";
import {
  ShieldCheck,
  Wallet,
  ArrowUpRight,
  ArrowRightLeft,
} from "lucide-react";
import { WalletGuard } from "@/components/providers/WalletGuard";
import { Button, buttonVariants } from "@/components/ui/button";
import { BackButton } from "@/components/ui/back-button";
import {
  AssetBreakdownTable,
  AssetRecord,
} from "@/components/portfolio/AssetBreakdownTable";

export default function TradingAccountPage() {
  const assets: AssetRecord[] = [
    {
      asset: "USDT",
      total: "85,000.00",
      available: "42,000.00",
      inOrder: "43,000.00",
    },
    { asset: "BTC", total: "0.45", available: "0.15", inOrder: "0.30" },
    { asset: "ETH", total: "12.50", available: "8.20", inOrder: "4.30" },
  ];
  return (
    <div className="min-h-screen pb-32">
      {/* SSR Framework */}
      <div className="border-b border-white/5 pt-16 pb-12 transition-opacity duration-300">
        <div className="container px-4 md:px-8">
          <BackButton href="/portfolio" label="Return to Assets" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-current text-primary"></div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                  FUTURES ACCOUNT
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter text-foreground uppercase">
                Trading Account
              </h1>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-2">
                Total Balance
              </span>
              <WalletGuard>
                <span className="text-4xl font-bold tracking-tighter text-foreground">
                  $124,500.00
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
              <div className="overflow-x-auto">
                <AssetBreakdownTable records={assets} />
              </div>
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
                      24h Change
                    </span>
                    <span className="text-lg font-bold text-green-500">
                      +4.25% (+$5,240.00)
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
                      Asset Count
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      3 Assets
                    </span>
                  </div>
                </div>
              </WalletGuard>
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                <Link
                  href="/trade"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "px-4",
                  })}
                >
                  Trade
                </Link>
                <Button variant="outline" size="lg" className="px-4">
                  Transfer
                </Button>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4 text-primary">
                <ShieldCheck className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                  Secure Custody
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This account is managed through our hybrid execution engine.
                Assets are secured on-chain while matching occurs in real-time
                off-chain.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
