// Retrieve theme preference from local storage
const themePreference = localStorage.getItem("theme");

// Check if the theme preference is "dark"
const isDarkMode = themePreference === "dark";

// Toggle dark mode class based on preference
const rootElement = document.getElementById("root");
if (rootElement) {
  if (isDarkMode) {
    rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }
}
