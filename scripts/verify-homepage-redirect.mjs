#!/usr/bin/env node
/**
 * Verify that /en/homepage/homepage/... redirects to /en (307) and /en loads (200).
 * Run with dev server up: npm run verify-redirect
 * Optional: BASE_URL=http://localhost:3001 npm run verify-redirect
 */
const BASE = process.env.BASE_URL || "http://localhost:3000";

async function main() {
  const longPath = `${BASE}/en/homepage/homepage/homepage`;
  const canonicalPath = `${BASE}/en`;

  console.log("Testing homepage redirect fix...\n");

  const resLong = await fetch(longPath, { redirect: "manual" });
  const location = resLong.headers.get("location") || "";
  const okRedirect =
    (resLong.status === 307 || resLong.status === 302) &&
    (location.endsWith("/en") || location.endsWith("/en?"));

  console.log(`  ${longPath}`);
  console.log(`  → ${resLong.status} ${location || "(no Location)"}`);
  if (!okRedirect) {
    console.log("\n  ❌ Expected 307 redirect to /en");
    process.exit(1);
  }
  console.log("  ✓ Redirect to /en\n");

  const resEn = await fetch(canonicalPath, { redirect: "manual" });
  const okPage = resEn.status === 200;
  console.log(`  ${canonicalPath}`);
  console.log(`  → ${resEn.status}`);
  if (!okPage) {
    console.log("\n  ❌ Expected 200 OK");
    process.exit(1);
  }
  console.log("  ✓ Page loads\n");
  console.log("All checks passed. No connection failed.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  console.error("\nMake sure the dev server is running: npm run dev");
  process.exit(1);
});
