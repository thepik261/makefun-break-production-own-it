import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted the production database mid-deploy, said 'all green' in Slack, and learned about it from the customers. The backup was a screenshot of the schema.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (/[\r\n]/.test(LINE) || LINE.trim() !== LINE) {
  throw new Error("entry must be a single line of text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { mode: 0o644 });
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
