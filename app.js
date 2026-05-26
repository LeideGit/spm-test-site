class App {
  constructor() {
    this.currentPage = 'overview';
    this.currentTab = 'components';
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const content = this.currentPage === 'components'
      ? this.renderComponentsPage()
      : this.renderOverviewPage();

    document.getElementById('app').innerHTML = content;
    this.attachEventListeners();
  }

  renderHeader() {
    return `
      <header>
        <div class="header-title">SPM Test Site</div>
      </header>
    `;
  }

  renderNavigation() {
    return `
      <nav>
        <a data-page="overview" class="${this.currentPage === 'overview' ? 'active' : ''}">Overview</a>
        <a data-page="components" class="${this.currentPage === 'components' ? 'active' : ''}">Component Library</a>
      </nav>
    `;
  }

  renderOverviewPage() {
    return `
      ${this.renderHeader()}
      ${this.renderNavigation()}
      <main>
        <div class="page">
          <div class="page-header">
            <h1 class="page-title">SPM Test Site</h1>
            <p class="page-subtitle">A rapid prototyping environment for UI/UX design validation</p>
          </div>

          <div style="margin-bottom: 32px;">
            <h2>Welcome</h2>
            <p>This is a mock data prototype designed for interactive demo and user testing. It serves as a design validation shell with comprehensive component documentation and testing capabilities.</p>
          </div>

          <div style="margin-bottom: 32px;">
            <h2>Key Features</h2>
            <ul style="margin-left: 24px; line-height: 1.8;">
              <li>🎨 <strong>Component Library</strong> — All UI components organized by category with design system documentation</li>
              <li>📋 <strong>Design System</strong> — Typography, colors, spacing, and accessibility guidelines</li>
              <li>🧪 <strong>Playwright Tests</strong> — Comprehensive E2E tests for all interactions</li>
              <li>📊 <strong>Changelog</strong> — Detailed changelog with token tracking for every change</li>
              <li>🚀 <strong>GitHub Pages</strong> — Deployed live for easy sharing and testing</li>
            </ul>
          </div>

          <div>
            <h2>Getting Started</h2>
            <p>Navigate to the <strong>Component Library</strong> in the sidebar to explore all available components, design system rules, and live previews.</p>
          </div>
        </div>
      </main>
    `;
  }

  renderComponentsPage() {
    return `
      ${this.renderHeader()}
      ${this.renderNavigation()}
      <main>
        <div class="page">
          <div class="page-header">
            <h1 class="page-title">Component Library</h1>
            <p class="page-subtitle">All UI components and design system rules</p>
          </div>

          <div class="tabs">
            <button class="tab-btn ${this.currentTab === 'components' ? 'active' : ''}" data-tab="components">Components</button>
            <button class="tab-btn ${this.currentTab === 'design-system' ? 'active' : ''}" data-tab="design-system">Design System</button>
            <button class="tab-btn ${this.currentTab === 'colors' ? 'active' : ''}" data-tab="colors">Colors</button>
            <button class="tab-btn ${this.currentTab === 'spacing' ? 'active' : ''}" data-tab="spacing">Spacing</button>
          </div>

          <div class="tab-content ${this.currentTab === 'components' ? 'active' : ''}" id="components">
            ${this.renderComponentsTab()}
          </div>

          <div class="tab-content ${this.currentTab === 'design-system' ? 'active' : ''}" id="design-system">
            ${this.renderDesignSystemTab()}
          </div>

          <div class="tab-content ${this.currentTab === 'colors' ? 'active' : ''}" id="colors">
            ${this.renderColorsTab()}
          </div>

          <div class="tab-content ${this.currentTab === 'spacing' ? 'active' : ''}" id="spacing">
            ${this.renderSpacingTab()}
          </div>
        </div>
      </main>
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
        this.currentPage = e.target.dataset.page;
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
  }
}

const app = new App();
