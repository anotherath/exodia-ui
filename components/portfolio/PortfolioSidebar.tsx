import { ChevronRight, ArrowRightLeft, CreditCard } from "lucide-react";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/configs/external-links";

export function PortfolioSidebar() {
  return (
    <div className="lg:col-span-4 space-y-12">
      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trading Accounts
        </h2>
        <div className="divide-y divide-white/5">
          <Link
            href="/portfolio/trading-account"
            className="py-6 first:pt-0 flex items-center justify-between group cursor-pointer active:scale-[0.98] active:opacity-80 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 bg-white/5 group-hover:bg-primary transition-colors"></div>
              <div>
                <h4 className="text-sm font-bold uppercase text-foreground mb-1">
                  Trading Account
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
                    FUTURES
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-primary font-bold uppercase tracking-widest">
                    $124,500.00
                  </span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
          </Link>
          <Link
            href="/portfolio/funding-account"
            className="py-6 first:pt-0 flex items-center justify-between group cursor-pointer active:scale-[0.98] active:opacity-80 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 bg-white/5 group-hover:bg-primary transition-colors"></div>
              <div>
                <h4 className="text-sm font-bold uppercase text-foreground mb-1">
                  Funding Account
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
                    SPOT
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-primary font-bold uppercase tracking-widest">
                    $18,084.22
                  </span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
          </Link>
        </div>
      </section>

      <section className="pt-8 border-t border-white/5">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 gap-3">
          <a
            href={EXTERNAL_LINKS.UNISWAP_APP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-2 justify-between rounded-none border-white/5 bg-white/2 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 text-xs font-bold uppercase tracking-widest h-12 px-5 active:scale-95 active:opacity-80 transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
          >
            Convert Assets{" "}
            <ArrowRightLeft className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
          </a>
          <a
            href={EXTERNAL_LINKS.OKX_EXCHANGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-2 justify-between rounded-none border-white/5 bg-white/2 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 text-xs font-bold uppercase tracking-widest h-12 px-5 active:scale-95 active:opacity-80 transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
          >
            Buy Crypto{" "}
            <CreditCard className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
