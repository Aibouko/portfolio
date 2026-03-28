// Manga Page Portfolio - Data Driven Renderer
(function() {
  'use strict';

  // Inline fallback data (used if fetch fails due to CORS/local file restrictions)
  const fallbackData = {
    "profile": {
      "name": "Aibouko",
      "jpName": "ポートフォリオ",
      "class": "Web Developer",
      "subclass": "Game developer, Artist",
      "location": "Munich, Germany",
      "languages": "EN / DE",
      "tagline": "Game & web developer"
    },
    "contact": {
      "github": "https://github.com/Aibouko",
      "email": "mailto:atipvietnghiem@gmail.com"
    },
    "skills": {
      "root": "Dev",
      "branches": [
        {
          "name": "Game",
          "items": ["Godot", "GDScript"]
        },
        {
          "name": "Web",
          "items": ["HTML", "CSS", "JavaScript", "TailwindCSS"]
        },
        {
          "name": "Tools",
          "items": ["Git", "GitHub"]
        }
      ]
    },
    "projects": [
      {
        "scene": "01",
        "status": "Complete",
        "title": "Gesture Drawing App",
        "jpTitle": "ジェスチャードローイング",
        "quote": "Practice makes perfect",
        "description": "A tool for artists to practice figure drawing with timed reference images. Features customizable session lengths and pose libraries.",
        "tech": ["Godot", "GDScript"],
        "link": "https://github.com/Aibouko/Gesture-Drawing-App"
      },
      {
        "scene": "02",
        "status": "Complete",
        "title": "Bullet Hell",
        "jpTitle": "弾幕",
        "quote": "Dodge or perish",
        "description": "Top-down shooter featuring intricate bullet patterns and fast-paced gameplay. Inspired by classic danmaku games.",
        "tech": ["Godot", "GDScript"],
        "link": "https://github.com/Aibouko/Bullet-Hell"
      }
    ],
    "blog": []
  };

  // Load and render portfolio data
  async function loadPortfolio() {
    try {
      // Try to fetch from data.json first
      const response = await fetch('data.json');
      if (!response.ok) throw new Error('Failed to load data');
      const data = await response.json();
      renderPortfolio(data);
      console.log('Loaded data from data.json');
    } catch (error) {
      // Fallback to inline data if fetch fails (CORS/local file issue)
      console.warn('Could not load data.json, using fallback data. Error:', error.message);
      renderPortfolio(fallbackData);
      showNotice('Running in local mode. Deploy to server for JSON editing.');
    }
  }

  // Show notice for local development
  function showNotice(message) {
    const notice = document.createElement('div');
    notice.className = 'local-notice';
    notice.style.cssText = 'position: fixed; bottom: 10px; right: 10px; background: rgba(184, 169, 201, 0.9); color: #fff; padding: 8px 16px; border-radius: 4px; font-size: 0.85rem; z-index: 9999;';
    notice.textContent = message;
    document.body.appendChild(notice);
    setTimeout(() => notice.remove(), 5000);
  }

  // Render all sections
  function renderPortfolio(data) {
    renderProfile(data.profile, data.contact);
    renderSkills(data.skills);
    renderProjects(data.projects);
    initAnimations();
  }

  // Render Profile Section
  function renderProfile(profile, contact) {
    const profileName = document.querySelector('.profile-name h1');
    const profileJp = document.querySelector('.profile-name .jp-text');
    const tagline = document.querySelector('.tagline');
    const statsContainer = document.querySelector('.profile-stats');
    const githubLink = document.querySelector('.choice-btn[aria-label="View GitHub profile"]');
    const emailLink = document.querySelector('.choice-btn[aria-label="Send email"]');

    if (profileName) profileName.textContent = `【${profile.name}】`;
    if (profileJp) profileJp.textContent = profile.jpName;
    if (tagline) tagline.textContent = profile.tagline;
    if (githubLink) githubLink.href = contact.github;
    if (emailLink) emailLink.href = contact.email;

    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="stat-row">
          <span class="stat-label">Class:</span>
          <span class="stat-value">${profile.class}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Subclass:</span>
          <span class="stat-value">${profile.subclass}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Location:</span>
          <span class="stat-value">${profile.location}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Languages:</span>
          <span class="stat-value">${profile.languages}</span>
        </div>
      `;
    }
  }

  // Render Skills Section
  function renderSkills(skills) {
    const rootNode = document.querySelector('.center-node');
    const branchesContainer = document.querySelector('.tree-branches-horizontal');
    const toolsContainer = document.querySelector('.branch-down .skills-group');

    if (rootNode) rootNode.textContent = skills.root;

    if (branchesContainer && skills.branches) {
      const leftBranch = skills.branches.find(b => b.name === 'Game');
      const rightBranch = skills.branches.find(b => b.name === 'Web');
      const toolsBranch = skills.branches.find(b => b.name === 'Tools');

      // Render left branch (Game)
      const leftNode = branchesContainer.querySelector('.branch-left .skills-group');
      if (leftNode && leftBranch) {
        leftNode.innerHTML = leftBranch.items.map(item => 
          `<span class="skill-badge">${item}</span>`
        ).join('');
      }

      // Render right branch (Web)
      const rightNode = branchesContainer.querySelector('.branch-right .skills-group');
      if (rightNode && rightBranch) {
        rightNode.innerHTML = rightBranch.items.map(item => 
          `<span class="skill-badge">${item}</span>`
        ).join('');
      }

      // Render tools branch
      if (toolsContainer && toolsBranch) {
        toolsContainer.innerHTML = toolsBranch.items.map(item => 
          `<span class="skill-badge">${item}</span>`
        ).join('');
      }
    }
  }

  // Render Projects Section
  function renderProjects(projects) {
    const container = document.querySelector('.project-scenes');
    if (!container || !projects) return;

    container.innerHTML = projects.map(project => `
      <article class="scene-card">
        <div class="scene-header">
          <span class="scene-number">Scene ${project.scene}</span>
          <span class="scene-status ${project.status.toLowerCase()}">${project.status}</span>
        </div>
        
        <div class="scene-content">
          <div class="scene-title-group">
            <h3>${project.title}</h3>
            <span class="jp-text" aria-hidden="true">${project.jpTitle}</span>
          </div>
          
          <div class="speech-bubble">
            <p class="bubble-text">「${project.quote}」</p>
            <p class="scene-description">${project.description}</p>
          </div>
          
          <div class="scene-meta">
            <div class="tech-stack">
              ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="scene-actions">
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="action-btn primary">
                View Code
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Show error message
  function showError(message) {
    const main = document.querySelector('main');
    if (main) {
      main.innerHTML = `<div class="error-message" style="text-align: center; padding: 2rem; color: var(--text-secondary);">${message}</div>`;
    }
  }

  // Initialize animations
  function initAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    let panelObserver;
    try {
      panelObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
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

    // Observe all panels
    document.querySelectorAll('.manga-panel, .scene-card').forEach((panel, index) => {
      if (!prefersReducedMotion.matches) {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(30px)';
        panel.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
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

  // Smooth scroll to projects
  window.scrollToProjects = function() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Load portfolio when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPortfolio);
  } else {
    loadPortfolio();
  }
})();
