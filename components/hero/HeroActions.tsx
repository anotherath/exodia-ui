export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-5">
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 active:opacity-80 rounded-none px-10 font-bold uppercase tracking-widest h-16 border cursor-pointer">
        Connect Wallet
      </button>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:bg-white/5 active:scale-95 active:opacity-80 rounded-none px-10 font-bold uppercase tracking-widest h-16 border-white/10 cursor-pointer">
        View Docs
      </button>
    </div>
  );
}
