/* ═══════════════════════════════════════════════════
   FILE: static/js/docs.js
   PAGE: Documentation (/docs/)

   Handles: sidebar accordion, TOC generation,
            scroll spy, search filter, copy code.

   Navigation between pages is handled by Hugo's
   router (real URLs) — no JS page-switching needed.
════════════════════════════════════════════════════ */

// ── SIDEBAR ACCORDION ─────────────────────────────
document.querySelectorAll('.sidebar-group-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.sidebar-group-btn').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.sidebar-links').forEach(l => l.classList.remove('open'));
    if (!isOpen) {
      btn.classList.add('open');
      const links = document.getElementById('group-' + btn.dataset.group);
      if (links) links.classList.add('open');
    }
  });
});

// ── TOC: auto-build from h2/h3 in .doc-body ───────
function buildToc() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;
  const headings = document.querySelectorAll('.doc-body h2, .doc-body h3');
  if (!headings.length) {
    document.getElementById('docs-toc').style.display = 'none';
    return;
  }
  headings.forEach(h => {
    // Auto-assign id if missing
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    }
    const li = document.createElement('li');
    li.className = h.tagName === 'H3' ? 'toc-h3' : '';
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.addEventListener('click', e => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
      tocList.querySelectorAll('a').forEach(t => t.classList.remove('active'));
      a.classList.add('active');
    });
    li.appendChild(a);
    tocList.appendChild(li);
  });
  // Highlight first item on load
  const first = tocList.querySelector('a');
  if (first) first.classList.add('active');
}

// ── SCROLL SPY ────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('#toc-list a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

document.querySelectorAll('.doc-body h2, .doc-body h3').forEach(h => observer.observe(h));

// ── SEARCH FILTER ─────────────────────────────────
const searchInput = document.getElementById('sidebar-search-input');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.sidebar-links a').forEach(a => {
      a.style.display = a.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
    // Open all groups while searching
    if (q) {
      document.querySelectorAll('.sidebar-group-btn').forEach(b => b.classList.add('open'));
      document.querySelectorAll('.sidebar-links').forEach(l => l.classList.add('open'));
    }
  });
}

// ── COPY CODE BUTTON ──────────────────────────────
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}

// ── INIT ──────────────────────────────────────────
buildToc();
