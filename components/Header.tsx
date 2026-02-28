"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ConnectWallet from "./ConnectWallet";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Trade", href: "/trade" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            className="flex items-center space-x-2 transition-all active:scale-95 cursor-pointer"
            href="/"
          >
            <span className="text-xl font-bold tracking-tighter text-foreground uppercase">
              EXODIA
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-all active:scale-95 active:opacity-80 cursor-pointer ${
                    isActive
                      ? "text-primary drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)] scale-110"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
