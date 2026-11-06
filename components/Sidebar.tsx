'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, LayoutDashboard, Users, Package, DollarSign, FileText, Settings, HelpCircle, LogOut, Building2, Briefcase, ClipboardList } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string | number;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: 'Facturación', href: '/facturacion', icon: <FileText className="h-5 w-5" /> },
  { label: 'Inventario', href: '/inventario', icon: <Package className="h-5 w-5" /> },
  { label: 'Contabilidad', href: '/contabilidad', icon: <DollarSign className="h-5 w-5" /> },
  { label: 'CRM', href: '/crm', icon: <Users className="h-5 w-5" /> },
  { label: 'RRHH', href: '/rrhh', icon: <Briefcase className="h-5 w-5" /> },
  { label: 'Empresa', href: '/empresa', icon: <Building2 className="h-5 w-5" /> },
];

const bottomNavigation: NavItem[] = [
  { label: 'Configuración', href: '/configuracion', icon: <Settings className="h-5 w-5" /> },
  { label: 'Ayuda', href: '/ayuda', icon: <HelpCircle className="h-5 w-5" /> },
];

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function Sidebar({ collapsed = false, onToggle, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-[300] h-screen bg-background-card border-r border-border-default transition-all duration-200 ease-out',
        'flex flex-col',
        collapsed ? 'w-[72px]' : 'w-[280px]',
        className
      )}
      aria-label="Navegación principal"
    >
      {/* Logo / Brand */}
      <div className={cn('flex items-center justify-between h-16 px-4 border-b border-border-default', collapsed && 'justify-center')}>
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center gap-2" aria-label="VOYAGO - Ir al dashboard">
            <svg className="h-8 w-8" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="100" cy="100" r="96" stroke="#2563eb" strokeWidth="2"/>
              <line x1="20" y1="100" x2="180" y2="100" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="100" cy="100" r="24" fill="#f97316"/>
            </svg>
            <span className="text-heading-lg font-bold text-text-primary">VOYAGO</span>
          </Link>
        )}
        {collapsed && (
          <Link href="/dashboard" className="flex items-center justify-center" aria-label="VOYAGO - Ir al dashboard">
            <svg className="h-8 w-8" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="100" cy="100" r="96" stroke="#2563eb" strokeWidth="2"/>
              <line x1="20" y1="100" x2="180" y2="100" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="100" cy="100" r="24" fill="#f97316"/>
            </svg>
          </Link>
        )}
        <button
          onClick={onToggle}
          className={cn(
            'p-1.5 rounded-base text-text-tertiary hover:text-text-primary hover:bg-background-inputHover transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-focus-ring'
          )}
          aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
          aria-expanded={!collapsed}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1" role="navigation" aria-label="Menú principal">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.children && item.children.some(c => pathname.startsWith(c.href)));
          const hasChildren = item.children && item.children.length > 0;

          if (collapsed && hasChildren) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-background-card',
                  isActive
                    ? 'bg-action-primary-bg/20 text-action-primary-text'
                    : 'text-text-secondary hover:bg-background-inputHover hover:text-text-primary'
                )}
                title={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="flex-shrink-0" aria-hidden="true">{item.icon}</span>
                {item.badge && (
                  <span className="flex-shrink-0 px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-action-primary-bg text-action-primary-text">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          }

          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-background-card',
                  isActive
                    ? 'bg-action-primary-bg/20 text-action-primary-text'
                    : 'text-text-secondary hover:bg-background-inputHover hover:text-text-primary'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="flex-shrink-0" aria-hidden="true">{item.icon}</span>
                {!collapsed && <span className="truncate font-medium">{item.label}</span>}
                {item.badge && (
                  <span className={cn(
                    'flex-shrink-0 px-1.5 py-0.5 text-[10px] font-semibold rounded-full',
                    isActive ? 'bg-action-primary-bg text-action-primary-text' : 'bg-background-inputHover text-text-tertiary'
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
              {!collapsed && hasChildren && (
                <ul className="mt-1 space-y-0.5 pl-10" role="list">
                  {item.children!.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={cn(
                          'flex items-center gap-2 px-2 py-2 rounded-lg text-body-sm transition-colors',
                          'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2',
                          pathname === child.href
                            ? 'bg-action-primary-bg/20 text-action-primary-text font-medium'
                            : 'text-text-tertiary hover:bg-background-inputHover hover:text-text-primary'
                        )}
                        aria-current={pathname === child.href ? 'page' : undefined}
                      >
                        <span className="flex-shrink-0" aria-hidden="true">{child.icon}</span>
                        <span className="truncate">{child.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-border-default p-3 space-y-1">
        {bottomNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-background-card',
              collapsed ? 'justify-center' : '',
              pathname === item.href
                ? 'bg-action-primary-bg/20 text-action-primary-text'
                : 'text-text-tertiary hover:bg-background-inputHover hover:text-text-secondary'
            )}
            title={collapsed ? item.label : undefined}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            <span className="flex-shrink-0" aria-hidden="true">{item.icon}</span>
            {!collapsed && <span className="truncate text-body-sm">{item.label}</span>}
          </Link>
        ))}

        {/* User Menu / Logout */}
        <div className="pt-2" role="separator" />
        <button
          className={cn(
            'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-background-card',
            collapsed ? 'justify-center' : '',
            'text-text-tertiary hover:bg-semantic-error-bg/10 hover:text-semantic-error-text'
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          {!collapsed && <span className="truncate text-body-sm">Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
}