# MainT Console — IDP Milestone 1

Semantic HTML + SCSS layout for the MainT maintenance management UI.
Built without UI frameworks as part of the IDP.

## Pages
- `index.html` — Work Request List (+ Create request modal)
- `order.html` — Work Order List

## Covered
- Semantic HTML5 structure (header, aside, nav, main, section)
- CSS Grid app shell, Flexbox for component-level layout
- SCSS partials, BEM naming
- Design tokens from the MainT design system as CSS custom properties
- Dark/Light theme via CSS variables
- Keyboard-accessible table controls and native `<dialog>` modal

## Run

```bash
npm install
npm run sass
```

Then open `index.html` with Live Server.
