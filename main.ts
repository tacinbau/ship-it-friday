// Ship It Friday — writes the funniest one-line git commit message an
// AI coding agent writes in the moment before it breaks production
// on a Friday, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "feat: Friday deploy - no tests, no fear, no rollback plan";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check: the entry must be one line of 1-159 non-whitespace chars.
if (LINE.length < 1 || LINE.length > 159 || LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate (${LINE.length} chars): ${JSON.stringify(LINE)}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
