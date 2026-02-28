"use client";

import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { Wallet, Loader2 } from "lucide-react";
import React from "react";

interface WalletGuardProps {
  children: React.ReactNode;
}

export function WalletGuard({ children }: WalletGuardProps) {
  const { isConnected, isConnecting, isReconnecting } = useAccount();
  const { openConnectModal } = useConnectModal();

  // Show a loading state briefly while checking connection status to avoid flicker
  if (isConnecting || isReconnecting) {
    return (
      <div className="py-20 flex flex-col items-center justify-center animate-pulse">
        <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Authenticating Node...
        </span>
      </div>
    );
  }

  // Show the "Please Connect Wallet" state if not connected
  if (!isConnected) {
    return (
      <div className="py-20 border border-white/5 bg-white/2 flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center mb-6">
          <Wallet className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-3">
          Access Restricted
        </h3>
        <p className="text-[11px] font-mono text-muted-foreground mb-8 uppercase tracking-widest max-w-[280px]">
          Please establish a secure connection to your Web3 wallet to access
          your portfolio nodes.
        </p>
        <button
          onClick={openConnectModal}
          type="button"
          className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-wider font-bold h-9 px-4 rounded-none active:scale-95 active:opacity-80 transition-all"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
