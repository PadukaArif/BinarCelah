# BINARCELAH — STACK & ARCHITECTURE
**Decision for First Draft:** frontend-first, no custom backend yet.

## Selected stack
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React

Use the current stable compatible versions selected by the project initializer. Keep dependencies limited to this list unless a concrete requirement justifies another package.

## Why this is the smallest fit
The immediate deliverable is a browser-based draft with a landing/discovery page and a case/product page. React + Vite supports this without server infrastructure. TypeScript helps keep evidence and source records consistent. React Router handles the small number of pages.

## Backend decision
Do **not** create a backend, database, authentication system, or admin panel for the First Draft unless a required user-facing flow cannot work without one.

Represent verified case content as structured local data (for example, TypeScript/JSON modules) with source metadata. Clearly distinguish this from a live API integration. Never call local sample content “real-time”.

If a later approved requirement needs persistent citizen submissions, multiple editors, or automated data ingestion, reassess backend options then. Do not pre-build for hypothetical needs.

## Suggested minimal structure
```text
src/
  app/
    App.tsx
    router.tsx
  components/
  pages/
    HomePage.tsx
    CasePage.tsx
  data/
    cases.ts
    sources.ts
  styles/
    index.css
  main.tsx
```
Adjust to the generated project only when needed; do not force a restructure if a simpler valid structure already exists.

## Commands
The exact package manager and commands must match the committed lockfile. For an npm-based setup, the expected flow is:
```bash
git clone <repository-url>
cd <repository-folder>
npm install
npm run dev
```
Confirm the actual scripts in `package.json` before documenting them in README.
