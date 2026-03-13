(function initTheme() {
  const themeBtn = document.getElementById("themeBtn");
  if (!themeBtn) return;

  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      themeBtn.setAttribute("aria-pressed", "true");
    }
  } catch (e) {
    console.warn("localStorage unavailable:", e);
  }

  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    themeBtn.setAttribute("aria-pressed", isLight ? "true" : "false");

    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch (e) {
      console.warn("Could not save theme preference:", e);
    }
  });
})();
