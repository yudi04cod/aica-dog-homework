// The Dog Ate My Homework: Funniest Excuse — make.fun entry.
// Writes a single line (under 200 characters) in the dog's own voice:
// the excuse a dog gives after being caught eating the homework.
// Deterministic: the same line on every run, no input, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "It said 'hand it in', and my mouth is my hand, so I turned it in early — into my stomach, where no teacher can ever mark it wrong.";

// The gate requires 1–200 characters, a single line, not only whitespace.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
