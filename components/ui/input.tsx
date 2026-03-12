import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex w-full border px-3 py-2 md:text-sm rounded-none bg-white/5 border-white/10 h-14 font-mono text-sm focus-visible:outline-none focus-visible:border-primary/60 focus-visible:bg-white/5 focus-visible:shadow-[0_0_20px_-10px_rgba(var(--primary-rgb),0.5)] transition-all placeholder:text-muted-foreground/50 disabled:cursor-not-allowed disabled:opacity-50 ${
          className || ""
        }`}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
