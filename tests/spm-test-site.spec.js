import { test, expect } from '@playwright/test';

test.describe('SPM Test Site', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Navigation', () => {
    test('should load overview page by default', async ({ page }) => {
      await expect(page.locator('.page-title')).toContainText('SPM Test Site');
    });

    test('should navigate to component library', async ({ page }) => {
      await page.click('[data-page="components"]');
      await expect(page.locator('.page-title')).toContainText('Component Library');
    });

    test('should navigate back to overview', async ({ page }) => {
      await page.click('[data-page="components"]');
      await page.click('[data-page="overview"]');
      await expect(page.locator('.page-title')).toContainText('SPM Test Site');
    });
  });

  test.describe('Component Library Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.click('[data-page="components"]');
    });

    test('should display component tabs', async ({ page }) => {
      const tabs = page.locator('.tab-btn');
      await expect(tabs).toHaveCount(4);
      await expect(tabs.nth(0)).toContainText('Components');
      await expect(tabs.nth(1)).toContainText('Design System');
      await expect(tabs.nth(2)).toContainText('Colors');
      await expect(tabs.nth(3)).toContainText('Spacing');
    });

    test('should have components tab active by default', async ({ page }) => {
      const activeTab = page.locator('.tab-btn.active').first();
      await expect(activeTab).toContainText('Components');
    });

    test('should switch to design system tab', async ({ page }) => {
      await page.click('[data-tab="design-system"]');
      const activeTab = page.locator('.tab-btn.active').first();
      await expect(activeTab).toContainText('Design System');
    });

    test('should switch to colors tab', async ({ page }) => {
      await page.click('[data-tab="colors"]');
      const activeTab = page.locator('.tab-btn.active').first();
      await expect(activeTab).toContainText('Colors');
    });

    test('should switch to spacing tab', async ({ page }) => {
      await page.click('[data-tab="spacing"]');
      const activeTab = page.locator('.tab-btn.active').first();
      await expect(activeTab).toContainText('Spacing');
    });

    test('should display component cards', async ({ page }) => {
      const cards = page.locator('.component-card');
      await expect(cards).not.toHaveCount(0);
    });
  });

  test.describe('Responsive Design', () => {
    test('should be responsive on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(page.locator('.page-title')).toBeVisible();
    });

    test('should be responsive on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(page.locator('.page-title')).toBeVisible();
    });

    test('should be responsive on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect(page.locator('.page-title')).toBeVisible();
    });
  });
});
