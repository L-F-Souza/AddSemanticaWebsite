# SEMANTICA — Hugo Site

## Project Structure

```
semantica/
│
├── hugo.toml                        # Site config, menus, params
│
├── data/
│   └── docs-sidebar.yaml            # ← DEFINE SIDEBAR GROUPS HERE
│
├── content/                         # ← ALL YOUR CONTENT LIVES HERE
│   ├── _index.md                    # 🏠 Home page
│   ├── about/
│   │   └── _index.md                # 👥 About page
│   └── docs/
│       ├── _index.md                # 📖 Docs landing
│       ├── getting-started/         # One subfolder per sidebar group
│       │   ├── introduction.md      # weight: 1
│       │   ├── installation.md      # weight: 2
│       │   └── quickstart.md        # weight: 3
│       ├── core-concepts/
│       │   ├── design-tokens.md
│       │   ├── theming.md
│       │   └── typography.md
│       ├── components/
│       │   ├── button.md
│       │   ├── input.md
│       │   └── card.md
│       └── accessibility/
│           ├── overview.md
│           └── testing.md
│
├── layouts/                         # Hugo HTML templates
│   ├── _default/
│   │   ├── baseof.html              # Shared base: <head>, nav, footer
│   │   └── single.html              # Fallback layout
│   ├── index.html                   # Home layout
│   ├── about/single.html            # About layout
│   └── docs/single.html             # Docs layout (sidebar + TOC)
│
├── static/
│   ├── css/
│   │   ├── main.css                 # Home styles
│   │   ├── about.css                # About styles
│   │   └── docs.css                 # Docs styles
│   └── js/
│       └── docs.js                  # Docs accordion, TOC, search
│
├── Dockerfile
└── docker-compose.yml
```

---

## Adding your own .md files to docs

### 1. Drop your files into the right subfolder

```
content/docs/<group-folder>/your-file.md
```

The subfolder name must match the `folder` value in `data/docs-sidebar.yaml`.

### 2. Add these fields to each file's front matter

```yaml
---
title: "Your Page Title"    # already have this ✓
date: 2026-01-01            # already have this ✓
weight: 2                   # order within the sidebar group (1 = first)
prev: "group/previous-page" # path relative to /docs/ — for pagination
next: "group/next-page"     # path relative to /docs/ — for pagination
---
```

### 3. To add a new sidebar group

1. Add an entry to `data/docs-sidebar.yaml`
2. Create the matching subfolder in `content/docs/`
3. Add your `.md` files to that folder

---

## Running with Docker in VS Code

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [VS Code Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

### Start
```bash
docker compose up
```
Open **http://localhost:1313** — live reloads on every save.

### Stop
```bash
docker compose down
```
