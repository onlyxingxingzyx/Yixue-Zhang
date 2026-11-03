(() => {
  const button = document.getElementById('themeToggle');
  const saved = localStorage.getItem('yixue-theme');
  if (saved === 'dark') document.body.classList.add('dark');
  const sync = () => { button.textContent = document.body.classList.contains('dark') ? '☀' : '☾'; };
  sync();
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('yixue-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    sync();
  });
})();
