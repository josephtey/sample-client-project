# GrowthOps Dashboard — Sample Client Project

A B2B SaaS dashboard for GrowthOps, used as the sample client project for the [Scope Agent](https://github.com/josephtey/scope-agent) prototype.

## What's in the app

- **Dashboard** — Stats cards (MRR, clients, seats, open requests) + MRR table + Client overview
- **Clients** — Full client table with tier badges, MRR, seats, usage bars, and join dates
- **Feature Requests** — Request tracker with priority and status badges
- **Billing / Settings** — Placeholder pages

## Tech stack

- React 18 + Vite
- No external UI libraries (plain CSS)
- Mock data (no backend required)

## Quick start

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## Data model

The app uses mock data defined in `src/data/mockData.js`:

- **12 clients** across Gold/Silver/Bronze tiers
- **6 months** of MRR data broken down by tier
- **8 feature requests** with varying priorities and statuses

## Structure

```
src/
  App.jsx              — Main layout with sidebar navigation
  App.css              — All styles
  components/
    Sidebar.jsx        — Navigation sidebar
    StatsCards.jsx      — Summary stat cards
    MRRTable.jsx       — Monthly Recurring Revenue table
    ClientTable.jsx    — Client overview table with usage bars
    FeatureRequests.jsx — Feature request tracker
  data/
    mockData.js        — All mock data and helpers
```

## How this is used with Scope Agent

When a client requests a customization via the Slack bot, the Scope Agent:
1. Scopes the request through conversation
2. Generates prototype variants of this dashboard with the requested changes
3. Creates a GitHub issue in this repo with the well-scoped feature spec
