const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");
const isLightMode = savedTheme === "light";

if (isLightMode) {
  document.body.classList.add("light-mode");
  themeBtn.setAttribute("aria-pressed", "true");
}

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");

  themeBtn.setAttribute("aria-pressed", isLight ? "true" : "false");

  localStorage.setItem("theme", isLight ? "light" : "dark");
});
