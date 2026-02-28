import TickerTape from "@/components/trade/TickerTape";
import MarketHeader from "@/components/trade/MarketHeader";
import TradeChart from "@/components/trade/TradeChart";
import TradePositions from "@/components/trade/TradePositions";
import TradeSidebar from "@/components/trade/TradeSidebar";

export default function TradePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Ticker Tape */}
      <TickerTape />

      {/* Market Info Header */}
      <MarketHeader />

      {/* Main Terminal Body */}
      <div className="flex-1 w-full ">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row border-x border-t border-white/5 min-h-[900px] mb-24">
            {/* Main Content Area (Left/Middle) */}
            <div className="flex-1 flex flex-col min-w-0 ">
              {/* Chart Section */}
              <TradeChart />

              {/* Lower Information Tabs */}
              <TradePositions />
            </div>

            {/* Sidebar Section (Right) */}
            <TradeSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
