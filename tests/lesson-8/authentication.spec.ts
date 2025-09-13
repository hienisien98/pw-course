import {test, expect} from "@playwright/test";

test.describe("AUTH", async () =>{

    test.beforeEach(async ({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    })
    test("@AUTH_002: Login succcess", async ({page}) => {

        await test.step("Nhập vào thông tin username, password đúng", async() =>{
            await page.locator("//input[@id='user_login']").fill("k16-hien-phan");
            await page.locator("//input[@id='user_pass']").fill("odR^9S^amahw1dNDqKHqFOu%");
        });

        await test.step("Nhấn nút Login", async() => {
            await page.locator("//input[@id='wp-submit']").click();
        })

        const verifyAuth02 = page.locator("//div[@id='wpbody-content']/descendant::h1");
        await expect(verifyAuth02).toBeInViewport();

    });

    test("@AUTH_001: Login fail", async({page}) => {

        await test.step("Nhập vào thông tin username, password sai", async() =>{
            await page.locator("//input[@id='user_login']").fill("k16-hien-phannnn");
            await page.locator("//input[@id='user_pass']").fill("odR^9S^amahw1dNDqKHqFOu%");
        });

        await test.step("Nhấn nút Login", async() => {
            await page.locator("//input[@id='wp-submit']").click();
        })

        const verifyAuth01 = page.locator("//div[@id='login_error']");
        await expect(verifyAuth01).toBeInViewport();
    })


})