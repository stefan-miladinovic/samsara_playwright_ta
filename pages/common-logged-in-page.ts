import { expect, type Locator, type Page } from "@playwright/test";

export class CommonLoggedInPage {
    readonly page: Page;

    readonly logoutLink: Locator;
    readonly profileLink: Locator;

    readonly homeTab: Locator;
    readonly usersTab: Locator;
    readonly heroesTab: Locator;
    readonly galleryTab: Locator;
    readonly apiTab: Locator;
    readonly practiceTab: Locator;
    readonly brokenLinkTab: Locator;
    readonly adminTab: Locator;

    constructor(page: Page) {
        this.page = page;

        this.logoutLink = page.getByRole('link', { name: 'Log Out'});
        this.profileLink = page.getByRole('link', { name: 'Profile' });
        
        this.homeTab = page.getByRole('link', { name: 'Home' });
        this.usersTab = page.getByRole('link', { name: 'Users' });
        this.heroesTab = page.getByRole('link', { name: 'Heroes' });
        this.galleryTab = page.getByRole('link', { name: 'Gallery' });
        this.apiTab = page.getByRole('link', { name: 'API' });
        this.practiceTab = page.getByRole('link', { name: 'Practice' });
        this.brokenLinkTab = page.getByRole('link', { name: 'Broken Link'});
        this.adminTab = page.getByRole('link', { name: 'Admin' });
    }

    async logout() {
        await this.logoutLink.click();
    }
}