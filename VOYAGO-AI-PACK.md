# AI-BRIEF.md — VOYAGO Brand System

> **Este es el archivo que debes darle a cualquier IA (ChatGPT, Claude, Gemini, v0, Figma AI, Cursor...).**
> Está escrito para que un modelo que **no puede leer los demás archivos** igual pueda trabajar bien,
> porque lleva los valores clave inline. Si la IA sí puede leer el repo, los archivos reales mandan sobre este resumen.

---

## 0. Qué es esta carpeta

Sistema de marca **funcional** de VOYAGO: tokens de diseño (JSON), logotipos (SVG), set de iconos (SVG),
componentes React listos (TSX + Tailwind + Radix) y una landing en HTML.

Fue generado por código, no por un diseñador. **Es una base correcta, no un diseño final.**
El trabajo de la IA visual es refinar lo estético; **no es reescribir los tokens**.

---

## 1. El producto

**VOYAGO** es un ERP SaaS multiempresa ecuatoriano.

| Campo | Valor |
|---|---|
| Stack | Django + DRF + PostgreSQL + Next.js 14 + Tailwind + Docker |
| Módulos | Facturación electrónica (SRI), Inventario, Contabilidad, CRM, RRHH, Reportes/BI |
| Mercado | Ecuador — pymes de 1 a 50 usuarios |
| Usuarios reales | Contadores, administradores, dueños de negocio |
| Diferenciador real | Validación de RUC en vivo contra el SRI y emisión de comprobantes autorizados |
| Precio | Suscripción mensual por usuario (plan Profesional ~30 usuarios) |

**Posicionamiento:** *"El ERP que habla ecuatoriano"* — nativo en normativa local, simple para el contador, potente para el dueño.

**Valores:** confianza técnica, claridad, velocidad, cercanía.
**Personalidad:** profesional pero accesible. NO corporativo rígido. NO startup genérica.

---

## 2. Tokens bloqueados (no inventar otros)

### Paleta principal — "Ecuador Horizon"

| Rol | HEX | Uso |
|---|---|---|
| Primary 600 | `#2563eb` | Botones primarios, links, foco |
| Primary 700 | `#1d4ed8` | Hover de primario |
| Primary 800 | `#1e40af` | Texto de marca sobre claro |
| Secondary 600 | `#16a34a` | Éxito, validación SRI, estados autorizados |
| Secondary 700 | `#15803d` | Hover de éxito |
| Accent 500 | `#f97316` | CTA destacado, alertas, "sol" de marca |
| Accent 600 | `#ea580c` | Hover de acento |
| Neutral 50 | `#fafafa` | Fondo de página |
| Neutral 200 | `#e4e4e7` | Bordes |
| Neutral 600 | `#52525b` | Texto secundario |
| Neutral 900 | `#18181b` | Texto principal |
| Neutral 950 | `#09090b` | Negro de marca (fondos hero) |
| Error | `#dc2626` | Errores |
| Fondo dark | `#18181b` | Superficie de página en dark mode |
| Superficie dark | `#27272a` | Cards en dark mode |

**Acento de marca máximo:** el naranja `#f97316` **solo** en: línea del ecuador del logo, CTA de conversión y alertas. Nunca en texto corrido.

### Tipografía

| Rol | Fuente | Licencia | Variable |
|---|---|---|---|
| Display / titulares | **Space Grotesk** | OFL | `wght 300..700` |
| UI / cuerpo / tablas | **IBM Plex Sans** | OFL | `wght 300..700` |
| Código / RUC / números de comprobante | **IBM Plex Mono** | OFL | `wght 300..700` |

Todas gratis en Google Fonts. **No sustituir por Inter, Roboto ni Montserrat** salvo pedido explícito.

Escala fluida con `clamp()`, ratio 1.25:

```
display-2xl: clamp(2.5rem, 5vw + 1rem, 5rem)      /* hero H1 */
display-xl:  clamp(2rem, 4vw + 0.5rem, 3.5rem)    /* H1 de página */
display-lg:  clamp(1.75rem, 3vw + 0.5rem, 2.5rem) /* H2 */
display-md:  clamp(1.5rem, 2vw + 0.5rem, 2rem)    /* H3 */
body-lg:     clamp(1rem, 0.25vw + 0.875rem, 1.125rem) /* párrafo */
body-sm:     clamp(0.875rem, 0.125vw + 0.8125rem, 0.9375rem) /* apoyo */
```

### Espaciado, radios, sombras

- Escala base **4px**: 0, 1(4px), 2(8), 3(12), 4(16), 5(20), 6(24), 8(32), 10(40), 12(48), 16(64).
- Radios: `4px` botones/inputs · `6px` dropdowns · `8px` cards · `12px` modales · `9999px` pills y avatares.
- Sombras: 5 niveles (`elev-1` a `elev-5`). No inventar sombras difusas de 40px.
- Breakpoints: `sm 640` · `md 768` (el sidebar colapsa aquí) · `lg 1024` · `xl 1280` · `2xl 1536`.
- Sidebar: **280px** expandido, **72px** colapsado. Navbar: **64px** de alto.

### Logo

Concepto elegido: **línea ecuatorial cruzando un horizonte con sol al centro**.
- Círculo contenedor en `#2563eb`, línea en `#f97316` de 4px, sol en `#f97316`.
- La línea del ecuador debe leerse incluso a **32px** (favicon).
- Siempre vectorial. Área de resguardo = altura del sol a cada lado.

---

## 3. Reglas duras

**Hacer:**
- Todo vectorial (SVG). Nada de raster para logo o iconos.
- Tokens semánticos: `bg-primary`, `text-secondary`, `border-default`. Nunca `blue-600` suelto en el código final.
- Dark mode real y probado en cada componente (superficies `#18181b` / `#27272a`).
- Contraste mínimo **WCAG AA**: 4.5:1 en texto, 3:1 en elementos de UI.
- Español de Ecuador en todo el copy: "factura", "comprobante", "RUC", "contribuyente".
- Iconos a 24×24, trazo 2px, `stroke-linecap: round`, esquinas coherentes con el logo.

**No hacer:**
- ❌ Fotos de stock de "gente de negocios sonriendo". Ilustración geométrica propia o captura real del producto.
- ❌ Azul corporativo genérico tipo `#0066FF` o `#003399`.
- ❌ Gradientes morado→rosa o teal→morado (moda 2020).
- ❌ Banderas de Ecuador, cóndores, sombreros, llamas ni clichés andinos.
- ❌ Mascotas ni personajes.
- ❌ Más de una familia tipográfica además de las tres definidas.

---

## 4. Qué tiene que producir la IA visual

| # | Entregable | Formato | Criterio de aceptación |
|---|---|---|---|
| 1 | Logo final refinado | SVG + PNG @1x/@2x/@3x | Legible a 32px; variantes horizontal, stacked, isotipo solo, monocromo blanco y negro |
| 2 | Moodboard de 3 direcciones | Imagen | Una debe ser la elegida (Ecuador Horizon) refinada |
| 3 | Mockups de la app | Imagen | Sidebar 280px, navbar 64px, tabla de facturas con 5+ columnas, badge "Autorizado" verde |
| 4 | Banners display | PNG | 300×250, 728×90, 160×600 |
| 5 | Social ads | PNG | IG 1080×1080, LinkedIn 1200×628, X 1600×900 |
| 6 | Merch | PNG | Polo (logo al pecho), sticker die-cut, taza, cuaderno A5 |
| 7 | Brand guidelines | PDF 2 páginas | Logo + clear space + don'ts · paleta con contrastes · tipografía · componentes · tono de voz |

**Formato de entrega:** todo con fondo transparente cuando aplique, sRGB para web, y nombrar los archivos
`voyago-<tipo>-<variante>-<tamaño>.<ext>` (ej: `voyago-logo-horizontal-white-2048.png`).

---

## 5. Contexto de producto para el copy

- El usuario real abre el sistema a las 8am para facturar. **No lee**: escanea.
- El contador necesita ver números monoespaciados alineados a la derecha.
- El dueño necesita 4 KPIs en la primera pantalla, no 20.
- Frases que funcionan: "Factura autorizada por el SRI en 3 segundos", "Tu contador lo va a entender",
  "Sin instalar nada", "Hecho en Ecuador para empresas ecuatorianas".
- Frases que NO: "revoluciona tu negocio", "sinergia", "transformación digital", "ecosistema 360".

---

## 6. Si eres una IA y te falta un archivo

Pide solo lo que necesites, por nombre, en vez de inventar valores:
`tokens/colors.json`, `tokens/typography.json`, `tokens/spacing.json`, `tokens/shadows.json`,
`tokens/border-radius.json`, `tokens/z-index.json`, `tokens/breakpoints.json`,
`logo/logo-concept-1-equator.svg`, `icons/index.ts`, `components/Button.tsx`, `ads/hero-landing.html`.

**Nunca inventes un HEX, un tamaño de fuente ni un radio que no esté en este documento.**


---

# ANEXO A — Prompts por herramienta

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


---

# ANEXO B — Guía de marca completa

*El ERP que habla ecuatoriano*

---

## 1. Estrategia

**Posicionamiento.** VOYAGO es el ERP que se comporta como si hubiera sido escrito en Ecuador: valida RUC contra el SRI en vivo, emite comprobantes autorizados y trae el plan contable local ya configurado. No hay que adaptarlo; ya está adaptado.

**Audiencia.**
- **Contador** — pasa 6 horas al día dentro del sistema. Necesita densidad, atajos y números que cuadren.
- **Administrador** — controla cobros, stock y personal. Necesita alertas, no reportes.
- **Dueño** — abre la app dos veces al día en el celular. Necesita 4 cifras, no 20.

**Personalidad.** Profesional sin rigidez. Preciso sin frialdad. Local sin folclor.

| Somos | No somos |
|---|---|
| Claros | Simplones |
| Técnicos | Incomprensibles |
| Cercanos | Informales |
| Ecuatorianos | Costumbristas |

---

## 2. Logotipo

El símbolo es una **línea de horizonte cruzada por la línea ecuatorial, con un sol al centro**. La línea horizontal es el corazón de la marca: representa el paralelo cero y, a la vez, la línea de datos que atraviesa todos los módulos.

**Construcción.** Círculo contenedor de 2px, línea ecuatorial de 4px en `#f97316`, disco solar de radio 24/200 en `#f97316`. Grilla base de 200×200.

**Área de resguardo.** Igual a la altura del disco solar a cada lado del logotipo. Nada entra ahí: ni texto, ni bordes, ni otras marcas.

**Tamaños mínimos.**
- Isotipo solo: 24px (favicon 32px ya es cómodo).
- Lockup horizontal completo: 120px de ancho.
- Por debajo de 120px se usa **solo el isotipo**.

**Variantes obligatorias.** Horizontal (isotipo + wordmark), stacked, isotipo solo, monocromo blanco, monocromo negro.

**Usos incorrectos.**
1. Estirar o comprimir el logotipo.
2. Rotarlo o inclinarlo.
3. Cambiar el naranja de la línea por otro color.
4. Ponerlo sobre una foto sin velo de contraste.
5. Añadir sombra, bisel o degradado.
6. Reconstruir el wordmark con otra tipografía que no sea Space Grotesk.

---

## 3. Color

### Paleta de marca

| Rol | HEX | RGB | CMYK aprox. | Dónde |
|---|---|---|---|---|
| Primary 600 | `#2563eb` | 37 99 235 | 84 58 0 8 | Botón primario, link, foco |
| Primary 700 | `#1d4ed8` | 29 78 216 | 87 64 0 15 | Hover del primario |
| Primary 800 | `#1e40af` | 30 64 175 | 90 73 0 31 | Texto de marca sobre claro |
| Secondary 600 | `#16a34a` | 22 163 74 | 87 0 55 36 | Éxito, "Autorizado" |
| Accent 500 | `#f97316` | 249 115 22 | 0 54 91 2 | CTA de conversión, alertas |
| Neutral 900 | `#18181b` | 24 24 27 | 0 0 0 91 | Texto principal |
| Neutral 50 | `#fafafa` | 250 250 250 | 0 0 0 2 | Fondo de página |

### Regla del acento

El naranja `#f97316` se usa **en tres lugares y en ningún otro**:
1. La línea ecuatorial del logotipo.
2. **Un** botón de conversión por pantalla.
3. Alertas de atención (stock bajo, factura por vencer, comprobante en proceso).

Nunca en texto corrido, nunca en bordes decorativos, nunca como fondo de sección completa.

### Contraste (WCAG AA)

| Combinación | Ratio | Veredicto |
|---|---|---|
| `#18181b` sobre `#fafafa` | 16.1:1 | ✅ AAA |
| `#52525b` sobre `#fafafa` | 7.4:1 | ✅ AAA |
| `#ffffff` sobre `#2563eb` | 5.9:1 | ✅ AA |
| `#ffffff` sobre `#16a34a` | 3.1:1 | ⚠️ Solo texto ≥18px bold o elementos de UI |
| `#ffffff` sobre `#f97316` | 3.5:1 | ⚠️ Solo ≥18px bold. Para texto pequeño usar `#7c2d12` sobre `#ffedd5` |
| `#166534` sobre `#dcfce7` | 9.2:1 | ✅ AAA |

---

## 4. Tipografía

| Rol | Familia | Pesos | Dónde |
|---|---|---|---|
| Display | Space Grotesk | 500, 600, 700 | H1–H4, landing, wordmark |
| UI | IBM Plex Sans | 400, 500, 600, 700 | Cuerpo, formularios, tablas |
| Mono | IBM Plex Mono | 400, 500 | RUC, números de comprobante, montos, código |

Las tres son **gratuitas y variables** (Google Fonts, SIL OFL). No sustituir sin decisión explícita.

### Jerarquía

| Token | Tamaño | Peso | Uso |
|---|---|---|---|
| display-2xl | clamp 40→80px | 700 | Hero H1 |
| display-xl | clamp 32→56px | 700 | H1 de página |
| display-lg | clamp 28→40px | 600 | H2 |
| display-md | clamp 24→32px | 600 | H3, título de widget |
| heading-lg | clamp 20→24px | 600 | Título de card |
| body-lg | clamp 16→18px | 400 | Párrafo |
| body-md | clamp 15→16px | 400 | Celda de tabla |
| body-sm | clamp 14→15px | 400 | Texto de apoyo |
| body-xs | clamp 12→13px | 400 | Caption, timestamp |
| code-sm | clamp 13→14px | 400 | Número de comprobante |

Mínimo en móvil: **12px** (solo caption). Cuerpo nunca por debajo de **15px**.

---

## 5. Espaciado y retícula

Escala base **4px**: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64`.

| Breakpoint | Ancho | Qué cambia |
|---|---|---|
| sm | 640px | Una columna usable |
| md | 768px | **El sidebar colapsa a 72px** |
| lg | 1024px | Sidebar completo 280px |
| xl | 1280px | Ancho máximo de contenedor |
| 2xl | 1536px | Contenido centrado, márgenes amplios |

Sidebar 280px / 72px colapsado. Navbar 64px. Padding de contenedor 24px. Separación entre secciones 64px.

---

## 6. Componentes

### Botón

| Variante | Fondo | Texto | Borde |
|---|---|---|---|
| primary | `#2563eb` → hover `#1d4ed8` | `#ffffff` | ninguno |
| secondary | `#f4f4f5` → hover `#e4e4e7` | `#3f3f46` | `#e4e4e7` |
| ghost | transparente → hover `#f4f4f5` | `#3f3f46` | ninguno |
| danger | `#dc2626` → hover `#b91c1c` | `#ffffff` | ninguno |

Alturas: sm 32px · md 40px · lg 48px. Radio 4px. Focus: anillo de 3px al 40% de opacidad. Loading: spinner reemplaza el contenido, ancho se mantiene.

### Input

Alto 40px, radio 4px, borde `#e4e4e7`, fondo blanco. Focus: borde `#3b82f6` + anillo de 3px. Error: borde `#fca5a5` + texto de error en `#991b1b` con icono. Disabled: fondo `#f4f4f5`, opacidad 50%.

### Tabla

Cabecera sobre `#f4f4f5`, texto `#71717a` en mayúsculas 12px. Filas alternas con `#fafafa` al 50%. Celdas 12px/16px de padding. **Montos siempre a la derecha, monoespaciados, tabulares.** Nunca más de 7 columnas visibles sin scroll horizontal propio.

### Badge de estado

| Estado | Fondo | Texto |
|---|---|---|
| Autorizado | `#dcfce7` | `#166534` |
| En proceso | `#ffedd5` | `#7c2d12` |
| Rechazado | `#fef2f2` | `#991b1b` |
| Anulado | `#f4f4f5` | `#52525b` |

Siempre con punto de color a la izquierda. Radio completo (pill).

### Modal

Máximo 560px, radio 12px, sombra `elev-5`, overlay negro al 50% con blur de 4px. Título 24px, acciones alineadas a la derecha, botón primario a la derecha del secundario.

---

## 7. Iconografía

Grilla 24×24, trazo 2px, `stroke-linecap: round`, `stroke-linejoin: round`, esquinas coherentes con el radio de 4px del logo. Estilo outline por defecto; versión fill solo para estados activos de navegación.

Set propio cubre lo que Lucide no tiene bien: factura, RUC, SRI, comprobante, retención, los cinco módulos. El resto (flechas, chevrons, búsqueda) se toma de **Lucide**.

---

## 8. Voz y tono

1. **Concreto antes que adjetivo.** "Factura autorizada en 3 segundos" ≠ "facturación ágil y eficiente".
2. **Segunda persona, sin usted.** "Tu contador", "tu stock", "tus clientes".
3. **Un dato por frase.** El usuario escanea, no lee.
4. **Cero jerga de marketing.** Nada de "sinergia", "ecosistema 360", "transformación digital", "revoluciona".
5. **Números reales.** Si dices "3 segundos", tiene que tardar 3 segundos.

**Sí:** "Validación de RUC en vivo" · "Tu contador lo va a entender" · "Sin instalar nada" · "Hecho en Ecuador para empresas ecuatorianas"
**No:** "Revoluciona tu negocio" · "Solución integral 360" · "Potencia tu sinergia empresarial" · "Llevamos tu empresa al siguiente nivel"

---

## 9. Aplicación

- **Landing:** fondo `#fafafa`, hero con titular en Space Grotesk 700, captura real del dashboard (nunca mockup falso con texto ilegible).
- **Dashboard:** sidebar oscuro solo si toda la app es dark; por defecto sidebar claro `#ffffff` sobre página `#fafafa`.
- **Factura PDF:** encabezado con logo monocromo, RUC en mono, totales alineados a la derecha, sin colores de marca en el cuerpo del documento (impresión).
- **Redes:** un mensaje por pieza, logo abajo a la derecha, 10% de margen seguro.
- **Merch:** logo bordado pequeño al pecho izquierdo; nunca grande al centro.

---

*VOYAGO Brand Guidelines v1.0 — documento vivo. Si un valor no está aquí, no inventarlo: preguntar.*
