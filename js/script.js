let themeToggle = document.getElementById('themeToggle');
let body = document.body;

function setTheme(theme) {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  // Icon transition
  let icon = themeToggle.querySelector('i');
  icon.classList.add('fade');
  setTimeout(() => {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    icon.classList.remove('fade');
  }, 150);
}

function toggleTheme() {
  let current = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(current);
}

themeToggle.addEventListener('click', toggleTheme);
