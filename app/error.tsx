"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[70vh]">
      {/* Visual Glitch/Icon */}
      <div className="relative mb-12">
        <div className="absolute -inset-8 bg-red-500/10 blur-3xl rounded-full animate-pulse" />
        <AlertCircle
          className="w-20 h-20 text-red-500 relative animate-in zoom-in duration-500"
          strokeWidth={1.5}
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4 uppercase">
        Node_Failure
      </h1>

      <p className="text-muted-foreground text-center max-w-lg mb-12 leading-relaxed">
        Exodia's core engine encountered an unexpected runtime exception. The
        hypervisor has isolated this instance to prevent further data
        corruption.
      </p>

      <div className="flex flex-col items-center gap-10 w-full">
        {/* Status Box inspired by your snippet */}
        <div className="p-5 border border-red-500/20 bg-red-500/5 font-mono text-xs text-red-500 uppercase tracking-[0.3em] shadow-[0_0_30px_-10px_rgba(239,68,68,0.2)]">
          STATUS: CRITICAL_EXCEPTION_STATE
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <button
            onClick={() => reset()}
            className="flex-1 px-8 py-4 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-500 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-3"
          >
            <RefreshCcw size={16} />
            Reset_Engine
          </button>
          <Link
            href="/"
            className="flex-1 px-8 py-4 border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-3"
          >
            <Home size={16} />
            Return_Home
          </Link>
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 blur-[120px]" />
      </div>
    </div>
  );
}
