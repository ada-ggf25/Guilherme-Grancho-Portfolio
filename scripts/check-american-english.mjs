#!/usr/bin/env node

import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT_DIR = process.cwd();
const TARGET_PATHS = ["src/app", "src/components", "src/resources"];
const ALLOWED_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".md",
  ".mdx",
  ".txt",
]);

const BRITISH_TO_AMERICAN = new Map([
  ["analyse", "analyze"],
  ["analysed", "analyzed"],
  ["analysing", "analyzing"],
  ["behaviour", "behavior"],
  ["colour", "color"],
  ["colours", "colors"],
  ["favourite", "favorite"],
  ["favourites", "favorites"],
  ["favour", "favor"],
  ["favourable", "favorable"],
  ["favouring", "favoring"],
  ["fibre", "fiber"],
  ["fulfil", "fulfill"],
  ["fulfilment", "fulfillment"],
  ["initialise", "initialize"],
  ["initialised", "initialized"],
  ["labelling", "labeling"],
  ["licence", "license"],
  ["maximise", "maximize"],
  ["maximised", "maximized"],
  ["minimise", "minimize"],
  ["minimised", "minimized"],
  ["modelling", "modeling"],
  ["normalise", "normalize"],
  ["normalised", "normalized"],
  ["optimise", "optimize"],
  ["optimised", "optimized"],
  ["optimisation", "optimization"],
  ["organisation", "organization"],
  ["organisations", "organizations"],
  ["organise", "organize"],
  ["organised", "organized"],
  ["organising", "organizing"],
  ["prioritise", "prioritize"],
  ["prioritised", "prioritized"],
  ["recognise", "recognize"],
  ["recognised", "recognized"],
  ["specialise", "specialize"],
  ["specialised", "specialized"],
  ["summarise", "summarize"],
  ["summarised", "summarized"],
  ["theatre", "theater"],
  ["travelling", "traveling"],
  ["utilise", "utilize"],
  ["utilised", "utilized"],
  ["whilst", "while"],
]);

const escapedWords = [...BRITISH_TO_AMERICAN.keys()]
  .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  .join("|");
const britishSpellingsPattern = new RegExp(`\\b(${escapedWords})\\b`, "gi");

async function collectFiles(directoryPath) {
  const entries = await readdir(directoryPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(absolutePath)));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (ALLOWED_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(absolutePath);
    }
  }

  return files;
}

async function resolveScanFiles() {
  const scanFiles = [];

  for (const targetPath of TARGET_PATHS) {
    const absolutePath = path.join(ROOT_DIR, targetPath);

    try {
      const pathStats = await stat(absolutePath);
      if (pathStats.isDirectory()) {
        scanFiles.push(...(await collectFiles(absolutePath)));
      } else if (pathStats.isFile()) {
        scanFiles.push(absolutePath);
      }
    } catch {
      // Ignore missing paths to keep the checker flexible.
    }
  }

  return scanFiles;
}

function buildLineIndex(fileText) {
  const lineStarts = [0];
  for (let index = 0; index < fileText.length; index += 1) {
    if (fileText[index] === "\n") {
      lineStarts.push(index + 1);
    }
  }
  return lineStarts;
}

function lineFromOffset(offset, lineStarts) {
  let low = 0;
  let high = lineStarts.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (lineStarts[mid] <= offset) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high + 1;
}

async function main() {
  const filesToScan = await resolveScanFiles();
  const findings = [];

  for (const filePath of filesToScan) {
    const content = await readFile(filePath, "utf8");
    const lineStarts = buildLineIndex(content);
    britishSpellingsPattern.lastIndex = 0;

    let match;
    while ((match = britishSpellingsPattern.exec(content)) !== null) {
      const foundWord = match[0];
      const normalisedWord = foundWord.toLowerCase();
      const replacement = BRITISH_TO_AMERICAN.get(normalisedWord);

      if (!replacement) {
        continue;
      }

      findings.push({
        file: path.relative(ROOT_DIR, filePath),
        line: lineFromOffset(match.index, lineStarts),
        foundWord,
        replacement,
      });
    }
  }

  if (findings.length === 0) {
    console.log("American English check passed.");
    return;
  }

  console.error("American English check failed. Replace British spellings:");
  for (const finding of findings) {
    console.error(
      `- ${finding.file}:${finding.line} uses "${finding.foundWord}". Suggested: "${finding.replacement}".`,
    );
  }
  process.exit(1);
}

main().catch((error) => {
  console.error("American English check failed with an unexpected error.");
  console.error(error);
  process.exit(1);
});
