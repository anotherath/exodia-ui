import Link from "next/link";
import { ArrowLeft, ShieldCheck, Wallet } from "lucide-react";
import { WalletGuard } from "@/components/providers/WalletGuard";

export default function FundingAccountPage() {
  return (
    <div className="min-h-screen pb-32">
      {/* SSR Framework */}
      <div className="border-b border-white/5 pt-16 pb-12 transition-opacity duration-300">
        <div className="container px-4 md:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-[0.2em] mb-10 transition-all group cursor-pointer active:scale-95 active:opacity-80"
          >
            <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors mr-2">
              <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
            </div>
            Return to Assets
          </Link>

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
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left border-b border-white/5">
                      <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                        Asset
                      </th>
                      <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                        Total
                      </th>
                      <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="group hover:bg-white/2 transition-colors">
                      <td className="py-6 text-sm font-bold text-foreground uppercase tracking-tight">
                        USDT
                      </td>
                      <td className="py-6 text-sm font-mono font-bold text-foreground">
                        15,000.00
                      </td>
                      <td className="py-6 text-right">
                        <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors active:scale-95 active:opacity-80">
                          Deposit
                        </button>
                      </td>
                    </tr>
                    <tr className="group hover:bg-white/2 transition-colors">
                      <td className="py-6 text-sm font-bold text-foreground uppercase tracking-tight">
                        ETH
                      </td>
                      <td className="py-6 text-sm font-mono font-bold text-foreground">
                        0.85
                      </td>
                      <td className="py-6 text-right">
                        <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors active:scale-95 active:opacity-80">
                          Deposit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <button className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 rounded-none px-4 font-bold uppercase tracking-widest h-11 text-xs border border-primary bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 active:opacity-80 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                  Deposit
                </button>
                <button className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 px-4 py-2 rounded-none font-bold uppercase tracking-widest h-11 text-xs active:scale-95 active:opacity-80 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)] border-white/10">
                  Transfer
                </button>
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
