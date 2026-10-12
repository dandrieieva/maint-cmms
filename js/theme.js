const STORAGE_KEY = 'maint-theme';
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  root.setAttribute('data-theme', saved);
}

function updateLabel() {
  const isDark = root.getAttribute('data-theme') === 'dark';
  toggle.textContent = isDark ? 'Light' : 'Dark';
  toggle.setAttribute('aria-pressed', String(isDark));
}

updateLabel();

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem(STORAGE_KEY, next);
  updateLabel();
});