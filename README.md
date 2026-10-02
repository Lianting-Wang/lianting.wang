# Lianting Wang

Bilingual personal website for Lianting Wang, a Computer Science PhD student at Rensselaer Polytechnic Institute. Built with Astro and published with GitHub Pages at **https://lianting.wang**.

## Develop

Use Node.js 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

The home page selects a language from the visitor's saved choice or first browser language: Chinese variants use simplified Chinese; everything else uses English. Explicit `/en/` and `/zh/` links always display their requested language. The language switch preserves the current section and stores the manual preference locally. Without JavaScript, all content and language links remain readable.

## Edit content

- `src/data/site.ts`: profile, both language versions, research descriptions, publications, projects, education, and experience.
- `src/assets/portrait.jpg`: the selected portrait. Astro generates an optimized WebP for the page.
- `src/styles/global.css`: colours, typography, sidebar, and responsive layout.

Content is maintained in files, with no CMS or visitor-facing backend. Publications keep their original English titles and citations, with a localized description.

The selected projects are Nginxxx and Captive Portal Education. To feature another project later, append an entry to `projects` in `src/data/site.ts` with English and Chinese descriptions, tags, and a public URL. Private projects remain outside this array and are not rendered as placeholders.

`profile.chineseName` is optional and currently `null`. Leave it `null`, empty, or whitespace-only to display **Lianting Wang** in both languages. Set it to a Chinese name to show the English name first on the English page and the Chinese name first on the Chinese page, with the other name underneath. Page titles, descriptions, and structured data follow the same setting.

### Add the public CV

1. Add the reviewed public CV as `public/cv/Lianting_Wang_CV.pdf`.
2. Set `profile.cv` in `src/data/site.ts` to `/cv/Lianting_Wang_CV.pdf`.
3. Run the checks and publish.

The supplied private resume is **not included** in the project or public output.

## Verify

```sh
npm run check
npm test
npm run build
npm run preview
```

If the host restricts writes outside this checkout, prefix the Astro commands with `ASTRO_TELEMETRY_DISABLED=1`.

Check the production output at desktop and phone widths, language switching at a section anchor, keyboard focus, portrait loading, and publication/project links.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` validates and publishes pushes to `main`. Select **GitHub Actions** in repository Settings → Pages. Configure the custom domain as `lianting.wang` and enable HTTPS once the certificate is ready. The static output contains `CNAME`, `robots.txt`, and a sitemap with both locale URLs.

See [DEPLOYMENT.md](DEPLOYMENT.md) for domain configuration and first-release steps.
