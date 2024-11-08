const {test,expect} = require('@playwright/test')

test('InputBox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const checkboxLocator = [  '#monday','#sunday', '#tuesday' ];

    //select multiple chebox
    for(const locator of checkboxLocator){

        await page.locator(locator).check() 
    }

  //Unselect selected multiple chebox
  for(const locator of checkboxLocator){

    if(await page.locator(locator).isChecked()){

        await page.locator(locator).uncheck()
    }   
  }  
    await page.waitForTimeout(3000) //wait
})