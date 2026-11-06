'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { variant?: 'default' | 'error'; size?: 'sm' | 'md' | 'lg' }
>(({ className, variant = 'default', size = 'md', ...props }, ref) => {
  const variantStyles = {
    default: 'bg-text-primary text-background-card border border-border-default',
    error: 'bg-semantic-error-bg text-semantic-error-text border border-semantic-error-border',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-body-xs',
    md: 'px-3 py-1.5 text-body-sm',
    lg: 'px-4 py-2 text-body-md',
  };

  return (
    <TooltipPrimitive.Content
      ref={ref}
      className={cn(
        'z-[800] rounded-md shadow-elev-3',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <TooltipPrimitive.Arrow className="fill-text-primary" />
    </TooltipPrimitive.Content>
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };