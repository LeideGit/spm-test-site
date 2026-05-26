class App {
  constructor() {
    this.currentPage = 'dashboard';
    this.currentTab = 'components';
    this.carouselIndex = 0;
    this.postFilter = 'all';
    this.mobileMenuOpen = false;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    let content;
    if (this.currentPage === 'dashboard') {
      content = this.renderDashboardPage();
    } else if (this.currentPage === 'components') {
      content = this.renderComponentsPage();
    } else {
      content = this.renderOverviewPage();
    }

    document.getElementById('app').innerHTML = content;
    this.attachEventListeners();
  }

  renderHeader() {
    return `
      <header class="global-header">
        <div class="header-left">
          <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div class="logo">SPM</div>
        </div>
        <div class="header-center">
          <input type="search" class="search-input" placeholder="Search" aria-label="Search portal">
        </div>
        <div class="header-right">
          <button class="icon-btn" aria-label="Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"></path>
            </svg>
          </button>
          <button class="icon-btn" aria-label="Bookmarks">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button class="icon-btn" aria-label="User profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </header>
      <nav class="primary-nav" aria-label="Primary navigation">
        <a href="#" data-nav="news" class="nav-item">News</a>
        <a href="#" data-nav="events" class="nav-item">Events</a>
        <a href="#" data-nav="products" class="nav-item">Products</a>
        <a href="#" data-nav="industries" class="nav-item">Industries</a>
        <a href="#" data-nav="sales" class="nav-item">Sales</a>
        <a href="#" data-nav="marketing" class="nav-item">Marketing</a>
        <a href="#" data-nav="resources" class="nav-item">Resources</a>
        <a href="#" data-nav="support" class="nav-item">Support</a>
      </nav>
    `;
  }

  renderNavigation() {
    return `
      <nav class="sidebar-nav" aria-label="Page navigation" role="navigation">
        <a href="#" data-page="dashboard" class="nav-link ${this.currentPage === 'dashboard' ? 'active' : ''}" aria-current="${this.currentPage === 'dashboard' ? 'page' : 'false'}">Dashboard</a>
        <a href="#" data-page="components" class="nav-link ${this.currentPage === 'components' ? 'active' : ''}" aria-current="${this.currentPage === 'components' ? 'page' : 'false'}">Component Library</a>
      </nav>
    `;
  }

  renderDashboardPage() {
    return `
      ${this.renderHeader()}
      <div class="dashboard-container">
        ${this.renderNavigation()}
        <main class="dashboard-main">
          <div class="page-header">
            <h1 class="page-title">SPM Partner Portal</h1>
            <p class="page-subtitle">Empowering SPM Partners Worldwide</p>
          </div>

          ${this.renderHeroNavigation()}
          ${this.renderCarousel()}

          <div class="dashboard-grid">
            <div class="main-content">
              ${this.renderLatestPosts()}
            </div>
            <aside class="sidebar-content" aria-label="Sidebar">
              ${this.renderMyGroups()}
              ${this.renderNewsletter()}
              ${this.renderUpcomingEvents()}
              ${this.renderMyBookmarks()}
            </aside>
          </div>
        </main>
      </div>
    `;
  }

  renderHeroNavigation() {
    const popularItems = [
      { icon: '📥', title: 'Downloads', desc: 'Get all resources', href: '#downloads' },
      { icon: '📄', title: 'TD sheets', desc: 'Documentation', href: '#td-sheets' },
      { icon: '▶️', title: 'SPM Play', desc: 'Video library', href: '#spm-play' },
      { icon: '💻', title: 'Latest software', desc: 'Latest versions', href: '#latest-software' }
    ];

    const resourceItems = [
      { icon: '🔗', title: 'Support Portal', desc: 'Help & support', href: '/support', external: true },
      { icon: '🔗', title: 'Knowledge base', desc: 'Docs & guides', href: '/knowledge-base', external: true },
      { icon: '🔗', title: 'Subscription Manager', desc: 'Account management', href: '/subscription', external: true },
      { icon: '🔗', title: 'Integration Portal', desc: 'APIs & integrations', href: '/integration', external: true },
      { icon: '🔗', title: 'Service Status', desc: 'System status', href: '/status', external: true },
      { icon: '🔗', title: 'Marketing portal', desc: 'Campaign tools', href: '/marketing', external: true }
    ];

    return `
      <section class="hero-navigation" aria-labelledby="hero-main-title">
        <div class="hero-container">
          <!-- Column 1: Primary -->
          <div class="hero-column hero-column--primary" role="region" aria-label="Portal Header">
            <h1 id="hero-main-title" class="hero-title">SPM Partner Portal</h1>
            <p class="hero-subtitle">Empowering SPM Partners Worldwide</p>
          </div>

          <!-- Column 2: Popular Resources -->
          <nav class="hero-column hero-column--popular" aria-labelledby="popular-title">
            <h2 id="popular-title" class="hero-section-title">Popular</h2>
            <ul class="hero-links" role="list">
              ${popularItems.map(item => `
                <li>
                  <a href="${item.href}" class="hero-link" aria-label="${item.title}: ${item.desc}">
                    <span class="hero-icon" aria-hidden="true">${item.icon}</span>
                    <span class="hero-link-content">
                      <span class="hero-link-title">${item.title}</span>
                      <span class="hero-link-desc">${item.desc}</span>
                    </span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </nav>

          <!-- Column 3: Resources -->
          <nav class="hero-column hero-column--resources" aria-labelledby="resources-title">
            <h2 id="resources-title" class="hero-section-title">Resources</h2>
            <ul class="hero-links" role="list">
              ${resourceItems.map(item => `
                <li>
                  <a href="${item.href}"
                     class="hero-link ${item.external ? 'hero-link--external' : ''}"
                     ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
                     aria-label="${item.title}: ${item.desc}${item.external ? ' (opens in new window)' : ''}">
                    <span class="hero-icon" aria-hidden="true">${item.icon}</span>
                    <span class="hero-link-content">
                      <span class="hero-link-title">${item.title}</span>
                      <span class="hero-link-desc">${item.desc}</span>
                    </span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </nav>
        </div>
      </section>
    `;
  }

  renderCarousel() {
    const slides = [
      { id: 1, title: 'Featured Article 1', desc: 'Discover the latest updates and insights for SPM partners' },
      { id: 2, title: 'Featured Article 2', desc: 'New technical resources and best practices' },
      { id: 3, title: 'Featured Article 3', desc: 'Marketing materials and campaign guides' }
    ];

    const current = this.carouselIndex + 1;
    const total = slides.length;

    return `
      <section class="carousel" aria-label="Featured content carousel" role="region">
        <div class="carousel-container">
          <button class="carousel-btn carousel-prev" aria-label="Previous slide" data-carousel="prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="carousel-viewport">
            ${slides.map((slide, idx) => `
              <div class="carousel-slide ${idx === this.carouselIndex ? 'active' : ''}" aria-hidden="${idx !== this.carouselIndex}">
                <div class="slide-content">
                  <h3 class="slide-title">${slide.title}</h3>
                  <p class="slide-desc">${slide.desc}</p>
                  <button class="btn btn-primary">Read more</button>
                </div>
              </div>
            `).join('')}
          </div>

          <button class="carousel-btn carousel-next" aria-label="Next slide" data-carousel="next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div class="carousel-indicators">
          <span class="carousel-count" aria-live="polite">Slide ${current} of ${total}</span>
          <div class="carousel-dots" role="tablist" aria-label="Slide navigation">
            ${slides.map((slide, idx) => `
              <button class="dot ${idx === this.carouselIndex ? 'active' : ''}"
                      role="tab"
                      aria-selected="${idx === this.carouselIndex}"
                      aria-label="Go to slide ${idx + 1}"
                      data-slide="${idx}"></button>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderLatestPosts() {
    const filters = [
      { id: 'all', label: 'All' },
      { id: 'announcement', label: 'Announcements' },
      { id: 'general', label: 'General' },
      { id: 'technical', label: 'Technical Bulletins' },
      { id: 'product', label: 'Product Notifications' }
    ];

    const posts = [
      { id: 1, title: 'Important Webinar: Q1 Updates', date: 'February 27, 2026', likes: 28, comments: 5 },
      { id: 2, title: 'New Technical Documentation Released', date: 'February 27, 2026', likes: 15, comments: 3 },
      { id: 3, title: 'Upcoming Training Sessions Scheduled', date: 'February 26, 2026', likes: 42, comments: 8 },
      { id: 4, title: 'Product Enhancement: New Features Available', date: 'February 26, 2026', likes: 33, comments: 6 }
    ];

    return `
      <section class="latest-posts" aria-labelledby="posts-title">
        <div class="section-header">
          <h2 id="posts-title">Latest Posts</h2>
          <a href="#" class="read-more-link">All Posts</a>
        </div>

        <div class="filter-tabs" role="tablist" aria-label="Post filters">
          ${filters.map(filter => `
            <button class="filter-tab ${filter.id === this.postFilter ? 'active' : ''}"
                    role="tab"
                    aria-selected="${filter.id === this.postFilter}"
                    aria-label="Show ${filter.label} posts"
                    data-filter="${filter.id}">
              ${filter.label}
            </button>
          `).join('')}
        </div>

        <div class="posts-list" role="feed">
          ${posts.map(post => `
            <article class="post-card" role="article">
              <div class="post-header">
                <h3 class="post-title">${post.title}</h3>
                <time class="post-date">${post.date}</time>
              </div>
              <p class="post-excerpt">Discover the latest updates and important information for all SPM partners. Read more about what's happening in our community.</p>
              <div class="post-footer">
                <div class="post-stats">
                  <span class="stat" aria-label="${post.likes} likes">❤️ ${post.likes}</span>
                  <span class="stat" aria-label="${post.comments} comments">💬 ${post.comments}</span>
                </div>
                <button class="btn btn-secondary btn-small">Read more</button>
              </div>
            </article>
          `).join('')}
        </div>

        <div class="pagination" role="navigation" aria-label="Posts pagination">
          <button class="page-btn" aria-label="Previous page" aria-disabled="true" disabled>«</button>
          <button class="page-btn active" aria-current="page">1</button>
          <button class="page-btn" aria-label="Go to page 2">2</button>
          <button class="page-btn" aria-label="Go to page 3">3</button>
          <button class="page-btn" aria-label="Go to page 4">4</button>
          <button class="page-btn" aria-label="Next page">»</button>
        </div>
      </section>
    `;
  }

  renderMyGroups() {
    const groups = [
      { id: 1, name: 'Sales Team - North America' },
      { id: 2, name: 'Marketing Partners - EMEA' },
      { id: 3, name: 'Technical Support - APAC' },
      { id: 4, name: 'Executive Partners' }
    ];

    return `
      <section class="sidebar-section my-groups" aria-labelledby="groups-title">
        <h3 id="groups-title">My Groups</h3>
        <ul class="groups-list">
          ${groups.map(group => `
            <li class="group-item">
              <input type="checkbox" id="group-${group.id}" class="group-checkbox" aria-label="Select ${group.name}">
              <label for="group-${group.id}" class="group-label">${group.name}</label>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  }

  renderNewsletter() {
    return `
      <section class="sidebar-section newsletter" aria-labelledby="newsletter-title">
        <h3 id="newsletter-title">SPM HQ Newsletter</h3>
        <p class="newsletter-content">Latest news and updates from SPM headquarters. Subscribe to stay informed about important announcements and industry insights.</p>
        <time class="newsletter-date">February 27, 2026</time>
        <button class="btn btn-secondary btn-small">Read more</button>
      </section>
    `;
  }

  renderUpcomingEvents() {
    const events = [
      { id: 1, title: 'Q1 Partner Conference', date: 'March 15, 2026' },
      { id: 2, title: 'Technical Certification Program', date: 'March 20, 2026' },
      { id: 3, title: 'Marketing Strategy Webinar', date: 'March 22, 2026' },
      { id: 4, title: 'Sales Excellence Workshop', date: 'March 29, 2026' }
    ];

    return `
      <section class="sidebar-section upcoming-events" aria-labelledby="events-title">
        <div class="section-header-small">
          <h3 id="events-title">Upcoming Events (90 days)</h3>
          <a href="#" class="read-more-link">All Events</a>
        </div>
        <ul class="events-list">
          ${events.map(event => `
            <li class="event-item">
              <h4 class="event-title">${event.title}</h4>
              <time class="event-date">${event.date}</time>
            </li>
          `).join('')}
        </ul>
        <div class="pagination-small" role="navigation" aria-label="Events pagination">
          <button class="page-btn-small" aria-label="Previous page" aria-disabled="true" disabled>«</button>
          <button class="page-btn-small active" aria-current="page">1</button>
          <button class="page-btn-small" aria-label="Go to page 2">2</button>
          <button class="page-btn-small" aria-label="Go to page 3">3</button>
          <button class="page-btn-small" aria-label="Next page">»</button>
        </div>
      </section>
    `;
  }

  renderMyBookmarks() {
    return `
      <section class="sidebar-section my-bookmarks" aria-labelledby="bookmarks-title">
        <h3 id="bookmarks-title">My Bookmarks</h3>
        <div class="bookmarks-empty" role="status">
          <p>No bookmarks saved yet.</p>
          <p class="bookmarks-hint">Click the bookmark icon on posts to save them for later.</p>
        </div>
      </section>
    `;
  }

  renderComponentsPage() {
    return `
      ${this.renderHeader()}
      <div class="dashboard-container">
        ${this.renderNavigation()}
        <main class="dashboard-main">
          <div class="page-header">
            <h1 class="page-title">Component Library</h1>
            <p class="page-subtitle">All UI components and design system rules</p>
          </div>

          <div class="tabs">
            <button class="tab-btn ${this.currentTab === 'components' ? 'active' : ''}" data-tab="components" role="tab" aria-selected="${this.currentTab === 'components'}">Components</button>
            <button class="tab-btn ${this.currentTab === 'design-system' ? 'active' : ''}" data-tab="design-system" role="tab" aria-selected="${this.currentTab === 'design-system'}">Design System</button>
            <button class="tab-btn ${this.currentTab === 'colors' ? 'active' : ''}" data-tab="colors" role="tab" aria-selected="${this.currentTab === 'colors'}">Colors</button>
            <button class="tab-btn ${this.currentTab === 'spacing' ? 'active' : ''}" data-tab="spacing" role="tab" aria-selected="${this.currentTab === 'spacing'}">Spacing</button>
          </div>

          <div class="tab-content ${this.currentTab === 'components' ? 'active' : ''}" id="components" role="tabpanel">
            ${this.renderComponentsTab()}
          </div>

          <div class="tab-content ${this.currentTab === 'design-system' ? 'active' : ''}" id="design-system" role="tabpanel">
            ${this.renderDesignSystemTab()}
          </div>

          <div class="tab-content ${this.currentTab === 'colors' ? 'active' : ''}" id="colors" role="tabpanel">
            ${this.renderColorsTab()}
          </div>

          <div class="tab-content ${this.currentTab === 'spacing' ? 'active' : ''}" id="spacing" role="tabpanel">
            ${this.renderSpacingTab()}
          </div>
        </main>
      </div>
    `;
  }

  renderOverviewPage() {
    return `
      ${this.renderHeader()}
      <div class="dashboard-container">
        ${this.renderNavigation()}
        <main class="dashboard-main">
          <div class="page-header">
            <h1 class="page-title">Welcome</h1>
            <p class="page-subtitle">SPM Test Site - UI Prototype</p>
          </div>

          <div style="margin-bottom: 32px;">
            <h2>About This Site</h2>
            <p>This is a mock data prototype designed for interactive demo and user testing. It serves as a design validation shell with comprehensive component documentation and testing capabilities.</p>
          </div>

          <div style="margin-bottom: 32px;">
            <h2>Key Features</h2>
            <ul style="margin-left: 24px; line-height: 1.8;">
              <li><strong>Dashboard</strong> — SPM Partner Portal with all key sections</li>
              <li><strong>Component Library</strong> — All UI components organized by category</li>
              <li><strong>Design System</strong> — Typography, colors, spacing, and accessibility</li>
              <li><strong>Playwright Tests</strong> — Comprehensive E2E tests</li>
              <li><strong>UX Rules</strong> — Professional standards and best practices</li>
            </ul>
          </div>
        </main>
      </div>
    `;
  }

  renderComponentsTab() {
    return `
      <div class="components-grid">
        ${mockData.components.map(component => `
          <div class="component-card">
            <div class="component-name">${component.name}</div>
            <div class="component-description">${component.description}</div>
            <div class="component-preview">
              ${component.preview || `<button class="btn btn-primary">${component.name}</button>`}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderDesignSystemTab() {
    return `
      <div class="typography-section">
        <h2>Typography</h2>
        <p style="margin-bottom: 24px; color: var(--text-secondary);">Complete typography scale and specifications</p>

        ${Object.entries(mockData.typography).map(([key, spec]) => `
          <div class="typography-group">
            <div class="typography-label">${key.toUpperCase()}</div>
            <div style="margin-bottom: 8px; font-size: ${spec.size}; font-weight: ${spec.weight}; line-height: ${spec.lineHeight};">
              ${spec.example}
            </div>
            <div style="font-size: 12px; color: var(--text-secondary); font-family: monospace;">
              Size: ${spec.size} | Weight: ${spec.weight} | Line-height: ${spec.lineHeight}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderColorsTab() {
    return `
      <div style="margin-bottom: 24px;">
        <h2>Color Palette</h2>
        <p style="margin-bottom: 32px; color: var(--text-secondary);">All colors used in the design system</p>

        <div class="color-grid">
          ${mockData.colorPalette.map(color => `
            <div class="color-swatch">
              <div class="swatch-preview" style="background-color: ${color.value};"></div>
              <div class="swatch-info">
                <div class="swatch-name">${color.name}</div>
                <div class="swatch-value">${color.value}</div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">${color.usage}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderSpacingTab() {
    return `
      <div>
        <h2>Spacing Scale</h2>
        <p style="margin-bottom: 32px; color: var(--text-secondary);">Consistent spacing scale based on 8px unit</p>

        <div class="spacing-scale">
          ${mockData.spacing.map(space => `
            <div class="spacing-item">
              <div class="spacing-box" style="width: ${space.value}px; height: 20px;"></div>
              <div class="spacing-label">${space.value}${space.unit}</div>
              <div style="font-size: 14px; color: var(--text-secondary);">${space.usage}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    document.querySelectorAll('[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.currentPage = e.target.closest('[data-page]').dataset.page;
        this.currentTab = 'components';
        this.render();
      });
    });

    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.currentTab = e.target.dataset.tab;
        this.render();
      });
    });

    document.querySelectorAll('[data-carousel]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const direction = e.currentTarget.dataset.carousel;
        const slides = document.querySelectorAll('.carousel-slide').length;
        if (direction === 'prev') {
          this.carouselIndex = (this.carouselIndex - 1 + slides) % slides;
        } else {
          this.carouselIndex = (this.carouselIndex + 1) % slides;
        }
        this.render();
      });
    });

    document.querySelectorAll('[data-slide]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.carouselIndex = parseInt(e.currentTarget.dataset.slide);
        this.render();
      });
    });

    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.postFilter = e.currentTarget.dataset.filter;
        this.render();
      });
    });

    document.querySelector('.menu-toggle')?.addEventListener('click', () => {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      document.querySelector('.menu-toggle').setAttribute('aria-expanded', this.mobileMenuOpen);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        const prevBtn = document.querySelector('[data-carousel="prev"]');
        if (prevBtn && e.target.closest('.carousel')) prevBtn.click();
      }
      if (e.key === 'ArrowRight') {
        const nextBtn = document.querySelector('[data-carousel="next"]');
        if (nextBtn && e.target.closest('.carousel')) nextBtn.click();
      }
    });
  }
}

const app = new App();
