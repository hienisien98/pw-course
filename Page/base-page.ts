import { Page } from "@playwright/test";

export class BasePage {
    page: Page;
    xpathDashboard = "#dashboard";

    constructor(page: Page){
        this.page = page;
    }

    async navigateTo(url: string){
        await this.page.goto(url);
    }
}