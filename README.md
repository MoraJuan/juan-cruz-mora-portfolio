# Juan Cruz Mora — Portfolio

Portfolio editorial en Next.js, TypeScript y Tailwind CSS.

Repo: [MoraJuan/juan-cruz-mora-portfolio](https://github.com/MoraJuan/juan-cruz-mora-portfolio)

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Uso |
| --- | --- |
| `npm run dev` | Desarrollo local |
| `npm run build` | Build de producción |
| `npm run start` | Servidor Next (`next start`) |
| `npm run lint` | ESLint |

## Railway

Nixpacks detecta Next.js con estos scripts. No hace falta `railway.json` / `nixpacks.toml`.

1. Conectá el repo en Railway.
2. Build: `npm run build` (default).
3. Start: `npm run start` → `next start`.
4. Variable de entorno (recomendada):

| Variable | Ejemplo | Uso |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://tu-app.up.railway.app` | Canonical, Open Graph, `sitemap.xml`, `robots.txt` |

Sin secrets obligatorios: el sitio es estático/SSR de presentación. Si no definís `NEXT_PUBLIC_SITE_URL`, cae a `https://juancruzmora.dev`.

## Contenido editable

| Archivo | Uso |
| --- | --- |
| `src/data/site.ts` | Nombre, rol, ubicación, email y enlaces |
| `src/data/projects.ts` | Proyectos + media |
| `src/data/skills.ts` | Habilidades por categoría |
| `src/data/i18n/` | Copy ES / EN |
| `public/projects/` | Capturas y video de demo |
| `public/cv-es.pdf` / `public/cv-en.pdf` | CVs descargables |
| `public/profile.png` | Foto de perfil |
| `src/app/icon.svg` | Favicon (letra J) |

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide Icons
