import { expect, test } from '@playwright/test'
import { describe } from 'node:test';
import { LoginPage } from '../../pages/login-page';

test('Verify login page before login.', async ({ page }) => {
    await page.goto("http://3.141.97.107:8080/login");
    await expect(page).toHaveTitle("Samsara");
    await expect(page.locator("#username")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();
});

test('Login to Samsara with Admin user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveTitle("Samsara");
    await expect(page.locator("#username")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();
    await loginPage.login("admin", "password");
    await expect(page.getByText("Hello and welcome to our gamers page!")).toBeVisible();
});

test('Logout from Samsara', async ({ page }) => {
    await page.goto("http://3.141.97.107:8080/login");
    await page.locator("#username").fill("admin");
    await page.locator("#password").fill("password");
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByText("Hello and welcome to our gamers page!")).toBeVisible();

});
