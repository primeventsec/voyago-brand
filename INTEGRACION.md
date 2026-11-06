# Cómo se aplicó esta marca en la aplicación real

Este repositorio contiene el sistema de marca **completo** (tokens, componentes de
referencia, plantillas, assets). La aplicación vive en otro repositorio (`erp/`) y
solo tomó una parte: la que necesita para *verse* como VOYAGO.

Este documento sirve para que quien toque cualquiera de los dos sepa qué se tomó
de aquí y qué no.

---

## Qué se llevó a `erp/frontend`

| Archivo de aquí | Destino | Cómo se aplicó |
|---|---|---|
| `tokens/colors.json` | `tailwind.config.ts` | La escala `marca` tiene los valores de `primary`; se añadieron `acento` y `exito` |
| `tokens/typography.json` | `tailwind.config.ts` + `app/layout.tsx` | `next/font` con las tres familias; las variables CSS las consume Tailwind |
| `tokens/shadows.json` | `tailwind.config.ts` | `shadow-elev-1` … `shadow-elev-5` |
| `logo/logo-mark.svg` | `components/marca/Logo.tsx` | Reconstruido en SVG inline para poder cambiar el color de la línea por prop |
| `logo/logo-app-icon.svg` | `components/marca/Logo.tsx` (`LogoApp`) + `app/icon.svg` | Baldosa azul para los huecos cuadrados |
| `icons/ruc.svg`, `sri.svg`, `comprobante.svg`, `retencion.svg`, `invoice.svg` | `components/marca/Iconos.tsx` | Componentes con `currentColor` |

## Qué NO se llevó, y por qué

| Pieza | Motivo |
|---|---|
| `components/Button.tsx`, `Table.tsx`, `Modal.tsx`, etc. | Usan Radix + `class-variance-authority`. El frontend de `erp/` **no tiene dependencias de UI** y esa es una decisión del proyecto. Sirven como **referencia de diseño**, no como código para copiar. |
| `tailwind.config.ts` de aquí | Es una configuración completa para un proyecto nuevo. En `erp/` se integró **por partes** sobre la config existente, no reemplazándola. |
| `ads/*.html` | Son plantillas de publicidad, no pantallas del producto. |
| `guidelines.md` / PDF | Documentación de marca; vive aquí. |

---

## Reglas que se respetaron al integrar

1. **No se renombraron tokens existentes.** `marca-50` … `marca-900` se usaban en
   46 archivos; se cambaron los valores, no las claves. Rebrading con cero riesgo.
2. **`marca-500` es `#2563eb`, no `#3b82f6`.** El 500 casi siempre es fondo de
   botón con texto blanco; el teórico da 3.7:1 (falla AA) y el de marca 5.9:1.
3. **No se tocaron los neutros ni los estados.** `slate` / `red` / `amber` /
   `emerald` ya funcionaban y sus contrastes estaban revisados.
4. **No se forzó el modo oscuro.** Los tokens oscuros están definidos aquí
   (`tokens/tokens.css`) pero la aplicación no los activa todavía; hacerlo es una
   decisión aparte, no un efecto colateral del rebranding.
5. **Cada cambio se verificó con build.** `npx tsc --noEmit` y `npm run build`
   tienen que pasar antes de dar por buena una pantalla.

---

## Estado

Aplicado y verificado en `erp/frontend` (commit `07cb26d`): login, invitación y
marco autenticado. Detalle técnico en `erp/docs/MARCA.md`.

Pendiente de decisión, no de ejecución:

- Activar el modo oscuro (los tokens existen, falta el conmutador y revisar cada
  pantalla).
- Llevar `.cifra-derecha` a las tablas de facturas, comprobantes y kardex (hoy
  los montos se alinean con `text-right` pero no en monoespaciada).
- Sustituir el wordmark de texto por un trazado vectorial si se usa en imprenta
  o en el PDF de la factura.
