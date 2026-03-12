import * as React from "react";

export interface TextTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const TextTab = React.forwardRef<HTMLButtonElement, TextTabProps>(
  ({ className, selected = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`text-xs font-bold uppercase tracking-widest cursor-pointer active:scale-95 transition-all ${
          selected
            ? "text-primary hover:text-primary/80"
            : "text-muted-foreground hover:text-foreground"
        } ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);
TextTab.displayName = "TextTab";

export { TextTab };
