import Link from "next/link";
import { ArrowDownLeft, ArrowUpRight, ArrowRightLeft } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export function PortfolioHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter text-foreground uppercase mb-2">
          Portfolio
        </h1>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
          Asset management & history
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/portfolio/deposit"
          className={buttonVariants({ variant: "outline" })}
        >
          <ArrowDownLeft className="w-3.5 h-3.5" /> Deposit
        </Link>
        <Link
          href="/portfolio/withdraw"
          className={buttonVariants({ variant: "outline" })}
        >
          <ArrowUpRight className="w-3.5 h-3.5" /> Withdraw
        </Link>
        <Link
          href="/portfolio/transfer"
          className={buttonVariants({ variant: "default" })}
        >
          <ArrowRightLeft className="w-3.5 h-3.5" /> Transfer
        </Link>
      </div>
    </div>
  );
}
