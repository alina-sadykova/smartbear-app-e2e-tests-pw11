import { Locator, Page } from "@playwright/test";

import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly loginForm: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    // common locators:
    this.loginForm = this.page.locator(".login");
    this.usernameInput = this.page.locator("#ctl00_MainContent_username");
    this.passwordInput = this.page.locator("#ctl00_MainContent_password");
    this.loginButton = this.page.locator("#ctl00_MainContent_login_button");
  }

  // reusable methods:

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }
  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.loginButton.click();
  }
}
