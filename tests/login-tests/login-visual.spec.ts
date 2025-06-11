import { expect, test } from "./../../fixtures/PageObject";

import { ScreenshotUtils } from "../../utils/ScreenshotUtils";

test.describe("SmartBear App Login Page visual verification @Login @Smoke", () => {
  test("Login Page Visual Regression", async ({ loginPage }) => {
    await expect(loginPage.loginForm).toBeVisible();
    await ScreenshotUtils.takeScreenshot(loginPage.page);
  });

  test("SmartBear App Login Page snapshot verification", async ({
    loginPage,
  }) => {
    await expect(loginPage.loginForm).toMatchAriaSnapshot(`
      - paragraph
      - text: "Username:"
      - textbox "Username:"
      - text: "Password:"
      - textbox "Password:"
      - button "Login"
      - paragraph: "In order to log in Orders sample use the following information:"
      - paragraph: Username - Tester Password - test
      `);
  });
});
