# Code style

## Naming conventions

- Files and folders: `kebab-case` (e.g. `discipline-card.tsx`, `use-open-item.ts`)
- React components: `PascalCase` (e.g. `DisciplineCard`, `ContactForm`)
- Functions, variables, hooks: `camelCase` (e.g. `whatsappUrl`, `isOpen`, `useContactForm`)
- Constants: `UPPER_SNAKE_CASE` (e.g. `CLUB_PHONE`, `FLIGHT_MS`)
- Types and interfaces: `PascalCase`, prefix interfaces with `I` only if it adds clarity
- Code (names, comments, variables) is written in English; user-facing copy is in Spanish (Rioplatense, using "vos")
- Formatting is handled by Prettier (`npm run format`) — do not hand-format

## TypeScript

- Strict mode always on
- Never use `any` — use `unknown` and narrow, or define the proper type
- Always type function parameters and return values explicitly
- Type API requests and responses in `app/_types/`

## Logic

- Keep logic as simple as possible — if a function needs a comment to be understood, simplify it
- No duplicated logic — extract to a shared util or hook before copy-pasting
- Single responsibility: one function, one thing
- No commented-out code in commits
