# VOYAGO — Guía de Marca v1.0

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
