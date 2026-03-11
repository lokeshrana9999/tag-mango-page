# BackstagePass UI — Planning Document

**Assignment:** Front-End UI (Tagmango)  
**Stack:** React + Vite + Tailwind CSS  
**Scope:** UI-only. All data is static or mocked — no API integrations required.

---

## Component Structure

`App` is the root component and owns the selected day in state. Any component that needs to reflect the active day — the header, top bar, sidebar, and feed — receives it as a prop. This keeps state in one place and ensures all parts of the UI stay in sync.

```
App
├── Header
├── SubHeader            (e.g. "Day 1 of 9")
├── DayTopBar            (mobile day selector)
├── DaySidebar           (desktop only)
└── FeedSection
    ├── FeedPost         (standard feed post card)
    └── SubscriberPost   (subscriber card with confetti header)
```

Shared, reusable UI elements (buttons, cards, avatars, etc.) live in `components/ui/`. Page-specific components (Header, Sidebar, Feed cards) stay in `components/`. Global styles and theme tokens are defined in `styles/`.

---

## Building Each Component

### Feed Post Card

`FeedPost` follows a clear structure: author avatar, name, and timestamp at the top; post content in the middle; and a reaction/action bar at the bottom. The priority is accurate visual hierarchy — font sizes, spacing, and color weights should closely match the Figma design. Static mock data is used for author, timestamp, and content. All interactive elements include hover and focus states.

### Wrapper and Header

The content wrapper is the `main` element in `App`, set to a max-width of ~800px, centered, with consistent horizontal padding. `FeedSection` manages the inner layout and spacing. `Header` and `SubHeader` cover the top bar — logo, navigation, and day context — aligned to the Figma design.

### Subscriber Post and Confetti Header

`SubscriberPost` is a standalone card component, separate from `FeedPost` to keep concerns clean. At the top of the card, `ConfettiHeader` renders a confetti burst or scattered shapes matching the design. The animation is kept lightweight, using CSS or a motion library. Confetti colors are theme-aware so they render correctly in both light and dark mode.

### Sidebar

`DaySidebar` features a blurred background image with a gradient overlay, creating a frosted, layered visual effect. Locked days are represented visually — a lock icon and reduced opacity — with no underlying logic. Day selection updates `selectedDay` in `App`, and a white indicator element smoothly transitions to the active day using a CSS position-based animation. On mobile, the sidebar is hidden and `DayTopBar` provides the same selection behavior.

---

## Responsiveness

- **Desktop (1024px and above):** Sidebar on the left, main content on the right.
- **Tablet and mobile (below 1024px):** Sidebar is hidden; `DayTopBar` appears at the top. Main content is full-width with horizontal padding.

Layouts are built with Tailwind's standard breakpoints (`md:`, `lg:`), avoiding any custom media query files. The main content area has a max-width cap to prevent over-stretching on large screens. Images inside cards use `max-w-full` and aspect-ratio wrappers to prevent overflow. Layout will be tested at 320px, 375px, 768px, 1024px, and 1280px.

---

## Light and Dark Mode

Most of the colors are defined as CSS variables. This means switching themes requires only a single class change on the root element, and every component updates automatically.

Here is how the system works end to end:

1. **CSS variables** are defined in `theme.css` in two sets — one for light mode (on `:root`) and one for dark mode (on `.dark`). Tokens like `--background`, `--foreground`, `--card`, and `--border` cover all color usage across the UI.

2. **Tailwind** is configured to reference those variables, so utility classes like `bg-background` or `text-foreground` automatically resolve to the correct value based on the active theme.

3. **Theme toggling** is handled by `next-themes`, which adds or removes the `dark` class on the `html` element. It reads the system color preference on first load and persists the user's choice in `localStorage`. The toggle in the header calls into that.

4. **Component-level overrides** — for cases that need distinct styles per theme (such as the sidebar's gradient, which differs intentionally between light and dark), Tailwind's `dark:` variant is used inline. For example: `bg-white dark:bg-zinc-900`.

5. Text color contrast is verified in both modes before finalizing to ensure readability throughout.

---

## Checklist

| Component | Approach |
|-----------|----------|
| Feed Post Card | `FeedPost` — mock data, Figma spacing and typography, hover states |
| Wrapper and Header | `main` + `FeedSection`; `Header` + `SubHeader` |
| Subscriber Post | `SubscriberPost` + `ConfettiHeader` — lightweight CSS or motion animation |
| Sidebar blur | Blurred background image with gradient overlay |
| Sidebar locked state | Visual only — lock icon and reduced opacity |
| Day selection | Shared state in `App`; white indicator transitions on selection |
| Responsiveness | Tailwind breakpoints; top bar on mobile, sidebar on desktop |
| Light and dark mode | CSS variables + `dark:` classes; `next-themes` for toggling |
