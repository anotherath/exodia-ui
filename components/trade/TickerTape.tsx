"use client";

interface TickerItemProps {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

function TickerItem({ symbol, price, change, isPositive }: TickerItemProps) {
  return (
    <div className="flex items-center gap-5 cursor-pointer hover:opacity-80 transition-opacity">
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
        {symbol}
      </span>
      <span className="text-xs font-mono font-bold text-foreground">
        {price}
      </span>
      <span
        className={`text-xs font-bold ${isPositive ? "text-green-500" : "text-red-500"}`}
      >
        {change}
      </span>
    </div>
  );
}

export default function TickerTape() {
  const prices = [
    {
      symbol: "BTCUSDT",
      price: "64,842.21",
      change: "+2.45%",
      isPositive: true,
    },
    {
      symbol: "ETHUSDT",
      price: "2,490.12",
      change: "+1.52%",
      isPositive: true,
    },
    { symbol: "SOLUSDT", price: "145.30", change: "-0.84%", isPositive: false },
    { symbol: "BNBUSDT", price: "592.15", change: "+0.32%", isPositive: true },
    { symbol: "XRPUSDT", price: "0.5842", change: "+1.12%", isPositive: true },
    { symbol: "ADAUSDT", price: "0.3421", change: "-2.15%", isPositive: false },
    { symbol: "DOTUSDT", price: "4.12", change: "+0.45%", isPositive: true },
    { symbol: "LINKUSDT", price: "11.84", change: "+1.92%", isPositive: true },
    { symbol: "AVAXUSDT", price: "24.52", change: "+0.12%", isPositive: true },
    {
      symbol: "MATICUSDT",
      price: "0.3842",
      change: "-1.42%",
      isPositive: false,
    },
  ];

  return (
    <div className="border-b border-white/5 bg-black/60 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center py-5">
        {/* Render twice for seamless loop if needed, though animation configuration matters */}
        {[...prices, ...prices].map((item, index) => (
          <TickerItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
