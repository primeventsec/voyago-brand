'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  dotColor?: string;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', dot, dotColor, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center gap-1.5 font-semibold rounded-full transition-colors';
    
    const variantStyles = {
      default: 'bg-background-inputHover text-text-secondary border border-border-default',
      primary: 'bg-action-primary-bg/20 text-action-primary-text border border-action-primary-bg/30',
      secondary: 'bg-action-secondary-bg/20 text-action-secondary-text border border-action-secondary-border/30',
      success: 'bg-semantic-success-bg text-semantic-success-text border border-semantic-success-border',
      warning: 'bg-semantic-warning-bg text-semantic-warning-text border border-semantic-warning-border',
      error: 'bg-semantic-error-bg text-semantic-error-text border border-semantic-error-border',
      info: 'bg-semantic-info-bg text-semantic-info-text border border-semantic-info-border',
      outline: 'bg-transparent text-text-secondary border-2 border-border-default',
    };

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-[10px]',
      md: 'px-2.5 py-1 text-body-xs',
      lg: 'px-3 py-1.5 text-body-sm',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {dot && (
          <span
            className="h-1.5 w-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: dotColor || 'currentColor' }}
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };