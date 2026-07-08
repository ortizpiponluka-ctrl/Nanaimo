# demo-nanaimo

Sitio web premium para Nanaimo, una marca enfocada en sitios web, ecommerce y marketing para emprendedores y negocios locales.

## Tecnologías

- Next.js App Router
- React
- TypeScript estricto
- Tailwind CSS
- SEO base
- Compatible con Vercel

## Estructura

```txt
app/
components/
hooks/
lib/
config/
public/
site.config.ts
```

## Editar la empresa

Toda la información editable vive en `site.config.ts`:

- Nombre y logo
- Colores
- Servicios
- Categorías
- Textos
- WhatsApp
- Instagram
- Correo
- Dirección
- Testimonios
- Preguntas frecuentes

## Modo de venta

El sitio está preparado para cerrar ventas por WhatsApp. También deja considerada una futura integración con Shopify, Mercado Pago, Meta Pixel y Analytics, pero ninguna está conectada todavía.

## Uso local

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run start
```

Proyecto listo para desplegar en Vercel.
