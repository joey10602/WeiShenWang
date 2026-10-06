const nav = document.getElementById('site-nav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 18);
}, { passive: true });
