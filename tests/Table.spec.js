import {test, expect} from '@playwright/test'

test("table", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator('#productTable')

    // no. of rows and column
    const column= await table.locator('thead tr th')
    console.log("No. of columns : ", await column.count())
    expect (await column.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log("No. of rows : ", await rows.count())
    expect(await rows.count()).toBe(5)

    //select checkbox
    /*const matchrow= rows.filter({
        has: page.locator('td'),
        hasText:'Product4'
    })
    await matchrow.locator('input').check()*/

    //Print all details in table
    for(let i=0;i< await rows.count(); i++){

        const row = rows.nth(i);
        const tds = row.locator('td')

        for(let j=0; j< await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent())
        }

    }

    await page.waitForTimeout(4000)
})
