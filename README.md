# Quartz Vector Skin Demo

An independent, bilingual showcase of [quartz-skin-vector-2022](https://github.com/Copartiper/quartz-skin-vector-2022), a Quartz skin adapted from MediaWiki's Vector 2022.

**Live demo:** https://cromemadnd.github.io/quartz-vector-demo/

This demonstration is not affiliated with, sponsored by, or endorsed by the Wikimedia Foundation. Example articles describe fictional places. The deployed interface is English, with English and Chinese articles available side by side.

## Development

```sh
npm ci
npm run build:demo
```

The build script temporarily selects `quartz.config.en.yaml`, installs the pinned plugin, builds `content/` into `public/`, and restores `quartz.config.yaml`. The latter remains the Chinese configuration for local development:

```sh
npx quartz build --serve
```

Both configurations reference the published plugin at an explicit Git commit rather than a developer's local filesystem. To update the skin, change that commit in both configuration files, rebuild, and verify the demonstration before publishing.

## Deployment

Push to `main` to run `.github/workflows/deploy-demo.yaml`. GitHub Actions builds with the English configuration, verifies representative pages and project-subpath URLs, and deploys the generated artifact to GitHub Pages. No custom domain or deployment token is needed.

The repository contains Quartz's history and source. Its original upstream remains https://github.com/jackyzha0/quartz. Workflows inherited from upstream are guarded to run only in the official Quartz repository; the demo workflow handles publication here.

## Content and licenses

- `content/index.md`: English landing page with bilingual project identification.
- `content/features/index-en.md`: English feature guide.
- `content/features/index.md`: Chinese feature guide.
- `content/features/infobox-en.md` and `infobox.md`: English and Chinese sample articles.
- `content/features/formatting.md`: original formatting fixture.

Quartz is distributed under the MIT license; see [LICENSE.txt](LICENSE.txt). The adapted skin is a separate project under GPL-2.0-or-later; see its [license and upstream notices](https://github.com/Copartiper/quartz-skin-vector-2022). This repository does not redistribute Wikipedia articles.

See [README.demo-languages.md](README.demo-languages.md) for language and configuration details.
