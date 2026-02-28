"use client";

import { ChevronDown, ShieldCheck } from "lucide-react";

interface MarketStatProps {
  label: string;
  value: string;
}

function MarketStat({ label, value }: MarketStatProps) {
  return (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1.5 opacity-80">
        {label}
      </span>
      <span className="text-sm font-mono text-foreground font-bold tracking-tight">
        {value}
      </span>
    </div>
  );
}

export default function MarketHeader() {
  return (
    <div className="border-b border-white/5 bg-black/40  backdrop-blur-md">
      <div className="container px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-6">
              {/* Pair Selector */}
              <div className="flex items-center gap-2 group cursor-pointer border border-primary/20 bg-primary/5 px-4 py-2 hover:bg-primary/10 transition-colors">
                <span className="text-xs font-bold tracking-tighter text-primary uppercase">
                  BTCUSDT
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-primary" />
              </div>

              {/* Price Info */}
              <div className="flex flex-col">
                <span className="text-xl font-mono font-bold leading-none tracking-tight text-green-500">
                  64,842.21
                </span>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs font-bold leading-none uppercase tracking-widest text-green-500/70">
                    +2.45%
                  </span>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-80">
                    24H_CHANGE
                  </span>
                </div>
              </div>
            </div>

            {/* Market Stats */}
            <div className="hidden xl:flex gap-16 border-l border-white/5 pl-16">
              <MarketStat label="24h High" value="66,231.00" />
              <MarketStat label="24h Low" value="63,120.50" />
              <MarketStat label="24h Volume" value="1.2B USDT" />
            </div>
          </div>

          {/* Node Status */}
          <div className="hidden sm:flex items-center gap-10">
            <div className="flex flex-col items-end">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1.5 opacity-80">
                Infrastructure_Node
              </span>
              <div className="flex items-center gap-2.5 text-xs font-bold text-primary px-3 py-1 border border-primary/20 bg-primary/5">
                <ShieldCheck className="w-3.5 h-3.5" />
                SECURE_CONNECTED
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
