import {defineConfig, devices} from "@playwright/test"

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ["list"],
        ['junit', { outputFile: 'playwright-report/results.xml' }],
        ['html', { outputFolder: 'playwright-report/html' }],
    ],
    use: {
        baseURL: "http://localhost:5173",
        trace: "on-first-retry",
    },

    projects: [
        // {
        //     name: 'firefox',
        //     use: {...devices['Desktop Firefox']},
        // },
        // {
        //     name: 'firefox-mobile',
        //     use: {...devices['Pixel 8']},
        // },
        {
            name: "chromium",
            use: {...devices["Desktop Chrome"]},
        },
    ],

    webServer: {
        command: "npm run dev",
        url: "http://localhost:5173",
        reuseExistingServer: !process.env.CI,
    },
})
