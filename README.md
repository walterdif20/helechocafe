# Helecho Café — Landing estática SEO local

Sitio estático en React + Vite + TypeScript para Helecho Café (Necochea), optimizado para SEO local y listo para publicar en GitHub Pages.

## Scripts
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Deploy en GitHub Pages
1. Crear repo y subir código.
2. Ejecutar build con base del repo:
   ```bash
   BASE_PATH=/NOMBRE-REPO/ npm run build
   ```
3. Publicar la carpeta `dist/` en GitHub Pages (branch `gh-pages` o `/docs`).

## Personalización rápida
- Cambiar datos del negocio en `src/config/site.ts`.
- Reemplazar URL canónica (`canonicalUrl`) al tener dominio propio.
- Completar `whatsappUrl` cuando el cliente lo confirme.

## Imágenes placeholder
En `public/assets/` se incluyen placeholders para reemplazar por fotos reales del local:
- `hero-cafe.svg`
- `pasteleria-artesanal.svg`
- `rincon-verde.svg`
- `fachada.svg`

Sugerido reemplazar por fotos de: fachada, mostrador, café servido, tortas, mesas y rincón interior.
