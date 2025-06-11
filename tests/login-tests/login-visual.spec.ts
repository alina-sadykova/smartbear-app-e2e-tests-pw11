import { expect, test } from "../../fixtures/PageObject";

import { ScreenshotUtils } from "../../utils/Screenshotutils";

test.describe("SmartBear App Login visual verificaton", () => {
  test("Login Page Visual Regression", async ({ loginPage }) => {
    await expect(loginPage.loginForm).toBeVisible();
    await ScreenshotUtils.takeScreenshot(loginPage.page);
  });
});
