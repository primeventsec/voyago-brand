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
