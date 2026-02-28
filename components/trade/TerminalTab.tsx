"use client";

interface TerminalTabProps {
  label: string | React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export default function TerminalTab({
  label,
  isActive,
  onClick,
  className = "",
}: TerminalTabProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer 
        active:scale-95 active:opacity-80
        ${
          isActive
            ? "text-primary border-b-2 border-primary"
            : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
        }
        ${className}
      `}
    >
      {label}
    </button>
  );
}
