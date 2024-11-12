const {test, expect} = require('@playwright/test')

test('HiddenDropdown',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.fill("input[placeholder='Username']",'Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()

    //await page.locator('.oxd-main-menu-item.active').click()
    //await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click()
    await page.getByRole('link', { name: 'PIM' }).click(); // select PIM
    await page.locator('form i').nth(2).click(); // select dropdown
    await page.waitForTimeout(4000)

    //to handle hidden element use "turn on debugger" from Selectorshub
    const options = await page.$$("div[role='listbox'] span")


    for(let option of options){

        const JobTitle = await option.textContent();
        console.log(JobTitle)
        if(JobTitle.includes('QA Engineer')){

            await option.click();
            break;
        }

    }
 await page.waitForTimeout(4000)

})



