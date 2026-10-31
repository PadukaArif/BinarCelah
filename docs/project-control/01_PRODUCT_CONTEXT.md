# BINARCELAH — PRODUCT CONTEXT
**Status:** Working project context for First Draft Submission.

## Identity
BinarCelah is the product name. The earlier working name Jejak Publik is retired for this project.

## Product purpose
Help Indonesian citizens understand public issues by tracing available evidence across reported events, government responses, public resources, implementation, outcomes, and unresolved information gaps.

## Core journey
**Discover → Understand → Trace → Evaluate → Follow up**

Users should be able to:
- Understand what is reported to have happened.
- Inspect what available sources actually establish.
- Follow relationships between records when evidence supports them.
- See what remains unknown, disputed, or not yet published.
- Find appropriate official follow-up channels.

## Product principles
- Evidence before conclusions. Every factual claim must be traceable to its source.
- Relationships require justification. Time or geographic proximity alone does not prove a connection.
- Unknown is a valid outcome. “Belum diketahui”, “belum ditemukan dalam penelusuran”, and “belum dipublikasikan” are not interchangeable.
- Show source identity, publication/observation date, relevant period, link, update information when available, and limitations.
- Citizen submissions are proposals until reviewed; never publish them as established facts automatically.
- Explain technical terms in plain language and reveal detail progressively.

## MVP requirements from the existing PRD
P0:
1. Issue discovery and basic issue listing.
2. Detailed case page.
3. Case chronology.
4. Evidence and source records.
5. Evidence relationship tracing.
6. Information gaps and conflicting-source presentation.
7. Source history and correction history.
8. Citizen source/correction submission with a review state.
9. Links to relevant official follow-up channels.
10. Responsive layouts and essential accessibility.
11. Clear loading, empty, error, and unavailable-data states.

For the First Draft deadline, implement a demonstrable vertical slice first: Home/issue discovery + one case workspace with navigable chronology/evidence/gaps sections. Only implement contribution submission if it can be honestly stored and reviewed; otherwise present a clearly labeled non-operational future workflow or omit it.

P1 (only if time and data permit): additional validated cases, advanced filters, geographic visualizations, automated source-update checks, explainable case prioritization.

Out of scope:
- Comprehensive real-time monitoring of all Indonesian issues.
- Integration with every government portal/API.
- Full in-platform formal complaint management.
- Automatic publication of unverified submissions.
- Automatic allegations of wrongdoing.
- Accountability scores without validated methodology.
- Budget execution or impact claims without supporting records.

## Case and data integrity
The supplied mockups include specific counts, verification statements, a PPID ticket ID, hashes, budget/procurement claims, and other figures. Treat these as **unverified design content**, not approved facts. Do not publish them as real unless the team can identify and verify the underlying primary sources.

When no verified content is available, use a clearly labeled empty/research state or a transparent illustrative example. Do not disguise placeholder content as real evidence.
