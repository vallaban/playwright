
import { expect, type Locator, type Page } from '@playwright/test';
import BasePage from '../basePage/basepage';
export default class Forms extends BasePage{
 
  
    readonly userName: Locator;
    readonly password: Locator;
    readonly LoginButtn: Locator;
    constructor(page: Page) {
       super(page);
      this.userName = page.locator('//input[@id="username"]');
      this.password = page.locator('//input[@id="password"]')
      this.LoginButtn = page.locator('//*[h5="Log in"]')
      
    }
}
    