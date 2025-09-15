import {test} from "@playwright/test";

test("Test record", async ({page}) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
    await page.locator("//input[@id='new-task']").fill("new task 01");
    await page.locator("//button[@id='add-task']").click();
})