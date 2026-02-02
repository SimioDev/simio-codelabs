# Simio CodeLabs - Sitio Web Profesional

Sitio web profesional desarrollado con Astro + React + Tailwind CSS + GSAP para Simio CodeLabs (Nestor Cabrera).

## 🚀 Stack Tecnológico

- **Framework:** Astro 5.17
- **UI Framework:** React 19
- **Estilos:** Tailwind CSS 3.4 + CSS Variables
- **Animaciones:** GSAP 3.14
- **CMS:** Decap CMS (Git-based)
- **i18n:** Sistema bilingüe ES/EN integrado
- **SEO:** astro-seo + Schema.org
- **Componentes UI:** Shadcn/ui + Aceternity UI (custom)

## 📦 Instalación

```bash
# Instalar dependencias (usando pnpm)
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Vista previa del build
pnpm preview
```

## 📁 Estructura del Proyecto

```
src/
├── assets/              # Imágenes, SVGs
├── components/
│   ├── ui/             # Componentes UI base (Button, Card, etc.)
│   ├── sections/       # Secciones de páginas
│   ├── animations/     # Wrappers GSAP
│   └── shared/         # Header, Footer, Nav
├── content/            # Content Collections (Blog + Portfolio)
│   ├── config.ts       # Schemas de contenido
│   ├── blog/
│   │   ├── es/        # Posts en español
│   │   └── en/        # Posts en inglés
│   └── portfolio/
│       ├── es/        # Proyectos en español
│       └── en/        # Proyectos en inglés
├── layouts/
│   └── BaseLayout.astro       # Layout base con SEO
├── locales/            # Traducciones i18n
│   ├── es/            # Español
│   └── en/            # Inglés
├── pages/
│   ├── index.astro            # Página principal (español)
│   ├── portafolio/           # Portfolio (español)
│   ├── blog/                 # Blog (español)
│   └── en/                   # Versión inglés (futuro)
├── styles/
│   └── globals.css           # Estilos base Tailwind
└── utils/
    ├── animations.ts         # Helpers GSAP
    ├── seo.ts               # Meta tags, JSON-LD
    ├── i18n.ts              # Helpers de traducción
    └── cn.ts                # className utility

public/
├── admin/                   # Decap CMS
│   ├── config.yml
│   └── index.html
└── robots.txt
```

## 🌐 Sistema i18n

El sitio soporta español (ES) e inglés (EN):

- **ES (default):** `/` → `/servicios/` → `/blog/`
- **EN:** `/en/` → `/en/services/` → `/en/blog/`

Archivos de traducción: `src/locales/{es,en}/*.json`

## 📝 Content Collections

### Blog Posts

Posts en `src/content/blog/{es,en}/`:

```markdown
---
title: "Título del post"
description: "Descripción breve"
publishDate: 2026-01-15
author: "Nestor Cabrera"
image: "/images/blog/imagen.jpg"
tags: ["tag1", "tag2"]
lang: "es"
draft: false
---

Contenido en Markdown...
```

### Portfolio Items

Proyectos en `src/content/portfolio/{es,en}/`:

```markdown
---
title: "Nombre del Proyecto"
description: "Descripción del proyecto"
client: "Cliente"
industry: "Industria"
technologies: ["React", "Node.js"]
year: 2025
image: "/images/portfolio/proyecto.jpg"
metrics:
  before: "Antes"
  after: "Después"
  improvement: "Mejora"
lang: "es"
---

Caso de estudio detallado...
```

## 📊 CMS (Decap CMS)

Acceso: `/admin/`

Requiere configurar Git Gateway o autenticación GitHub.

## ✅ Estado del Proyecto

### ✅ Completado (FASE 1-6)

**Infraestructura:**
- [x] Configuración base (Astro + React + Tailwind + GSAP)
- [x] Sistema i18n configurado
- [x] Content Collections (Blog + Portfolio)
- [x] Decap CMS configurado
- [x] BaseLayout con SEO completo + Header + Footer
- [x] Estilos globales Tailwind

**Componentes UI:**
- [x] Button, Card, Badge
- [x] Input, Textarea, Label
- [x] Header y Footer compartidos
- [x] Language Switcher component
- [x] Componente FadeIn (GSAP)

**Páginas (ES):**
- [x] Página principal funcional (Hero, Problem, Services, Portfolio, Blog, CTA)
- [x] Páginas de Blog (index + [slug])
- [x] Páginas de Portfolio (index + [slug])
- [x] Página de Servicios detallada
- [x] Página Sobre Mí

**Contenido:**
- [x] 2 posts de blog (ES)
- [x] 2 proyectos portfolio (ES)
- [x] Traducciones ES/EN (common.json, home.json)

**Utilidades:**
- [x] animations.ts (GSAP helpers)
- [x] i18n.ts, seo.ts, cn.ts

### 🚧 Pendiente (FASE 7)

- [ ] Versión completa en inglés (páginas /en/*)
- [ ] Más contenido placeholder (1-2 posts + 1 proyecto más)
- [ ] Animaciones GSAP avanzadas en Hero
- [ ] Componentes de animación adicionales (ScrollTrigger, Timeline)
- [ ] Sistema de formularios de contacto
- [ ] Testing y optimización de performance
- [ ] Deploy a producción (Vercel/Netlify)

## 📝 Próximos Pasos

1. Crear Header y Footer compartidos
2. Implementar Language Switcher
3. Crear página de Servicios
4. Crear página Sobre Mí
5. Implementar animaciones GSAP avanzadas
6. Agregar más contenido placeholder
7. Crear versión completa en inglés
8. Testing y deploy

## 📄 Licencia

© 2026 Simio CodeLabs (Nestor Cabrera) - Todos los derechos reservados
