console.log("JS is connected! 🚀");
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Flip data-theme attribute on <body>
  document.body.setAttribute('data-theme', newTheme);

  // Update button label/icon
  themeToggleBtn.textContent = newTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
});