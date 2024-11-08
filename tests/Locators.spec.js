const {test,expect} = require('@playwright/test')
//import{test,expect} from '@playwright/test'

test('Locators',async({page})=>{

    await page.goto("https://www.demoblaze.com/")

    //click on login button -property
    //await page.locator('#login2').click() //1st method
    await page.click('#login2') // 2nd method

    //provide username
    //await page.locator('#loginusername').fill("pavanol") //1st method
   // await page.type('#loginusername','pavanol') // 2nd method
    await page.fill('#loginusername','pavanol')  // 3rd method

  //provide password
  await page.fill("input[id='loginpassword']",'test@123')

  //click on login button
  await page.click("button[onclick='logIn()']")

  //verify logout link presence

  const logoutlink = await page.locator('#logout2')
  await expect(logoutlink).toBeVisible();

  await page.click('#logout2')
  
  await page.close()
})

test('MultipleElements',async ({page})=>{

    await page.goto("https://www.demoblaze.com/")

    //page.waitForSelector("locator") is used sometimes

     const links= await page.$$('a') // locate multiple element 

     for(const link of links){

       const linktext = await link.textContent()
       console.log(linktext)

     }

})