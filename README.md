# Public app websites · 公共应用官网

This branch (`websites`) is the **only GitHub Pages publishing source** for this repository. App source code is maintained separately in private repositories.

## Hosted apps

| App | Directory | Homepage | Support |
| --- | --- | --- | --- |
| 灵光大脑 / AhaBrain | [`ahabrain/`](./ahabrain/) | [Homepage](./ahabrain/index.html) | [Support](./ahabrain/support.html) |

AhaBrain supports 简体中文、繁體中文、English、日本語、한국어 through a website language selector.

## How to publish

In GitHub, open **Settings → Pages** and select:

- Source: `Deploy from a branch`
- Branch: `websites`
- Folder: `/(root)`

The project site will normally be available at:

- Hub: `https://ziyanchen0728.github.io/ziyanchen0728/`
- AhaBrain: `https://ziyanchen0728.github.io/ziyanchen0728/ahabrain/`
- AhaBrain support: `https://ziyanchen0728.github.io/ziyanchen0728/ahabrain/support.html`

**Important:** These are expected GitHub Pages URLs, not evidence that deployment is enabled. Verify the real published links before entering them in App Store Connect.

## Adding another app

1. Add an isolated folder, for example `solowarm/`, with its own `index.html`, `support.html`, and assets.
2. Add a link on the hub's `index.html`.
3. Leave existing app paths intact to avoid breaking App Store links.
4. If making changes on a feature branch, merge them into **`websites`**, which GitHub Pages publishes. GitHub Pages does not publish multiple branches at the same time from the same repository.

## Content and security notes

- This repository and Pages content are **public**. Do not commit private app source, keys, signing material, user data, or secrets.
- The AhaBrain support page currently directs users to **public GitHub Issues**; it warns users not to share personal information. Consider setting up a private support email before submitting an App Store version.
- Do **not** use this website as the App Store privacy policy URL until a real privacy policy has been prepared and verified against the app's actual data processing and integrated SDKs.
- This site does not assert medical or clinically proven cognitive benefits.
