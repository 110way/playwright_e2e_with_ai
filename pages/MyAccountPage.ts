import { Page, Locator } from '@playwright/test';

export class MyAccountPage {
    private readonly page: Page;

    // Locators
    private readonly headingMyAccount: Locator;
    private readonly lnkLogoutSidebar: Locator;
    private readonly lnkMyAccountDropdown: Locator;
    private readonly lnkLogoutDropdown: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS and text selectors
        this.headingMyAccount = page.locator('#content h1:has-text("My Account"), #content h2:has-text("My Account"), h1:has-text("My Account"), h2:has-text("My Account")');
        this.lnkLogoutSidebar = page.locator('a.list-group-item:has-text("Logout")');
        this.lnkMyAccountDropdown = page.getByRole('button', { name: 'My Account' }).or(page.locator('a[title="My Account"]'));
        this.lnkLogoutDropdown = page.locator('.dropdown-menu a:has-text("Logout")');
    }

    /**
     * Verifies if the My Account page is displayed
     * @param timeout - Optional wait timeout in milliseconds (defaults to 10000ms)
     * @returns Promise<boolean> - true if My Account heading is visible
     */
    async isMyAccountPageExists(timeout = 10000): Promise<boolean> {
        try {
            await this.headingMyAccount.first().waitFor({ state: 'visible', timeout });
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Clicks the Logout link from the right sidebar or dropdown
     */
    async clickLogout(): Promise<void> {
        if (await this.lnkLogoutSidebar.count() > 0 && await this.lnkLogoutSidebar.first().isVisible()) {
            await this.lnkLogoutSidebar.first().click();
        } else {
            await this.lnkMyAccountDropdown.first().click();
            await this.lnkLogoutDropdown.first().click();
        }
    }
}
