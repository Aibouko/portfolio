// Theme Manager
const ThemeManager = {
  init() {
    this.toggle = document.getElementById('theme-toggle');
    this.sunIcon = document.getElementById('sun-icon');
    this.moonIcon = document.getElementById('moon-icon');
    this.html = document.documentElement;
    
    if (!this.toggle) return;
    
    this.updateIcons();
    this.bindEvents();
  },

  bindEvents() {
    this.toggle.addEventListener('click', () => this.toggleTheme());
  },

  toggleTheme() {
    const current = this.html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    this.html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    this.updateIcons();
  },

  updateIcons() {
    const theme = this.html.getAttribute('data-theme');
    const isDark = theme === 'dark';
    
    this.sunIcon?.classList.toggle('hidden', !isDark);
    this.moonIcon?.classList.toggle('hidden', isDark);
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
});
