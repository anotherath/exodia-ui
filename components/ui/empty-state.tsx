import * as React from "react";

interface EmptyStateProps {
  message: string;
  className?: string;
}

export function EmptyState({ message, className = "" }: EmptyStateProps) {
  return (
    <div
      className={`text-center py-20 text-muted-foreground font-mono text-xs uppercase tracking-widest ${className}`}
    >
      {message}
    </div>
  );
}
