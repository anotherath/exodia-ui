export function EngineStats() {
  const stats = [
    {
      label: "FEED_SOURCE",
      value: "OKX_API_V5",
      valueClass: "text-primary font-bold",
    },
    {
      label: "MATCHING_LATENCY",
      value: "0.12ms",
      valueClass: "text-foreground",
    },
    {
      label: "GAS_FEE_PER_TRADE",
      value: "$0.00",
      valueClass: "text-green-500 font-bold",
    },
    {
      label: "SETTLEMENT_LAYER",
      value: "ETHEREUM_L2",
      valueClass: "text-foreground",
    },
  ];

  return (
    <div className="relative border border-white/5  pb-10">
      <div className="p-5 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white/10"></div>
          <div className="w-3 h-3 rounded-full bg-white/10"></div>
          <div className="w-3 h-3 rounded-full bg-white/10"></div>
        </div>
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
          ENGINE_CORE_v1.0.4
        </span>
      </div>

      <div className="p-10 font-mono text-sm space-y-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-white/5 pb-3"
          >
            <span className="text-muted-foreground uppercase tracking-widest">
              {stat.label}
            </span>
            <span className={stat.valueClass}>{stat.value}</span>
          </div>
        ))}

        <div className="mt-6 pt-6">
          <div className="h-24 w-full bg-primary/5 border border-primary/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--primary)_10px,var(--primary)_11px)]"></div>
            <span className="relative z-10 text-xs font-bold text-primary tracking-widest">
              ACTIVE_MONITORING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
