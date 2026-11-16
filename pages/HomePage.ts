import { Page, Locator } from '@playwright/test';

export class HomePage {
    private readonly page: Page;

    // Locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearch: Locator;
    private readonly btnSearch: Locator;
    private readonly lnkShoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with accessible role and CSS selectors
        this.lnkMyAccount = page.getByRole('button', { name: 'My Account' }).or(page.locator('a[title="My Account"]'));
        this.lnkRegister = page.locator('.dropdown-menu a:has-text("Register"), a[href*="route=account/register"]');
        this.lnkLogin = page.locator('.dropdown-menu a:has-text("Login"), a[href*="route=account/login"]');
        this.txtSearch = page.getByPlaceholder('Search').or(page.locator('input[name="search"]'));
        this.btnSearch = page.locator('#search button, header button:has(.fa-magnifying-glass), header button:has(.fa-search)').or(this.txtSearch.locator('..').locator('button'));
        this.lnkShoppingCart = page.getByRole('link', { name: 'Shopping Cart' });
    }

    /**
     * Clicks the My Account dropdown menu
     */
    async clickMyAccount(): Promise<void> {
        await this.lnkMyAccount.click();
    }

    /**
     * Clicks the Register option under My Account
     */
    async clickRegister(): Promise<void> {
        await this.lnkRegister.first().click();
    }

    /**
     * Clicks the Login option under My Account
     */
    async clickLogin(): Promise<void> {
        await this.lnkLogin.first().click();
    }

    /**
     * Searches for a product by name
     * @param productName - The name of the product to search
     */
    async searchProduct(productName: string): Promise<void> {
        await this.txtSearch.fill(productName);
        if (await this.btnSearch.count() > 0 && await this.btnSearch.first().isVisible()) {
            await this.btnSearch.first().click();
        } else {
            await this.txtSearch.press('Enter');
        }
    }

    /**
     * Navigates to the shopping cart page
     */
    async clickShoppingCart(): Promise<void> {
        await this.lnkShoppingCart.first().click();
    }

    /**
     * Verifies if the home page is displayed
     * @returns Promise<boolean> - true if home page search input is visible
     */
    async isHomePageExists(): Promise<boolean> {
        try {
            return await this.txtSearch.isVisible();
        } catch (error) {
            console.log(`Error checking HomePage: ${error}`);
            return false;
        }
    }

    /**
     * Verifies if the Login option is visible in the My Account dropdown
     * @returns Promise<boolean> - true if login link is visible
     */
    async isLoginOptionVisible(): Promise<boolean> {
        try {
            return await this.lnkLogin.first().isVisible();
        } catch (error) {
            console.log(`Error checking Login option visibility: ${error}`);
            return false;
        }
    }

    /**
     * Verifies if the Logout option is visible in the My Account dropdown
     * @returns Promise<boolean> - true if logout link is visible
     */
    async isLogoutOptionVisible(): Promise<boolean> {
        try {
            return await this.page.locator('.dropdown-menu a:has-text("Logout")').isVisible();
        } catch (error) {
            console.log(`Error checking Logout option visibility: ${error}`);
            return false;
        }
    }
}
