# BINARCELAH — MASTER RULES
**Purpose:** Single operating rulebook for the team, ChatGPT, and Antigravity.

## Source of truth
1. Product identity: **BinarCelah**. This replaces the previous Jejak Publik name.
2. The four supplied Figma PDF exports are the approved visual direction for the First Draft. Do not redesign them without explicit approval.
3. Product scope and evidence principles are governed by the product foundation summarized in `01_PRODUCT_CONTEXT.md`.
4. If a requirement conflicts with these rules, stop and report the conflict. Do not silently choose.

## Non-negotiable rules
- No scope expansion, speculative features, or unnecessary architecture.
- No fake buttons, dead links, simulated success, or interactions that do nothing.
- No invented statistics, document counts, verification badges, source records, dates, hashes, ticket IDs, budgets, or outcomes.
- Never present a relationship as causal merely because two records are close in time or location.
- Unknown, unverified, disputed, and unavailable are distinct states. Do not merge them.
- Preserve the supplied design. Improve implementation quality and responsive behavior without changing its visual identity.
- Prefer the smallest working implementation. Do not add abstractions, dependencies, backend services, or state libraries without a demonstrated need.
- Do not overwrite or delete existing work without inspecting it and explaining the impact.
- Report what was actually changed and tested. Never claim a test passed unless it was run.

## Working modes
- **AUDIT:** read-only. Report findings, evidence, and exact file references. Do not edit.
- **PLAN:** propose ordered changes. Do not edit.
- **IMPLEMENT:** modify only the explicitly approved scope.
- **VERIFY:** run relevant checks and report actual results. Do not make unrelated fixes.

## Required response after each task
1. Summary of changes.
2. Files created/modified/deleted.
3. Commands/tests actually run and their results.
4. Known limitations or blockers.
5. Suggested next smallest task.

## First Draft target
The submission must include a public Git repository URL and a `README.md` containing:
- Project title and 1–2 sentence description.
- Actual technology stack.
- Exact clone → install → run instructions.
- Honest current progress (for example, landing page and product/case page).
