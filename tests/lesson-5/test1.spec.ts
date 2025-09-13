import { test } from "@playwright/test";
import path from "path";
import { parseEnv } from "util";

test("Test 01", async ({ page }) => {
    await test.step("Go to page", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step("Click vào Bài học 1", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    })

    await test.step("Nhập đầy đủ thông tin trên form", async() => {
        await page.locator("//input[@id='username']").fill("hienishien");
        await page.locator("//input[@id='email']").fill("hienishien@gmail.com");
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//select[@id='country']").selectOption("uk");
        // await page.locator("//input[@id='profile']").setInputFiles(path.join(__dirname, 'data/mau.txt'));
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/data/mau.txt");
    })

    // await test.step("Nhấn nút Register", async () => {
    //     await page.locator("//button[text()='Register']").click();
    // })

})
