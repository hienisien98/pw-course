import {test, expect} from "@playwright/test"

test.describe("POST", async () => {
    var tagNameArr : string[] = [];
    
    test.beforeEach(async ({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator("//input[@id='user_login']").fill("k16-hien-phan");
        await page.locator("//input[@id='user_pass']").fill("odR^9S^amahw1dNDqKHqFOu%");
        await page.locator("//input[@id='wp-submit']").click();
    })

    test.afterEach( async({page}) =>{
        page.on('dialog', async dialog => dialog.accept());
        for (const createdTagName of tagNameArr){
            await page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`).hover();
            await page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']/parent::strong/following-sibling::div[@class='row-actions']/descendant::a[text()='Delete']`).click();
        }
        for (const createdTagName of tagNameArr){
            const verifyDeleteTagName = page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`);
            await expect(verifyDeleteTagName).toBeVisible();
        }

        tagNameArr = [];
        
    })


    test("@POST_TAG_001: Tag - add tag failed", async({page}) => {

        await page.locator("//div[text()='Posts']").click();
        await page.locator("//a[text()='Tags']").click();

        await test.step("Click button Add New Tag", async() => {
            await page.locator("//input[@id='submit']").click();
        })

        const verifyPostTag01 = page.locator("//div[@id='ajax-response']/descendant::p");
        await expect(verifyPostTag01).toBeInViewport();

    })

    test("@POST_TAG_002: Tag - add tag success", async({page}) => {
      
        await page.locator("//div[text()='Posts']").click();
        await page.locator("//a[text()='Tags']").click();

        await test.step("Tạo thành công khi chỉ nhập Name", async() =>{

            const createdTagName = 'tag hien';
            tagNameArr.push(createdTagName);
            await page.locator("//input[@id='tag-name']").fill(createdTagName);
            await page.locator("//input[@id='submit']").click();

            const verifyNoti = page.locator("//div[@id='ajax-response']/descendant::p")
            await expect(verifyNoti).toBeInViewport();

            const verifyList = page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`);
            await expect(verifyList).toBeInViewport();
        })

        await test.step("Tạo thành công khi nhập Name và Slug", async() => {

            const createdTagName = 'tag hien 02';
            tagNameArr.push(createdTagName);
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

    test ("@POST_TAG_003: Tag - slug auto remove special character", async({page}) =>{

        await page.locator("//div[text()='Posts']").click();
        await page.locator("//a[text()='Tags']").click();

        await test.step("Điền thông tin và tạo tag", async() => {
            
            const createdTagName = 'tag hien 03';
            tagNameArr.push(createdTagName);
            await page.locator("//input[@id='tag-name']").fill(createdTagName);
            await page.locator("//input[@id='tag-slug']").fill("Đây là tag đặc biệt @100 $200");
            // await page.waitForTimeout(10000);
            await page.locator("//input[@id='submit']").click();

            const verifyNoti = page.locator("//div[@id='ajax-response']/descendant::p")
            await expect(verifyNoti).toBeInViewport();

            const verifyNameOnList = page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`);
            await expect(verifyNameOnList).toBeInViewport();

            const verifySlugOnList = page.locator("//tbody[@id='the-list']/descendant::td[text()='day-la-tag-dac-biet-100-200']");
            await expect(verifySlugOnList).toBeInViewport();

        })

    })

    test ("@POST_CATEGORY_001: Tag - Category - create category success", async({page}) =>{

        await page.locator("//div[text()='Posts']").click();
        await page.locator("//a[text()='Categories']").click();

        await test.step("Điền name + slug", async() => {
            
            const createdTagName = 'catagory hien 03';
            tagNameArr.push(createdTagName);
            await page.locator("//input[@id='tag-name']").fill(createdTagName);
            await page.locator("//input[@id='tag-slug']").fill("Đây là category đặc biệt @100 $200");
            await page.locator("//input[@id='submit']").click();

            const verifyNoti = page.locator("//div[@id='ajax-response']/descendant::p")
            await expect(verifyNoti).toBeVisible();

            const verifyNameOnList = page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`);
            await expect(verifyNameOnList).toBeVisible();

            const verifySlugOnList = page.locator("//tbody[@id='the-list']/descendant::td[text()='day-la-tag-dac-biet-100-200']");
            await expect(verifySlugOnList).toBeInViewport();

        })

        await test.step("Điền name + parent", async() => {
            
            const createdTagName = 'catagory hien 04';
            tagNameArr.push(createdTagName);
            await page.locator("//input[@id='tag-name']").fill(createdTagName);
            await page.locator("//select[@id='parent']").selectOption("K6 class");
            await page.locator("//input[@id='submit']").click();

            const verifyNoti = page.locator("//div[@id='ajax-response']/descendant::p")
            await expect(verifyNoti).toBeVisible();

            const verifyNameOnList = page.locator(`//tbody[@id='the-list']/descendant::a[text()='${createdTagName}']`);
            await expect(verifyNameOnList).toBeVisible();

        })

    })

})