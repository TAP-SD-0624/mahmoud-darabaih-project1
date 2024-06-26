// Theme feature
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Change the icon and text based on the current theme
  const themeToggle = document.getElementById("theme-toggle");
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggle.innerHTML = isDarkMode
    ? '<ion-icon name="sunny-outline" style="margin-right: 3px; margin-bottom: -2px"></ion-icon> Light mode'
    : '<ion-icon name="moon-outline" style="margin-right: 3px; margin-bottom: -2px"></ion-icon> Dark mode';
}

// Check for saved theme in local storage
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Initial button text and icon
  const themeToggle = document.getElementById("theme-toggle");
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggle.innerHTML = isDarkMode
    ? '<ion-icon name="sunny-outline" style="margin-right: 3px; margin-bottom: -2px"></ion-icon> Light mode'
    : '<ion-icon name="moon-outline" style="margin-right: 3px; margin-bottom: -2px"></ion-icon> Dark mode';
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Update the button text and icon
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.innerHTML = isDarkMode
    ? '<ion-icon name="sunny-outline" style="margin-right: 3px; margin-bottom: -2px"></ion-icon> Light mode'
    : '<ion-icon name="moon-outline" style="margin-right: 3px; margin-bottom: -2px"></ion-icon> Dark mode';
}
