const {test,expect} = require('@playwright/test')

test('InputBox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#male').check() 
   // await page.check('#male')
   
    await expect(await page.locator('#male')).toBeChecked() //male button
    await expect(await page.locator('#male').isChecked()).toBeTruthy()
    await expect(await page.locator('#female').isChecked()).toBeFalsy() //female button

    
    await page.waitForTimeout(3000) //wait

})