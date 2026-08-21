import { test, chromium} from '@playwright/test'

test('Login using advanced Xpaths',async({page})=>{
   await page.goto("https://login.salesforce.com/?locale=in")
   await page.locator('//div[@id="idcard-container"]/following::input[@type="email"]').fill('dilipkumar.rajendran@testleaf.com')
   await page.locator('//div[@id="usernamegroup"]/following-sibling::input[@id="Login"]').click()
   await page.locator('//div[@id="pwcaps"]/preceding-sibling::input[@id="password"]').fill("TestLeaf@2025")
   await page.locator('//div[@id="usernamegroup"]/following-sibling::input[@id="Login"]').click()
   await page.waitForTimeout(3000)

})


