interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-background p-12 flex flex-col group hover:bg-white/2 transition-colors">
      <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-foreground mb-6 uppercase tracking-tight">
        {title}
      </h4>
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
