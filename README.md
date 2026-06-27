# Habitz Design System

React component library built from the
[Habitz design system in Figma](https://www.figma.com/design/zbmdmq2Kd7ZzI99n2NqI89/Habitz-design-system--with-variables---Community-).
All components are styled exclusively through **design tokens** (CSS custom
properties) that mirror the Figma variables, and are documented in **Storybook**.

## Getting started

```bash
npm install
npm run storybook   # open http://localhost:6006
```

## Scripts

| Script                  | Description                                  |
| ----------------------- | -------------------------------------------- |
| `npm run storybook`     | Run Storybook in dev mode                    |
| `npm run build-storybook` | Build the static Storybook                  |
| `npm run typecheck`     | Type-check the project with `tsc`            |

## Design tokens

Tokens live in [`src/styles/tokens.css`](src/styles/tokens.css) and map 1:1 to
the Figma variables (colors, spacing, radius, typography, elevation, and
per-component button colors). Components reference them via `var(--token-name)`,
so updating a token updates every component that uses it.

## Components

### Button

`src/components/Button/`

Communicates actions. Three variants and five interaction states.

- **Variants**: `primary` (one per page, main action), `secondary`
  (non-critical actions), `tertiary` (always-visible actions like _Edit_).
- **States**: `default`, `hover`, `focused`, `pressed`, `disabled` — handled
  automatically via native pseudo-classes. A `forceState` prop is available to
  pin a state for showcases (used by the Storybook matrix).

```tsx
import { Button } from "./components/Button";

<Button variant="primary" onClick={() => {}}>
  button
</Button>;
```

See every variant × state combination in the **Button → All Variants And
States** story.
