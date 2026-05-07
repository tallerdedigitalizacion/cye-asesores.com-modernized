# CYE Asesores modernized

Versión estática en Next.js App Router de la web de CYE Asesores, preparada para exportar a GitHub Pages.

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo

```bash
npm install
npm run dev
```

La web estará disponible en `http://localhost:3000`.

## Build estático

```bash
npm run build
```

Next.js genera el sitio exportado en la carpeta `out/`.

## Publicación en GitHub Pages

Este repositorio está pensado para publicar la carpeta `out/` desde una rama de despliegue:

```bash
npm run build
git subtree push --prefix out origin gh-pages
```

En GitHub, configura Pages para servir desde la rama `gh-pages`, carpeta raíz.

Los formularios se muestran como parte de la demo visual, pero están deshabilitados y marcados como no operativos.
