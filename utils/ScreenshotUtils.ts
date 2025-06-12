import { Page, expect } from "@playwright/test";

export class ScreenshotUtils {
  /**
   * Take a screenshot of current page and compare it to baseline
   * Fails the test if visual difference  detected
   * @param page is PW page object
   */
  static async takeScreenshot(page: Page, isFullPage = true) {
    await expect(page).toHaveScreenshot({
      fullPage: isFullPage,
    });
  }
}
