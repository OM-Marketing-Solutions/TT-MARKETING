import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration
 * 
 * Mobile-first testing strategy:
 * - Test on mobile viewports first
 * - Include tablet and desktop breakpoints
 * - Accessibility testing enabled
 */

export default defineConfig({
    testDir: './tests',

    /* Run tests in files in parallel */
    fullyParallel: true,

    /* Fail the build on CI if you accidentally left test.only in the source code */
    forbidOnly: !!process.env.CI,

    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,

    /* Opt out of parallel tests on CI */
    workers: process.env.CI ? 1 : undefined,

    /* Reporter to use */
    reporter: 'html',

    /* Shared settings for all projects */
    use: {
        /* Base URL to use in actions like `await page.goto('/')` */
        baseURL: 'http://localhost:3000',

        /* Collect trace when retrying the failed test */
        trace: 'on-first-retry',

        /* Screenshot on failure */
        screenshot: 'only-on-failure',
    },

    /* Configure projects for major browsers and viewports */
    projects: [
        // Mobile testing (priority)
        {
            name: 'Mobile Chrome',
            use: {
                ...devices['Pixel 5'],
                viewport: { width: 393, height: 851 },
            },
        },
        {
            name: 'Mobile Safari',
            use: {
                ...devices['iPhone 12'],
                viewport: { width: 390, height: 844 },
            },
        },

        // Tablet testing
        {
            name: 'Tablet',
            use: {
                ...devices['iPad Pro'],
                viewport: { width: 768, height: 1024 },
            },
        },

        // Desktop testing
        {
            name: 'Desktop Chrome',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1280, height: 720 },
            },
        },

        {
            name: 'Desktop Firefox',
            use: {
                ...devices['Desktop Firefox'],
                viewport: { width: 1280, height: 720 },
            },
        },

        {
            name: 'Desktop Safari',
            use: {
                ...devices['Desktop Safari'],
                viewport: { width: 1280, height: 720 },
            },
        },
    ],

    /* Run your local dev server before starting the tests */
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120000,
    },
});
