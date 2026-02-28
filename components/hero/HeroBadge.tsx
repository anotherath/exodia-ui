interface HeroBadgeProps {
  children: React.ReactNode;
}

export function HeroBadge({ children }: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-10">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
      </span>
      {children}
    </div>
  );
}
