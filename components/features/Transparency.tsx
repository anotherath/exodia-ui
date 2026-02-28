import { ShieldCheck, ArrowUpRight, Fingerprint } from "lucide-react";

export default function Transparency() {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="container">
        <div className="border border-white/10 p-10 md:p-16 relative overflow-hidden">
          {/* Background Decorative Icon */}
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Fingerprint size={200} strokeWidth={1} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck size={16} />
                Verified On-Chain
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-tight">
                System Transparency
              </h3>

              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mb-10">
                Every trade and balance change is included in a state root hash.
                This hash is periodically committed to the smart contract,
                allowing anyone to audit the platform's solvency and execution
                integrity.
              </p>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-muted-foreground w-40 shrink-0 uppercase tracking-widest">
                    LATEST_STATE_ROOT:
                  </span>
                  <span className="text-foreground bg-white/5 px-3 py-1.5 break-all border border-white/5">
                    0x7d5a...9e32f81c6a4d7b0e1f2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-muted-foreground w-40 shrink-0 uppercase tracking-widest">
                    CONTRACT_ADDR:
                  </span>
                  <span className="text-primary bg-primary/5 px-3 py-1.5 border border-primary/10">
                    0x2170Ed0880ac9A755fd29B2688956BD959F933F8
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-none flex flex-col gap-5 w-full lg:w-auto">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-white/5 active:scale-95 active:opacity-80 py-2 rounded-none border-white/10 uppercase font-bold text-xs tracking-widest h-14 px-8 group cursor-pointer">
                Verify State Roots
                <ArrowUpRight
                  size={16}
                  className="ml-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-white/5 active:scale-95 active:opacity-80 py-2 rounded-none border-white/10 uppercase font-bold text-xs tracking-widest h-14 px-8 group cursor-pointer">
                View Contract
                <ArrowUpRight
                  size={16}
                  className="ml-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
