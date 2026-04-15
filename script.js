// Manga Page Portfolio - Scroll Reveal Animation
// Makes panels fade in when they scroll into view

// Select all panels we want to animate
const panels = document.querySelectorAll(".manga-panel, .scene-card");

panels.forEach((panel) => {
  panel.classList.add("reveal-hidden");
});

// IntersectionObserver watches for elements entering the screen
// Callback runs when an element becomes visible
const scrollRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Replace hidden class with visible class to trigger animation
        entry.target.classList.remove("reveal-hidden");
        entry.target.classList.add("reveal-visible");

        // Stop watching this element once it has been revealed
        scrollRevealObserver.unobserve(entry.target);
      }
    });
  },
  {
    // Start animation when element is 15% visible
    threshold: 0.15,
  },
);

// Tell the observer to watch each panel
panels.forEach((panel) => {
  scrollRevealObserver.observe(panel);
});

