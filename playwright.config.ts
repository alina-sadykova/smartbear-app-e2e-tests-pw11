import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* global setup - way 1: create a single function and set up globally*/
  // globalSetup: "./tests/setup/globalSetup",
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? undefined : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list"], // for local terminal
    ["json", { outputFile: "playwright-report/test-results.json" }],
    ["html", { open: "never" }], // for local and pipeline downloadble for public access
    ["junit", { outputFile: "junitReports/reports.xml" }], // for pipelines
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: process.env.CI ? true : false, // push to CI/CD as true always
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: process.env.baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "SmartBear E2E Tests - Chrome",
      testDir: "./tests/e2e-tests",
      dependencies: ["SmartBear Setup Tests"],
      // below we overwrite use set globally for this specific project
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.baseURL,
        // using state stored for all tests
        storageState: "./auth/smartlogin.json",
      },
    },

    {
      name: "SmartBear Setup Tests",
      testDir: "./tests/setup",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.loginURL,
      },
    },
    {
      name: "SmartBear Login Tests",
      testDir: "./tests/login-tests",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.loginURL,
      },
    },
    // {
    //   name: 'SmartBear Tests - Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'SmartBear Tests - Safari',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
