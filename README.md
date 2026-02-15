# StampShot - HTML Prototypes

Production-ready HTML/CSS/JS prototypes generated from `docs/UI_SPEC.md` and `docs/SRD.md`.
Styling adapted from `mobile-app-design-systems` design framework.

## Quick Start

Open any `.html` file in a browser. The prototype navigation sidebar links all screens.

## Screen Index

| File | Screen | CJX Stage | Phase | Description |
|------|--------|-----------|-------|-------------|
| `s01-camera.html` | S-01 Camera Screen | Usage | v1 | Full-screen camera preview, flash/flip/settings top bar, capture button, gallery thumb, template button, debug drawer, address watermark |
| `s02-gallery.html` | S-02 Gallery Screen | Retention | v1 | 3-column photo grid with timestamps, infinite scroll, back navigation |
| `s03-settings.html` | S-03 Settings Screen | Retention | v1 | Overlay defaults, watermark config (toggle, template, type, text, dateTime, size, position, opacity, color), location toggle, capture defaults, appearance, about |
| `s04-photo-preview.html` | S-04 Photo Preview | Usage | v1 | Full-screen processed photo with watermark/timestamp overlays, Discard/Share/Keep action buttons |
| `s05-projects-list.html` | S-05 Projects List | Retention | P2 | Scrollable project cards with thumbnails, photo count, location address, create project modal |
| `s06-project-detail.html` | S-06 Project Detail | Retention | P2 | Project info bar (location, photo count, date), 3-column photo grid, edit button, "Add Photos" FAB |
| `s07-map-view.html` | S-07 Map View | Retention | P3 | Full-screen map with photo thumbnail markers, cluster markers, bottom sheet details, filter modal (project/date range), my-location button |

## FR Mapping

| FR | Feature | Screens |
|----|---------|---------|
| FR-01 | Camera Capture | S-01 |
| FR-03 | Timestamp Generation | S-01, S-04 |
| FR-04 | Watermark System | S-01, S-04 |
| FR-05 | Image Processing | S-01, S-04 |
| FR-08 | Photo Gallery | S-02 |
| FR-09 | Photo Preview | S-04 |
| FR-10 | Settings & Preferences | S-03 |
| FR-12 | Debug Tools | S-01 |
| FR-13 | Location / Address | S-01, S-03 |
| FR-14 | Projects | S-05, S-06 |
| FR-15 | Map View | S-07 |

## Shared Files

| File | Purpose |
|------|---------|
| `styles.css` | Design tokens (colors, typography, spacing, radius, shadows, mobile frame layout) |
| `components.css` | Reusable component styles (toggles, pickers, sliders, cards, camera controls, action buttons, gallery grid) |
| `interactions.js` | CJX animations, proto nav sidebar, toggle/picker/swatch interactions, capture spring animation, debug drawer |

## Design Tokens Applied

- **Colors:** StampShot light theme (white background, surface, accent blue, semantic success/danger/warning)
- **Typography:** SF Pro / Roboto with Menlo mono for timestamps
- **Spacing:** xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48)
- **Sizes:** Capture button 72px, icon buttons 44px, thumbnails 60px, header 56px
- **Radius:** sm(4) md(8) lg(16) xl(24) full(9999)

## CJX Stage Mapping

| Stage | Screens | Animation |
|-------|---------|-----------|
| Usage (300ms) | S-01 Camera, S-04 Preview | fadeIn, 60ms stagger |
| Retention (400ms) | S-02 Gallery, S-03 Settings, S-05 Projects List, S-06 Project Detail, S-07 Map View | fadeIn, 80ms stagger |

## User Journeys Covered

- **CJX-01:** Capture Photo with Watermark (S-01 -> S-04)
- **CJX-02:** Browse Gallery (S-01 -> S-02)
- **CJX-03:** Customize Watermark (S-01 -> S-03)
- **CJX-04:** Capture Photo with Location (S-01 -> S-04, with address in watermark)
- **CJX-05:** Manage Projects (S-05 -> S-06, create/browse/detail)
- **CJX-06:** Explore Map (S-07, markers/clusters/filter/bottom sheet)
