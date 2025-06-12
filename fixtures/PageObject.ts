import { test as base, expect } from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { OrderData } from "../test-data/OrderData";

type PageObject = {
  basePage: BasePage;
  loginPage: LoginPage;
  homePage: HomePage;
  // data from fixtures
  orderData: {
    productInfo: {
      product: string;
      quantity: number;
    };
    addressInfo: {
      customerName: string;
      street: string;
      city: string;
      state: string;
      zip: number;
    };
    paymentInfo: {
      cardType: string;
      cardNumber: string;
      expDate: string;
    };
  };
};

export const test = base.extend<PageObject>({
  // Fixture 1
  basePage: async ({ page }, use) => {
    // create a new instance
    await page.goto("");
    const basePage = new BasePage(page);
    // actions
    await use(basePage);
  },

  // Fixture 2
  loginPage: async ({ page }, use) => {
    await page.goto("");
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    await page.goto("");
    const homePage = new HomePage(page);

    await use(homePage);
  },

  // how to store data and pull from fixtures
  orderData: async ({}, use) => {
    const orderPage = OrderData.newOrder;

    await use(orderPage);
  },
});
export { expect };
