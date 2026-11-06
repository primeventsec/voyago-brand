'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[700] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & { variant?: ToastVariant }
>(({ className, variant = 'default', ...props }, ref) => {
  const variantStyles = {
    default: 'border-border-default bg-background-card text-text-primary',
    success: 'border-semantic-success-border bg-semantic-success-bg text-semantic-success-text',
    error: 'border-semantic-error-border bg-semantic-error-bg text-semantic-error-text',
    warning: 'border-semantic-warning-border bg-semantic-warning-bg text-semantic-warning-text',
    info: 'border-semantic-info-border bg-semantic-info-bg text-semantic-info-text',
  };

  const icons = {
    default: null,
    success: <CheckCircle className="h-5 w-5 text-semantic-success-icon" aria-hidden="true" />,
    error: <AlertCircle className="h-5 w-5 text-semantic-error-icon" aria-hidden="true" />,
    warning: <AlertTriangle className="h-5 w-5 text-semantic-warning-icon" aria-hidden="true" />,
    info: <Info className="h-5 w-5 text-semantic-info-icon" aria-hidden="true" />,
  };

  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-4 shadow-elev-4',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-80 data-[state=open]:fade-in-0',
        'data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full',
        'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
        'data-[swipe=cancel]:translate-x-0',
        'data-[swipe=end]:animate-out data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        {icons[variant] && <div className="flex-shrink-0 mt-0.5" aria-hidden="true">{icons[variant]}</div>}
        <div className="flex flex-col gap-1 min-w-0">
          <ToastPrimitives.Title className="text-heading-sm font-semibold text-inherit" />
          <ToastPrimitives.Description className="text-body-sm opacity-90 text-inherit" />
        </div>
      </div>
      <ToastPrimitives.Close className="flex-shrink-0 rounded-md p-1 text-inherit/70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-background-card group-hover:opacity-100">
        <X className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Cerrar</span>
      </ToastPrimitives.Close>
    </ToastPrimitives.Root>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-base border border-border-default bg-background-card px-3 text-body-sm font-semibold text-text-primary',
      'ring-offset-background-card transition-colors',
      'hover:bg-background-inputHover focus:outline-none focus:ring-2 focus:ring-focus-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = ToastPrimitives.Close;
const ToastTitle = ToastPrimitives.Title;
const ToastDescription = ToastPrimitives.Description;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionProps = React.ComponentPropsWithoutRef<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionProps,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};