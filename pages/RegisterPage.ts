import { Page, Locator } from '@playwright/test';

export interface CustomerRegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    password: string;
}

export class RegisterPage {
    private readonly page: Page;

    // Locators
    private readonly headingRegister: Locator;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkPrivacyPolicy: Locator;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS and text selectors
        this.headingRegister = page.locator('#content h1:has-text("Register Account"), h1:has-text("Register")');
        this.txtFirstName = page.locator('#input-firstname');
        this.txtLastName = page.locator('#input-lastname');
        this.txtEmail = page.locator('#input-email');
        this.txtTelephone = page.locator('#input-telephone');
        this.txtPassword = page.locator('#input-password');
        this.txtConfirmPassword = page.locator('#input-confirm');
        this.chkPrivacyPolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('button:has-text("Continue"), input[value="Continue"], button[type="submit"]:has-text("Continue")');
    }

    /**
     * Verifies if the Register Account page is displayed
     * @returns Promise<boolean> - true if register heading is visible
     */
    async isRegisterPageExists(): Promise<boolean> {
        try {
            return await this.headingRegister.isVisible();
        } catch (error) {
            console.log(`Error checking RegisterPage: ${error}`);
            return false;
        }
    }

    /**
     * Fills the First Name field
     * @param firstName - Customer first name
     */
    async setFirstName(firstName: string): Promise<void> {
        await this.txtFirstName.fill(firstName);
    }

    /**
     * Fills the Last Name field
     * @param lastName - Customer last name
     */
    async setLastName(lastName: string): Promise<void> {
        await this.txtLastName.fill(lastName);
    }

    /**
     * Fills the Email Address field
     * @param email - Customer email
     */
    async setEmail(email: string): Promise<void> {
        await this.txtEmail.fill(email);
    }

    /**
     * Fills the Telephone field
     * @param telephone - Customer telephone
     */
    async setTelephone(telephone: string): Promise<void> {
        if (await this.txtTelephone.isVisible()) {
            await this.txtTelephone.fill(telephone);
        }
    }

    /**
     * Fills the Password field
     * @param password - Customer password
     */
    async setPassword(password: string): Promise<void> {
        await this.txtPassword.fill(password);
    }

    /**
     * Fills the Confirm Password field
     * @param password - Customer password confirmation
     */
    async setConfirmPassword(password: string): Promise<void> {
        if (await this.txtConfirmPassword.isVisible()) {
            await this.txtConfirmPassword.fill(password);
        }
    }

    /**
     * Accepts the Privacy Policy checkbox
     */
    async checkPrivacyPolicy(): Promise<void> {
        if (await this.chkPrivacyPolicy.isVisible()) {
            await this.chkPrivacyPolicy.check();
        }
    }

    /**
     * Submits the registration form by clicking Continue
     */
    async clickContinue(): Promise<void> {
        await this.btnContinue.click();
    }

    /**
     * Composite method to fill the full registration form and submit
     * @param data - Customer registration data
     */
    async registerCustomer(data: CustomerRegistrationData): Promise<void> {
        await this.setFirstName(data.firstName);
        await this.setLastName(data.lastName);
        await this.setEmail(data.email);
        await this.setTelephone(data.telephone);
        await this.setPassword(data.password);
        await this.setConfirmPassword(data.password);
        await this.checkPrivacyPolicy();
        await this.clickContinue();
    }
}
