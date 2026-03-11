# BackstagePass UI — Tagmango Assignment

A pixel-perfect UI implementation of a page from Tagmango's BackstagePass product, built from a Figma design reference.

**Live Demo:** [https://tag-mango-page.vercel.app](https://tag-mango-page.vercel.app)  
**Planning Document:** [PLANNING.md](https://github.com/lokeshrana9999/tag-mango-page/blob/main/PLANNING.md)

---

## What's built

- **Feed Post Card** — post layout with author info, content, and reaction bar
- **Subscriber Post Card** — subscriber-specific card with a confetti header
- **Header and Wrapper** — top navigation and content layout matching the design
- **Sidebar** — blurred background, locked day states, and animated day selection indicator
- **Light and Dark Mode** — full theme support using CSS variables and `next-themes`
- **Responsive Layout** — sidebar on desktop, horizontal day selector on mobile

---

## Stack

- React + Vite
- Tailwind CSS
- Radix UI
- Motion (animations)
- next-themes (light/dark mode)

---

## Running locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```
