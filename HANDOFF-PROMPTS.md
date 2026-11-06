# HANDOFF-PROMPTS.md — Prompts listos para cada IA

Ordenado por herramienta. **Copiar, pegar, y adjuntar `AI-BRIEF.md` cuando la herramienta lo permita.**

Recordatorio: cada IA es distinta. Las que **sí** pueden leer archivos o URLs (Claude, ChatGPT con archivos,
v0 con repo conectado, Cursor) necesitan solo el brief. Las que **no** (Midjourney, Firefly suelto, Ideogram)
necesitan el resumen de estilo pegado **dentro del mismo prompt** — por eso llevan los valores inline.

---

## 1. ChatGPT / Claude / Gemini — Brand guidelines + ordenar el sistema

**Adjuntar:** `AI-BRIEF.md` (y si se puede, la carpeta `tokens/` completa)

```
Actúa como director de marca. Te adjunto el sistema de marca de VOYAGO (ERP SaaS ecuatoriano).

Tarea: escribe las brand guidelines finales en Markdown, listas para exportar a PDF, con estas secciones:

1. Portada (nombre, tagline "El ERP que habla ecuatoriano", versión 1.0)
2. Estrategia: posicionamiento, audiencia, personalidad, 3 atributos y 3 anti-atributos
3. Logo: construcción, área de resguardo, tamaños mínimos, 6 usos incorrectos descritos en texto
4. Color: tabla con rol, HEX, RGB, CMYK aproximado y ratio de contraste; regla de uso del acento naranja
5. Tipografía: las 3 familias, jerarquía completa con tamaños y pesos, mínimo de tamaño en móvil
6. Espaciado y retícula: escala 4px, breakpoints, anchos de sidebar/navbar/contenedor
7. Componentes: estados de botón, input, tabla, badge, modal (default, hover, focus, disabled, error)
8. Iconografía: grilla 24×24, trazo 2px, qué se puede y qué no
9. Voz y tono: 5 reglas, 5 frases que sí, 5 frases prohibidas
10. Aplicación: landing, dashboard, factura PDF, redes, merch

Reglas: español de Ecuador. Nada de relleno motivacional. Cada regla tiene que ser accionable
(poder decir "eso está mal" mirando la página). No inventes HEX ni tamaños: usa solo los del brief.
Devuélveme el Markdown completo, sin explicarme el proceso.
```

---

## 2. v0.dev / Lovable / Bolt — Interfaz real de la app

**Preferido: conectar el repo de GitHub** (v0 importa el proyecto y lee los componentes reales).
Si no, pegar este prompt + subir `tokens/` y `components/`.

```
Construye el dashboard de VOYAGO, un ERP SaaS ecuatoriano. Next.js 14 App Router + TypeScript +
Tailwind + Radix UI + lucide-react.

Usa EXACTAMENTE estos tokens:
- primary #2563eb (hover #1d4ed8), secondary #16a34a, accent #f97316, error #dc2626
- fondos: #fafafa página, #ffffff card | dark: #18181b página, #27272a card
- texto: #18181b principal, #52525b secundario, #a1a1aa terciario
- bordes #e4e4e7 · radios 4px botón/input, 8px card, 12px modal
- sombras 0 1px 2px rgb(0 0 0/.05) y 0 4px 6px -1px rgb(0 0 0/.1)
- tipografía: Space Grotesk (titulares), IBM Plex Sans (UI), IBM Plex Mono (números de comprobante y montos)
- sidebar 280px expandido / 72px colapsado, navbar 64px, contenido máx 1280px, padding 24px

Pantallas a generar:
1. Dashboard: 4 KPI cards arriba (Facturas del mes, Ingresos, Pendientes de cobro, Stock bajo),
   debajo tabla "Últimas facturas" con columnas Comprobante / Cliente / Fecha / Total / Estado.
   Comprobante en mono, total alineado a la derecha, estado como badge (verde "Autorizado",
   ámbar "En proceso", rojo "Rechazado").
2. Facturación: tabla con filtros (fecha, estado, cliente), botón primario "Nueva factura",
   modal de creación con validación de RUC (13 dígitos) y selector de tipo de comprobante.
3. Inventario: tabla de productos con stock, bodega y badge de alerta cuando stock < mínimo.

Requisitos: dark mode con clase `dark`, navegación por teclado, focus visible,
aria-labels en iconos, responsive con sidebar colapsable bajo 768px, textos en español de Ecuador.
Datos de ejemplo realistas (clientes ecuatorianos, montos en USD, RUC de 13 dígitos).
No uses imágenes de stock ni emojis en la interfaz.
```

---

## 3. Midjourney / Ideogram / Firefly — Logotipo final

**Adjuntar:** `logo/logo-concept-1-equator.svg` como referencia de forma (image prompt).

```
Professional logo for "VOYAGO", an Ecuadorian ERP SaaS platform.
Concept: a horizon line crossed by the equatorial line, with a sun disc at the center.
The horizontal line is the core symbol: it must stay readable at 32px favicon size.

Style: flat vector, geometric, precise. Confident and technical but warm — not corporate stiff.
Colors: deep blue #2563eb for the containing circle, orange #f97316 for the equator line and sun.
Clean negative space. No text in the mark itself.

Deliver: single centered mark on transparent background, strong silhouette.
--no flag, condor, sombrero, llama, mascot, 3d, gradient mesh, photorealism, mockup, text
--ar 1:1 --style raw --stylize 150
```

Después de elegir la mejor: **vectorizar** (Illustrator "Image Trace", o pedir el SVG a la misma IA)
y reconstruir a mano la línea del ecuador para que quede perfectamente recta.

---

## 4. Midjourney / Firefly — Mockups de producto y merch

**Adjuntar:** captura del dashboard (o `ads/hero-landing.html` renderizado).

```
Product mockup set for "VOYAGO", Ecuadorian ERP software brand.
Clean studio photography style, soft natural light, minimal light-gray backdrop #fafafa.

Shot 1: laptop on desk showing an ERP dashboard, sidebar and invoice table visible, slight angle.
Shot 2: polo shirt (dark navy #18181b) with small embroidered logo on left chest, flat lay fabric texture.
Shot 3: die-cut vinyl sticker of the logo, held between fingers, matte finish.
Shot 4: white ceramic mug with the logo, minimal desk scene, small notebook nearby.

Mood: honest, uncluttered, professional Latin American office. No smiling stock models.
Brand colors present but restrained: blue #2563eb, orange accent #f97316.
--no busy background, fake screenshots with gibberish text, hands with 6 fingers, watermark
--ar 4:3 --style raw
```

---

## 5. Canva AI / Firefly — Banners y social ads

```
Design 6 ad variations for VOYAGO, Ecuadorian ERP SaaS.

Brand: primary blue #2563eb, success green #16a34a, accent orange #f97316,
ink #18181b, page background #fafafa. Fonts: Space Grotesk for headlines, IBM Plex Sans for body.

Sizes and hooks:
1. 1200x628 (LinkedIn) — headline "El ERP que habla ecuatoriano" / sub "Facturación electrónica autorizada por el SRI"
2. 1080x1080 (Instagram) — headline "Factura en 3 segundos" / sub "Validación de RUC en vivo"
3. 1600x900 (X) — headline "Tu contador lo va a entender" / sub "Contabilidad automática desde la factura"
4. 300x250 — headline "Prueba 14 días gratis"
5. 728x90 — horizontal, headline "Facturación electrónica + Inventario + Contabilidad"
6. 160x600 — vertical, headline "ERP ecuatoriano"

Rules: one idea per ad, headline max 6 words, no stock photos of business people,
use the equator-line motif from the logo as graphic element, logo bottom-right with clear space,
leave 10% safe margin. Copy in Spanish (Ecuador), correct accents.
```

---

## 6. Figma AI / Galileo — Sistema de diseño en Figma

**Adjuntar:** `tokens/*.json`

```
Build the VOYAGO design system in Figma from these design tokens.

Create:
- Color styles: primary 50-950, secondary 50-950, accent 50-950, neutral 0-950,
  semantic (success/warning/error/info x bg/text/border), and a Dark collection.
- Text styles: display-2xl/xl/lg/md, heading-xl/lg/md/sm, body-xl/lg/md/sm/xs, code-sm/md.
- Effect styles: elev-1 to elev-5, focus rings.
- Components with variants: Button (primary/secondary/ghost/outline/danger x sm/md/lg x default/hover/focus/disabled/loading),
  Input (default/hover/focus/error/disabled), Badge (7 colors x sm/md), Table, Modal, Toast, Sidebar, Navbar, Avatar, Tooltip, DropdownMenu.
- Auto-layout everywhere, spacing on a 4px grid.
- Two modes: Light and Dark, wired to variables.

Naming convention: `component/variant/property=value`. Keep it clean and navigable.
```

---

## 7. Cursor / Claude Code / Codex — Implementar en el repo

```
Repo: next.js 14 + tailwind. Ya existe brand/ con tokens/, components/, icons/, ads/.

Tareas, en este orden:
1. Merge brand/tokens/*.json → tailwind.config.ts (colors, fontSize, spacing, boxShadow, borderRadius, zIndex, screens).
2. Crear brand/tokens/tokens.css con las CSS variables de light y dark (:root y .dark).
3. Importar tokens.css en app/globals.css y cargar las 3 fuentes con next/font/google (Space Grotesk, IBM Plex Sans, IBM Plex Mono).
4. Copiar brand/components/*.tsx → src/components/ui/ y arreglar imports (cn desde @/lib/utils).
5. Instalar: class-variance-authority @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-toast
   @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-avatar lucide-react
6. Copiar brand/icons/*.svg → public/icons/ y convertir index.ts a componentes React tipados.
7. Reemplazar los componentes existentes de la app por los nuevos, pantalla por pantalla: dashboard,
   facturación, inventario. No cambiar lógica de negocio, solo la capa visual.
8. Verificar: `npm run build` sin errores de tipos, y dark mode funcionando en las 3 pantallas.

No modifiques los HEX ni la escala tipográfica. Si algo del diseño no encaja con el layout real,
para y repórtalo en vez de improvisar.
```

---

## Checklist antes de dar por buena cualquier entrega de IA

- [ ] Logo legible a 32px
- [ ] Ningún HEX fuera de la paleta definida
- [ ] Contraste de texto ≥ 4.5:1 (verificar en el inspector)
- [ ] Dark mode probado, no solo invertir colores
- [ ] Acentos y ñ correctos en el copy español
- [ ] Montos en monoespaciado y alineados a la derecha
- [ ] Sin stock photos de gente de negocios
- [ ] Iconos a 24×24 con trazo uniforme
- [ ] Nombres de archivo según convención
