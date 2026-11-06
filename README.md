# VOYAGO — Brand System v1.0

Sistema de marca funcional de **VOYAGO**, ERP SaaS ecuatoriano (Django + DRF + PostgreSQL + Next.js).

Está hecho para que **cualquier IA o desarrollador** pueda trabajar sin adivinar nada:
los valores están en archivos, no en la cabeza de nadie.

---

## Empezar por aquí

| Si eres… | Abre esto primero |
|---|---|
| **Una IA** (ChatGPT, Claude, v0, Cursor, Midjourney) | [`AI-BRIEF.md`](./AI-BRIEF.md) — contexto + tokens inline + reglas |
| **Diseñador** | [`guidelines.md`](./guidelines.md) y [`showcase.html`](./showcase.html) |
| **Desarrollador** | [`tailwind.config.ts`](./tailwind.config.ts) y [`tokens/tokens.css`](./tokens/tokens.css) |
| **Buscas el prompt exacto para una herramienta** | [`HANDOFF-PROMPTS.md`](./HANDOFF-PROMPTS.md) |

---

## Estructura

```
brand/
├── AI-BRIEF.md             ← brief autocontenido para cualquier IA
├── HANDOFF-PROMPTS.md      ← prompts por herramienta (v0, Figma AI, Midjourney, Claude…)
├── guidelines.md           ← guía de marca completa (texto, exportable a PDF)
├── showcase.html           ← demo visual de todo el sistema (abrir en navegador)
├── tailwind.config.ts      ← config lista para pegar en el repo
├── tokens/
│   ├── colors.json         paleta + semánticos + dark mode + contrastes
│   ├── typography.json     3 familias + escala fluida clamp()
│   ├── spacing.json        escala 4px + fluid
│   ├── shadows.json        elev-1 … elev-5
│   ├── border-radius.json
│   ├── z-index.json
│   ├── breakpoints.json
│   └── tokens.css          variables CSS listas (light + dark)
├── logo/
│   ├── logo-mark.svg       ← marca principal (transparente)
│   ├── logo-app-icon.svg   ← icono de app / favicon grande
│   ├── logo-master.svg     variante con disco cielo/tierra
│   ├── logo-concept-1-equator.svg   (descartada, demasiado cargada)
│   ├── logo-concept-2-data-flow.svg (alternativa)
│   └── logo-concept-3-typographic.svg (wordmark, pendiente de delinear texto)
├── icons/                  14 iconos propios 24×24 + index.ts
├── components/             11 componentes React (Tailwind + Radix)
├── ads/hero-landing.html   landing completa responsive
└── preview/                PNG de referencia generados desde los SVG
```

---

## La marca en 30 segundos

- **Símbolo:** sol naranja sobre una línea horizontal — la línea ecuatorial. Funciona sin contenedor y dentro de un icono azul.
- **Colores:** azul `#2563eb`, verde `#16a34a`, naranja `#f97316` (solo en el símbolo, un CTA por pantalla y alertas).
- **Tipografía:** Space Grotesk (titulares), IBM Plex Sans (interfaz), IBM Plex Mono (RUC, comprobantes, montos).
- **Regla de oro:** montos y números de comprobante siempre en monoespaciado, alineados a la derecha.

---

## Está publicado aquí (público, sin login)

| Qué | URL |
|---|---|
| **Showcase visual** (todo el sistema en una página) | https://files.catbox.moe/su2mnl.html |
| **AI PACK** — brief + prompts + guía en un solo texto | https://files.catbox.moe/d9831t.txt |
| **Dashboard mockup** (navegable) | https://files.catbox.moe/z18tor.html |
| **Guía de marca PDF** | https://files.catbox.moe/uyxqsw.pdf |
| **Dashboard render** (PNG 1440px) | https://files.catbox.moe/qfse7f.png |
| **Paquete completo** (zip, 45 archivos) | https://files.catbox.moe/v4t45e.zip |

Pasa la URL del **AI PACK** a cualquier IA que no pueda leer archivos: es texto plano, 25 KB, con todos los HEX y reglas dentro.


---

## Cómo publicarlo en GitHub (recomendado a mediano plazo)

```bash
cd brand
git init
git add .
git commit -m "VOYAGO brand system v1.0"
gh repo create voyago-brand --public --source=. --push   # requiere gh CLI autenticado
```

Después de subir, activa **GitHub Pages** (Settings → Pages → branch `main` → `/root`)
y `showcase.html` queda visible como página web. Cualquier IA con acceso a internet
puede leer los archivos desde:

```
https://raw.githubusercontent.com/<usuario>/voyago-brand/main/AI-BRIEF.md
```

o vía CDN (más rápido y con CORS abierto):

```
https://cdn.jsdelivr.net/gh/<usuario>/voyago-brand@main/AI-BRIEF.md
```

---

## Estado real de cada pieza

| Pieza | Estado | Nota |
|---|---|---|
| Tokens | ✅ Producción | Valores definitivos, contraste verificado |
| Componentes React | ✅ Producción | Dependen de `@/lib/utils` (`cn`) y Radix instalado |
| Iconos | ✅ Producción | 24×24, trazo 2px |
| Landing HTML | ✅ Producción | Usa CDN de Tailwind, sirve de referencia |
| `logo-mark.svg` | 🟡 Base | Correcto y legible a 32px; un diseñador debe afinar proporciones ópticas |
| `logo-app-icon.svg` | 🟡 Base | Centrado óptico corregido; revisar en iOS/Android real |
| Wordmark | 🟠 Pendiente | Es texto con `font-family`; **hay que delinear** antes de usar en imprenta |
| Merch | ⛔ No existe | Requiere IA de imagen (prompt en `HANDOFF-PROMPTS.md`) |
| Guidelines PDF | 🟡 Texto listo | `guidelines.md` → pandoc/Canva → PDF |

---

*VOYAGO Brand System v1.0 · hecho en Quito.*
