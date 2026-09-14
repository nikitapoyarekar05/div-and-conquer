# Pokemon Explorer

A small Pokemon browser built with Next.js (App Router). It fetches live data from
[PokeAPI](https://pokeapi.co/), and lets you search by name and sort by ID or any of
the four core stats (HP, Attack, Defense, Speed).

## Requirements

- Node.js 20+
- npm

## Getting started

1. Install dependencies:

```bash
   npm install
```

2. Create a `.env` file in the project root with the API base URL: NEXT_PUBLIC_API_URL=https://pokeapi.co/api/v2

3. Run the dev server:

```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Script                 | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start the app in development mode          |
| `npm run build`        | Create a production build                  |
| `npm run start`        | Run the production build                   |
| `npm run lint`         | Check code with ESLint                     |
| `npm run lint-fix`     | Auto-fix ESLint issues                     |
| `npm run format-check` | Check formatting with Prettier             |
| `npm run format-fix`   | Auto-format with Prettier                  |
| `npm run type-check`   | Type-check the project with `tsc --noEmit` |

Husky + lint-staged run ESLint and Prettier automatically on staged files at commit
time, and a type check runs before push.

## Approach

See the [`/approach`](http://localhost:3000/approach) page (linked from the home page)
for notes on the architecture, data-fetching strategy, and known limitations.
