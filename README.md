# Image Gallery 🖼️

Responsive image gallery built with React and TypeScript, developed incrementally across 5 sprints. It includes a featured image, multiple image deletion with confirmation, drag-and-drop reordering, and unit tests.

## Technologies

- Frontend: React 18, TypeScript
- Bundler: Vite
- Styling: Tailwind CSS, shadcn/ui
- Testing: Vitest, React Testing Library
- Linting: ESLint, Oxlint

## Installation

1. Clone the repository: `git clone https://github.com/bertagonzalezgu/S4.02---Image-Gallery.git`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Run tests: `npm run test`

## Project Structure

```
it-sprint4-images-gallery/
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── img/
│   ├── components/
│   │   ├── ui/
│   │   ├── Gallery.test.tsx    # Unit tests for Gallery
│   │   ├── Gallery.tsx         # Parent component — manages state and image list
│   │   └── ImageItem.tsx       # Child component — renders a single image card
│   ├── data/
│   │   └── images.ts           # Static image data
│   ├── lib/
│   │   └── utils.ts
│   ├── index.css
│   ├── main.tsx                # Entry point
│   └── setupTests.ts
├── .gitignore
├── .oxlintrc.json
├── briefing-react.md
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── style.css
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Features

- **Featured image** — the first item renders larger, spanning 2 columns and 2 rows in the grid
- **Responsive layout** — 5 columns on desktop, 4 on tablet, 2 on mobile
- **Delete images** — each card has a delete button; deletion requires `window.confirm`
- **Drag-and-drop** — images can be reordered by dragging
- **Component composition** — `Gallery` manages state and passes props (`id`, `src`, `isFeatured`, `onDelete`) down to `ImageItem`
- **Typed props** — custom `ImageProps` type with TypeScript
- **Accessibility** — tested with screen readers; delete button is accessible and usable

## Branch history

| Branch | Feature |
|---|---|
| `feature/basic-gallery` | Static gallery with featured image |
| `feature/styles` | Tailwind CSS + shadcn/ui, responsive grid |
| `feature/event-handlers` | Delete with confirmation, useState |
| `feature/drag-and-drop` | Drag-and-drop reordering |
| `feature/testing` | Vitest + React Testing Library |

## Demo

http://localhost:5173/