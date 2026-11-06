'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Bell, Moon, Sun, User, LogOut, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from './DropdownMenu';

interface NavbarProps {
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
  className?: string;
}

export function Navbar({ sidebarCollapsed = false, onToggleSidebar, user, className }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
    { name: 'Facturación', href: '/facturacion', icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
    { name: 'Inventario', href: '/inventario', icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 right-0 z-[300] h-16 bg-background-card/80 backdrop-blur-md border-b border-border-default transition-all duration-200',
        sidebarCollapsed ? 'left-[72px]' : 'left-[280px]',
        className
      )}
      role="banner"
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        {/* Left: Mobile menu toggle + breadcrumb */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-base text-text-secondary hover:bg-background-inputHover hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Breadcrumb / Page title */}
          <div className="hidden sm:block">
            <h1 className="text-heading-lg font-semibold text-text-primary">
              {navigation.find(n => pathname.startsWith(n.href))?.name || 'VOYAGO'}
            </h1>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-base text-text-secondary hover:bg-background-inputHover hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring"
            aria-label={darkMode ? 'Modo claro' : 'Modo oscuro'}
            aria-pressed={darkMode}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Notifications */}
          <button
            className="relative p-2 rounded-base text-text-secondary hover:bg-background-inputHover hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring"
            aria-label="Notificaciones"
          >
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-semantic-error-icon" aria-label="3 notificaciones no leídas" />
          </button>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user?.avatar || ''} alt={user?.name || 'Usuario'} />
                  <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-semibold">
                <div className="flex flex-col space-y-1">
                  <p className="text-body-sm font-medium text-text-primary">{user?.name || 'Usuario'}</p>
                  <p className="text-body-xs text-text-tertiary truncate">{user?.email || 'email@ejemplo.com'}</p>
                  <p className="text-[10px] px-1.5 py-0.5 rounded-full bg-action-primary-bg/20 text-action-primary-text inline-block w-fit">
                    {user?.role || 'Administrador'}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/perfil" className="flex items-center gap-2 w-full">
                  <User className="h-4 w-4" aria-hidden="true" />
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/configuracion" className="flex items-center gap-2 w-full">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  Configuración
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {}}
                className="text-semantic-error-text focus:text-semantic-error-text"
              >
                <LogOut className="h-4 w-4 mr-2" aria-hidden="true" />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile menu sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-72">
          <SheetHeader>
            <SheetTitle>Menú</SheetTitle>
          </SheetHeader>
          <nav className="flex-1 overflow-y-auto py-4 space-y-1 px-2" role="navigation" aria-label="Menú móvil">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-body-lg transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-focus-ring',
                  pathname.startsWith(item.href)
                    ? 'bg-action-primary-bg/20 text-action-primary-text font-medium'
                    : 'text-text-secondary hover:bg-background-inputHover hover:text-text-primary'
                )}
                aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
              >
                <span className="flex-shrink-0" aria-hidden="true">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

// Sheet components (simplified - would normally be from @radix-ui/react-dialog)
const Sheet = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const SheetTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const SheetContent = ({ children, side, className }: { children: React.ReactNode; side: string; className?: string }) => (
  <div className={cn('fixed inset-0 z-[800] flex', side === 'left' && 'justify-start', className)}>
    <div className="bg-background-card w-full h-full shadow-elev-5" role="dialog" aria-modal="true">
      {children}
    </div>
  </div>
);
const SheetHeader = ({ children }: { children: React.ReactNode }) => <div className="p-4 border-b border-border-default">{children}</div>;
const SheetTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-heading-lg font-semibold text-text-primary">{children}</h2>;