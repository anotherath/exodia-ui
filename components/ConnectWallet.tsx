"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div>
            {(() => {
              if (!ready) {
                // Return a visually identical un-clickable Connect Wallet button during hydration to prevent flickering
                return (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background py-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-wider font-bold h-9 px-4 rounded-none border cursor-pointer active:scale-95 active:opacity-80 transition-all"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background py-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-wider font-bold h-9 px-4 rounded-none border cursor-pointer active:scale-95 active:opacity-80 transition-all"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-red-500/10 border border-red-500 text-red-500 py-2 px-4 text-[10px] uppercase tracking-widest font-bold h-9 rounded-none hover:bg-red-500 hover:text-white cursor-pointer active:scale-95 active:opacity-80 transition-all"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex items-center gap-3">
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    className="hidden lg:flex items-center gap-2 px-3 h-9 border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 text-[10px] font-bold uppercase tracking-widest cursor-pointer active:scale-95 active:opacity-80 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-4 h-9 border border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-wider font-bold rounded-none cursor-pointer active:scale-95 active:opacity-80 transition-all"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
