
import { test, chromium} from '@playwright/test'

test('Launch Browser', async({page})=>{
await page.goto('https://login.salesforce.com/?locale=in')
await page.locator('[type="email"]').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('[type="submit"]').click()
await page.locator('[type="password"]').fill('TestLeaf@2025')
await page.locator('[type="submit"]').click()
await page.waitForTimeout(3000)
})