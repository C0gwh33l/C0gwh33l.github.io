// Theme toggle
document.getElementById('toggle-theme').onclick = () => {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
};

// Smooth scroll to #links
document.getElementById('scroll-down').onclick = () => {
  scrollToSection(document.getElementById('links'), 1000);
};

function scrollToSection(el, duration) {
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + start;
  const diff = end - start;
  const startTime = performance.now();

  const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  (function step(now) {
    const t = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + diff * ease(t));
    if (t < 1) requestAnimationFrame(step);
  })(startTime);
}