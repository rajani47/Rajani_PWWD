import {test, chromium } from "@playwright/test";

//Create a Lead using CSS Selectors

test('Create a Lead using CSS Selectors', async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill("democsr2")
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await page.locator('a', { hasText: 'CRM/SFA' }).click();


    // NOT ABLE TO WRITE CODE AS WEBSITE IS IN DIFFERENT LANGUAGE AND NOT SHOWING LEAD TAB
  

})