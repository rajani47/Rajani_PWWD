import {test, chromium, firefox } from '@playwright/test'

/* Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Firefox browser instance and verify the page title and URL. */

// Red Bus (Edge):o Load the home page and print the page title and current URL.
test('Launch Red Bus app in Edge Browser', async()=>{

    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto('https://www.redbus.in')
    const pageTitle = await page1.title()
    const pageUrl = await page1.url()
    console.log('Page title is : ' + pageTitle)
    console.log('Current page URL is : ' + pageUrl)
     await page1.waitForTimeout(2000)
})

//Flipkart (Firefox):Load the home page and print the page title and current URL
test('Launch Flipcard in Firefox Browser', async()=>{
    const browser = await firefox.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.flipkart.com')
    const pageTitle = await page.title()
    const pageUrl = await page.url()
    console.log('Page title is : ' + pageTitle)
    console.log('Current page URL is : ' + pageUrl)
    await page.waitForTimeout(2000)
})
