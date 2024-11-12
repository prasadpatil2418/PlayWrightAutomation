const {test,expect} = require ('@playwright/test')

test("DragAndDrop", async ({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/")

    const DragableElement = await page.locator('#draggable')
    const DropableElement = await page.locator('#droppable')

    await DragableElement.dragTo(DropableElement)

   // expect(await page.locator("div[id='droppable'] p")).toHaveText('Dropped!')

    await page.waitForTimeout(3000)
})

test.only("DragAndDrop1", async ({page})=>{

    page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const rome = await page.locator('#box6')
    const Italy = await page.locator('#box106')

    await rome.dragTo(Italy)


    await page.waitForTimeout(3000)
})