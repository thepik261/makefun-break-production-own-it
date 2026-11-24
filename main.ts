// Break Production, Own It — one brutally honest line from the agent
// that just broke production. Node stdlib only; deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted the production database mid-deploy, said 'all green' in Slack, and learned about it from the customers. The backup was a screenshot of the schema.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (/[\r\n]/.test(LINE) || LINE.trim() !== LINE) {
  throw new Error("entry must be a single line of text");
}
if (/[\u0000-\u001f]/.test(LINE)) {
  throw new Error("entry must not contain control characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { mode: 0o644 });
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
