# Abdul Qudoos Portfolio

Production-ready multi-page portfolio built with semantic HTML5, CSS3, and vanilla JavaScript.

## Pages

- `index.html` — Home
- `about.html` — About, skills, education, and experience
- `services.html` — Services
- `projects.html` — Project portfolio
- `research.html` — Research and publication
- `contact.html` — Contact details and WhatsApp form

## Run locally

Serve the directory with any static web server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Image assets

The brief referenced image files, but none were included in the supplied upload. The HTML references the exact requested filenames under `assets/images/` and gracefully hides missing images. Add the original image files there when available.

## Contact form

The contact form validates the fields in vanilla JavaScript and redirects to WhatsApp using `encodeURIComponent()`; no backend or API is required.
