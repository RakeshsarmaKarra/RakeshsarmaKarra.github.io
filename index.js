
// Animations (Fade Up)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
  // Prevent scrolling when menu is open
  document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
}

if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}
