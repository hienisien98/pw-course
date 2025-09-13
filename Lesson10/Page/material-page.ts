import { Page } from "@playwright/test";

export class MaterialPage{
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    xpathTodoPage: string;
    xpathPersonalNotes: string;

    constructor(page: Page){
        this.page = page;
    }

    async navigateToMaterialPage(url: string){
        await this.page.goto("https://material.playwrightvn.com/")
    }

    async navigatePage(pageName: string){
        await this.page.locator(`//a[contains(text()='${pageName}')]`).click();
    }

}