import { Locator, Page } from "@playwright/test";

import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly checkAllLink: Locator;
  readonly deleteSelectedButton: Locator;
  readonly pageAfterDelete: Locator;

  constructor(page: Page) {
    super(page);

    this.checkAllLink = this.page.getByRole("link", { name: "Check All" });
    this.deleteSelectedButton = this.page.locator(
      "#ctl00_MainContent_btnDelete"
    );
    this.pageAfterDelete = this.page.getByRole("row");
  }
}
