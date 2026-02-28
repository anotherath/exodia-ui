import { FeatureItem } from "./FeatureItem";
import { EngineStats } from "./EngineStats";
import { Zap, Lock, Database } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Off-Chain Execution",
      description:
        "Trades are matched instantly in our high-speed engine with sub-millisecond latency.",
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "On-Chain Custody",
      description:
        "User funds never leave your control, secured by smart contracts on Ethereum L2.",
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "State Root Verification",
      description:
        "Every trading epoch is compressed into a state root and committed to the blockchain.",
    },
  ];

  return (
    <section className="py-32 border-b border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8 uppercase">
              The Infrastructure of <br />
              <span className="text-muted-foreground">Modern Markets</span>
            </h2>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              Exodia isn't an AMM or a traditional exchange. It's a synthetic
              trading engine that separates order matching from asset custody,
              ensuring high performance without compromising decentralization.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          <EngineStats />
        </div>
      </div>
    </section>
  );
}
