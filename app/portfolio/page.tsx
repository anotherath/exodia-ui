"use client";

import { Wallet, ShieldCheck, ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  // Demo state: currently simulating "Not Connected"
  const isConnected = false;

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[70vh]">
        {/* Visual Identity */}
        <div className="relative mb-12">
          <div className="absolute -inset-10 bg-primary/10 blur-[80px] rounded-full animate-pulse" />
          <div className="relative flex items-center justify-center w-24 h-24 border border-primary/20 bg-primary/5 rounded-none">
            <Wallet className="w-12 h-12 text-primary" strokeWidth={1.5} />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4 uppercase text-center">
          Authentication_Required
        </h1>

        <p className="text-muted-foreground text-center max-w-lg mb-12 leading-relaxed">
          Access to the Portfolio vaults requires an active neural link with
          your Web3 wallet. Please establish a secure connection to view your
          assets and node performance.
        </p>

        <div className="flex flex-col items-center gap-10 w-full">
          {/* Status Box inspired by your snippet */}
          <div className="p-5 border border-white/10 bg-white/5 font-mono text-xs text-primary uppercase tracking-[0.3em] flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            STATUS: WAITING_FOR_LINK
          </div>

          {/* Action Button */}
          <button className="group relative flex items-center gap-6 px-12 py-5 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.3em] hover:opacity-90 transition-all cursor-pointer active:scale-95 shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)]">
            Connect_Wallet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Technical Footer */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-white/5 pt-12">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-mono">
              Protocol
            </p>
            <p className="text-xs font-bold text-foreground font-mono">
              EXODIA-V1-NEURAL
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-mono">
              Encryption
            </p>
            <p className="text-xs font-bold text-foreground font-mono">
              AES-P256-GCM
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-mono">
              Security_Level
            </p>
            <p className="text-xs font-bold text-green-500 font-mono text-glow">
              MAXIMUM
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 uppercase">
        Portfolio
      </h1>
      <p className="text-muted-foreground text-center max-w-md">
        This page is currently under development. Exodia's technical
        infrastructure is being prepared for this section.
      </p>
      <div className="mt-8 p-4 border border-white/10 bg-white/5 font-mono text-xs text-primary uppercase tracking-widest">
        STATUS: PROTOTYPING_IN_PROGRESS
      </div>
    </div>
  );
}
