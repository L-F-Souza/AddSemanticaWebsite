---
title: "Button"
weight: 1
stylesheet: "docs"
description: "Buttons trigger actions. Two variants — primary and outline — with hover and focus states built in."
tags: ["components", "interactive"]
---

Buttons trigger actions. SEMANTICA provides two button variants — primary and outline — each with hover and focus states built in.

## Variants

**Primary** — for the main call to action on a page or section.

**Outline** — for secondary actions alongside a primary button.

## Usage

```html
<a href="/get-started" class="btn-primary">Get Started →</a>

<a href="/demo" class="btn-outline">Watch Demo</a>
```

## CSS classes

| Class | Description |
|-------|-------------|
| `.btn-primary` | Filled orange button, white text |
| `.btn-outline` | Transparent button with border |

## Accessibility

Always use descriptive link text. Avoid "click here" — prefer "Get started with SEMANTICA" so screen reader users understand the destination.

## Customisation

```css
.btn-primary {
  background: var(--hl-2); /* swap orange for teal */
}
```
