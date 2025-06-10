import { chromium, expect } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("/");

  await page.getByRole("textbox", { name: "Username:" }).fill("Tester");
  await page.getByRole("textbox", { name: "Password:" }).fill("test");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Welcome, Tester! | Logout")).toBeVisible();

  await page.context().storageState({ path: "./auth/smartlogin.json" });
}

export default globalSetup;
