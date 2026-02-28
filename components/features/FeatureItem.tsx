interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-none w-14 h-14 border border-white/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-base font-bold uppercase text-foreground mb-2">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
