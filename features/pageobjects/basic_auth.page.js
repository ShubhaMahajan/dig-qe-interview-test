import { browser } from "@wdio/globals";
// import { $ } from "@wdio/globals";
// import Page from "./page.js";

class BasicAuthPage {
  get message() {
    return $(".example p");
  }
  
  async login(username, password) {
    await this.open(username, password);
    // Brief wait for page to load
    await browser.pause(2000);
  }
  
  open(username, password) {
    return browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`
    );
  }
}

export default new BasicAuthPage();
