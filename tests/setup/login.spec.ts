import { expect, test } from "@playwright/test";

test("Login and save storage state", async ({ page }) => {
  await page.goto("");

  await page.getByRole("textbox", { name: "Username:" }).fill("Tester");
  await page.getByRole("textbox", { name: "Password:" }).fill("test");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Welcome, Tester! | Logout")).toBeVisible();

  // setting a path for storing state
  await page.context().storageState({ path: "./auth/smartlogin.json" });
});
