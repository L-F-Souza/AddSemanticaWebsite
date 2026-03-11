---
# ═══════════════════════════════════════════════════
# PAGE: Documentation
# URL: /docs/
# LAYOUT: layouts/docs/single.html
# STYLESHEET: static/css/docs.css
# SCRIPT: static/js/docs.js
# ═══════════════════════════════════════════════════

title: "Documentation"
date: 2026-01-01
layout: "single"
stylesheet: "docs"

# ── SIDEBAR GROUPS ────────────────────────────────
# Each group has an id, label, open state, and links.
# Set open: true for the default open group.
# Set active: true on the default visible section link.

sidebar_groups:
  - id: "getting-started"
    label: "Getting Started"
    open: true
    links:
      - section: "introduction"
        label: "Introduction"
        active: true
      - section: "installation"
        label: "Installation"
      - section: "quickstart"
        label: "Quick Start"
  - id: "core-concepts"
    label: "Core Concepts"
    open: false
    links:
      - section: "design-tokens"
        label: "Design Tokens"
      - section: "theming"
        label: "Theming"
      - section: "typography"
        label: "Typography"
  - id: "components"
    label: "Components"
    open: false
    links:
      - section: "button"
        label: "Button"
      - section: "input"
        label: "Input"
      - section: "card"
        label: "Card"
  - id: "accessibility"
    label: "Accessibility"
    open: false
    links:
      - section: "a11y-overview"
        label: "Overview"
      - section: "a11y-testing"
        label: "Testing"

# ── SECTIONS ──────────────────────────────────────
# Each section maps to a doc-section div in the layout.
# Set active: true on the default visible section.
# block types: h2, h3, p, ul, code, callout, table, divider

sections:

  # ── Getting Started ──────────────────────────────

  - id: "introduction"
    active: true
    title: "Introduction"
    lead: "SEMANTICA is a design system built for creating consistent, accessible, and beautiful experiences across every Microsoft product — and beyond."
    next: { section: "installation", group: "getting-started", label: "Installation" }
    blocks:
      - type: h2
        id: "what-is-semantica"
        text: "What is SEMANTICA?"
      - type: p
        text: "SEMANTICA is the second generation of Microsoft's open design system. It provides a comprehensive set of design tokens, React components, and tooling that teams use to build coherent products without starting from scratch every time."
      - type: callout
        style: info
        icon: "ℹ"
        heading: "Note"
        text: "SEMANTICA is the successor to SEMANTICA v8. If you are migrating from v8, see the migration guide."
      - type: h2
        id: "key-principles"
        text: "Key Principles"
      - type: ul
        items:
          - "<strong>Accessibility first</strong> — every component meets WCAG 2.1 AA by default."
          - "<strong>Token-driven</strong> — visual decisions live in tokens, not hardcoded values."
          - "<strong>Composable</strong> — small, focused primitives that combine predictably."
      - type: h2
        id: "how-it-works"
        text: "How it works"
      - type: p
        text: "At the foundation are <strong>design tokens</strong> — named values for colour, spacing, radius, shadow, and typography. Tokens are consumed by components, which compose into patterns, which compose into full product experiences."
      - type: divider
      - type: h2
        id: "ecosystem"
        text: "Ecosystem"
      - type: h3
        id: "react-components"
        text: "React Components"
      - type: p
        text: "Over 60 production-ready components covering forms, navigation, data display, feedback, and layout."
      - type: h3
        id: "figma-kit"
        text: "Figma Kit"
      - type: p
        text: "A comprehensive Figma library that maps 1:1 with the code components, using the same token names."

  - id: "installation"
    title: "Installation"
    lead: "Get SEMANTICA up and running in your project in under five minutes."
    prev: { section: "introduction", group: "getting-started", label: "Introduction" }
    next: { section: "quickstart", group: "getting-started", label: "Quick Start" }
    blocks:
      - type: h2
        id: "requirements"
        text: "Requirements"
      - type: ul
        items:
          - "Node.js 18 or later"
          - "React 18 or later"
          - "A package manager: npm, yarn, or pnpm"
      - type: h2
        id: "install-package"
        text: "Install the package"
      - type: code
        lang: bash
        content: |
          <span class="cm"># npm</span>
          npm install semantica

          <span class="cm"># yarn</span>
          yarn add semantica
      - type: h2
        id: "setup-provider"
        text: "Set up the provider"
      - type: code
        lang: tsx
        content: |
          <span class="kw">import</span> { <span class="prop">SemanticaProvider</span>, <span class="prop">webLightTheme</span> } <span class="kw">from</span> <span class="str">'semantica'</span>;

          <span class="kw">export default function</span> <span class="fn">App</span>() {
            <span class="kw">return</span> (
              &lt;<span class="prop">SemanticaProvider</span> theme={<span class="prop">webLightTheme</span>}&gt;
                &lt;<span class="prop">YourApp</span> /&gt;
              &lt;/<span class="prop">SemanticaProvider</span>&gt;
            );
          }
      - type: callout
        style: warn
        icon: "⚠"
        heading: "Important"
        text: "<code>SemanticaProvider</code> must wrap the entire component tree that uses SEMANTICA components."

  - id: "quickstart"
    title: "Quick Start"
    lead: "Build your first SEMANTICA interface with a working example from scratch."
    prev: { section: "installation", group: "getting-started", label: "Installation" }
    next: { section: "design-tokens", group: "core-concepts", label: "Design Tokens" }
    blocks:
      - type: h2
        id: "scaffold"
        text: "Scaffold a new project"
      - type: code
        lang: bash
        content: |
          npm create vite@latest my-app -- --template react-ts
          <span class="kw">cd</span> my-app
          npm install semantica
          npm run dev
      - type: h2
        id: "first-component"
        text: "Your first component"
      - type: callout
        style: tip
        icon: "✓"
        heading: "Tip"
        text: "Use <code>webDarkTheme</code> instead of <code>webLightTheme</code> to instantly switch to dark mode."

  # ── Core Concepts ────────────────────────────────

  - id: "design-tokens"
    title: "Design Tokens"
    lead: "Tokens are the atomic design decisions of SEMANTICA — named values that represent colour, spacing, typography, and more."
    prev: { section: "quickstart", group: "getting-started", label: "Quick Start" }
    next: { section: "theming", group: "core-concepts", label: "Theming" }
    blocks:
      - type: h2
        id: "token-categories"
        text: "Token categories"
      - type: ul
        items:
          - "<strong>Global tokens</strong> — the full colour palette and raw scale values."
          - "<strong>Alias tokens</strong> — semantic mappings like <code>colorBrandBackground</code>."
          - "<strong>Component tokens</strong> — component-scoped overrides."
      - type: h2
        id: "token-reference"
        text: "Token reference"
      - type: table
        headers: ["Token", "Value", "Usage"]
        rows:
          - ["<code>colorBrandBackground</code>", "<code>#0f6cbd</code>", "Primary brand fills"]
          - ["<code>colorNeutralBackground1</code>", "<code>#ffffff</code>", "Page / card backgrounds"]
          - ["<code>colorNeutralForeground1</code>", "<code>#242424</code>", "Primary text"]
          - ["<code>spacingHorizontalM</code>", "<code>12px</code>", "Standard horizontal padding"]
          - ["<code>borderRadiusMedium</code>", "<code>4px</code>", "Default corner radius"]

  - id: "theming"
    title: "Theming"
    lead: "SEMANTICA's theming system lets you customise the visual language of your entire application from a single configuration object."
    prev: { section: "design-tokens", group: "core-concepts", label: "Design Tokens" }
    next: { section: "button", group: "components", label: "Button" }
    blocks:
      - type: h2
        id: "built-in-themes"
        text: "Built-in themes"
      - type: ul
        items:
          - "<code>webLightTheme</code> — default light theme"
          - "<code>webDarkTheme</code> — default dark theme"
          - "<code>teamsLightTheme</code> — Microsoft Teams light"
          - "<code>teamsDarkTheme</code> — Microsoft Teams dark"

  - id: "typography"
    title: "Typography"
    lead: "SEMANTICA uses a type scale and font family system to ensure consistent text across all surfaces."
    prev: { section: "theming", group: "core-concepts", label: "Theming" }
    next: { section: "button", group: "components", label: "Button" }
    blocks:
      - type: h2
        id: "type-scale"
        text: "Type scale"
      - type: p
        text: "The scale uses a modular ratio expressed as named tokens like <code>fontSizeBase300</code>, <code>fontWeightSemibold</code>, and <code>lineHeightBase400</code>."

  # ── Components ───────────────────────────────────

  - id: "button"
    title: "Button"
    lead: "Buttons trigger actions. SEMANTICA ships five appearance variants and full keyboard and screen reader support out of the box."
    prev: { section: "theming", group: "core-concepts", label: "Theming" }
    next: { section: "input", group: "components", label: "Input" }
    blocks:
      - type: h2
        id: "button-usage"
        text: "Usage"
      - type: code
        lang: tsx
        content: |
          <span class="kw">import</span> { <span class="prop">Button</span> } <span class="kw">from</span> <span class="str">'semantica'</span>;

          &lt;<span class="prop">Button</span> appearance=<span class="str">"primary"</span>&gt;Save&lt;/<span class="prop">Button</span>&gt;
          &lt;<span class="prop">Button</span> appearance=<span class="str">"outline"</span>&gt;Cancel&lt;/<span class="prop">Button</span>&gt;
      - type: h2
        id: "button-props"
        text: "Props"
      - type: table
        headers: ["Prop", "Type", "Default", "Description"]
        rows:
          - ["<code>appearance</code>", "<code>string</code>", "<code>\"secondary\"</code>", "Visual style variant"]
          - ["<code>size</code>", "<code>string</code>", "<code>\"medium\"</code>", "small | medium | large"]
          - ["<code>disabled</code>", "<code>boolean</code>", "<code>false</code>", "Disables interaction"]
          - ["<code>icon</code>", "<code>ReactElement</code>", "—", "Icon slot (before label)"]

  - id: "input"
    title: "Input"
    lead: "The Input component captures text from the user with full validation, label, and error state support."
    prev: { section: "button", group: "components", label: "Button" }
    next: { section: "card", group: "components", label: "Card" }
    blocks:
      - type: h2
        id: "input-usage"
        text: "Usage"
      - type: code
        lang: tsx
        content: |
          &lt;<span class="prop">Field</span> label=<span class="str">"Email address"</span>&gt;
            &lt;<span class="prop">Input</span> type=<span class="str">"email"</span> placeholder=<span class="str">"you@example.com"</span> /&gt;
          &lt;/<span class="prop">Field</span>&gt;

  - id: "card"
    title: "Card"
    lead: "Cards group related content and actions in a contained surface with consistent elevation and spacing."
    prev: { section: "input", group: "components", label: "Input" }
    next: { section: "a11y-overview", group: "accessibility", label: "Accessibility Overview" }
    blocks:
      - type: h2
        id: "card-usage"
        text: "Usage"
      - type: code
        lang: tsx
        content: |
          &lt;<span class="prop">Card</span>&gt;
            &lt;<span class="prop">CardHeader</span> header={&lt;<span class="prop">Text</span> weight=<span class="str">"semibold"</span>&gt;Title&lt;/<span class="prop">Text</span>&gt;} /&gt;
            &lt;<span class="prop">CardFooter</span>&gt;&lt;<span class="prop">Button</span>&gt;Action&lt;/<span class="prop">Button</span>&gt;&lt;/<span class="prop">CardFooter</span>&gt;
          &lt;/<span class="prop">Card</span>&gt;

  # ── Accessibility ────────────────────────────────

  - id: "a11y-overview"
    title: "Accessibility Overview"
    lead: "Accessibility is a first-class concern in SEMANTICA. Every component is designed and tested for keyboard navigation, screen readers, and reduced motion."
    prev: { section: "card", group: "components", label: "Card" }
    next: { section: "a11y-testing", group: "accessibility", label: "Testing" }
    blocks:
      - type: h2
        id: "a11y-standards"
        text: "Standards compliance"
      - type: p
        text: "All components target WCAG 2.1 Level AA compliance. High-contrast mode and reduced motion preferences are supported via CSS media queries and token overrides."

  - id: "a11y-testing"
    title: "Accessibility Testing"
    lead: "A guide to testing your SEMANTICA implementation for accessibility issues before shipping."
    prev: { section: "a11y-overview", group: "accessibility", label: "Accessibility Overview" }
    blocks:
      - type: h2
        id: "automated-testing"
        text: "Automated testing"
      - type: p
        text: "Use <code>@axe-core/react</code> during development to catch common issues early. SEMANTICA's own CI pipeline runs axe on every component on every commit."
---
