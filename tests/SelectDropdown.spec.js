const {test,expect} = require('@playwright/test')

test('InputBox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //multiple ways to select dropdown
    await page.locator('#country').selectOption({label:'India'})//label
    //await page.locator('#country').selectOption('India') //visible text
    await page.locator('#country').selectOption({value: 'uk'}) //value attr.
    await page.locator('#country').selectOption({index : 2 }) // Index
    await page.selectOption('#country','India') 

    //Assertion
    //check no. of option in dropdown - 1st method
    //const options = await page.locator('#country option')
   // await expect(options).toHaveCount(10)

    //check no. of option in dropdown - 2nd method
    const options = await page.$$('#country option')
    await expect(options.length).toBe(10)

    //check presence of value in the dropdown 
     const content = await page.locator('#country').textContent()
     await expect(content.includes('India')).toBeTruthy()
    
    await page.waitForTimeout(3000) //wait
})