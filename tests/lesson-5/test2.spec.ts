import { test } from "@playwright/test";

test("Test 02", async ({ page }) => {
    await test.step("Go to page", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step("Click vào Bài học 2", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    })

    await test.step("Thêm sản phẩm 1 vào giỏ hàng", async() =>{
        await page.locator("//button[@data-product-id='1']").dblclick();
    })

    await test.step("Thêm sản phẩm 2 vào giỏ hàng", async() =>{
        await page.locator("//button[@data-product-id='2']").dblclick();
        await page.locator("//button[@data-product-id='2']").click();
    })

    await test.step("Thêm sản phẩm 3 vào giỏ hàng", async() =>{
        await page.locator("//button[@data-product-id='3']").click();
    })
})