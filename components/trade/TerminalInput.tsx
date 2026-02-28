"use client";

interface TerminalInputProps {
  label?: string;
  suffix?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  containerClassName?: string;
  action?: React.ReactNode;
}

export default function TerminalInput({
  label,
  suffix,
  type = "number",
  placeholder = "0.00",
  value,
  onChange,
  className = "",
  containerClassName = "",
  action,
}: TerminalInputProps) {
  return (
    <div className={`space-y-4 ${containerClassName}`}>
      {(label || action) && (
        <div className="flex justify-between items-end">
          {label && (
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80">
              {label}
            </label>
          )}
          {action}
        </div>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`flex w-full border px-3 py-2 md:text-sm rounded-none bg-gray/5 border-white/10 h-14 font-mono text-sm focus-visible:outline-none focus-visible:border-primary/60 focus-visible:bg-gray/5 focus-visible:shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] transition-all ${
            suffix ? "pr-20" : ""
          } ${className}`}
          placeholder={placeholder}
        />
        {suffix && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground tracking-widest opacity-60">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
}
