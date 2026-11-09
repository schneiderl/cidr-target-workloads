# CI lab target workloads

Controlled TypeScript workloads for [CIDR](https://github.com/schneiderl/cidr). Baseline commits are pinned in the lab manifests. Only `ci/plan.json` may change during an experiment.

Run `npm ci --ignore-scripts && node ci/prepare.ts && npm test` with Node 24. Workflow dispatch uses standard public Ubuntu runners, read-only repository permissions, and no repository secrets. Test code, dependency locks, execution reporting, and workflow commands remain protected. CI plans control dependency reuse and assignment of the complete existing test inventory.

The PBKDF2 workload represents deterministic CPU work; it is a controlled benchmark, not a production service. Results may show startup overhead or cache variance outweighing benefits.
