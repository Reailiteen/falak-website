#!/usr/bin/env node
/**
 * Open the app in headless browser and save a screenshot.
 * Usage: BASE_URL=http://127.0.0.1:3000 node scripts/screenshot-app.mjs
 */
const base = process.env.BASE_URL || "http://127.0.0.1:3000";
const out = "falak-homepage-ok.png";

async function main() {
  const { chromium } = await import("playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${base}/en`, { waitUntil: "domcontentloaded", timeout: 10000 });
  await page.screenshot({ path: out, fullPage: false });
  await browser.close();
  console.log("Screenshot saved to", out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
