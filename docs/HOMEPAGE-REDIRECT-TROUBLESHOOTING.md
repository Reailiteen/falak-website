# Why you see `/en/homepage/homepage/...` in the browser

If **every time** you run `pnpm run dev` (in this project or others) the browser shows:

`http://localhost:3000/en/homepage/homepage/homepage/...`

the cause is **not** this repo’s redirect logic. This project only redirects **to** `/en` or `/ar`; it never redirects **to** that long URL.

## What’s actually happening

Something **outside** the project is opening or restoring that URL when you start dev:

1. **Browser “Continue where you left off” / restored session**  
   The last time you had `localhost:3000` open it was on that long URL. When your IDE or system “opens” `localhost:3000`, the browser restores that tab and shows the same long URL again.

2. **Cursor / VS Code “Open in Browser” or port detection**  
   If your editor opens a browser tab when it sees the dev server, it may be reusing a stored/cached URL for `localhost:3000` instead of plain `http://localhost:3000` or `http://localhost:3000/en`.

3. **Bookmark or saved tab**  
   A bookmark or pinned tab for that long URL will keep bringing you back to it.

4. **Browser extension**  
   An extension that rewrites or redirects `localhost` URLs could be sending you to that path.

## What to do

- **After starting dev, type the URL yourself**  
  In the address bar go to: **`http://localhost:3000/en`** (or `http://localhost:3000`).  
  If the app loads correctly, the issue is **which URL is being opened**, not the app.

- **Stop anything from auto-opening the browser**  
  Run dev without opening a browser:
  ```bash
  pnpm run dev:no-open
  ```
  Then manually open **`http://localhost:3000/en`**.

- **Clear localhost in the browser**  
  For `http://localhost:3000`:
  - Clear site data (e.g. Application → Storage → Clear site data), or  
  - Use a private/incognito window and go to `http://localhost:3000/en`.

- **In this project**  
  We have a route that redirects any `/en/homepage/...` or `/ar/homepage/...` to `/en` or `/ar`. So even if you land on the long URL once, you should get a single redirect to `/en`. If you still see the long URL, it’s being opened again by the browser/IDE/extension, not by the app.

## Summary

- The long `/en/homepage/homepage/...` URL is coming from **your environment** (browser session, IDE, or extension), not from this codebase.
- Use **`http://localhost:3000/en`** manually, run **`pnpm run dev:no-open`** if you want no auto-open, and clear or avoid reusing the old localhost tab/session.
