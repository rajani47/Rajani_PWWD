import test, {chromium, Firefox} from '@playwright/test'

test('Launch Browser', async({})=>{
const browser = await chromium.launch()
const context = await browser.newContext()
 const page = await context.newPage()
 await page.goto('https://www.redbus.in')
 await page.waitForTimeout(5000)
 console.log(await page.title());
 console.log(await page.url());

})