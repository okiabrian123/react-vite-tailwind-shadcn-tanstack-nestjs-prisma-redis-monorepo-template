# Full Stack Monorepo (React + Vite + Tailwind v4 + shadcn/ui • NestJS + Prisma • Supabase + Redis)

This repository is a monorepo managed with pnpm workspaces.

- Frontend: React + Vite + TypeScript, TailwindCSS v4, shadcn/ui, TanStack Query, Zustand
- Backend: NestJS + Prisma (PostgreSQL via Supabase), Redis cache (Railway/Upstash)
- Deploy: Web on Vercel, API on Railway/Render, Redis on Railway/Upstash

## Structure

- `apps/web` — Frontend app (Vite)
- `apps/api` — Backend app (NestJS)
- `packages/*` — Shared packages (if needed later)

## Requirements

- Node 18+ (LTS recommended)
- pnpm 9+

## Setup

1) Install deps after we scaffold apps:

```bash
pnpm install
```

2) Copy envs and fill values:

```bash
cp .env.example .env
```

3) Development (after apps are created):

```bash
pnpm dev
```

## Env Variables

See `.env.example` for a full list. You will need:

- Frontend: `VITE_API_BASE_URL`, optional `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- Backend: `DATABASE_URL` (Supabase Postgres), `SUPABASE_*`, `REDIS_URL`, `PORT`

## Next Steps

- Scaffold `apps/web` (Vite + Tailwind v4 + shadcn/ui + TanStack Query + Zustand)
- Scaffold `apps/api` (NestJS + Prisma + Redis). Include Users CRUD, Prisma schema & migrations.
- Add deploy configs (Vercel + Railway) and seed/migrate scripts.

