const {test,expect} = require('@playwright/test')

test('Datepicker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   // await page.fill('#datepicker',"12/05/2024")

   //date picker
   const year = "2025";
   const month = "March";
   const date = "28"

   await page.click('#datepicker')

   while(true){
    const currentYear = await page.locator(".ui-datepicker-year").textContent()
    const currentMonth =await page.locator(".ui-datepicker-month").textContent()
 
    if(currentYear == year && currentMonth == month) {
             break;      
    }
    await page.locator("a[title='Next']").click()
   }
    
   await page.click (`//a[normalize-space()='${date}']`)
   
    await page.waitForTimeout(3000) //wait
})


test.skip('DatepickerNew',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')


   //date picker
   const year = "2023";
   const month = "Apr";
   const date = "25"

   await page.click('#txtDate')

   while(true){
    const currentYear = await page.locator("select[aria-label='Select month']").textContent()
    const currentMonth =await page.locator("//select[@aria-label='Select year']").textContent()
 
    if(currentYear == year && currentMonth == month) {
             break;      
    }
   // await page.locator("//a[@title='Next']").click() // future dates
    await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click() // back dates
   }
    
   await page.click (`//a[normalize-space()='${date}']`)
   
    await page.waitForTimeout(3000) //wait
})

