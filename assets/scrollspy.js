document.addEventListener("DOMContentLoaded", () => {
  const tocLinks = document.querySelectorAll("#TableOfContents a");

  if (!tocLinks.length) return;

  const headings = Array.from(tocLinks)
    .map(link => document.getElementById(link.getAttribute("href").slice(1)))
    .filter(Boolean);

  function onScroll() {
    let current = null;

    for (const heading of headings) {
      const box = heading.getBoundingClientRect();
      if (box.top < 100) {
        current = heading;
      }
    }

    tocLinks.forEach(link => link.classList.remove("active"));

    if (current) {
      const activeLink = document.querySelector(`#TableOfContents a[href="#${current.id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  }

  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Run once on load
});
