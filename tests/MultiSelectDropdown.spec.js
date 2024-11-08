const {test,expect} = require('@playwright/test')

test('InputBox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    // select multiple options  from dropdown
    await page.selectOption('#colors',['White','Green','Red'])

    //Assertion
    //check no. of options in dropdown
     const options = await page.locator('#colors option')
     await expect(options).toHaveCount(7)

     //check no. of option in dropdown - 2nd method
     const options2 = await page.$$('#colors option')
     console.log("No. of options :", options2.length)
     await expect(options2.length).toBe(7)

     //check presence of value in dropdown
     const content = await page.locator('#colors').textContent()
     await expect(content.includes('Black')).toBeFalsy()
     
    await page.waitForTimeout(3000) //wait
})