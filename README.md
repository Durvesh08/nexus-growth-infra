# Adsrahu — Vercel Deployment

This project has been ejected from Lovable's Cloudflare-based hosting and configured for **Vercel**.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** your GitHub repo.
3. Framework Preset: **Other** (Vercel will auto-detect the `.vercel/output` build).
4. Build Command: `bun run build` (or `npm run build`).
5. Output Directory: leave blank (TanStack Start emits to `.vercel/output`).
6. Click **Deploy**.

## Local Development

```bash
bun install
bun run dev
```

## Environment Variables

Add any required env vars in **Vercel → Project → Settings → Environment Variables**.
Client-exposed vars must be prefixed with `VITE_`.

## Notes

- TanStack Start v1 with `target: "vercel"` produces a Vercel Build Output API artifact automatically.
- Routing, SSR, and server functions all work out of the box on Vercel's Node runtime.
