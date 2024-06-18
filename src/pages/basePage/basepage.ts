
import { Locator, Page } from '@playwright/test';
import {expect, type locator, type page, type Browser, type BrowserContext, type Expect} from './@playwright/test'


export default class BasePage{

    page:Page
    bcontext:BrowserContext;
    constructor(page:Page)
    {
        this.page = page;
    }

    dynamicLocator= (dynamicLocator:string)=> this.page.locator(dynamicLocator);
    async enterInputValue (locator:Locator, intputValue:string)
    {
        await locator.fill(intputValue)
       
    }
    async clickOn (locator:Locator)
    {
        await locator.click()
        await this.page.waitForLoadState('domcontentloaded', {timeout:2000})
    }
    async navitatetoURL ( Link:string)
    {
        
        await this.page.goto(Link);
        await this.page.waitForLoadState('domcontentloaded',{timeout:2000})
    }
    async waitForTheseSeconds (seconds:number)
    {
        return new Promise ((resolve)=>
        {
            setTimeout(resolve,(seconds*1000)||1000)    
        })
    }
    async getToNewTabandReturnThatPage (locator:Locator)
    {
        const [newPage] = await Promise.all(
            [
                this.page.waitForEvent('popup'),
                this.clickOn(locator)
            ]
        )
    }
    async getTothisTab (tabNumber:number)
    {
        await this.page.context().pages()[tabNumber].bringToFront();
        this.waitForTheseSeconds(3)
    }
    private InputisEmptry(locator:Locator):boolean
    {
        return (!locator.inputValue())
      }

    public async getListofInnerTextinDataFile(locator:Locator)
    {
        
    }


}