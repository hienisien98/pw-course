import { test, expect} from "@playwright/test";

test('Visual comparison', async ({page}) => {
    await page.goto("https://material.playwrightvn.com/06-new-tab.html");
    await page.waitForLoadState("load"); // đoạn này để đợi page ổn định mới bắt đầu chụp màn hình
    await expect(page).toHaveScreenshot("new-tab.png");
})

test('Visual comparison partial', async ({page}) => {
    await page.goto("https://material.playwrightvn.com/06-new-tab.html");
    const containerBlockLocator = page.locator("//div[@class='container']");
    await expect(containerBlockLocator).toHaveScreenshot("new-tab-partial.png");
})

test('visual comparison with mask', async ({page}) => {
    await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");
    const adsBlockLocator = page.locator("//div[@id='ads-here']");
    await expect(page).toHaveScreenshot("ads-block.png", {
        mask: [adsBlockLocator],
        maskColor: "#000000"
    })
})