import * as React from "react";

const baseStyles =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-none font-bold uppercase tracking-widest active:scale-95 active:opacity-80 transition-all shadow-sm";

const variants = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]",
  outline:
    "border bg-background text-muted-foreground hover:text-primary border-white/10 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]",
  secondary:
    "bg-white/5 text-foreground hover:bg-white/10 border border-transparent",
  ghost:
    "shadow-none hover:bg-white/5 hover:text-foreground text-muted-foreground border-transparent",
  link: "shadow-none text-primary hover:text-primary/80 border-transparent",
};

const sizes = {
  default: "h-10 px-5 py-2 text-xs",
  sm: "h-9 px-3 text-xs",
  lg: "h-11 px-8 py-2 text-xs",
  xl: "h-14 px-4 py-2 text-sm",
  hero: "h-16 px-10 py-3 text-sm",
  icon: "h-10 w-10",
  tab: "py-1.5 px-0 pb-4 text-xs",
  link: "h-auto p-0 text-xs",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export function buttonVariants({
  variant = "default",
  size = "default",
  className = "",
}: {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
} = {}) {
  return [baseStyles, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
