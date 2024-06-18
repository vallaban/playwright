import { test, expect } from '@playwright/test';
import WindowsNav from '../src/pages/window/window';

import fakerUtils from '../src/utilis/FakerUtils';


test.only('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright1/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('Open new', async ({ page }) => {
  const   modelAndOverLay = new WindowsNav(page);
 await modelAndOverLay.navitatetoURL('http://localhost:4200/pages/iot-dashboard')
 await modelAndOverLay.getModelAndOverlayandOpenNewWindow()
});

test('Faker', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  const firstName = new fakerUtils().getFirstName() 

  // Click the get started link.
  await page.locator('//input[@id="name"]').fill(firstName)

  // Expects page to have a heading with the name of Installation.
;
});
