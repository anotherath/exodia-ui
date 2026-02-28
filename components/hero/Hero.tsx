import { HeroBadge } from "./HeroBadge";
import { HeroActions } from "./HeroActions";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden border-b border-white/5">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <HeroBadge>Next-Gen Trading Infrastructure</HeroBadge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8 leading-[0.9]">
            HYBRID TRADING <br />
            <span className="text-primary">ENGINE.</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Exodia combines off-chain execution speed with on-chain asset
            security. Real-time prices from OKX, zero-gas trades, and periodic
            state root commits for absolute transparency.
          </p>

          <HeroActions />
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-white/5 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)] hidden lg:block"></div>
    </section>
  );
}
