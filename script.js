// Manga Page Portfolio - Animation Controller with Parallax
(function() {
  'use strict';

  // Initialize animations when DOM is ready
  function initAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    let panelObserver;
    try {
      panelObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Staggered reveal with delay based on element position
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            panelObserver.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      });
    } catch (e) {
      console.warn('IntersectionObserver not supported');
      document.querySelectorAll('.manga-panel, .scene-card').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    // Observe all panels with staggered initialization
    const panels = document.querySelectorAll('.manga-panel, .scene-card');
    panels.forEach((panel, index) => {
      if (!prefersReducedMotion.matches) {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(30px)';
        panel.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        panelObserver.observe(panel);
      } else {
        panel.style.opacity = '1';
        panel.style.transform = 'none';
      }
    });

    // Make Japanese text visible for reduced motion
    if (prefersReducedMotion.matches) {
      document.querySelectorAll('.jp-text').forEach(el => el.style.opacity = '1');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();
