import { expect, test } from "./../../fixtures/PageObject";

test.describe("Home Page verification", () => {
  test("Validate title and url", async ({ basePage }) => {
    expect(basePage.page.url()).toContain("/weborders/");
    expect(await basePage.page.title()).toContain("Web Orders");
  });
});
