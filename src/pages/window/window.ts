import { expect, type Locator, type Page } from '@playwright/test';
import BasePage from '../basePage/basepage';
export default class WindowsNav extends BasePage{
 
  
    readonly modelAndOverLay: Locator;
    readonly window: Locator;
    readonly openWindow: Locator;
    constructor(page: Page) {
       super(page);
      this.modelAndOverLay = page.locator('//a[@title="Modal & Overlays"]');
      this.window = page.locator('//a[@title="Window"]')
      this.openWindow = page.locator('//button[normalize-space()="Open window form"]')
      
    }

    async getModelAndOverlayandOpenNewWindow()
    {
        await super.clickOn(this.modelAndOverLay);
        await super.clickOn(this.window);
        await super.clickOn(this.openWindow);
    }
}
    