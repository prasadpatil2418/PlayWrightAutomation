const {test,expect} = require('@playwright/test')

test.skip('Mousehover',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

   const mousehover= await page.locator('#mousehover')

   mousehover.hover()

    await page.waitForTimeout(3000) //wait
})


test.skip('Right click',async({page})=>{

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

   const rightClick = await page.locator('.context-menu-one.btn.btn-neutral')

  await rightClick.click({button:'right'})

    await page.waitForTimeout(3000) //wait
})

test('Double click',async({page})=>{

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('alert')// assertion for alert type
        expect(dialog.message()).toContain('You double clicked me.. Thank You..') // assertion for alert messege
        await dialog.accept(); // alert is closed by OK
    })

   const doubleblClick = await page.locator("button[ondblclick='myFunction()']")

  await doubleblClick.dblclick()

    await page.waitForTimeout(3000) //wait
})