import { Page, Locator } from '@playwright/test';

export class AdminLoginPage {
    private readonly page: Page;

    // Locators
    private readonly txtUsername: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly headingAdmin: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS and role selectors
        this.headingAdmin = page.locator('.card-header:has-text("Please enter your login details."), h1:has-text("Administration")');
        this.txtUsername = page.locator('#input-username, input[name="username"]');
        this.txtPassword = page.locator('#input-password, input[name="password"]');
        this.btnLogin = page.locator('button[type="submit"]:has-text("Login"), button:has-text("Login"), input[value="Login"]');
    }

    /**
     * Navigates directly to the Admin Portal URL
     * @param adminUrl - Admin portal URL
     */
    async goto(adminUrl = 'http://localhost/opencart/upload/admin/index.php'): Promise<void> {
        await this.page.goto(adminUrl);
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Verifies if the admin login page is displayed
     * @returns Promise<boolean> - true if login inputs are visible
     */
    async isAdminLoginPageExists(): Promise<boolean> {
        try {
            await this.txtUsername.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking AdminLoginPage: ${error}`);
            return false;
        }
    }

    /**
     * Fills administrator credentials and submits login form
     * @param username - Administrator username
     * @param password - Administrator password
     */
    async login(username: string, password: string): Promise<void> {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
        await this.page.waitForURL('**/dashboard**', { timeout: 15000 });
    }
}

