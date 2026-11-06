'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T, index: number) => React.ReactNode;
  className?: string;
  headerClassName?: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (row: T) => string;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
  emptyMessage?: string;
  loading?: boolean;
  onRowClick?: (row: T) => void;
  className?: string;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
  };
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (column: string) => void;
}

function Table<T>({
  columns,
  data,
  keyExtractor,
  striped = true,
  hoverable = true,
  bordered = true,
  compact = false,
  emptyMessage = 'No hay datos para mostrar',
  loading = false,
  onRowClick,
  className,
  pagination,
  sortColumn,
  sortDirection,
  onSort,
}: TableProps<T>) {
  if (loading) {
    return (
      <div className="overflow-x-auto rounded-lg border border-border-default bg-background-card">
        <table className="w-full" role="grid" aria-busy="true">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-left text-heading-sm text-text-tertiary border-b border-border-default">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-text-tertiary">
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                  </svg>
                  Cargando...
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="rounded-lg border border-border-default bg-background-card p-8 text-center">
        <p className="text-text-secondary">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={cn('overflow-x-auto rounded-lg border border-border-default bg-background-card', className)}>
      <table className="w-full" role="grid">
        <thead className="bg-background-inputHover">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  'px-4 py-3 text-heading-sm font-semibold text-text-primary border-b border-border-default',
                  'whitespace-nowrap',
                  col.align === 'center' && 'text-center',
                  col.align === 'right' && 'text-right',
                  col.headerClassName,
                  onSort && 'cursor-pointer hover:text-text-primary transition-colors select-none'
                )}
                style={{ width: col.width }}
                onClick={() => onSort?.(col.key)}
              >
                <div className="flex items-center gap-1.5 justify-center">
                  {col.header}
                  {onSort && sortColumn === col.key && (
                    <svg
                      className={cn('h-4 w-4 flex-shrink-0', sortDirection === 'asc' && 'rotate-180')}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 16l5-5 5 5" />
                    </svg>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={keyExtractor(row)}
              className={cn(
                'border-b border-border-default transition-colors',
                'last:border-b-0',
                striped && rowIndex % 2 === 1 && 'bg-background-inputHover/50',
                hoverable && onRowClick && 'hover:bg-background-inputHover cursor-pointer',
                hoverable && !onRowClick && 'hover:bg-background-inputHover/50'
              )}
              onClick={() => onRowClick?.(row)}
              tabIndex={onRowClick ? 0 : undefined}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onRowClick?.(row); }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    'px-4 py-3 text-body-md text-text-secondary border-b border-border-default/50',
                    'last:border-b-0',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right',
                    col.className
                  )}
                  style={{ width: col.width }}
                >
                  {col.render ? col.render(row, rowIndex) : (row as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-border-default bg-background-inputHover/50">
          <div className="text-body-sm text-text-secondary">
            Mostrando {((pagination.page - 1) * pagination.pageSize) + 1} a {Math.min(pagination.page * pagination.pageSize, pagination.total)} de {pagination.total} resultados
          </div>
          <div className="flex items-center gap-2">
            <select
              value={pagination.pageSize}
              onChange={(e) => pagination.onPageSizeChange(Number(e.target.value))}
              className="h-8 px-2 rounded-base border border-border-default bg-background-input text-body-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              {[10, 25, 50, 100].map((size) => (
                <option key={size} value={size}>{size} por página</option>
              ))}
            </select>
            <button
              onClick={() => pagination.onPageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="h-8 px-3 rounded-base border border-border-default bg-background-card text-body-sm text-text-primary hover:bg-background-inputHover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Anterior
            </button>
            <span className="text-body-sm text-text-secondary">
              Página {pagination.page} de {Math.ceil(pagination.total / pagination.pageSize)}
            </span>
            <button
              onClick={() => pagination.onPageChange(pagination.page + 1)}
              disabled={pagination.page >= Math.ceil(pagination.total / pagination.pageSize)}
              className="h-8 px-3 rounded-base border border-border-default bg-background-card text-body-sm text-text-primary hover:bg-background-inputHover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { Table };