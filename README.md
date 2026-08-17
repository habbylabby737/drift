# Drift

A full-canvas flow-field studio. Filaments ride a living curl-noise field and leave long, luminous trails. Watch it evolve, then steer it.

## Features

- Curl and angle noise fields with a seeded PRNG
- Speed, trail, density, scale, and morph controls
- Seven palettes: Tide, Ember, Porcelain, Moss, Polar, Copper, Noir
- Drag on the canvas to seed filaments
- Randomize seed, pause, clear, PNG export
- Keyboard: Space pause, R randomize, E export, C clear, H toggle panel

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL. Production build:

```bash
npm run build
```

Requires Node 22.

## Stack

React 19, TypeScript, Vite, TanStack Start, Tailwind v4.
