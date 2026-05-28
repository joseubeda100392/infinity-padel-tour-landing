# Infinity Padel Tour BY LOK — Landing Page

## Descripción
Landing page teaser de preventa para INFINITY PADEL TOUR BY LOK.
Captación de leads (nombre, email, club, teléfono) con incentivo 10% descuento.
Leads almacenados en Google Sheets vía service account.

Stack: Next.js 14 App Router + Tailwind CSS + Framer Motion + GSAP + TypeScript.

## Estructura
```
apps/landing/               ← proyecto Next.js standalone (puerto 3002)
  app/                      ← App Router
  components/
    layout/                 ← footer
    sections/               ← hero, teaser, register-form
    shared/                 ← logos SVG, scroll-fx, reveal-on-scroll
  content/landing.ts        ← toda la copy en español
  lib/                      ← utils, constants
```

## Comandos
```bash
cd apps/landing
npm install
npm run dev        # http://localhost:3002
npm run build
npx tsc --noEmit
```

## Variables de Entorno (.env.local)
```
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
RESEND_API_KEY=
NOTIFICATION_EMAIL=
```

## Paleta de Marca
- brand-500: #F5501E (naranja LOK)
- bg-deep: #05080F (fondo principal)
- bg-mid: #0D1117 (secciones alternadas)

## Estrategia de Modelos
| Agente | Modelo | Cuándo |
|---|---|---|
| Explore | Haiku | Búsquedas, grep, lectura |
| general-purpose | Sonnet | Código, componentes, API routes |
| Plan | Opus | Arquitectura crítica |

## Estilo de Comunicación
Respuestas cortas y directas. Sin introducciones ni resúmenes. Código sin comentarios obvios.
