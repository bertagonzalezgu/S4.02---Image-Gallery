# Image Gallery 🖼️

Mandatory exercise for Sprint 4. Responsive image gallery built with React and TypeScript using static data. The first image in the array is automatically set as the featured (main) image and renders at a larger size.

## Technologies

- Frontend: React 18, TypeScript
- Bundler: Vite
- Linting: ESLint, Oxlint

## Installation

1. Clone the repository: `git clone https://github.com/bertagonzalezgu/S4.02---Image-Gallery.git`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`

## Project Structure

```
it-sprint4-images-gallery/
├── node_modules/
├── src/
│   ├── assets/
│   │   └── img/
│   │       ├── img_1.webp
│   │       ├── img_2.webp
│   │       ├── img_3.webp
│   │       ├── img_4.webp
│   │       ├── img_5.webp
│   │       └── img_6.webp
│   ├── components/
│   │   ├── Gallery.tsx       # Parent component — renders the image list
│   │   └── ImageItem.tsx     # Child component — renders a single image
│   └── main.tsx              # Entry point
├── .gitignore
├── .oxlintrc.json
├── briefing-react.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── style.css
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Features

- Static image gallery with 6 images
- Featured image: the first item in the array renders with the `featured` CSS class, displayed at a larger size
- Component composition: `Gallery` (parent) passes `id`, `src` and `isFeatured` props to `ImageItem` (child)
- Typed props with a custom `ImageProps` type