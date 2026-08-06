# Lewis &amp; Sons Landscape

Single-page marketing site for Lewis &amp; Sons Landscape — lawn care &amp; landscaping in
Jacksonville and Clay County, Florida.

Pure HTML/CSS/vanilla JS. No frameworks, no build step.

## Files
- `index.html` — all page content/sections
- `styles.css` — styling (deep greens + warm accent, Poppins/Inter)
- `script.js` — mobile menu, form handling, footer year
- `logo.png` — **your logo goes here** (see below)
- `CNAME` — custom domain for GitHub Pages (lewissonslandscape.com)

## Add your logo
Save your logo image into this folder as **`logo.png`** (transparent PNG works best,
roughly 400–600px wide). It's already wired into the header and footer.

## Fill in before going live
Search `index.html` for these placeholders and replace them:
- `(000) 000-0000` → your real phone number (appears in the contact section, footer, and `tel:` links)
- `info@lewissonslandscape.com` → your real email (if different)
- Service-area town list in the footer, if you'd like to adjust it

The contact form currently shows a success message but does **not** send email yet.
To make it actually deliver, point the `<form>` at a service like
[Formspree](https://formspree.io) or Netlify Forms (a one-line change in `index.html`).

## Preview locally
Just open `index.html` in a browser, or run:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Deploy (GitHub Pages)
```
git add .
git commit -m "Build full Lewis & Sons Landscape website"
git branch -M main
git remote add origin https://github.com/Oakaloke/lewissonslandscape.com.git
git push -u origin main --force
```
Then in the repo: **Settings → Pages → Deploy from branch → `main` / root**, and add
`lewissonslandscape.com` as the custom domain (the `CNAME` file already sets this).
