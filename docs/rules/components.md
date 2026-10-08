# Components

## General

- Functional components only — no class components
- Separate logic from rendering: extract business logic into custom hooks
- No business logic inside a component's JSX — the component should only render

## Where things live

- Section components and shared components: `app/_components/`
- Static content that drives the UI (lists, contact details) lives in data files next to them (`club-info.ts`, `disciplines.ts`, `facilities.ts`), not hard-coded in JSX
- If the same markup repeats for several items, render it from a data list

## Styling

- Plain CSS in `app/styles/<section>.css`, using the tokens defined in `base.css`
- No inline `style` objects except for passing CSS custom properties (e.g. `--d` for reveal delays)
- Tailwind utility classes are not used in this project

## Hooks

- Hooks live in their own file (`use-*.ts`) in `app/_components/`
- Never define a hook inside a component file
