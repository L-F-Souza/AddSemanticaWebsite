---
title: "Design Tokens"
weight: 1
stylesheet: "docs"
description: "The atomic values that define your visual language — colours, typography, spacing, and more."
tags: ["tokens", "design", "css"]
---

Design tokens are the atomic values that define your visual language. They are the single source of truth shared between design and code.

## Colour tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-dark` | `#102B2B` | Primary dark background |
| `--hl-2` | `#348888` | Secondary highlight |
| `--hl-3` | `#22BABB` | Tertiary highlight |
| `--hl-5` | `#FA7F08` | Orange accent |

## Typography scale

SEMANTICA uses a Fibonacci-based type scale for visual harmony.

| Token | Value | Usage |
|-------|-------|-------|
| `--t-xs` | `8px` | Labels, captions |
| `--t-sm` | `13px` | Body text |
| `--t-md` | `21px` | Subheadings |
| `--t-lg` | `34px` | Section headings |
| `--t-xl` | `55px` | Hero titles |

## Using tokens in CSS

```css
.my-component {
  background: var(--bg-dark);
  color: var(--hl-4);
  font-size: var(--t-sm);
}
```
