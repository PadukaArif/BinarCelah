# BINARCELAH — CODE & GIT RULES

## Code
- Keep components focused and readable.
- Avoid premature abstractions, generic frameworks, global state libraries, and unnecessary custom hooks.
- Use TypeScript types for case, event, evidence, source, and gap records.
- Keep content/data separate from presentation where that improves clarity.
- Use semantic HTML and accessible labels.
- Do not suppress TypeScript, lint, or build errors just to make checks pass.
- Do not add dependencies for functionality that can be handled simply with existing tools.

## Git
- Commit in small, meaningful units.
- Suggested format: `feat: build home page`, `feat: add case workspace`, `fix: correct mobile navigation`, `docs: add first draft README`.
- Do not commit `.env`, API keys, credentials, private data, build output, or local dependencies.
- Before each commit: inspect `git diff`, run the relevant check, and confirm only intended files changed.
- Do not rewrite shared history or force-push unless explicitly agreed by the team.

## Minimum verification
- `npm run build` (or the actual project build script).
- Run the app and manually inspect Home → Case navigation.
- Test visible buttons, links, search, and expandable controls.
- Inspect desktop and mobile widths.
- Check browser console for runtime errors.
- Report checks not performed; do not imply they passed.
