import{test,expect} from '@playwright/test'

test('Assertions',async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register")

    //PageUrl
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    //PageTitle
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //element visibility
   const logo  = await page.getByAltText('nopCommerce demo store')
    await expect(logo).toBeVisible()

    //enabled 
    const searchBox = await page.getByPlaceholder('Search store')
    await expect(searchBox).toBeEnabled()

    //radio/checkbox
  const radioButton = await page.locator('#gender-male')
   await radioButton.click()
   await expect(radioButton).toBeChecked()

   //checkbox
   const checkbox = await page.locator('#Newsletter')
   await expect(checkbox).toBeChecked()

   //attribute
   const register = await page.locator('#register-button')
   await expect(register).toHaveAttribute('type','submit')

   //text
   await expect(await page.locator("div[class='page-title'] h1")).toHaveText('Register') // complete text
   await expect(await page.locator("div[class='page-title'] h1")).toContainText('Reg') // paertial text

   //values
   const emailinput = await page.locator('#Email')
   await emailinput.fill('test123@gmail.com')  
   await expect(emailinput).toHaveValue('test123@gmail.com')
})