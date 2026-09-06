# Handoff: Web corporativa OPENvarez Techlab

## Overview
Sitio corporativo de OPENvarez Techlab, empresa de software SaaS para sectores regulados
(construcción / licitación pública y ferroviario). Tres vistas en una sola SPA:

1. **Home** — propuesta de valor, cifras, rejilla de soluciones, "por qué nosotros", logos de cliente, CTA.
2. **Open2Licita** — página de producto (licitaciones de obra pública sobre open data + IA).
3. **RiskRail402** — página de producto (análisis de riesgo ferroviario, Reglamento (UE) 402/2013).

Header sticky y footer compartidos por las tres vistas. Referencia de estilo dada por el cliente: goalsystems.com.

## About the Design Files
Los archivos de este paquete son **referencias de diseño hechas en HTML** — prototipos que muestran
el aspecto y el comportamiento deseados, no código de producción para copiar tal cual.
La tarea es **recrear estos diseños en el entorno del codebase de destino** (React, Next, Vue, etc.)
usando sus patrones y librerías establecidos. Si todavía no hay codebase, la recomendación es
**Next.js (App Router) + TypeScript**, con las tres vistas como rutas reales (`/`, `/open2licita`,
`/riskrail402`) en lugar de la conmutación por estado que usa el prototipo — es un sitio corporativo
y necesita URLs indexables, metadatos por página y SSR.

El prototipo usa un runtime propio del entorno de diseño (`support.js`, etiquetas `<sc-if>`,
`renderVals()`). **Nada de eso debe portarse.** Es un detalle del entorno de prototipado;
lee el HTML como si fuera markup + estilos inline.

## Fidelity
**High-fidelity.** Colores, tipografía, espaciado y estados finales. Recrear la UI de forma fiel
al píxel con las librerías del codebase. Todos los valores exactos están en *Design Tokens*.

## Screens / Views

### Chrome compartido

**Header (sticky)**
- `position:sticky; top:0; z-index:60`, fondo `rgba(6,11,9,0.78)` + `backdrop-filter:blur(14px)`,
  borde inferior `1px solid #16221D`.
- Contenedor: `max-width:1240px; margin:0 auto; padding:12px 24px; min-height:76px`,
  `display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px 28px`.
- **Marca (izquierda)**: flex, `gap:12px`, cursor pointer → navega a Home.
  - Icono: `media/openvarez-mark.png`, 44×44, `object-fit:contain`, `mix-blend-mode:screen`, `border-radius:6px`.
  - Logotipo tipográfico, columna con `gap:3px`:
    - `OPEN` (#EAF6F1) + `varez` (#3EE89A) — JetBrains Mono 700, 16px, `letter-spacing:-0.01em`, `line-height:1`.
    - `TECHLAB` — JetBrains Mono, 8.5px, `letter-spacing:0.42em`, #6C8A80, `line-height:1`.
- **Nav (derecha)**: flex, `flex-wrap:wrap`, `gap:4px`.
  - Enlaces "Open2Licita", "RiskRail402", "Nosotros": `padding:9px 14px`, `border-radius:8px`,
    15px/500, color #A9C0B8. Hover: fondo #111C18, color #EAF6F1.
  - CTA "Solicita una demo": `margin-left:10px`, `padding:11px 20px`, `border-radius:8px`,
    fondo #3EE89A, texto #04120C, 15px/700. Hover: fondo #7DF3BE.
- "Nosotros" no es un ancla simple: si no estás en Home, navega a Home y **luego** hace scroll
  suave a `#nosotros` con un offset de 92px (compensa el header sticky).

**Footer** (`id="contacto"`)
- Borde superior `1px solid #16221D`, fondo #080E0C.
- Rejilla: `max-width:1240px`, `padding:84px 24px 40px`,
  `grid-template-columns:repeat(auto-fit,minmax(210px,1fr))`, `gap:48px`. Cuatro columnas:
  1. Marca (icono 40×40 + logotipo, mismo patrón que el header) + `Plataformas SaaS para sectores de infraestructura y construcción.` (15px/1.6, #6C8A80, `max-width:30ch`).
  2. **Productos** → Open2Licita, RiskRail402.
  3. **Contacto** → `hola@openvarez.com`, `+34 000 00 00 00`, `A Coruña, España`.
  4. **Legal** → Aviso legal, Política de privacidad, Política de cookies.
- Cabeceras de columna: JetBrains Mono, 10.5px, `letter-spacing:0.16em`, mayúsculas, #4E6A61.
- Enlaces: 15.5px, #C6DAD3, hover #3EE89A. Listas en `flex-direction:column; gap:13px`.
- Barra inferior: borde superior `1px solid #131E1A`, `padding:24px`, flex con `justify-content:space-between`,
  JetBrains Mono 11px #4E6A61 — `© 2026 · OPENvarez Techlab, S.L. · CIF B00000000` y
  `Inscrita en el Registro Mercantil de A Coruña`.

### 1. Home

**Hero** — `border-bottom:1px solid #16221D`, `position:relative; overflow:hidden`.
- Arte decorativo: `media/openvarez-mesh.png` en absoluto, `top:-8%; right:-14%`,
  `width:min(1180px,105%)`, `mix-blend-mode:screen`, `opacity:0.72`, `filter:saturate(1.15)`,
  `pointer-events:none`, y **doble máscara intersecada** (ver *Assets*).
- Velo de legibilidad encima: `position:absolute; inset:0`,
  `radial-gradient(120% 90% at 12% 40%, #060B09 42%, rgba(6,11,9,0.55) 68%, rgba(6,11,9,0) 100%)`.
- Contenido: `max-width:1240px`, `padding:clamp(96px,12vw,170px) 24px clamp(80px,9vw,120px)`.
  - Badge: `inline-flex`, `gap:10px`, `padding:7px 14px 7px 11px`, `border:1px solid #23372F`,
    `border-radius:100px`, fondo `rgba(12,20,17,0.7)`. Punto de 6px #3EE89A con
    `box-shadow:0 0 10px #3EE89A` y animación `ovPulse` (opacidad .55→1→.55, 2.6s, `ease-in-out`, infinita).
    Texto: JetBrains Mono 11px, `letter-spacing:0.16em`, mayúsculas, #8CA39B —
    `Software para sectores regulados`.
  - H1: `margin-top:34px`, `clamp(40px,6.4vw,86px)`, `line-height:1.0`, `letter-spacing:-0.04em`,
    700, #F1FAF6, `max-width:19ch` — `Digitalizamos los procesos críticos de la infraestructura`.
  - Subtítulo: `margin-top:34px`, 20px/1.55, #9DB5AC, `max-width:58ch` —
    `Plataformas SaaS verticales que combinan datos abiertos, inteligencia artificial y cumplimiento normativo para los sectores de construcción y ferroviario.`
  - Botones (`margin-top:46px`, flex, `gap:12px`, `flex-wrap:wrap`): primario `Ver soluciones` → `#soluciones`;
    secundario `Solicita una demo` → `#contacto` (fondo `rgba(12,20,17,0.6)`, `border:1px solid #2A3E36`,
    color #EAF6F1; hover borde y texto #3EE89A). Ambos `padding:15px 28px`, `border-radius:10px`, 15.5px.

**Banda de cifras** — fondo #080E0C, borde inferior #16221D.
`grid-template-columns:repeat(auto-fit,minmax(200px,1fr))`; separadores `border-right:1px solid #16221D`
(la última celda sin él); primera celda `padding:42px 32px 42px 0`, intermedias `42px 32px`, última `42px 0 42px 32px`.
Valor: 38px/700, `letter-spacing:-0.035em`, #F1FAF6. Etiqueta: `margin-top:10px`, JetBrains Mono 11px,
`letter-spacing:0.14em`, mayúsculas, #6C8A80.

| Valor | Etiqueta |
|---|---|
| 2 | Sectores regulados |
| +1.600 | Expedientes analizados |
| +780 M€ | En adjudicaciones seguidas |
| 402/2013 | Reglamento (UE) cubierto |

> ⚠️ Estas cifras salieron de un tenant de demo del propio producto. **Pendientes de validar por el cliente antes de publicar.**

**Soluciones** (`id="soluciones"`) — `padding:clamp(80px,9vw,120px) 24px 0`.
- Cabecera: flex `justify-content:space-between`, `align-items:baseline`, `gap:28px`, `flex-wrap:wrap`, `margin-bottom:52px`.
  H2 `clamp(30px,3.6vw,48px)`, `line-height:1.06`, `letter-spacing:-0.035em`, 700, #F1FAF6 — `Nuestras soluciones`.
  Párrafo `max-width:42ch`, 16.5px/1.6, #8CA39B — `Dos plataformas verticales, cada una construida sobre la normativa y los datos de su sector.`
- Rejilla: `repeat(auto-fit,minmax(340px,1fr))`, `gap:24px`. Dos tarjetas, ambas clicables (navegan al producto):
  - Contenedor: fondo #0C1411, `border:1px solid #1B2A25`, `border-radius:16px`, `overflow:hidden`,
    `transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease`.
    Hover: `transform:translateY(-4px)`, `border-color:#3EE89A`, `box-shadow:0 24px 60px -30px rgba(62,232,154,0.35)`.
  - Imagen: contenedor `height:220px; overflow:hidden`, fondo #060B09, `border-bottom:1px solid #1B2A25`;
    `<img>` `width:100%`, `opacity:0.92` (recorte por arriba, la imagen desborda).
    Open2Licita → `media/o2l-panel.png`. RiskRail402 → `media/rr-dashboard.png`.
  - Cuerpo `padding:34px`: kicker (JetBrains Mono 11px, `letter-spacing:0.16em`, mayúsculas, #3EE89A),
    H3 (`margin-top:18px`, 32px, `letter-spacing:-0.03em`, 700, #F1FAF6),
    párrafo (`margin-top:14px`, 16.5px/1.6, #9DB5AC),
    enlace falso `Ver más →` (`margin-top:28px`, 15px/700, #3EE89A, flecha en JetBrains Mono).
  - Kickers: `Construcción · licitación pública` / `Ferroviario · gestión del riesgo`.

**Por qué nosotros** (`id="nosotros"`) — H2 igual que arriba.
Rejilla `margin-top:56px`, `repeat(auto-fit,minmax(280px,1fr))`, **`gap:1px` con fondo #16221D** para
simular separadores de 1px; `border:1px solid #1B2A25`, `border-radius:16px`, `overflow:hidden`.
Cada celda: fondo #0C1411, `padding:44px 34px`; número (JetBrains Mono 12px, #3EE89A, `letter-spacing:0.1em`),
H3 (`margin-top:24px`, 22px, `letter-spacing:-0.02em`, 700, #F1FAF6), párrafo (16px/1.62, #8CA39B).
Contenido: 01 Especialización sectorial · 02 IA aplicada, no decorativa · 03 Cumplimiento normativo.

**Logos de cliente** — rótulo centrado (JetBrains Mono 11px, `letter-spacing:0.16em`, mayúsculas, #6C8A80)
`Confían en nosotros`; rejilla `margin-top:34px`, `repeat(auto-fit,minmax(160px,1fr))`, `gap:16px`,
cinco cajas de `height:80px`, `border:1px dashed #23372F`, `border-radius:10px`, texto centrado
`logo cliente` (JetBrains Mono 10px, #4E6A61).
> ⚠️ **Placeholders.** Sustituir por SVG reales o eliminar la sección si no hay logos autorizados.

**Bloque CTA** (se repite al final de las tres vistas) — `padding:clamp(80px,9vw,120px) 24px clamp(96px,10vw,140px)`.
Tarjeta `position:relative; overflow:hidden`, `border:1px solid #1B2A25`, fondo #0C1411,
`border-radius:20px`, `padding:clamp(40px,5vw,76px)`, flex `flex-wrap:wrap`,
`align-items:flex-end`, `justify-content:space-between`, `gap:32px`.
Contiene el mismo `openvarez-mesh.png` en absoluto (`top:-28%; right:-6%`, `width:min(720px,80%)`,
`mix-blend-mode:screen`, `opacity:0.4`, misma máscara doble). Texto y botón llevan `position:relative`
para quedar por encima. Botón: fondo #3EE89A, texto #04120C, `padding:16px 30px`, `border-radius:10px`,
16px/700, `white-space:nowrap`; hover #7DF3BE.
En Home: H2 `¿Hablamos de tu proceso?` (`clamp(28px,3.4vw,46px)`, `max-width:22ch`) + párrafo
`Te enseñamos la plataforma con datos de tu sector y valoramos juntos el encaje.` (17px/1.6, #9DB5AC, `max-width:48ch`).

### 2. Open2Licita

- **Hero de producto** — `padding:clamp(72px,8vw,104px) 24px 0`.
  - Migas de pan clicables `← Soluciones` → Home (JetBrains Mono 11px, `letter-spacing:0.14em`,
    mayúsculas, #6C8A80, hover #3EE89A, `margin-bottom:44px`).
  - Kicker `Construcción · licitación pública` (JetBrains Mono 11.5px, `letter-spacing:0.18em`, #3EE89A).
  - H1 `margin-top:30px`, `clamp(44px,7vw,98px)`, `line-height:0.96`, `letter-spacing:-0.045em`, 700, #F1FAF6.
  - Bloque problema/solución: `margin-top:56px`, `padding-top:44px`, `border-top:1px solid #1B2A25`,
    `repeat(auto-fit,minmax(320px,1fr))`, `gap:32px 48px`.
    - `El problema` (kicker #4E6A61) — `Encontrar y analizar licitaciones de construcción es lento, manual y disperso en múltiples boletines.` (21px/1.5, #8CA39B, `letter-spacing:-0.01em`).
    - `La solución` (kicker #3EE89A) — `Una plataforma que agrega, analiza y alerta automáticamente. Todo el mercado de obra pública en un solo panel.` (21px/1.5, **#F1FAF6, 500**).
  - Botón primario `Solicita una demo` (`margin-top:46px`).
- **Mockup principal** — contenedor `max-width:1340px`, `padding:clamp(56px,7vw,88px) 24px 0`.
  Marco de ventana: `border:1px solid #1B2A25`, `border-radius:16px`, `overflow:hidden`, fondo #0C1411,
  `box-shadow:0 50px 100px -60px rgba(62,232,154,0.4)`. Barra de título: `height:42px`,
  `border-bottom:1px solid #16221D`, fondo #0A110E, `padding:0 16px`, flex `gap:7px`,
  tres círculos de 10px en #1F2E29. Imagen: `media/o2l-mapa.png`, `width:100%; display:block`.
- **Cómo funciona** — H2 `margin-bottom:56px`, `clamp(28px,3.2vw,42px)`, `letter-spacing:-0.035em`, 700.
  Tres filas `repeat(auto-fit,minmax(320px,1fr))`, `gap:24px 48px`, `align-items:start`,
  separadas por `border-bottom:1px solid #1B2A25` (la última sin borde), `padding:56px 0`.
  Columna izquierda: número (JetBrains Mono 12px #3EE89A, `margin-bottom:20px`) + H3
  (26px/1.2, `letter-spacing:-0.028em`, 700, #F1FAF6). Derecha: párrafo 18px/1.62, #8CA39B.
  01 Cobertura integral vía Open Data · 02 IA para análisis de licitaciones y adjudicaciones ·
  03 Alertas e informes generados automáticamente.
- **Segundo mockup** — `max-width:1340px`, sin barra de título, `media/o2l-licitaciones.png`,
  pie de foto `margin-top:16px`, JetBrains Mono 11px, `letter-spacing:0.1em`, #4E6A61 —
  `Listado de licitaciones activas con filtros por organismo, provincia, categoría y fuente.`
- **Para quién** — `repeat(auto-fit,minmax(300px,1fr))`, `gap:32px 48px`, `align-items:start`:
  H2 a la izquierda, chips a la derecha (flex `flex-wrap:wrap`, `gap:10px`).
  Chip: `padding:11px 19px`, `border:1px solid #23372F`, `border-radius:100px`, 15.5px/500,
  fondo #0C1411, color #C6DAD3. Constructoras · Estudios de arquitectura · Contratistas ·
  Consultoras de licitaciones.
- **CTA** — kicker `Open2Licita` + H2 `Vemos tu sector contigo, con datos reales` (`max-width:24ch`).

### 3. RiskRail402

Misma estructura que Open2Licita, con:
- Kicker `Ferroviario · gestión del riesgo`; H1 `RiskRail402`.
- Problema: `El análisis de riesgo ante cambios ferroviarios según el Reglamento (UE) 402/2013 se gestiona hoy con Excel y Word, sin trazabilidad.`
  Solución: `Una plataforma digital guiada que blinda todo el proceso, de la evaluación preliminar a la declaración de conformidad.`
- Mockup principal: marco de ventana + `media/rr-dashboard.png`, pie de foto
  `Dashboard de control: análisis por estado, peligros por nivel de riesgo y seguimiento de medidas.`
- Cómo funciona: 01 Proceso guiado en 7 fases, sin Excel ni Word · 02 IA que redacta el primer
  borrador del análisis · 03 Trazabilidad y firma electrónica de principio a fin.
- **Bloque de cumplimiento normativo** (exclusivo de esta vista): tarjeta `border:1px solid #1B2A25`,
  fondo **#0A110E**, `border-radius:20px`, `padding:clamp(40px,5vw,76px)`.
  Kicker `Cumplimiento normativo` (#3EE89A, `letter-spacing:0.18em`); H2 `margin-top:26px`,
  `clamp(26px,3vw,40px)`, `line-height:1.12`, `max-width:30ch` —
  `Construido sobre el Reglamento de Ejecución (UE) n.º 402/2013`; párrafo `margin-top:24px`,
  17.5px/1.62, #8CA39B, `max-width:62ch`.
  Debajo (`margin-top:46px`) rejilla de 4 fases, mismo truco de `gap:1px` sobre #16221D,
  `border:1px solid #1B2A25`, `border-radius:12px`, celdas fondo #0C1411 `padding:30px 26px`:
  título 15.5px/600 #F1FAF6 + descripción `margin-top:10px` 14px/1.5 #6C8A80.
  Evaluación preliminar / Gestión del riesgo / Evaluación independiente / Declaración de conformidad.
- Para quién: Operadores ferroviarios · Administradores de infraestructura · Gestores de seguridad ·
  Entidades evaluadoras.
- CTA: kicker `RiskRail402` + H2 `Tu próximo expediente 402, sin un solo Excel`.

## Interactions & Behavior

- **Navegación**: el prototipo conmuta entre las tres vistas por estado y hace `window.scrollTo({top:0})`
  al cambiar. **En producción: rutas reales** (`/`, `/open2licita`, `/riskrail402`) con
  `<Link>`/`<a>`, scroll restaurado por el router, y `<title>`/`description`/OG por página.
- **Disparadores de navegación**: marca del header y footer → Home; enlaces del header y del footer →
  producto; **tarjeta de solución completa** (no solo "Ver más") → producto; migas `← Soluciones` → Home.
  Al portar, la tarjeta debe ser un `<a>` envolvente (o `<article>` con enlace superpuesto) para
  que sea accesible por teclado y con clic derecho — en el prototipo es un `onClick` sobre un `div`,
  lo cual **no** debe replicarse.
- **"Nosotros"**: si la vista actual es Home hace scroll suave a `#nosotros` con offset de 92px;
  si no, navega a Home y hace el scroll en el siguiente frame.
- **Revelado al hacer scroll**: cada sección marcada con `data-reveal="1"` arranca en
  `opacity:0; transform:translateY(22px)` y pasa a `opacity:1; transform:none` con
  `transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)`.
  Implementado con un `IntersectionObserver` (`rootMargin:"0px 0px -12% 0px"`, `threshold:0.05`)
  que deja de observar cada elemento tras revelarlo. **Detalle importante**: las secciones que ya están
  dentro del 90% inferior del viewport al montar se muestran visibles de inmediato, sin animación
  — así el contenido "above the fold" nunca aparece en blanco. El observer se desconecta al desmontar
  y se vuelve a montar al cambiar de vista.
  Respetar `prefers-reduced-motion` (el prototipo no lo hace; **añadirlo**).
- **Hover**: tarjetas de solución (elevación + borde verde + halo), enlaces del header (fondo),
  botones (verde más claro), enlaces del footer y migas (verde).
- **Sin estados de carga, error ni formularios.** Todos los CTA apuntan a `#contacto` (el footer).
  Si el cliente quiere un formulario de demo real, es trabajo nuevo por definir.
- **Responsive**: todo por `auto-fit`/`minmax` y `clamp()`; no hay media queries.
  Los puntos de reflujo naturales caen en 340px (tarjetas de solución), 320px (rejillas de
  problema/solución y "cómo funciona") y 200-210px (banda de cifras y footer).
  El header envuelve la nav bajo la marca con `flex-wrap` en pantallas estrechas.
  **Verificar a 375px**: el prototipo no se probó en móvil real.

## State Management

Trivial. Una sola variable: `page: "home" | "o2l" | "rr"`.
Al portar a rutas, desaparece — la ruta es el estado. Lo único que sobrevive es el efecto del
`IntersectionObserver`, que debe re-ejecutarse en cada cambio de ruta (`useEffect` con la ruta
como dependencia). Sin data fetching, sin autenticación, sin formularios.

## Design Tokens

**Colores**

| Token | Hex | Uso |
|---|---|---|
| bg | `#060B09` | Fondo del documento y del hero |
| bg-alt | `#080E0C` | Banda de cifras, footer |
| surface | `#0C1411` | Tarjetas, celdas, mockups |
| surface-deep | `#0A110E` | Barra de título del mockup, bloque normativo |
| accent | `#3EE89A` | Acento de marca, CTA, kickers, hover |
| accent-hover | `#7DF3BE` | Hover de botones primarios |
| accent-ink | `#04120C` | Texto sobre acento |
| text | `#F1FAF6` | Titulares |
| text-strong | `#EAF6F1` | "OPEN" del logotipo, hover de nav |
| text-body | `#9DB5AC` | Cuerpo del hero y de tarjetas |
| text-muted | `#8CA39B` | Cuerpo secundario |
| text-chip | `#C6DAD3` | Chips, enlaces del footer |
| text-dim | `#6C8A80` | Etiquetas, TECHLAB |
| text-faint | `#4E6A61` | Kickers tenues, pies de foto, legal |
| border | `#1B2A25` | Bordes de tarjeta |
| border-subtle | `#16221D` | Separadores, borde del header |
| border-faint | `#131E1A` | Barra legal del footer |
| border-chip | `#23372F` | Chips, badge, placeholders |
| border-strong | `#2A3E36` | Botón secundario |
| dot | `#1F2E29` | Círculos del marco de ventana |
| nav-ink | `#A9C0B8` | Enlaces de nav |
| nav-hover-bg | `#111C18` | Fondo de hover de nav |

Rejillas hairline: `gap:1px` sobre fondo `#16221D` en lugar de bordes por celda.

**Tipografía** — Manrope (300-800) para todo el texto; JetBrains Mono (400/500/700) para
kickers, etiquetas, cifras técnicas, pies de foto y el logotipo. Ambas de Google Fonts.

| Rol | Tamaño | Peso | Line-height | Letter-spacing |
|---|---|---|---|---|
| H1 hero | `clamp(40px,6.4vw,86px)` | 700 | 1.0 | -0.04em |
| H1 producto | `clamp(44px,7vw,98px)` | 700 | 0.96 | -0.045em |
| H2 sección | `clamp(30px,3.6vw,48px)` | 700 | 1.06 | -0.035em |
| H2 secundario | `clamp(28px,3.2vw,42px)` | 700 | — | -0.035em |
| H2 CTA | `clamp(28px,3.4vw,46px)` | 700 | 1.06 | -0.035em |
| H3 tarjeta | 32px | 700 | — | -0.03em |
| H3 paso | 26px | 700 | 1.2 | -0.028em |
| H3 celda | 22px | 700 | — | -0.02em |
| Subtítulo hero | 20px | 400 | 1.55 | — |
| Problema/solución | 21px | 400/500 | 1.5 | -0.01em |
| Cuerpo de paso | 18px | 400 | 1.62 | — |
| Cuerpo | 16-16.5px | 400 | 1.6-1.62 | — |
| Cifra | 38px | 700 | — | -0.035em |
| Kicker (mono) | 11-11.5px | 400 | — | 0.16-0.18em, mayúsculas |
| TECHLAB (mono) | 8.5px | 400 | 1 | 0.42em |

Todo el texto lleva `text-wrap: pretty` (heredado del `body`) y `-webkit-font-smoothing: antialiased`.
Anchos de medida por `ch`, no por px: 19ch (H1), 58ch (subtítulo), 62ch (párrafo normativo),
48ch, 42ch, 30ch, 24ch, 22ch.

**Espaciado** — ritmo vertical por `clamp()`: secciones `clamp(80px,9vw,120px)`,
hero `clamp(96px,12vw,170px)`, padding de tarjeta CTA `clamp(40px,5vw,76px)`,
cierre de página `clamp(96px,10vw,140px)`. Gutter horizontal fijo de 24px.
Escala interna: 10 · 12 · 14 · 16 · 18 · 20 · 22 · 24 · 26 · 28 · 32 · 34 · 42 · 44 · 46 · 52 · 56 px.
Contenedores: 1240px (general), 1340px (mockups a sangre), 210-340px (mínimos de rejilla).

**Border radius** — 6px (icono de marca) · 8px (nav, botones del header) · 10px (botones,
placeholders de logo) · 12px (rejilla de fases) · 16px (tarjetas, mockups) · 20px (tarjeta CTA) ·
100px (chips, badge) · 50% (puntos).

**Sombras**
- Hover de tarjeta: `0 24px 60px -30px rgba(62,232,154,0.35)`
- Mockup: `0 50px 100px -60px rgba(62,232,154,0.4)`
- Halo del punto del badge: `0 0 10px #3EE89A`

**Transiciones** — `.25s ease` en hover de tarjeta; `.7s cubic-bezier(.16,1,.3,1)` en el
revelado por scroll; `2.6s ease-in-out infinite` en el pulso del badge.

## Assets

Todos en `media/`. Los tres capturas de producto las aportó el cliente y **se recortaron**
para quitar el cromo del navegador, la URL del tenant y tooltips.

| Archivo | Origen | Notas |
|---|---|---|
| `openvarez-logo.png` | Logo original del cliente, 999×729 | **No usar en la web.** Trae el wordmark rasterizado y fondo negro opaco. Solo archivo de referencia. |
| `openvarez-mesh.png` | Recorte del anterior, 999×437 | Arte decorativo del hero y de los CTA. Solo la malla, sin letras. |
| `openvarez-mark.png` | Recorte del anterior, 512×512 | Icono de marca del header (44px) y del footer (40px). La red completa centrada sobre #05100C. |
| `o2l-mapa.png` | Panel de mando de Open2Licita | Mockup principal de la página de producto. |
| `o2l-panel.png` | Panel de Open2Licita | Imagen de la tarjeta en Home. |
| `o2l-licitaciones.png` | Listado de licitaciones activas | Segundo mockup de la página de producto. |
| `rr-dashboard.png` | Dashboard de RiskRail402 | Mockup principal + tarjeta en Home. |

**Técnica de composición del logo — importante.** El PNG de marca no tiene canal alfa: su fondo es
negro verdoso opaco. Se integra sobre el lienzo oscuro con `mix-blend-mode:screen`, que anula los
píxeles negros. Además, el recorte cortaba la fila inferior de nodos y dejaba una arista recta
visible, así que los usos decorativos llevan una **máscara doble intersecada** que lleva el alfa a
cero **dentro** de la caja:

```css
mask-image:
  radial-gradient(70% 52% at 66% 30%, #000 25%, rgba(0,0,0,0) 92%),
  linear-gradient(to bottom, #000 40%, rgba(0,0,0,0) 82%);
mask-composite: intersect;
-webkit-mask-composite: source-in;
```

Si se rehace el arte, **lo correcto es pedir el logo en SVG o en PNG con transparencia** y
retirar tanto el `mix-blend-mode` como las máscaras. Todo esto es una solución de compromiso
sobre un rasterizado.

**Pendientes de material real** (hoy placeholders o supuestos):
- Cinco logos de cliente en la banda "Confían en nosotros" — cajas de línea discontinua.
- `hola@openvarez.com` y `+34 000 00 00 00` — **inventados**.
- `OPENvarez Techlab, S.L.`, `CIF B00000000` y el registro mercantil — placeholders.
- Aviso legal, privacidad y cookies apuntan a `#contacto`; necesitan páginas reales
  (y un banner de cookies, obligatorio en la UE).
- Cifras de la banda de estadísticas — sin validar.

## Files

| Archivo | Contenido |
|---|---|
| `Open Corporate - Web v2.dc.html` | **Diseño de referencia.** Las tres vistas, tema oscuro de marca. Esta es la versión a implementar. |
| `Open Corporate - Web.dc.html` | Primera iteración, tema claro con acento teal #155E5A. Solo contexto histórico; **no implementar**. |
| `media/` | Todos los assets de la tabla anterior. |

Cómo leer los `.dc.html`: el markup vive entre `<x-dc>` y `</x-dc>`; la lógica es la clase
`Component` del `<script>` final. `<sc-if value="{{ isHome }}">` es el condicional de vista
(`isHome`/`isO2L`/`isRR` salen de `renderVals()`), y `{{ goO2L }}` etc. son los handlers de
navegación. Los estilos son **todos inline**, con atributos `style-hover` para los estados de hover
— una convención del entorno de prototipado que en producción debe convertirse en `:hover` de CSS,
CSS Modules, Tailwind o lo que use el codebase.
