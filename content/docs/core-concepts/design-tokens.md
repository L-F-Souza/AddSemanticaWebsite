---
title: "Design Tokens"
weight: 1
---

Design tokens are the atomic values that define your visual language.

## Colour tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-dark` | `#102B2B` | Primary dark background |
| `--hl-5` | `#FA7F08` | Orange accent |

## Using tokens in CSS
```css
.my-component {
  background: var(--bg-dark);
  font-size: var(--t-sm);
}
```
