import{test, expect} from "@playwright/test"

test("Boostrap dropdown",async({page})=>{

  await  page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

  //click on the dropdown
  await page.locator('.multiselect.dropdown-toggle.btn.btn-default').click()
  
  //1. assertion for count
  const options = await page.locator('ul>li label input')
  await expect(options).toHaveCount(11);

  //2. assertion for count
  const options1 = await page.$$('ul>li label input')
   await expect(options1.length).toBe(11)

   //3. print value
   const options2 = await page.$$('ul>li label')
    
   for(const option of options2){

    const value = await option.textContent()
    
    if(value.includes('Angular') || value.includes('Java')){

        await option.click()
    }
   }
   await page.waitForTimeout(4000)

})