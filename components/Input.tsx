'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, hint, leftIcon, rightIcon, leftElement, rightElement, id, disabled, required, ...props }, ref) => {
    const inputId = id || React.useId();
    const errorId = error ? `${inputId}-error` : undefined;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-heading-sm text-text-primary mb-1.5">
            {label}
            {required && <span className="text-error-icon ml-0.5" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative">
          {(leftIcon || leftElement) && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none flex items-center">
              {leftElement || leftIcon}
            </div>
          )}
          <input
            type={type}
            id={inputId}
            ref={ref}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={describedBy}
            className={cn(
              'flex h-10 w-full rounded-base border border-border-default bg-background-input px-3 py-2 text-body-lg text-text-primary placeholder:text-text-tertiary',
              'transition-colors duration-150',
              'hover:border-border-hover',
              'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:border-focus',
              'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-background-inputDisabled',
              'data-[error]:border-border-error data-[error]:focus:ring-focus-error',
              leftIcon || leftElement ? 'pl-10' : '',
              rightIcon || rightElement ? 'pr-10' : '',
              className
            )}
            data-error={error ? 'true' : undefined}
            {...props}
          />
          {(rightIcon || rightElement) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none flex items-center">
              {rightElement || rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-body-sm text-semantic-error-text flex items-center gap-1" role="alert">
            <svg className="h-3.5 w-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-body-sm text-text-tertiary">{hint}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };