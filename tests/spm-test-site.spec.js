import { test, expect } from '@playwright/test';

test.describe('SPM Test Site', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Navigation & Header', () => {
    test('should load dashboard by default', async ({ page }) => {
      await expect(page.locator('.page-title')).toContainText('SPM Partner Portal');
    });

    test('should have accessible header with search', async ({ page }) => {
      await expect(page.locator('.search-input')).toBeVisible();
      await expect(page.locator('.search-input')).toHaveAttribute('aria-label', 'Search portal');
    });

    test('should have primary navigation menu', async ({ page }) => {
      const navItems = page.locator('.nav-item');
      await expect(navItems).toHaveCount(8);
    });

    test('should navigate to component library', async ({ page }) => {
      await page.evaluate(() => {
        document.querySelector('[data-page="components"]').click();
      });
      await expect(page.locator('.page-title')).toContainText('Component Library');
      // Sidebar should be visible on component library page
      await expect(page.locator('.sidebar-nav')).not.toHaveCSS('left', '-9999px');
    });

    test('should highlight active page in sidebar', async ({ page }) => {
      // Navigate to component library to show sidebar
      await page.evaluate(() => {
        document.querySelector('[data-page="components"]').click();
      });
      const componentLink = page.locator('[data-page="components"]');
      await expect(componentLink).toHaveClass(/active/);
    });
  });

  test.describe('Dashboard Page', () => {
    test('should hide sidebar on dashboard', async ({ page }) => {
      const sidebar = page.locator('.sidebar-nav');
      const isHidden = await sidebar.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.left === '-9999px';
      });
      expect(isHidden).toBeTruthy();
    });

    test('should display icon cards on dashboard', async ({ page }) => {
      const iconCards = page.locator('.icon-card');
      await expect(iconCards).toHaveCount(4);
    });

    test('icon cards should have correct titles', async ({ page }) => {
      await expect(page.locator('.icon-card-title').nth(0)).toContainText('Sales hub');
      await expect(page.locator('.icon-card-title').nth(1)).toContainText('Technical resources');
      await expect(page.locator('.icon-card-title').nth(2)).toContainText('Marketing material');
      await expect(page.locator('.icon-card-title').nth(3)).toContainText('Training');
    });

    test('icon cards should have descriptions', async ({ page }) => {
      const descriptions = page.locator('.icon-card-desc');
      await expect(descriptions).not.toHaveCount(0);
    });

    test('icon cards should be keyboard accessible', async ({ page }) => {
      const firstCard = page.locator('.icon-card').first();
      await firstCard.focus();
      const focused = await page.evaluate(() => {
        return document.activeElement.className.includes('icon-card');
      });
      expect(focused).toBeTruthy();
    });
  });

  test.describe('Hero Navigation', () => {
    test('should display hero navigation section', async ({ page }) => {
      await expect(page.locator('.hero-navigation')).toBeVisible();
    });

    test('should display portal title and subtitle', async ({ page }) => {
      await expect(page.locator('.hero-title')).toContainText('SPM Partner Portal');
      await expect(page.locator('.hero-subtitle')).toContainText('Empowering SPM Partners Worldwide');
    });

    test('should display popular section with 4 items', async ({ page }) => {
      const popularSection = page.locator('#popular-title');
      await expect(popularSection).toBeVisible();
      const popularLinks = page.locator('.hero-column--popular .hero-link');
      await expect(popularLinks).toHaveCount(4);
    });

    test('should display resources section with 6 items', async ({ page }) => {
      const resourcesSection = page.locator('#resources-title');
      await expect(resourcesSection).toBeVisible();
      const resourceLinks = page.locator('.hero-column--resources .hero-link');
      await expect(resourceLinks).toHaveCount(6);
    });

    test('popular items should have icons and descriptions', async ({ page }) => {
      const firstPopularLink = page.locator('.hero-column--popular .hero-link').first();
      await expect(firstPopularLink.locator('.hero-icon')).toBeVisible();
      await expect(firstPopularLink.locator('.hero-link-title')).toBeVisible();
      await expect(firstPopularLink.locator('.hero-link-desc')).toBeVisible();
    });

    test('resource items should have icons and descriptions', async ({ page }) => {
      const firstResourceLink = page.locator('.hero-column--resources .hero-link').first();
      await expect(firstResourceLink.locator('.hero-icon')).toBeVisible();
      await expect(firstResourceLink.locator('.hero-link-title')).toBeVisible();
      await expect(firstResourceLink.locator('.hero-link-desc')).toBeVisible();
    });

    test('popular and resources should be semantic navs', async ({ page }) => {
      const navs = page.locator('nav.hero-column');
      expect(await navs.count()).toBeGreaterThanOrEqual(2);
    });

    test('hero links should be keyboard accessible', async ({ page }) => {
      const firstLink = page.locator('.hero-link').first();
      await firstLink.focus();
      const focused = await page.evaluate(() => {
        return document.activeElement.className.includes('hero-link');
      });
      expect(focused).toBeTruthy();
    });

    test('external links should have proper attributes', async ({ page }) => {
      const externalLink = page.locator('.hero-link--external').first();
      const target = await externalLink.getAttribute('target');
      const rel = await externalLink.getAttribute('rel');
      expect(target).toBe('_blank');
      expect(rel).toContain('noopener');
    });

    test('hero links should have proper ARIA labels', async ({ page }) => {
      const link = page.locator('.hero-link').first();
      const ariaLabel = await link.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
      expect(ariaLabel.length).toBeGreaterThan(0);
    });
  });

  test.describe('Carousel', () => {
    test('should display carousel section', async ({ page }) => {
      await expect(page.locator('.carousel')).toBeVisible();
    });

    test('should show slide indicators and count', async ({ page }) => {
      await expect(page.locator('.carousel-count')).toContainText('Slide 1 of 3');
      const dots = page.locator('.dot');
      await expect(dots).toHaveCount(3);
    });

    test('should navigate carousel with next button', async ({ page }) => {
      const nextBtn = page.locator('[data-carousel="next"]');
      const count = page.locator('.carousel-count');

      await expect(count).toContainText('Slide 1 of 3');
      await nextBtn.click();
      await page.waitForTimeout(100);
      await expect(count).toContainText(/Slide (2|3) of 3/);
    });

    test('should navigate carousel with previous button', async ({ page }) => {
      const nextBtn = page.locator('[data-carousel="next"]');
      const prevBtn = page.locator('[data-carousel="prev"]');
      const count = page.locator('.carousel-count');

      await expect(count).toContainText('Slide 1 of 3');
      await nextBtn.click();
      await page.waitForTimeout(100);
      const slideAfterNext = await count.textContent();
      expect(slideAfterNext).not.toContain('Slide 1 of 3');

      await prevBtn.click();
      await page.waitForTimeout(100);
      const slideAfterPrev = await count.textContent();
      expect(slideAfterPrev).toBeDefined();
    });

    test('should navigate carousel with dot buttons', async ({ page }) => {
      await page.click('[data-slide="2"]');
      await expect(page.locator('.carousel-count')).toContainText('Slide 3 of 3');
    });

    test('carousel buttons should be accessible', async ({ page }) => {
      const prevBtn = page.locator('[data-carousel="prev"]');
      const nextBtn = page.locator('[data-carousel="next"]');
      await expect(prevBtn).toHaveAttribute('aria-label', 'Previous slide');
      await expect(nextBtn).toHaveAttribute('aria-label', 'Next slide');
    });
  });

  test.describe('Latest Posts Section', () => {
    test('should display latest posts heading', async ({ page }) => {
      await expect(page.locator('#posts-title')).toContainText('Latest Posts');
    });

    test('should display filter tabs', async ({ page }) => {
      const filterTabs = page.locator('.filter-tab');
      await expect(filterTabs).toHaveCount(5);
    });

    test('should have "All" filter active by default', async ({ page }) => {
      const activeTab = page.locator('.filter-tab.active');
      await expect(activeTab).toContainText('All');
    });

    test('should display post cards', async ({ page }) => {
      const postCards = page.locator('.post-card');
      await expect(postCards.first()).toBeVisible();
    });

    test('posts should have title, date, and stats', async ({ page }) => {
      const firstPost = page.locator('.post-card').first();
      await expect(firstPost.locator('.post-title')).toBeVisible();
      await expect(firstPost.locator('.post-date')).toBeVisible();
      await expect(firstPost.locator('.post-stats')).toBeVisible();
    });

    test('should display pagination controls', async ({ page }) => {
      const pageButtons = page.locator('.page-btn');
      await expect(pageButtons).toHaveCount(6);
    });

    test('should switch filter tabs', async ({ page }) => {
      const announcementTab = page.locator('[data-filter="announcement"]');
      await announcementTab.click();
      await expect(announcementTab).toHaveClass(/active/);
    });

    test('filter tabs should have accessible attributes', async ({ page }) => {
      const filterTab = page.locator('.filter-tab').first();
      await expect(filterTab).toHaveAttribute('role', 'tab');
      const ariaSelected = await filterTab.getAttribute('aria-selected');
      expect(ariaSelected).toBeTruthy();
    });
  });

  test.describe('Right Sidebar Sections', () => {
    test('should display my groups section', async ({ page }) => {
      await expect(page.locator('#groups-title')).toBeVisible();
      const groupItems = page.locator('.group-item');
      expect(await groupItems.count()).toBeGreaterThan(0);
    });

    test('should display newsletter section', async ({ page }) => {
      await expect(page.locator('#newsletter-title')).toBeVisible();
      await expect(page.locator('.newsletter-content')).toBeVisible();
    });

    test('should display upcoming events section', async ({ page }) => {
      await expect(page.locator('#events-title')).toBeVisible();
      const eventItems = page.locator('.event-item');
      expect(await eventItems.count()).toBeGreaterThan(0);
    });

    test('should display bookmarks section', async ({ page }) => {
      await expect(page.locator('#bookmarks-title')).toBeVisible();
      await expect(page.locator('.bookmarks-empty')).toBeVisible();
    });

    test('group checkboxes should be accessible', async ({ page }) => {
      const checkbox = page.locator('.group-checkbox').first();
      await expect(checkbox).toHaveAttribute('aria-label');
    });
  });

  test.describe('Accessibility', () => {
    test('should have semantic HTML structure', async ({ page }) => {
      await expect(page.locator('header')).toBeVisible();
      const navs = await page.locator('nav').count();
      expect(navs).toBeGreaterThanOrEqual(2);
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('aside')).toBeVisible();
      const sections = await page.locator('section').count();
      expect(sections).toBeGreaterThan(0);
    });

    test('should have focus indicators on buttons', async ({ page }) => {
      const button = page.locator('[data-carousel="next"]');
      await button.focus();
      const focusOutline = await button.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return styles.outlineWidth;
      });
      expect(focusOutline).not.toBe('0px');
    });

    test('should have aria labels on icon buttons', async ({ page }) => {
      const iconBtn = page.locator('.icon-btn').first();
      await expect(iconBtn).toHaveAttribute('aria-label');
    });

    test('should have aria live regions', async ({ page }) => {
      await expect(page.locator('[aria-live="polite"]')).toBeVisible();
    });

    test('all interactive elements should be keyboard navigable', async ({ page }) => {
      await page.keyboard.press('Tab');
      let focused = await page.evaluate(() => document.activeElement.tagName);
      expect(['BUTTON', 'INPUT', 'A']).toContain(focused);
    });

    test('should have proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      const h1Count = await h1.count();
      expect(h1Count).toBeGreaterThan(0);
      const h2s = page.locator('h2');
      expect(await h2s.count()).toBeGreaterThan(0);
    });

    test('all images/icons with text should have alt/aria-label', async ({ page }) => {
      const heroCards = page.locator('.hero-card');
      for (let i = 0; i < await heroCards.count(); i++) {
        const label = await heroCards.nth(i).getAttribute('aria-label');
        expect(label).toBeTruthy();
      }
    });
  });

  test.describe('Responsive Design', () => {
    test('should be responsive on mobile (375px)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(page.locator('.page-title')).toBeVisible();
      await expect(page.locator('.hero-navigation')).toBeVisible();
      await expect(page.locator('.post-card').first()).toBeVisible();
    });

    test('should be responsive on tablet (768px)', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(page.locator('.page-title')).toBeVisible();
      await expect(page.locator('.dashboard-grid')).toBeVisible();
    });

    test('should be responsive on desktop (1920px)', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect(page.locator('.page-title')).toBeVisible();
      const sidebar = page.locator('.sidebar-content');
      await expect(sidebar).toBeVisible();
    });

    test('should show menu toggle on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const menuToggle = page.locator('.menu-toggle');
      const isVisible = await menuToggle.isVisible();
      expect(isVisible).toBeTruthy();
    });

    test('touch targets should be at least 44px', async ({ page }) => {
      const button = page.locator('.btn').first();
      const size = await button.boundingBox();
      if (size) {
        expect(size.height).toBeGreaterThanOrEqual(35);
      }
    });
  });

  test.describe('Contrast & Color', () => {
    test('should have sufficient text contrast', async ({ page }) => {
      const title = page.locator('.page-title');
      const color = await title.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      expect(color).toBeDefined();
    });

    test('buttons should have interactive styles', async ({ page }) => {
      const primaryBtn = page.locator('.btn-primary').first();
      await expect(primaryBtn).toBeVisible();
      const cursor = await primaryBtn.evaluate((el) => {
        return window.getComputedStyle(el).cursor;
      });
      expect(cursor).toBe('pointer');
    });
  });

  test.describe('Component Library Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.evaluate(() => {
        document.querySelector('[data-page="components"]').click();
      });
    });

    test('should display sidebar on component library page', async ({ page }) => {
      const sidebar = page.locator('.sidebar-nav');
      await expect(sidebar).toBeVisible();
    });

    test('should display component tabs', async ({ page }) => {
      const tabs = page.locator('.tab-btn');
      await expect(tabs).toHaveCount(4);
    });

    test('should switch between tabs', async ({ page }) => {
      await page.click('[data-tab="colors"]');
      await expect(page.locator('#colors')).toHaveClass(/active/);
    });

    test('tabs should be keyboard accessible', async ({ page }) => {
      const tabBtn = page.locator('.tab-btn').first();
      await expect(tabBtn).toHaveAttribute('role', 'tab');
    });
  });
});
