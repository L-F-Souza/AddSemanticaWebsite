---
# ═══════════════════════════════════════════════════
# PAGE: Shortcodes Reference
# URL: /docs/reference/shortcodes/
# GROUP: reference (add to data/docs-sidebar.yaml)
# ═══════════════════════════════════════════════════
title: "Shortcodes Reference"
date: 2026-01-01
weight: 1
lead: "A complete reference for all available shortcodes you can use in any .md file."
---

Shortcodes let you add rich formatting to your markdown content without writing raw HTML. There are two ways to add formatting in SEMANTICA content files:

- **Shortcodes** — use inside the markdown body (below the `---` front matter block)
- **Inline HTML spans** — use inside YAML front matter fields (hero titles, subtitles, descriptions)

> Use shortcodes in `.md` body content. Use inline HTML spans in front matter fields like `hero_title`, `feat_subtitle`, and `description`.

---

## highlight

Wraps inline text with a branded colour.

**In markdown body — use the shortcode:**

```
{{</* highlight */>}}default orange{{</* /highlight */>}}
{{</* highlight color="teal" */>}}teal text{{</* /highlight */>}}
{{</* highlight color="cyan" */>}}cyan text{{</* /highlight */>}}
{{</* highlight color="red" */>}}red text{{</* /highlight */>}}
```

**In front matter YAML — use an inline span:**

```yaml
hero_title: "Start Analyzing Data with <span class=\"hl hl--orange\">SEMANTICA</span>."
feat_subtitle: "Built for <span class=\"hl hl--teal\">clarity, not complexity</span>."
```

Available colors: `orange` (default) · `teal` · `cyan` · `red` · `light` · `dark`

---

## badge

Inline pill badge for labels, statuses, and versions. **Only works in markdown body — not in front matter.**

```
{{</* badge */>}}New{{</* /badge */>}}
{{</* badge color="teal" */>}}Beta{{</* /badge */>}}
{{</* badge color="red" */>}}Deprecated{{</* /badge */>}}
{{</* badge color="light" */>}}v2.0{{</* /badge */>}}
```

Available colors: `orange` (default) · `teal` · `cyan` · `red` · `light` · `dark`

---

## callout

Full-width callout box for notes, tips, warnings, and errors. **Only works in markdown body — not in front matter.**

```
{{</* callout type="info" title="Note" */>}}
Your informational message here. Supports **markdown**.
{{</* /callout */>}}

{{</* callout type="tip" title="Pro tip" */>}}
Use design tokens instead of hardcoded hex values.
{{</* /callout */>}}

{{</* callout type="warning" title="Breaking change" */>}}
This API changed in v2.0. See the migration guide.
{{</* /callout */>}}

{{</* callout type="danger" title="Do not use" */>}}
This component has been removed. Use `Button` instead.
{{</* /callout */>}}
```

Available types: `info` (default) · `tip` · `warning` · `danger`

---

## columns

Two-column layout using the 1:1.61 golden ratio. Separate the two columns with `---split---`. **Only works in markdown body — not in front matter.**

```
{{</* columns */>}}
### Left column (61.8%)
This is the wider left column. Great for main content.
---split---
### Right column (38.2%)
This is the narrower right column. Great for supporting info.
{{</* /columns */>}}
```

Available ratios: `golden` (default) · `equal` · `reverse`

---

## card

A content card with an optional title, icon, and colour accent. **Only works in markdown body — not in front matter.**

```
{{</* card title="Accessible" icon="♿" color="teal" */>}}
WCAG compliant components that work for everyone, everywhere.
{{</* /card */>}}

{{</* card title="Fast" icon="⚡" color="orange" */>}}
Optimised for speed — benchmarked on real devices.
{{</* /card */>}}
```

Available colors: `orange` (default) · `teal` · `cyan` · `red`

---

## divider

A horizontal rule with an optional label. **Only works in markdown body — not in front matter.**

```
{{</* divider */>}}

{{</* divider label="Or continue reading" */>}}
```

---

## kbd

Renders keyboard shortcuts in a styled `<kbd>` element. **Only works in markdown body — not in front matter.**

```
Press {{</* kbd */>}}Ctrl + S{{</* /kbd */>}} to save.
Press {{</* kbd */>}}⌘{{</* /kbd */>}} + {{</* kbd */>}}K{{</* /kbd */>}} to open search.
```

---

## lead

A large, light-weight introductory paragraph. **Only works in markdown body — not in front matter.**

```
{{</* lead */>}}
SEMANTICA is the design system built for teams who care about craft.
{{</* /lead */>}}
```

---

## Bold and italic

Standard markdown bold and italic work anywhere in the markdown body. In front matter, use `<strong>` and `<em>` instead.

**In markdown body:**

```
**bold text**
*italic text*
***bold and italic***
```

**In front matter YAML:**

```yaml
feat_subtitle: "Every feature is designed to <strong>eliminate friction</strong> and <em>empower your team</em>."
```

---

## Quick reference

|What|Where|How|
|---|---|---|
|Coloured text|Markdown body|`{{</* highlight color="teal" */>}}text{{</* /highlight */>}}`|
|Coloured text|Front matter YAML|`<span class=\"hl hl--teal\">text</span>`|
|Bold|Markdown body|`**text**`|
|Bold|Front matter YAML|`<strong>text</strong>`|
|Italic|Markdown body|`*text*`|
|Italic|Front matter YAML|`<em>text</em>`|
|Badge|Markdown body only|`{{</* badge */>}}text{{</* /badge */>}}`|
|Callout|Markdown body only|`{{</* callout type="info" */>}}text{{</* /callout */>}}`|
|Columns|Markdown body only|`{{</* columns */>}}left---split---right{{</* /columns */>}}`|
|Line break|Anywhere|`<br>`|