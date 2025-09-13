import { BasePage } from "./base-page";
import { Page } from "@playwright/test";

export class LoginPage extends BasePage {
    xpathUsername = "#username";
    xpathPassword = "#password";
    xpathBtnLogin = "#btnlogin";
    urlLoginPage = "url_loginpage"

    constructor(page: Page){
        super(page);
    }

    async navigateToLoginPage(){
        await this.navigateTo(this.urlLoginPage);
    }

    async fillUsername(username: string){
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillPassword(password: string){
        await this.page.locator(this.xpathUsername).fill(password);
    }

    async clickBtnLogin(){
        await this.page.click(this.xpathBtnLogin);
    }

    async login(username: string, password: string){
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickBtnLogin();
    }

}