import { expect, test } from "./../../fixtures/PageObject";

import { ScreenshotUtils } from "../../utils/ScreenshotUtils";
import { Snapshots } from "../../test-snapshots/Snapshots";

test.describe("SmartBear App Login Page visual verification @Login @Smoke", () => {
  test("Login Page Visual Regression", async ({ loginPage }) => {
    await expect(loginPage.loginForm).toBeVisible();
    await ScreenshotUtils.takeScreenshot(loginPage.page);
  });

  test("SmartBear App Login Page snapshot verification", async ({
    loginPage,
  }) => {
    await expect(loginPage.loginForm).toMatchAriaSnapshot(
      Snapshots.loginFormDefault
    );
  });
});
