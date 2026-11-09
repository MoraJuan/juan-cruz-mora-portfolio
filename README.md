# Juan Cruz Mora — Portfolio

Portfolio profesional en Next.js, TypeScript y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Contenido editable

| Archivo | Uso |
| --- | --- |
| `src/data/site.ts` | Identidad, navegación, experiencia, formación y enlaces |
| `src/data/projects.ts` | Proyectos destacados |
| `src/data/skills.ts` | Habilidades por categoría y nivel de uso |
| `public/projects/` | Capturas por proyecto |
| `public/cv.pdf` | CV descargable (agregar el archivo antes de publicar) |

## Antes de publicar

1. Completá `site.links.email` y `site.links.emailLabel` en `src/data/site.ts`.
2. Colocá tu CV en `public/cv.pdf`.
3. Agregá capturas reales de Resto-app y Chimento en `public/projects/`.
4. Definí `NEXT_PUBLIC_SITE_URL` con el dominio final.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons
