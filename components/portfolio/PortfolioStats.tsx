export function PortfolioStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
      <div className="flex flex-col">
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
          Total Equity
        </span>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold tracking-tighter text-foreground">
            $142,584.22
          </span>
          <span className="text-xs font-bold text-green-500">+4.2%</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground mt-2 uppercase tracking-wider">
          ≈ 2.20 BTC
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
          Available Margin
        </span>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold tracking-tighter text-foreground">
            $84,120.50
          </span>
        </div>
        <span className="text-xs font-mono text-muted-foreground mt-2 uppercase tracking-wider">
          59.0% OF TOTAL
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
          Unrealized PNL
        </span>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold tracking-tighter text-foreground">
            +$12,450.12
          </span>
          <span className="text-xs font-bold text-green-500">+12.5%</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground mt-2 uppercase tracking-wider">
          LAST 24H
        </span>
      </div>
    </div>
  );
}
