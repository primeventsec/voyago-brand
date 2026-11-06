'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base text-button-md font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-action-primary-bg text-action-primary-text hover:bg-action-primary-bgHover active:bg-action-primary-bgActive shadow-elev-2 hover:shadow-elev-3',
        secondary: 'bg-action-secondary-bg text-action-secondary-text border border-action-secondary-border hover:bg-action-secondary-bgHover active:bg-action-secondary-bgActive',
        ghost: 'text-action-ghost-text hover:bg-action-ghost-bgHover active:bg-action-ghost-bgActive',
        outline: 'border-2 border-border-default bg-transparent hover:bg-background-inputHover',
        danger: 'bg-action-danger-bg text-action-danger-text hover:bg-action-danger-bgHover active:bg-action-danger-bgActive shadow-elev-2 hover:shadow-elev-3',
        success: 'bg-semantic-success-bg text-semantic-success-text hover:bg-semantic-success-bgHover',
      },
      size: {
        sm: 'h-8 px-3 text-button-sm gap-1.5',
        md: 'h-10 px-4 text-button-md gap-2',
        lg: 'h-12 px-6 text-button-lg gap-2.5',
        xl: 'h-14 px-8 text-button-lg gap-3',
        icon: 'h-10 w-10 p-0',
        iconSm: 'h-8 w-8 p-0',
        iconLg: 'h-12 w-12 p-0',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, loading = false, leftIcon, rightIcon, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };