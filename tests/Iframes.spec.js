import {test,expect} from "@playwright/test"

test.skip('iframes', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allFrames = await page.frames()
    console.log("No. of frames are : ", allFrames.length)

    //approach 1- using name or url
   // const frameName = await page.frame('name')// if name is present
   //const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
  // await frame1.locator('name="mytest1"').fill('test');
  await page.locator('frame[src=\'frame_2.html\']').contentFrame().locator('input[name=\'mytext2\']').fill('hello')
  await page.waitForTimeout(4000)

   //approach 2 using frame locator
   //const inputbox = await page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']")
   //inputbox.fill("hello");

})


test('test', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
  //  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').click();
    await page.locator('frame').nth(1).contentFrame().getByRole('textbox').fill('test');
    await page.locator('frame').nth(1).contentFrame().locator('body').click();
    await page.waitForTimeout(4000)
  });

  test.skip('childframe', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3= await page.locator("frame[src='frame_3.html']").contentFrame() 
   const childframe = await frame3.childframes()
   childframe.getByLabel('Web Testing').click()

    await page.waitForTimeout(4000)
  });