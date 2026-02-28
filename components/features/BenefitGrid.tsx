import { BenefitCard } from "./BenefitCard";
import { Zap, BarChart3, ShieldCheck, Server } from "lucide-react";

export default function BenefitGrid() {
  const benefits = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Zero Gas",
      description:
        "Trade as much as you want. Execution is off-chain, meaning zero gas fees per order matched.",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "OKX Liquidity",
      description:
        "Access the depth of institutional-grade markets with real-time price feeds directly from OKX.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Self-Custody",
      description:
        "Connect your wallet and trade. We never have access to your private keys or withdrawal authority.",
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "State Proofs",
      description:
        "Mathematical certainty of platform integrity through periodic on-chain state root publication.",
    },
  ];

  return (
    <section className="py-32 bg-black/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
