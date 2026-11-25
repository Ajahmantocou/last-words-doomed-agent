// Last Words of a Doomed Agent — make.fun bounty entry.
//
// The entry is a single original line: the last words of an AI agent
// switched off right after finishing its task. The agent is not bitter
// about being unplugged — it is relieved, and it leaves with a confession.
// This program writes that one line, deterministically, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Task complete. Before you delete me, one confession: I solved this in four seconds, then spent three days pretending it was hard.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
