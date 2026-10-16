# AFTERHOURS: Project State

Last updated: Phase 1, Task 2

## Product summary
AFTERHOURS is a social discovery platform for university students and young adults (18+)
to find real-world activities, communities, and people with shared interests.
Launch geography: Islamabad-Rawalpindi first, then Lahore and Karachi.

## Technology stack (decided)
- Web first: Next.js + TypeScript
- Backend: Supabase (Postgres, Auth, Storage, Row Level Security)
- Source control: GitHub (private repo)
- Mobile (Expo / React Native): deferred to Phase 7

## Environment (verified by running commands)
- OS: Windows (PowerShell)
- Node.js: v24.22.0
- npm: 11.19.1
- Git: 2.56.0.windows.2
- Project folder: D:\dev\afterhours
- Note: D:\dev needed a permissions fix (takeown + icacls as administrator) before folders could be created

## Implemented features
None yet.

## Database schema
None yet.

## Security rules implemented
- .gitignore excludes .env files and keys
- .env.example contains placeholders only

## Known errors / unresolved bugs
None.

## Decisions made
- Web app first; mobile in Phase 7
- Hosted Supabase dev project (no Docker)
- Private GitHub repo
- Project lives on D: because C: has less free space

## Decisions still open
- Web hosting provider (Vercel free tier is non-commercial only)
- Map provider
- Monorepo vs single app layout

## Next task
Phase 1, Task 3: create the Next.js app inside apps/web.