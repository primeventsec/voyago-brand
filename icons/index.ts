// VOYAGO Icon System - Barrel export for all custom icons
// Usage: import { InvoiceIcon, RucIcon, ... } from '@/brand/icons'

export { default as InvoiceIcon } from './invoice.svg';
export { default as RucIcon } from './ruc.svg';
export { default as SriIcon } from './sri.svg';
export { default as ComprobanteIcon } from './comprobante.svg';
export { default as RetencionIcon } from './retencion.svg';
export { default as EmpresaUsuarioIcon } from './empresa-usuario.svg';
export { default as ModuloContabilidadIcon } from './modulo-contabilidad.svg';
export { default as ModuloInventarioIcon } from './modulo-inventario.svg';
export { default as ModuloRrhhIcon } from './modulo-rrhh.svg';
export { default as ModuloCrmIcon } from './modulo-crm.svg';
export { default as DashboardIcon } from './dashboard.svg';
export { default as SettingsIcon } from './settings.svg';
export { default as UsersIcon } from './users.svg';
export { default as ChartIcon } from './chart.svg';

// Icon metadata for dynamic rendering
export const iconMetadata = {
  invoice: { name: 'Factura', component: 'InvoiceIcon', category: 'modules' },
  ruc: { name: 'RUC', component: 'RucIcon', category: 'tax' },
  sri: { name: 'SRI', component: 'SriIcon', category: 'tax' },
  comprobante: { name: 'Comprobante', component: 'ComprobanteIcon', category: 'tax' },
  retencion: { name: 'Retención', component: 'RetencionIcon', category: 'tax' },
  empresaUsuario: { name: 'Empresa/Usuario', component: 'EmpresaUsuarioIcon', category: 'users' },
  moduloContabilidad: { name: 'Contabilidad', component: 'ModuloContabilidadIcon', category: 'modules' },
  moduloInventario: { name: 'Inventario', component: 'ModuloInventarioIcon', category: 'modules' },
  moduloRrhh: { name: 'RRHH', component: 'ModuloRrhhIcon', category: 'modules' },
  moduloCrm: { name: 'CRM', component: 'ModuloCrmIcon', category: 'modules' },
  dashboard: { name: 'Dashboard', component: 'DashboardIcon', category: 'navigation' },
  settings: { name: 'Configuración', component: 'SettingsIcon', category: 'navigation' },
  users: { name: 'Usuarios', component: 'UsersIcon', category: 'users' },
  chart: { name: 'Estadísticas', component: 'ChartIcon', category: 'reports' },
} as const;

export type IconName = keyof typeof iconMetadata;