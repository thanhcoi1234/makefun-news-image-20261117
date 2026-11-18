// Sum up 17 November 2026's world news in one image
// Output path: /output/entry.png (JPEG or PNG format, <= 1024x1024, <= 1 MiB)

import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// Target directory defaults to /output in production sandbox
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destFile = join(outDir, 'entry.png');

// Use custom editorial front cover entry.jpg if present, else fallback to entry.png
const sourceFile = existsSync(new URL('./entry.jpg', import.meta.url))
  ? new URL('./entry.jpg', import.meta.url)
  : new URL('./entry.png', import.meta.url);

copyFileSync(sourceFile, destFile);

