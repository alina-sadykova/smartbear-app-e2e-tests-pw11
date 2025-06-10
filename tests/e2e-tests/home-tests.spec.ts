import { expect, test } from "@playwright/test";

test.describe("Home Page verification", () => {
  test("Validate title and url", async ({ page }) => {
    await page.goto("/");
    expect(page.url()).toContain("/weborders/");
    expect(await page.title()).toContain("Web Orders");
  });
});
