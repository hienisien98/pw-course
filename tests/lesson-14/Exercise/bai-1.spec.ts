import {test, expect} from "@playwright/test";

test("Bài 1", async ({ page }) => {

    // Login vào dasboard
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    await page.locator("//input[@id='user_login']").fill("k16-hien-phan");
    await page.locator("//input[@id='user_pass']").fill("odR^9S^amahw1dNDqKHqFOu%");
    await page.locator("//input[@id='wp-submit']").click();

    // So sánh ảnh chụp màn hình của dashboard
    const blockActivity = page.locator("//div[@id='dashboard_activity']");
    const blockAtGlance = page.locator("//div[@id='dashboard_right_now']");
    await expect(page).toHaveScreenshot("dashboard.png", {
        mask: [blockActivity, blockAtGlance],
        maskColor: "#7134eb"
    })

    // Đi tới trang Tag
    await page.locator("//div[text()='Posts']").click();
    await page.locator("//a[text()='Tags']").click();

    //So sánh ảnh chụp full page và che danh sách tag
    const blockTags = page.locator("//div[@id='col-right']");
    await expect(page).toHaveScreenshot("tagmenu.png", {
        fullPage: true,
        mask: [blockTags],
        maskColor: "#000000"
    })

})