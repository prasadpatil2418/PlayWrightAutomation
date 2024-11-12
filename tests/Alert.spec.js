const {test, expect} = require('@playwright/test')

test.skip('Alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //enabling dialog window handler
    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('alert')// assertion for alert type
        expect(dialog.message()).toContain('I am an alert box!') // assertion for alert messege
        await dialog.accept(); // alert is closed by OK
    })

    await page.click('#alertBtn')
    
    await page.waitForTimeout(4000)

})

test.skip("confirm", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
       // await dialog.accept();

        await dialog.dismiss()//  alert is closed by Cancels
    })

    await page.click('#confirmBtn')

    await page.waitForTimeout(4000)
})

test("prompt", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on("dialog", async dialog =>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain("Please enter your name:")
        //expect(dialog.defaultvalue()).toContain('Harry apotter')
        await dialog.accept('Jhon');
    })

    await page.click('#promptBtn')
    await expect ( page.locator("//p[@id='demo']")).toHaveText("Hello Jhon! How are you today?")


    await page.waitForTimeout(4000)

})
