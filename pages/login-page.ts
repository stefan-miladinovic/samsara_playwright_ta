import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly welcomeImage: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly logInButton: Locator;
    readonly logInBoxTitle: Locator;
    readonly createAccountLink: Locator;
    readonly resetPasswordLink: Locator;
    readonly logInLink: Locator;
    readonly invalidUserPassText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.welcomeImage = page.locator('.iconmelon');
        this.usernameField = page.getByPlaceholder('username');
        this.passwordField = page.getByPlaceholder('password');
        this.logInButton = page.getByRole('button', { name: 'Log In'});
        this.logInBoxTitle = page.locator('#loginbox').getByText('Samsara');
        this.createAccountLink = page.getByRole('link', { name: 'Create Account'});
        this.resetPasswordLink = page.getByRole('link', { name: "Reset Password"});
        this.logInLink = page.getByRole('link', { name: "Log In"});
        this.invalidUserPassText = page.getByText('Invalid username and/or');
    }

    async goto() {
        await this.page.goto('http://3.141.97.107:8080/login');
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.logInButton.click();
    }

}

