# Simio CodeLabs - Sitio Web Profesional

Sitio web profesional desarrollado con Astro + React + Tailwind CSS para Simio CodeLabs.

## 🚀 Stack Tecnológico

- **Framework:** Astro 5.17
- **UI Framework:** React 19
- **Estilos:** Tailwind CSS 3.4 + CSS Variables
- **Animaciones:** GSAP 3.14 + Framer Motion
- **3D:** Three.js + React Three Fiber
- **CMS:** Decap CMS (Git-based)
- **i18n:** Sistema bilingüe ES/EN
- **SEO:** astro-seo + Schema.org

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Desarrollo con CMS local
pnpm dev:cms

# Construir para producción
pnpm build

# Vista previa
pnpm preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes UI (Button, Card, etc.)
│   ├── animations/      # Wrappers de animación
│   └── shared/          # Header, Footer
├── content/             # Content Collections
│   ├── blog/
│   │   ├── es/
│   │   └── en/
│   └── portfolio/
│       ├── es/
│       └── en/
├── layouts/
│   └── BaseLayout.astro # Layout base con SEO
├── locales/             # Traducciones i18n
├── pages/               # Rutas del sitio
├── styles/
│   └── globals.css      # Estilos globales
└── utils/               # Utilidades (SEO, i18n, etc.)

public/
├── admin/              # Decap CMS
└── images/             # Assets estáticos
```

## 🌐 Internacionalización

- **Español (default):** `/` → `/servicios/` → `/blog/`
- **Inglés:** `/en/` → `/en/services/` → `/en/blog/`

Traducciones en `src/locales/{es,en}/*.json`

## 📊 CMS (Decap CMS)

### Configuración para Producción

1. Actualiza el repo en `public/admin/config.yml`:
   ```yaml
   backend:
     repo: tu-usuario/tu-repo
   ```

2. Configura OAuth en GitHub:
   - Crea una GitHub OAuth App
   - Añade las credenciales en Vercel

3. Accede al CMS en: `https://tu-dominio.com/admin/`

### Desarrollo Local

```bash
pnpm dev:cms
```

Accede a `http://localhost:3000/admin/` (sin autenticación)

## 📄 Licencia

© 2026 Simio CodeLabs - Todos los derechos reservados
