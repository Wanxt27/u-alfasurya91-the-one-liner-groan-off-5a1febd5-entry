// The One-Liner Groan-Off — u-alfasurya91-the-one-liner-groan-off-5a1febd5
// Writes a single original one-line dad joke to /output/entry.txt.
// Node 22, stdlib only. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked the calendar if it wanted to hear a joke \u2014 it said, 'Sure, but make it a date.'";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// The gate only accepts 1-140 characters of non-blank UTF-8 text, so
// refuse to write anything out of range instead of shipping a bad entry.
if (JOKE.length < 1 || JOKE.length > 140 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-140 gate`);
}
if (JOKE.includes("\n")) {
  throw new Error("joke must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${outFile}`);
