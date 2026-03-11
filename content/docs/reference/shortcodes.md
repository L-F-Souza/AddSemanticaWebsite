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

Shortcodes let you add rich formatting to your markdown content without writing raw HTML.
Use them in any `.md` file across the site.

## highlight

Wraps inline text with a branded colour.

```
{{</* highlight */>}}default orange{{</* /highlight */>}}
{{</* highlight color="teal" */>}}teal text{{</* /highlight */>}}
{{</* highlight color="cyan" */>}}cyan text{{</* /highlight */>}}
{{</* highlight color="red" */>}}red text{{</* /highlight */>}}
```

**Available colors:** `orange` (default) · `teal` · `cyan` · `red` · `light` · `dark`

---

## badge

Inline pill badge for labels, statuses, and versions.

```
{{</* badge */>}}New{{</* /badge */>}}
{{</* badge color="teal" */>}}Beta{{</* /badge */>}}
{{</* badge color="red" */>}}Deprecated{{</* /badge */>}}
{{</* badge color="light" */>}}v2.0{{</* /badge */>}}
```

**Available colors:** `orange` (default) · `teal` · `cyan` · `red` · `light` · `dark`

---

## callout

Full-width callout box for notes, tips, warnings, and errors.

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

**Available types:** `info` (default) · `tip` · `warning` · `danger`

---

## columns

Two-column layout using the 1:1.61 golden ratio.
Separate the two columns with `---split---`.

```
{{</* columns */>}}
### Left column (61.8%)
This is the wider left column. Great for main content.
---split---
### Right column (38.2%)
This is the narrower right column. Great for supporting info.
{{</* /columns */>}}
```

**Available ratios:** `golden` (default) · `equal` · `reverse`

---

## card

A content card with an optional title, icon, and colour accent.

```
{{</* card title="Accessible" icon="♿" color="teal" */>}}
WCAG compliant components that work for everyone, everywhere.
{{</* /card */>}}

{{</* card title="Fast" icon="⚡" color="orange" */>}}
Optimised for speed — benchmarked on real devices.
{{</* /card */>}}
```

**Available colors:** `orange` (default) · `teal` · `cyan` · `red`

---

## divider

A horizontal rule with an optional label.

```
{{</* divider */>}}

{{</* divider label="Or continue reading" */>}}
```

---

## kbd

Renders keyboard shortcuts in a styled `<kbd>` element.

```
Press {{</* kbd */>}}Ctrl + S{{</* /kbd */>}} to save.
Press {{</* kbd */>}}⌘{{</* /kbd */>}} + {{</* kbd */>}}K{{</* /kbd */>}} to open search.
```

---

## lead

A large, light-weight introductory paragraph.

```
{{</* lead */>}}
SEMANTICA is the design system built for teams who care about craft.
{{</* /lead */>}}
```
