import{test,expect} from '@playwright/test'
import exp from 'constants'

test('InBuiltLocator',async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// locate element, image by its text alernative (alt attr.)
 const logo = await page.getByAltText('company-branding')
 await expect(logo).toBeVisible()

 // loacte an input by placeholder (placeholder attr.)
 await page.getByPlaceholder("Username").fill('Admin')
 await page.getByPlaceholder("Password").fill('admin123')

 //locate button by button tag with type attr.
 await page.getByRole('button',{type : 'submit'}).click()

 const name = await page.locator('.oxd-userdropdown-name').textContent()

 await expect(await page.getByText(name)).toBeVisible()

})