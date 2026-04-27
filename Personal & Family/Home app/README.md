# Family Kitchen Board 🍳

A mobile-first PWA for the family's daily dinner and kitchen clearing roster.

---

## Quick start

### 1. Install

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Open `.env` and fill in your Supabase URL and anon key.

### 3. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Open **SQL Editor** and run the file `supabase/migrations/001_initial.sql`.
3. Create the family user: **Authentication → Users → Add user** — enter the shared family email and password.
4. Copy your project **URL** and **anon key** from **Settings → API** into `.env`.

### 4. Run locally

```bash
npm run dev
```

Open `http://localhost:5173` and sign in with the family account.

---

## Deployment

### Netlify

1. Push the repo to GitHub.
2. Netlify: **Add new site → Import from Git**.
3. Build command: `npm run build` | Publish directory: `dist`
4. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in **Site settings → Environment**.

### Vercel

1. Import the repo in Vercel.
2. Framework: **Vite** (auto-detected).
3. Add the same two env vars in **Settings → Environment Variables**.

---

## PWA icons

The SVG at `public/icon.svg` works in Chrome. For full iOS/Android coverage, generate PNG icons:

```bash
npm install -D @vite-pwa/assets-generator
npx pwa-assets-generator --preset minimal public/icon.svg
```

This creates `public/icons/icon-192.png` and `public/icons/icon-512.png`.

---

## Team logic

Teams alternate daily based on the Melbourne calendar date.

- **Team A** — Dad (Dimuth), Yuvin, Shenara
- **Team B** — Mum (Nishadi), Senuk, Yeshara

The base reference date (when Team A cooks) is stored in `app_settings.base_team_a_dinner_date` (default `2024-01-01`). Change it in the Supabase table to rebalance who starts.

---

## School Mode

Toggle via ⚙️ Settings drawer.

- **ON** — shows Mum's school lunch and the lunchbox reminder Mon–Fri.
- **OFF** — hides the school section (use during holidays).

Weekends always hide the school section automatically regardless of the toggle.

---

## Environment variables

| Variable | Where to find it |
|---|---|
| `VITE_SUPABASE_URL` | Supabase Dashboard → Settings → API |
| `VITE_SUPABASE_ANON_KEY` | Same page, `anon` / `public` key |

---

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · Supabase (Auth + DB + Realtime) · vite-plugin-pwa · lucide-react · canvas-confetti
