import type { Config } from 'tailwindcss';

/**
 * VOYAGO Design System — Tailwind config
 * Generado desde brand/tokens/*.json
 *
 * Uso: reemplaza tu tailwind.config.ts, o copia los bloques que necesites
 * dentro del `theme.extend` de tu config existente.
 */

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './pages/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        neutral: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        // Tokens semánticos — resuelven a variables CSS para permitir dark mode
        background: {
          page: 'var(--bg-page)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
          input: 'var(--bg-input)',
          inputHover: 'var(--bg-input-hover)',
          inputDisabled: 'var(--bg-input-disabled)',
        },
        border: {
          default: 'var(--border-default)',
          hover: 'var(--border-hover)',
          focus: 'var(--border-focus)',
          error: 'var(--border-error)',
          success: 'var(--border-success)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          inverse: 'var(--text-inverse)',
          link: 'var(--text-link)',
          linkHover: 'var(--text-link-hover)',
        },
        action: {
          primary: {
            bg: 'var(--action-primary-bg)',
            bgHover: 'var(--action-primary-bg-hover)',
            bgActive: 'var(--action-primary-bg-active)',
            bgDisabled: 'var(--action-primary-bg-disabled)',
            text: 'var(--action-primary-text)',
          },
          secondary: {
            bg: 'var(--action-secondary-bg)',
            bgHover: 'var(--action-secondary-bg-hover)',
            bgActive: 'var(--action-secondary-bg-active)',
            text: 'var(--action-secondary-text)',
            border: 'var(--action-secondary-border)',
          },
          ghost: {
            bgHover: 'var(--action-ghost-bg-hover)',
            bgActive: 'var(--action-ghost-bg-active)',
            text: 'var(--action-ghost-text)',
          },
          danger: {
            bg: 'var(--action-danger-bg)',
            bgHover: 'var(--action-danger-bg-hover)',
            bgActive: 'var(--action-danger-bg-active)',
            text: 'var(--action-danger-text)',
          },
        },
        semantic: {
          success: {
            bg: 'var(--success-bg)',
            bgHover: 'var(--success-bg-hover)',
            text: 'var(--success-text)',
            border: 'var(--success-border)',
            icon: 'var(--success-icon)',
          },
          warning: {
            bg: 'var(--warning-bg)',
            bgHover: 'var(--warning-bg-hover)',
            text: 'var(--warning-text)',
            border: 'var(--warning-border)',
            icon: 'var(--warning-icon)',
          },
          error: {
            bg: 'var(--error-bg)',
            bgHover: 'var(--error-bg-hover)',
            text: 'var(--error-text)',
            border: 'var(--error-border)',
            icon: 'var(--error-icon)',
          },
          info: {
            bg: 'var(--info-bg)',
            bgHover: 'var(--info-bg-hover)',
            text: 'var(--info-text)',
            border: 'var(--info-border)',
            icon: 'var(--info-icon)',
          },
        },
      },

      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        ui: ['var(--font-ui)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },

      fontSize: {
        'display-2xl': ['clamp(2.5rem, 5vw + 1rem, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['clamp(2rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-lg': ['clamp(1.75rem, 3vw + 0.5rem, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-md': ['clamp(1.5rem, 2vw + 0.5rem, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: '600' }],
        'display-sm': ['clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
        'heading-xl': ['clamp(1.5rem, 1.5vw + 0.5rem, 2rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-lg': ['clamp(1.25rem, 1vw + 0.5rem, 1.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-md': ['clamp(1.125rem, 0.5vw + 0.75rem, 1.25rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['clamp(1rem, 0.25vw + 0.875rem, 1.125rem)', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xl': ['clamp(1.125rem, 0.5vw + 0.75rem, 1.25rem)', { lineHeight: '1.6' }],
        'body-lg': ['clamp(1rem, 0.25vw + 0.875rem, 1.125rem)', { lineHeight: '1.6' }],
        'body-md': ['clamp(0.9375rem, 0.125vw + 0.875rem, 1rem)', { lineHeight: '1.55' }],
        'body-sm': ['clamp(0.875rem, 0.125vw + 0.8125rem, 0.9375rem)', { lineHeight: '1.5' }],
        'body-xs': ['clamp(0.75rem, 0.125vw + 0.6875rem, 0.8125rem)', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'code-sm': ['clamp(0.8125rem, 0.125vw + 0.75rem, 0.875rem)', { lineHeight: '1.5' }],
        'code-md': ['clamp(0.875rem, 0.125vw + 0.8125rem, 0.9375rem)', { lineHeight: '1.6' }],
        'button-lg': ['clamp(1rem, 0.125vw + 0.9375rem, 1.125rem)', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' }],
        'button-md': ['clamp(0.9375rem, 0.125vw + 0.875rem, 1rem)', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' }],
        'button-sm': ['clamp(0.875rem, 0.125vw + 0.8125rem, 0.9375rem)', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' }],
      },

      spacing: {
        'fluid-sm': 'clamp(0.5rem, 1vw + 0.25rem, 1rem)',
        'fluid-md': 'clamp(1rem, 2vw + 0.5rem, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 3vw + 0.5rem, 2.5rem)',
        'fluid-xl': 'clamp(2rem, 4vw + 0.5rem, 4rem)',
        section: 'clamp(1.5rem, 3vw + 1rem, 4rem)',
        container: 'clamp(1rem, 2vw + 0.5rem, 2rem)',
        sidebar: '280px',
        'sidebar-collapsed': '72px',
        navbar: '64px',
      },

      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },

      boxShadow: {
        'elev-1': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'elev-2': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'elev-3': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'elev-4': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'elev-5': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'focus-primary': '0 0 0 3px rgb(59 130 246 / 0.4)',
        'focus-secondary': '0 0 0 3px rgb(34 197 94 / 0.4)',
        'focus-error': '0 0 0 3px rgb(220 38 38 / 0.4)',
        'inset-input': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },

      zIndex: {
        base: '0',
        dropdown: '100',
        sticky: '200',
        fixed: '300',
        'modal-backdrop': '400',
        modal: '500',
        popover: '600',
        toast: '700',
        tooltip: '800',
        loading: '900',
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      maxWidth: {
        container: '1280px',
        content: '960px',
        form: '480px',
        modal: '560px',
      },

      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
