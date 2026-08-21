import { test, chromium} from '@playwright/test'

test.use({storageState:'Data/LoginPage.json'})
test('Skip the Login activity using Storage State',async({page})=>{
 await page.goto('https://testleaf.lightning.force.com/one/one.app')
await page.waitForTimeout(2000)
})