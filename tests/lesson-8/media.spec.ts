import {test, expect} from "@playwright/test"

test.describe("MEDIA", async () => {
    var fileArr : string[] = [];

    test.beforeEach(async ({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator("//input[@id='user_login']").fill("k16-hien-phan");
        await page.locator("//input[@id='user_pass']").fill("odR^9S^amahw1dNDqKHqFOu%");
        await page.locator("//input[@id='wp-submit']").click();
        await page.locator("//div[text()='Media']").click();
    })

    test.afterEach( async ({page}) => {
        page.on('dialog', async dialog => dialog.accept());
        for(const inputfile of fileArr){
            await page.locator(`//div[text()='${inputfile}']/ancestor::div[@class='thumbnail']`).click();
            await page.locator("//div[@class='actions']/child::button").click();
        }
    })

    test("@MEDIA_FILES_001: Media - upload file success", async({page}) => {
    
        await test.step("Upload file", async() => {
            const inputfile = 'hien.txt';
            fileArr.push(inputfile);
            await page.locator("//div[@id='wp-media-grid']/descendant::a[text()='Add Media File']").click();
            await page.locator("//input[@type='file']").setInputFiles(`tests/lesson-8/test/${inputfile}`);
        })
        
        await test.step("F5 trang", async() => {
            await page.keyboard.press('F5');
        })

    })
    
})