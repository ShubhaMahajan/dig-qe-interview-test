import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import BasicAuthPage from "../pageobjects/basic_auth.page.js";

When(
  /^I use basic auth to login with (\w+) and (.+)$/,
  async (username, password) => {
    await BasicAuthPage.login(username, password);
  }
);

 
Then(/^I should see a paragraph saying (.+)$/, async (message) => {
Then(/^I should see a paragraph saying (.+)$/, async (message) => {
  // Wait a bit for element to be available
  await browser.pause(1000);

  // Check if element exists and has the text
  const messageElement = BasicAuthPage.message;
  const isDisplayed = await messageElement.isDisplayed().catch(() => false);
  
  if (isDisplayed) {
    await expect(messageElement).toHaveTextContaining(message);
  } else {
    console.log('Message element not displayed');
    throw new Error('Message element not found');
  }
});
});
