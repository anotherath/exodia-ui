import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold tracking-tighter text-foreground">
              EXODIA
            </span>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              High-performance crypto trading infrastructure with on-chain
              verification.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">
              Resources
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <li>
                <Link
                  className="hover:text-primary transition-all active:scale-95 inline-block"
                  href="/docs"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/exodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all active:scale-95 inline-block"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">
              Ecosystem
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <li>
                <Link
                  className="hover:text-primary transition-all active:scale-95 inline-block"
                  href="/trade"
                >
                  Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-all active:scale-95 inline-block"
                >
                  Contract
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">
              Social
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-all active:scale-95 inline-block"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-all active:scale-95 inline-block"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          <p>
            © 2026 EXODIA INFRASTRUCTURE — build by{" "}
            <a
              href="https://github.com/anotherath"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-yellow-400 transition-colors cursor-pointer"
            >
              anotherath
            </a>
            . ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="hover:text-primary transition-all active:scale-95 inline-block"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-primary transition-all active:scale-95 inline-block"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
