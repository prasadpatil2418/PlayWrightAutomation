import{test, expect} from "@playwright/test"

test("Boostrap dropdown",async({page})=>{

  await  page.goto('https://www.redbus.in/')

  await page.fill('#src','Delhi')

  await page.waitForSelector("//div[@class='sc-gZMcBi hviMLb']/text[1]")

  //const options = await page.$$(".sc-iwsKbI jTMXri")

 //const options = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")

 const options = await page.$$("div[class='sc-gZMcBi hviMLb']>text[1]")

  for(const option of options)
  {

    const value = option.textContent()
    
     console.log(value)

     if(value.includes('Mayur Vihar')){

         await option.click()
         break;
     }
  }

   await page.waitForTimeout(4000)

})