import{test, expect} from "@playwright/test";

test("Bài 2", async ({page}) => {

    // Truy cập trang và đi tới bài 5
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 5: Puzzle drag and drop game']").click();

    // Thực hiện Drag n Drop
    const piece1 = "#piece-1";
    const targetPiece1 = "//div[@data-piece=1]";
    const piece2 = "#piece-2";
    const targetPiece2 = "//div[@data-piece=2]";
    const piece3 = "#piece-3";
    const targetPiece3 = "//div[@data-piece=3]";
    const piece4 = "#piece-4";
    const targetPiece4 = "//div[@data-piece=4]";
    await page.dragAndDrop(piece1,targetPiece1);
    await page.dragAndDrop(piece2,targetPiece2);
    await page.dragAndDrop(piece3,targetPiece3);
    await page.dragAndDrop(piece4,targetPiece4);
    await expect(page).toHaveScreenshot("drag-drop.png");

})