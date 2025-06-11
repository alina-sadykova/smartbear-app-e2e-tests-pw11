import { Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly loginInfo: Locator;

  constructor(page: Page) {
    this.page = page;

    // Common locators
    this.loginInfo = this.page.locator(".login_info");
  }

  // reusable methods/commands
  async wait(ms: number) {
    await this.page.waitForTimeout(ms);
  }
}
