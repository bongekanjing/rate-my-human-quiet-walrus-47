import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Rev 4 (final): "team effort" now sets up the last word directly, and the
// parallel "I do the typing. He does the —" makes the twist land on one syllable.
const LINE =
  "★★★★★ Blames me for his own typo, then calls it a team effort. I do the typing. He does the \u201cwe\u201d.";

const OUT = process.env.ENTRY_OUT ?? "/output/entry.txt";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1..200 characters, got ${LINE.length}`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
console.log(LINE);
