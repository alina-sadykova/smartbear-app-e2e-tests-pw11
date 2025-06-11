import { test as base, expect } from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { LoginPage } from "./../pages/LoginPage";

type PageObject = {
  basePage: BasePage;
  loginPage: LoginPage;
};
export const test = base.extend<PageObject>({
  // Fixture 1
  basePage: async ({ page }, use) => {
    // create a new instance
    const basePage = new BasePage(page);
    // actions
    await use(basePage);
  },

  // Fixture 2
  loginPage: async ({ page }, use) => {
    await page.goto("");
    // create a new instance
    const loginPage = new LoginPage(page);
    // actions
    await use(loginPage);
  },
});
export { expect };
