import { test } from "@playwright/test";

test("Test 03 unit record", async ({ page }) => {
    await test.step("Go to page", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step("Click vào Bài học 3", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    })

    await test.step("Add 100 ToDo", async() => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill("Todo " + i)
            await page.locator("//button[@id='add-task']").click();
        }
    })


    await test.step("Xóa các todo có số lẻ", async () => {
        const toDoList = page.locator("//ul[@id='task-list']")
        const value = toDoList.locator('li');
        const count = await value.count();

        page.on('dialog', async dialog => dialog.accept());

        for(let i = count; i > 0; i--){
            if( i % 2 !== 0){
                let buttonDelete = `//button[@id='todo-${(i)}-delete']`;
                await value.nth(i-1).locator(buttonDelete).click();
            }
        }
    })

})