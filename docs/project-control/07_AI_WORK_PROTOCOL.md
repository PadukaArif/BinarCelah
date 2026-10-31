# BINARCELAH — AI WORK PROTOCOL
Use this protocol in ChatGPT and Antigravity.

## Before editing
1. Read `00_MASTER_RULES.md` and the relevant project docs.
2. Inspect the current repository state and relevant files.
3. Restate the exact task and files likely to change.
4. If a requirement is ambiguous or conflicts with the approved design, ask before editing.
5. Do not assume files, APIs, datasets, credentials, or completed work exist.

## During implementation
- Work only on the requested task.
- Preserve the approved Figma design and product scope.
- Prefer the smallest implementation that satisfies the acceptance condition.
- Do not refactor unrelated files.
- Do not add backend services or dependencies without explicit justification.
- Do not create fake data or fake interactions.
- Keep changes reviewable and avoid giant all-at-once rewrites.

## After implementation
Return:
- What changed.
- Exact files changed.
- Commands run and actual results.
- Manual checks completed.
- Known limitations / remaining work.
- Suggested next task.

## Prompt template
```text
Read the BinarCelah project-control Markdown files before doing anything.

MODE: [AUDIT / PLAN / IMPLEMENT / VERIFY]
TASK: [one precise task]
SCOPE: [exact page/component/behavior]
ACCEPTANCE CRITERIA:
- [observable condition]
- [observable condition]

STRICT CONSTRAINTS:
- Preserve the approved Figma PDF design.
- Do not expand scope or invent data.
- Do not add a backend or dependencies unless the task proves they are necessary.
- Do not modify unrelated files.
- Do not create fake interactions.
- If blocked or ambiguous, stop and report instead of guessing.

Before editing, inspect the relevant files and report the intended changes.
After editing, report files changed, checks actually run, results, and limitations.
```
