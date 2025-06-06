document.addEventListener("DOMContentLoaded", () => {
  console.log("CV cargado con éxito. Eloy Bluetooth activo 🧠🔵🐆");
});

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  localStorage.setItem('cv-theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

window.onload = () => {
  const savedTheme = localStorage.getItem('cv-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};