# hsigstad.github.io — personal website

Jekyll site deployed via GitHub Pages at https://hsigstad.github.io/.

## What's hosted here

- Personal academic landing page (`index.html`, `_pages/`)
- Project-specific subsites under top-level dirs (`procure/`, `saude/`, `bind/`)
- Course book pages (`book-gra6296.html`, `book.html`)
- Data viewers (`viewer.html`)

## How project sites get here

Research projects have their own GitHub Pages via `gh-pages` branches
(e.g. `hsigstad/deterrence`). Those deploy automatically via `bash build.sh site`.

This repo is used for *additional* hosting when Henrik wants something on his
personal URL. The `/site` skill asks whether to also publish here. If yes,
the built site is rsynced into a top-level directory (e.g. `procure/`) and
committed + pushed.

## Notes

- This is a separate repo from `~/research/` — changes here need their own
  commit and push.
- Jekyll config is in `_config.yml`. The site uses kramdown + rouge.
