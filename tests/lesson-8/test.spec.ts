import {test, expect} from "@playwright/test"

test.describe("POST", async () => {
    let createdTagName: string;
    test.beforeEach(async ({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator("//input[@id='user_login']").fill("k16-hien-phan");
        await page.locator("//input[@id='user_pass']").fill("odR^9S^amahw1dNDqKHqFOu%");
        await page.locator("//input[@id='wp-submit']").click();
        await page.locator("//div[text()='Posts']").click();
        await page.locator("//a[text()='Tags']").click();
    })

    test("@POST_TAG_002: Tag - add tag success", async({page}) => {
        let createdTagName: string;
        
        await test.afterEach( async({page}) =>{
            await page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`).hover();
            page.on('dialog', async dialog => dialog.accept());
            await page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']/parent::strong/following-sibling::div[@class='row-actions']/descendant::a[text()='Delete']`).click();
        })

        await test.step("Tạo thành công khi chỉ nhập Name", async() =>{

            createdTagName = 'tag hien';
            await page.locator("//input[@id='tag-name']").fill(createdTagName);
            await page.locator("//input[@id='submit']").click();

            const verifyNoti = page.locator("//div[@id='ajax-response']/descendant::p")
            await expect(verifyNoti).toBeInViewport();

            const verifyList = page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`);
            await expect(verifyList).toBeInViewport();
        })

        await test.step("Tạo thành công khi nhập Name và Slug", async() => {

            createdTagName = 'tag hien 02';
            await page.locator("//input[@id='tag-name']").fill(createdTagName);
            await page.locator("//input[@id='tag-slug']").fill("tag-hien-02");
            await page.locator("//input[@id='submit']").click();

            const verifyNoti = page.locator("//div[@id='ajax-response']/descendant::p")
            await expect(verifyNoti).toBeInViewport();

            const verifyNameOnList = page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`);
            await expect(verifyNameOnList).toBeInViewport();

            const verifySlugOnList = page.locator("//tbody[@id='the-list']/descendant::td[text()='tag-hien-02']");
            await expect(verifySlugOnList).toBeInViewport();
        })
        
    })


})

