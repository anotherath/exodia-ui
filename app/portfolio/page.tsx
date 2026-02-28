import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { PortfolioStats } from "@/components/portfolio/PortfolioStats";
import { PortfolioSidebar } from "@/components/portfolio/PortfolioSidebar";
import { PortfolioHistory } from "@/components/portfolio/PortfolioHistory";
import { WalletGuard } from "@/components/providers/WalletGuard";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pb-32">
      {/* SSR Framework - User sees this immediately */}
      <div className="border-b border-white/5 pt-16 pb-12 transition-opacity duration-300">
        <div className="container px-4 md:px-8">
          <PortfolioHeader />
          <div className="mt-16">
            <WalletGuard>
              <PortfolioStats />
            </WalletGuard>
          </div>
        </div>
      </div>

      {/* CSR Data - Inside WalletGuard */}
      <div className="container px-4 md:px-8 mt-16 transition-opacity duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <PortfolioSidebar />
          <div className="lg:col-span-8">
            <WalletGuard>
              <PortfolioHistory />
            </WalletGuard>
          </div>
        </div>
      </div>
    </div>
  );
}
