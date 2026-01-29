import { test, expect } from '@playwright/test';

/**
 * Home Page Tests
 * 
 * Testing main user flows:
 * - Page loads correctly
 * - Hero section is visible
 * - Navigation works
 * - Contact form validation
 * - Mobile menu functionality
 */

test.describe('Home Page', () => {
    test('should load and display hero section', async ({ page }) => {
        await page.goto('/');

        // Check page title
        await expect(page).toHaveTitle(/TT Marketing/);

        // Hero section should be visible
        const heroTitle = page.getByRole('heading', {
            name: /Transform Your Business/i,
            level: 1
        });
        await expect(heroTitle).toBeVisible();

        // CTA button should be present and clickable
        const ctaButton = page.getByRole('link', { name: /Get Started/i });
        await expect(ctaButton).toBeVisible();
        await expect(ctaButton).toBeEnabled();
    });

    test('should navigate to sections via anchor links', async ({ page }) => {
        await page.goto('/');

        // Click on Products link
        await page.getByRole('link', { name: /Products/i }).first().click();

        // Products section should be in viewport
        const productsSection = page.locator('#products');
        await expect(productsSection).toBeInViewport();
    });

    test('should display product cards', async ({ page }) => {
        await page.goto('/');

        // Wait for products to load
        await page.waitForSelector('[role="article"]', { timeout: 5000 });

        // Should have at least 3 product cards
        const productCards = page.locator('[role="article"]');
        const count = await productCards.count();
        expect(count).toBeGreaterThanOrEqual(3);

        // First product card should have title and CTA
        const firstCard = productCards.first();
        await expect(firstCard.getByRole('heading')).toBeVisible();
        await expect(firstCard.getByRole('link', { name: /Learn More/i })).toBeVisible();
    });

    test('should validate contact form fields', async ({ page }) => {
        await page.goto('/');

        // Navigate to contact section
        await page.getByRole('link', { name: /Contact/i }).first().click();

        // Try to submit empty form
        const submitButton = page.getByRole('button', { name: /Send Message/i });
        await submitButton.click();

        // Should show validation errors
        await expect(page.getByText(/Name is required/i)).toBeVisible();
        await expect(page.getByText(/Email is required/i)).toBeVisible();
        await expect(page.getByText(/Message is required/i)).toBeVisible();
    });

    test('should fill and submit contact form successfully', async ({ page }) => {
        await page.goto('/');

        // Navigate to contact section
        await page.locator('#contact').scrollIntoViewIfNeeded();

        // Fill out the form
        await page.getByLabel(/Full Name/i).fill('Test User');
        await page.getByLabel(/Email Address/i).fill('test@example.com');
        await page.getByLabel(/Phone Number/i).fill('+1234567890');
        await page.getByLabel(/Message/i).fill('This is a test message with enough characters.');

        // Submit the form
        await page.getByRole('button', { name: /Send Message/i }).click();

        // Note: In a real test, you'd mock the API response
        // For now, we just verify the form can be submitted
    });
});

test.describe('Navigation', () => {
    test('should show mobile menu on small screens', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');

        // Mobile menu button should be visible
        const menuButton = page.getByRole('button', { name: /Toggle navigation/i });
        await expect(menuButton).toBeVisible();

        // Click to open menu
        await menuButton.click();

        // Mobile menu should be visible
        const mobileMenu = page.locator('#mobile-menu');
        await expect(mobileMenu).toBeVisible();

        // Menu should contain navigation links
        await expect(mobileMenu.getByRole('link', { name: /Home/i })).toBeVisible();
        await expect(mobileMenu.getByRole('link', { name: /Products/i })).toBeVisible();
    });

    test('should show desktop navigation on large screens', async ({ page }) => {
        // Set desktop viewport
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.goto('/');

        // Desktop navigation should be visible
        const desktopNav = page.locator('nav ul.hidden.lg\\:flex');
        await expect(desktopNav).toBeVisible();

        // Mobile menu button should not be visible
        const menuButton = page.getByRole('button', { name: /Toggle navigation/i });
        await expect(menuButton).not.toBeVisible();
    });
});

test.describe('Accessibility', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
        await page.goto('/');

        // Page should have exactly one h1
        const h1Elements = await page.locator('h1').count();
        expect(h1Elements).toBe(1);

        // H1 should be the hero title
        const h1 = page.locator('h1');
        await expect(h1).toContainText(/Transform Your Business/i);
    });

    test('should have accessible form labels', async ({ page }) => {
        await page.goto('/');

        // Navigate to contact section
        await page.locator('#contact').scrollIntoViewIfNeeded();

        // All form inputs should have associated labels
        const nameInput = page.getByLabel(/Full Name/i);
        await expect(nameInput).toBeVisible();

        const emailInput = page.getByLabel(/Email Address/i);
        await expect(emailInput).toBeVisible();

        const messageInput = page.getByLabel(/Message/i);
        await expect(messageInput).toBeVisible();
    });

    test('should support keyboard navigation', async ({ page }) => {
        await page.goto('/');

        // Tab through interactive elements
        await page.keyboard.press('Tab'); // Skip link
        await page.keyboard.press('Tab'); // Logo
        await page.keyboard.press('Tab'); // Home link (or mobile button)

        // Check that focus is visible (would need visual regression testing for full verification)
        const focusedElement = await page.locator(':focus');
        await expect(focusedElement).toBeVisible();
    });
});
