# OM Dental Clinic — website

Single-page static site (HTML + CSS + one small config script). Free hosting on GitHub Pages.

## Edit your details

Everything about the clinic (name, phone, WhatsApp, address, hours, services, doctors, reviews)
lives in **`site.js`** at the top of the file. Edit it, commit, and the site updates.

- Photos: replace files in `images/` (keep the same filenames, or update the paths in `site.js`).
- The map is a keyless Google Maps embed driven by `mapsQuery` in `site.js`.

## Deploy (one time)

1. Push to the `main` branch.
2. On GitHub: repo → **Settings → Pages** → Source: **Deploy from a branch** → branch `main`, folder `/ (root)` → Save.
3. Site goes live at `https://<your-username>.github.io/om_dental_clinic` within a minute or two.

After that, every push to `main` redeploys automatically.

## Files

| File | Purpose |
|---|---|
| `index.html` | The page (sections: hero, services, doctors, about, reviews, contact) |
| `styles.css` | All styling |
| `site.js` | **Config** (edit this) + tiny renderer |
| `images/` | Photos (currently placeholders) |
