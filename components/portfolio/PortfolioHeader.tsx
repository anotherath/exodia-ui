import { ArrowDownLeft, ArrowUpRight, ArrowRightLeft } from "lucide-react";

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
        <button className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background text-muted-foreground hover:text-primary py-2 rounded-none border-white/10 hover:border-primary/50 hover:bg-primary/5 text-xs font-bold uppercase tracking-widest h-10 px-5 active:scale-95 active:opacity-80 transition-all gap-2 shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
          <ArrowDownLeft className="w-3.5 h-3.5" /> Deposit
        </button>
        <button className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background text-muted-foreground hover:text-primary py-2 rounded-none border-white/10 hover:border-primary/50 hover:bg-primary/5 text-xs font-bold uppercase tracking-widest h-10 px-5 active:scale-95 active:opacity-80 transition-all gap-2 shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
          <ArrowUpRight className="w-3.5 h-3.5" /> Withdraw
        </button>
        <button className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 rounded-none px-6 font-bold uppercase tracking-widest h-10 border border-primary bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 active:opacity-80 transition-all gap-2 text-xs">
          <ArrowRightLeft className="w-3.5 h-3.5" /> Transfer
        </button>
      </div>
    </div>
  );
}
