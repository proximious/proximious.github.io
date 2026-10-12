const root = document.documentElement;
root.classList.add('js');

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.theme-toggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch (e) {}
});

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const toTop = document.querySelector('.to-top');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href')));

function onScroll() {
  toTop.classList.toggle('shown', window.scrollY > 600);

  // Highlight the last section whose top has passed the menu
  let current = -1;
  sections.forEach((section, i) => {
    if (section.getBoundingClientRect().top <= 120) current = i;
  });
  // The last section can be too short to reach the menu, so pick it at the page bottom
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    current = sections.length - 1;
  }
  navLinks.forEach((link, i) => link.classList.toggle('active', i === current));
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
