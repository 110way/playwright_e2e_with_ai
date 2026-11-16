import { Page, Locator } from '@playwright/test';

export class AccountSuccessPage {
    private readonly page: Page;

    // Locators
    private readonly headingSuccess: Locator;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.headingSuccess = page.locator('#content h1:has-text("Your Account Has Been Created!")');
        this.btnContinue = page.locator('#content a.btn.btn-primary:has-text("Continue"), #content a:has-text("Continue")');
    }

    /**
     * Verifies if the account creation success message is displayed
     * @returns Promise<boolean> - true if success heading is visible
     */
    async isAccountCreated(): Promise<boolean> {
        try {
            await this.headingSuccess.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking AccountSuccessPage: ${error}`);
            return false;
        }
    }

    /**
     * Gets the confirmation heading text
     * @returns Promise<string> - Text of the confirmation message
     */
    async getConfirmationHeading(): Promise<string> {
        try {
            return (await this.headingSuccess.first().textContent())?.trim() || '';
        } catch (error) {
            console.log(`Error getting confirmation heading: ${error}`);
            return '';
        }
    }

    /**
     * Clicks the Continue button on the account success page
     */
    async clickContinue(): Promise<void> {
        await this.btnContinue.click();
    }
}
