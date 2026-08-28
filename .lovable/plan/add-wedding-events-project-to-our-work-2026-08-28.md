# Add Wedding & Events project to Our Work

Add a fourth category tab to the Work section and place the new wedding-planning demo inside it, using the exact same card, browser frame, tabs, and animation styling as the existing projects.

## What changes

- New tab in the category row: **Wedding & Events** (order: Interior Design, Restaurant, Gym & Fitness, Wedding & Events). Interior Design stays the default.
- New project entry rendered with the existing card layout (tag pill, name, location line, Lighthouse score pills, feature tags, description, "Best for", both CTA buttons, live iframe preview).

## Proposed copy for the card

- Tag: `DEMO PROJECT · WEDDING & EVENTS`
- Name: Wedding Visuals
- Location line: `📍 Wedding Planning & Event Management`
- Feature tags: Elegant Visual Design, Event Gallery, Package Showcase, Enquiry Form, Mobile-First
- Description: An elegant wedding planning website built to showcase real events, packages and visuals — designed to turn browsing couples into booked consultations.
- Best for: Wedding Planners, Event Managers, Decorators
- Live URL: https://wedding-visuals-ten.vercel.app/
- Browser URL label: wedding-visuals-ten.vercel.app

Tell me if you want a different display name or wording; otherwise I'll use the above.

## Technical notes

Single file: `src/components/Portfolio.tsx`
- Extend the `Category` union with `'wedding'`.
- Add `{ id: 'wedding', label: 'Wedding & Events' }` to `categories`.
- Add a `wedding: [...]` array to `projectsByCategory` with the project object above.

No design, token, layout, or animation changes — the new tab and card inherit everything from the existing structure.
