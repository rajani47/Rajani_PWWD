/* Write the typescript code to login to Salesforce application using Advanced Xpaths.*/

import { test, chromium, expect} from '@playwright/test'

//Through basic xpaths
test('Learn basic Xpaths', async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#Login').click()
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('#Login').click()
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle('Home | Salesforce')
})

