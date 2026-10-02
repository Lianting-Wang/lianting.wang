# First release

## Repository and Pages

1. Use the public repository `Lianting-Wang/Lianting-Wang.github.io` (check the authenticated account before creation; do not overwrite an existing repository).
2. Push this project to `main`.
3. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Wait for the **Deploy website** workflow to finish successfully.
5. Set the custom domain to **lianting.wang** in Pages settings.

The remote uses SSH, so use the owner's configured GitHub authentication. These commands have not been executed by Codex. After enabling Pages with **GitHub Actions**, rerun the workflow from the Actions tab if the initial run occurred before Pages was enabled.

The site configuration already uses `https://lianting.wang` with no repository-path prefix. This is a static site; no Node process is needed on the hosting server.

## Cloudflare DNS

The domain's publicly visible name servers were Cloudflare as of 2026-10-02. The apex and `www` currently point through Cloudflare to an existing origin. Inspect and save the actual DNS records in the dashboard before changing them; the public Cloudflare IPs do not reveal that origin.

Configure only the apex and `www` records needed for this website. Preserve MX, TXT, and all unrelated subdomain records.

| Type | Name | Target |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `lianting-wang.github.io` |

Use **DNS only** for these records during domain and HTTPS verification. Replace conflicting apex/`www` web records rather than leaving the old origin alongside the Pages targets. Optional IPv6 records, when used, must also be the current GitHub Pages IPv6 targets; do not retain old origin IPv6 records.

Use GitHub's suggested TXT record to verify ownership of the custom domain. Do not create a wildcard record. GitHub Pages can redirect `www` to the configured apex domain once both resolve correctly.

After GitHub reports a valid DNS check and issues the certificate, enable **Enforce HTTPS**. Verify the root, `/en/`, `/zh/`, and `www`, including their language links and portrait asset.

If a domain change needs to be rolled back, restore the saved apex and `www` records. Keep the website repository and build intact.

## References

- [GitHub custom-domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [GitHub Pages HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Astro GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
