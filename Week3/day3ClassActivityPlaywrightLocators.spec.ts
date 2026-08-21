import {test, chromium, expect} from "@playwright/test"

test('Learn Playwright Locators',async({page})=>{
await page.goto('https://leaftaps.com/opentaps/control/login')
await page.getByRole('textbox', { name: "username" }).fill('demoCSR2')
await page.getByRole('textbox', { name: "Password"}).fill('crmsfa')
await page.getByRole('button', {name: "Login"}).click()
await page.waitForTimeout(3000);
await page.getByRole('link', {name: "CRM/SFA"}).click()
//await page.getByRole('link', {name: "Leads"}).click()
await page.waitForTimeout(3000);
await page.getByText("Leads", {exact:true}).click()
await page.waitForTimeout(3000);

})
