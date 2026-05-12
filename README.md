# Arrel Studio

Web de l'agència Arrel Studio — disseny web per a negocis locals del Bages i Catalunya.

## Stack
- React + Vite
- Tailwind CSS 3
- Deploy: Cloudflare Pages

## Desenvolupament local

```bash
npm install
npm run dev
```

## Deploy a Cloudflare Pages

1. Puja el projecte a GitHub
2. A Cloudflare Pages → "Connect to Git" → selecciona el repositori
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Node version: 18

## Formulari de contacte

Al fitxer `src/components/Seccions.jsx`, substitueix `YOUR_FORM_ID` per l'ID de Formspree:
1. Crea un compte a formspree.io
2. Crea un nou formulari
3. Copia l'ID i substitueix `YOUR_FORM_ID`

## Personalitzar

- **Colors**: `tailwind.config.js`
- **Textos**: cada component a `src/components/`
- **Paquets i preus**: `src/components/Paquets.jsx`
- **FAQ**: `src/components/Seccions.jsx`
