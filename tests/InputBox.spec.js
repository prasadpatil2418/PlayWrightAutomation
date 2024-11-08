const {test,expect} = require('@playwright/test')

test('InputBox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(await page.getByPlaceholder('Enter Name')).toBeVisible() //inbuilt locator username (visibility assertion)
    await expect(await page.locator('#name')).toBeEmpty() // CSS locator username (empty assertion)
    await expect (await page.locator('#email')).toBeEditable // CSS locator email (edit assertion)
    await expect (await page.locator('#email')).toBeEnabled // CSS locator email (enable assertion)

    await page.fill('#name', 'jhon')
    await page.fill('#email','test123@gmail.com')

    await page.waitForTimeout(3000) //wait

})