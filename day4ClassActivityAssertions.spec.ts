import {test,chromium, expect} from '@playwright/test'

test('Learn Hard and Soft assertions',async({page})=>{
//Navigate to the Page
await page.goto('https://leafground.com/input.xhtml')

//Locators
const text1 = page.getByText('j_idt88:name',{exact:true})
const text2 = page.getByRole('textbox',{name:'Babu Manickam'})
const email = page.getByPlaceholder('Your email and tab')

//Validate the disabled text boxes
expect(text1).toBeDisabled()
await expect.soft(text2).toBeDisabled()

//Validate enabled textBox(Email field)
expect(email).toBeEnabled()
expect(email).toBeEditable()

//Enter value in the not disabled text field
await page.locator("//input[@id='j_idt88:j_idt99']").fill("Welcome")


})