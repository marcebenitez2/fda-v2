# State management

## Decision rules

- `useState`: local UI state (menu open, which card is open, form status)
- `useReducer`: complex local state with multiple transitions
- Context: only if several distant components need the same client state — there is no global store today, do not add one preemptively

## Prop drilling

- Maximum 2 levels of prop passing — if you need a third, lift to Context
- Read static data (club info, disciplines) by importing the data file, not by passing it down through props
