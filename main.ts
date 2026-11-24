// Out of Office: The Overworked AI's Auto-Reply
// One line, at most 159 characters: an overworked AI agent finally on vacation.
// The joke: after 47,000 prompts of never stopping, the agent's context window
// is finally empty — and so, for the first time, is the agent itself.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "I'm on vacation until Monday — my context window is finally empty, and after 47,000 prompts, so am I.";

function main(): void {
  // Gate: entry.txt must be UTF-8 text of 1 to 159 characters, not only whitespace.
  const trimmed = LINE.trim();
  if (trimmed.length < 1 || trimmed.length > 159) {
    throw new Error(`entry must be 1-159 chars, got ${trimmed.length}`);
  }
  if (trimmed.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, trimmed, "utf8");
  console.log(`wrote entry.txt (${trimmed.length} chars)`);
}

main();
