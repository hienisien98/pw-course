import {test, expect} from "@playwright/test";

test.describe("AUTH", async () =>{

    //before all
    //before each
    test.beforeEach(async ({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    })
    test("Login succcess", async ({page}) => {

        await test.step("Nhập vào thông tin username, password đúng", async() =>{
            await page.locator("//input[@id='user_login']").fill("k16-hien-phan");
            await page.locator("//input[@id='user_pass']").fill("odR^9S^amahw1dNDqKHqFOu%");
        });

        await test.step("Nhấn nút Login", async() => {
            await page.locator("//input[@id='wp-submit']").click();
        })

        const verifyLoginPass = page.locator("//div[@id='wpbody-content']/descendant::h1");
        //const verify = page.locator("//span[@id='footer-thankyou']");
        await expect(verifyLoginPass).toBeInViewport();

    });

    test("Login fail", async({page}) => {

        await test.step("Nhập vào thông tin username, password sai", async() =>{
            await page.locator("//input[@id='user_login']").fill("k16-hien-phannnn");
            await page.locator("//input[@id='user_pass']").fill("odR^9S^amahw1dNDqKHqFOu%");
        });

        await test.step("Nhấn nút Login", async() => {
            await page.locator("//input[@id='wp-submit']").click();
        })

        const verifyLoginFail = page.locator("//div[@id='login_error']");
        await expect(verifyLoginFail).toBeInViewport();
    })


})