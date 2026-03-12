import * as React from "react";

export interface SelectableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const SelectableButton = React.forwardRef<
  HTMLButtonElement,
  SelectableButtonProps
>(({ className, selected = false, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      disabled={props.disabled}
      className={`p-4 border text-xs font-bold uppercase tracking-widest transition-all text-center cursor-pointer active:scale-95 disabled:pointer-events-none disabled:opacity-40 disabled:grayscale ${
        selected
          ? "border-primary bg-primary/5 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
          : "border-white/10 hover:border-white/30 text-muted-foreground hover:text-foreground bg-transparent"
      } ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
});
SelectableButton.displayName = "SelectableButton";

export { SelectableButton };
