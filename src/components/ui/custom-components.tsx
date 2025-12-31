import React from 'react';
import { cn } from '@/lib/utils';
export const TerminalButton = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline', 
  className?: string 
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    ghost: 'hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100',
    outline: 'border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-zinc-100'
  };
  return (
    <button 
      className={cn(
        "px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export const TerminalCard = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => {
  return (
    <div className={cn("bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm relative group overflow-hidden", className)}>
      {title && (
        <div className="px-3 py-2 border-b border-zinc-800 text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex justify-between items-center">
          <span>{title}</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-zinc-800" />
            <div className="w-1.5 h-1.5 bg-zinc-800" />
          </div>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};
export const StatusBadge = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    COMPLETED: 'text-primary border-primary/50',
    PENDING: 'text-amber-400 border-amber-400/50',
    FAILED: 'text-red-400 border-red-400/50',
  };
  return (
    <span className={cn("text-[10px] px-2 py-0.5 border uppercase", colors[status] || 'border-zinc-700 text-zinc-500')}>
      {status}
    </span>
  );
};