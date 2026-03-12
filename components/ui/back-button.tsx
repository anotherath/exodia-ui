import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label: string;
  className?: string;
}

export function BackButton({ href, label, className = "" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-[0.2em] mb-10 transition-all group cursor-pointer active:scale-95 active:opacity-80 ${className}`}
    >
      <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors mr-2">
        <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
      </div>
      {label}
    </Link>
  );
}
