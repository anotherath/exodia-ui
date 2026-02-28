"use client";

import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[70vh]">
      {/* Visual Icon */}
      <div className="relative mb-12 text-primary/40">
        <div className="absolute -inset-8 bg-primary/5 blur-3xl rounded-full" />
        <Search className="w-20 h-20 relative" strokeWidth={1} />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4 uppercase">
        Route_Not_Found
      </h1>

      <p className="text-muted-foreground text-center max-w-lg mb-12 leading-relaxed">
        The system could not resolve the requested memory address. The endpoint
        you are looking for does not exist in the current infrastructure.
      </p>

      <div className="flex flex-col items-center gap-10 w-full">
        {/* Status Box */}
        <div className="p-5 border border-white/10 bg-white/5 font-mono text-xs text-primary uppercase tracking-[0.3em]">
          STATUS: ADDRESS_RESOLUTION_FAILED
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <button
            onClick={() => window.history.back()}
            className="flex-1 px-8 py-4 border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-3"
          >
            <ArrowLeft size={16} />
            Go_Back
          </button>
          <Link
            href="/"
            className="flex-1 px-8 py-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-3"
          >
            <Home size={16} />
            Return_Home
          </Link>
        </div>
      </div>
    </div>
  );
}
