import { BasePage } from "./base-page";
import { Page } from "@playwright/test";

export class Dashboard extends BasePage{
    urlDasboardpage = "url_dashboard";
    xpathDashboard = "#dashboard";

    constructor(page: Page){
        super(page);
    }

    async navigateToDashboardPage() {
        await this.page.goto(this.urlDasboardpage);
    }
}
