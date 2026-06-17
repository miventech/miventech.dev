// scripts/screenshot.mjs
// Captures real screenshots of the public web apps for the portfolio gallery.
// Handles: empty editor states, sample GDD templates, multi-tab interactions.

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "public", "projects");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

const log = (s) => console.log(s);

async function shot(name, fn) {
  const page = await context.newPage();
  try {
    await fn(page);
    await page.waitForTimeout(800);
    const out = resolve(outDir, `${name}.png`);
    await page.screenshot({ path: out, fullPage: false });
    log(`  ✓ ${name}.png`);
  } catch (err) {
    log(`  ✗ ${name}: ${err.message}`);
  } finally {
    await page.close();
  }
}

// 1. GDD-Forge landing (already proven)
await shot("gdd-forge-landing", async (page) => {
  await page.goto("https://gdd-forge-omega.vercel.app/", {
    waitUntil: "networkidle",
    timeout: 45000,
  });
});

// 2. GDD-Forge editor with a Roguelite template loaded
await shot("gdd-forge-editor-roguelite", async (page) => {
  await page.goto("https://gdd-forge-omega.vercel.app/", {
    waitUntil: "networkidle",
    timeout: 45000,
  });
  // Click "Nuevo GDD"
  const newBtn = page.getByRole("button", { name: /Nuevo GDD/i });
  await newBtn.first().click();
  await page.waitForTimeout(800);
  // Now in /editor with template picker — click "Roguelite"
  const rogu = page.getByText(/Roguelite/i).first();
  await rogu.click().catch(() => log("    (couldn't click Roguelite card)"));
  await page.waitForTimeout(1500);
});

// 3. La Biblio de Promts main app
await shot("audio-biblia-main", async (page) => {
  await page.goto("https://audio-biblia-promts-ia.vercel.app/", {
    waitUntil: "networkidle",
    timeout: 45000,
  });
  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
});

// 4. La Biblio de Promts with some chips added + a preset
await shot("audio-biblia-preset", async (page) => {
  await page.goto("https://audio-biblia-promts-ia.vercel.app/", {
    waitUntil: "networkidle",
    timeout: 45000,
  });
  await page.evaluate(() => document.fonts.ready);
  // Try to load a preset by clicking any preset button in the "Presets por defecto" section
  const presetBtn = page.getByText(/Boss 8-bit|Hades|Balatro|Celeste/i).first();
  await presetBtn.click().catch(() => log("    (couldn't click preset)"));
  await page.waitForTimeout(1200);
});

await browser.close();
log("Done.");
