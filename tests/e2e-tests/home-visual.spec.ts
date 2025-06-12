import { expect, test } from "./../../fixtures/PageObject";

import { ScreenshotUtils } from "../../utils/ScreenshotUtils";
import { Snapshots } from "../../test-snapshots/Snapshots";

test.describe("SmartBear App Home Page visual verification @Home @Smoke", () => {
  test("Home Page Visual Regression", async ({ basePage }) => {
    await expect(basePage.loginInfo).toBeVisible();
    await ScreenshotUtils.takeScreenshot(basePage.page);
  });

  test("SmartBear App Home Page default snapshot verification", async ({
    basePage,
  }) => {
    await expect(basePage.fullHTMLContent).toMatchAriaSnapshot(
      Snapshots.homePageDefault
    );
  });

  test("SmartBear App Home Page all orders deleted snapshot verification", async ({
    homePage,
  }) => {
    homePage.checkAllLink.click();
    homePage.deleteSelectedButton.click();
    await expect(homePage.pageAfterDelete).toMatchAriaSnapshot(
      Snapshots.homePageAfterOrdersDeleted
    );
  });
});
