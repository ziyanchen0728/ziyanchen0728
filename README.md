# Public app websites · 公共应用官网

This branch (`websites`) is the **only GitHub Pages publishing source** for this repository. App source code is maintained separately in private repositories.

## Hosted apps

| App | Directory | Homepage | Support | Privacy | Terms |
| --- | --- | --- | --- | --- | --- |
| 灵光大脑 / AhaBrain | [`ahabrain/`](./ahabrain/) | [Homepage](./ahabrain/index.html) | [Support](./ahabrain/support.html) | [Privacy policy](./ahabrain/privacy.html) | [User agreement](./ahabrain/terms.html) |

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
- AhaBrain privacy: `https://ziyanchen0728.github.io/ziyanchen0728/ahabrain/privacy.html`
- AhaBrain terms: `https://ziyanchen0728.github.io/ziyanchen0728/ahabrain/terms.html`

**Important:** These are expected GitHub Pages URLs, not evidence that deployment is enabled. Verify the real published links before entering them in App Store Connect.

## Adding another app

1. Add an isolated folder, for example `solowarm/`, with its own `index.html`, `support.html`, and assets.
2. Add a link on the hub's `index.html`.
3. Leave existing app paths intact to avoid breaking App Store links.
4. If making changes on a feature branch, merge them into **`websites`**, which GitHub Pages publishes. GitHub Pages does not publish multiple branches at the same time from the same repository.

## Content and security notes

- This repository and Pages content are **public**. Do not commit private app source, keys, signing material, user data, or secrets.
- The AhaBrain support page now provides direct email contact, using the developer contact address already published on the owner's other public websites. Confirm that the mailbox is actively monitored before submitting an App Store version.
- A five-language privacy policy is provided at `ahabrain/privacy.html`, drafted from a source review of local game history, nickname/avatar, local notifications, optional legacy step access, StoreKit, and support email. **Before publishing the app, verify that the signed release build and App Store privacy disclosures match the policy, including all embedded third-party SDKs.**
- This site does not assert medical or clinically proven cognitive benefits.
