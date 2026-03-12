"use client";

import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export function HeroActions() {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <div className="flex flex-wrap gap-5">
      {isConnected ? (
        <Link
          href="/trade"
          className={buttonVariants({ variant: "default", size: "hero" })}
        >
          Start Trading
        </Link>
      ) : (
        <Button onClick={openConnectModal} size="hero">
          Connect Wallet
        </Button>
      )}
      <Button variant="outline" size="hero">
        View Docs
      </Button>
    </div>
  );
}
