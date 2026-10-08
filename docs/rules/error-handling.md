# Error handling

## Async

- Always wrap async calls in try/catch or handle with .catch() — no unhandled promise rejections
- Surface errors to the user with a clear message and a way forward (e.g. the contact form falls back to the club's WhatsApp) — never swallow errors silently

## React

- `app/error.tsx` is the error boundary for the app; it must always render a fallback UI, never a blank screen
- Add nested `error.tsx` files only for new routes with their own failure modes

## Logging

- No `console.log` or `console.error` in committed code
