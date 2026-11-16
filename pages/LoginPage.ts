import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;

    // Locators
    private readonly headingLogin: Locator;
    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly alertWarning: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with flexible selectors
        this.headingLogin = page.locator('#content h2:has-text("Returning Customer"), h2:has-text("Returning Customer")');
        this.txtEmail = page.locator('#input-email, input[name="email"]');
        this.txtPassword = page.locator('#input-password, input[name="password"]');
        this.btnLogin = page.locator('button:has-text("Login"), input[value="Login"], button[type="submit"]:has-text("Login")');
        this.alertWarning = page.locator('#alert .alert-danger, div.alert-danger, div.alert.alert-danger, .alert-dismissible');
    }

    /**
     * Verifies if the login page is displayed
     * @returns Promise<boolean> - true if login heading is visible
     */
    async isLoginPageExists(): Promise<boolean> {
        try {
            await this.headingLogin.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking LoginPage: ${error}`);
            return false;
        }
    }

    /**
     * Fills the email field
     * @param email - Customer email
     */
    async setEmail(email: string): Promise<void> {
        await this.txtEmail.fill(email);
    }

    /**
     * Fills the password field
     * @param password - Customer password
     */
    async setPassword(password: string): Promise<void> {
        await this.txtPassword.fill(password);
    }

    /**
     * Clicks the login button
     */
    async clickLogin(): Promise<void> {
        await this.btnLogin.click();
    }

    /**
     * Composite method to log in with customer credentials
     * @param email - Customer email
     * @param password - Customer password
     */
    async login(email: string, password: string): Promise<void> {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }

    /**
     * Verifies if the warning alert is visible
     * @returns Promise<boolean> - true if error alert is displayed
     */
    async isWarningVisible(): Promise<boolean> {
        try {
            await this.alertWarning.first().waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch (error) {
            console.log(`Error checking warning alert: ${error}`);
            return false;
        }
    }

    /**
     * Gets the warning message text
     * @returns Promise<string> - Warning message content
     */
    async getWarningMessage(): Promise<string> {
        try {
            await this.alertWarning.first().waitFor({ state: 'visible', timeout: 5000 });
            return (await this.alertWarning.first().textContent())?.trim() || '';
        } catch (error) {
            return '';
        }
    }
}
