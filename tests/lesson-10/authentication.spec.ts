import { expect, test } from "@playwright/test";
import { LoginPage } from "../../Page/login-page";
import { Dashboard } from "../../Page/dashboard-page";

test.describe("AUTH", () => {

    let loginPage: LoginPage;
    let dashboardPage: Dashboard;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        dashboardPage = new Dashboard(page);
        await loginPage.login("username", "password");
    })

    test("Login pass", async ({ page }) => {
        

        await test.step("Navigate to Login Page", async () => {
            await loginPage.navigateToLoginPage();
        })

        await test.step("Fill info and login", async () => {
            await loginPage.fillUsername("username");
            await loginPage.fillPassword("password");
            
            await expect(loginPage.page.locator(loginPage.xpathUsername)).toHaveValue("expect_value");
            await expect(loginPage.page.locator(loginPage.xpathPassword)).toHaveValue("expect_valuse");

            await loginPage.clickBtnLogin();

            await expect(dashboardPage.page.locator(dashboardPage.xpathDashboard)).toBeVisible();

        })


    })
})