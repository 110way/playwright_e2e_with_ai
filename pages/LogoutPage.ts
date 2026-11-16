import { Page, Locator } from '@playwright/test';

export class LogoutPage {
    private readonly page: Page;

    // Locators
    private readonly headingLogout: Locator;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.headingLogout = page.locator('#content h1:has-text("Account Logout")');
        this.btnContinue = page.locator('#content a.btn.btn-primary:has-text("Continue"), #content a:has-text("Continue")');
    }

    /**
     * Verifies if the Account Logout page is displayed
     * @returns Promise<boolean> - true if logout heading is visible
     */
    async isLogoutPageExists(): Promise<boolean> {
        try {
            await this.headingLogout.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking LogoutPage: ${error}`);
            return false;
        }
    }

    /**
     * Clicks the Continue button on the logout confirmation page
     */
    async clickContinue(): Promise<void> {
        await this.btnContinue.click();
    }
}
