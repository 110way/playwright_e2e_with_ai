import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {
    private readonly page: Page;

    // Locators
    private readonly headingProductTitle: Locator;
    private readonly txtQuantity: Locator;
    private readonly btnAddToCart: Locator;
    private readonly alertSuccess: Locator;
    private readonly lnkCartInAlert: Locator;
    private readonly lnkCartHeader: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS and text selectors
        this.headingProductTitle = page.locator('#content h1, h1');
        this.txtQuantity = page.locator('#input-quantity, input[name="quantity"]');
        this.btnAddToCart = page.locator('#button-cart, button[type="submit"]:has-text("Add to Cart"), button:has-text("Add to Cart")');
        this.alertSuccess = page.locator('div.alert.alert-success, div.alert-success');
        this.lnkCartInAlert = page.locator('div.alert.alert-success a[href*="route=checkout/cart"], div.alert.alert-success a:has-text("shopping cart"), div.alert a:has-text("shopping cart")');
        this.lnkCartHeader = page.locator('a[title="Shopping Cart"], a:has-text("Shopping Cart")');
    }

    /**
     * Verifies if the product details page is displayed
     * @returns Promise<boolean> - true if product title heading is visible
     */
    async isProductDetailsPageExists(): Promise<boolean> {
        try {
            await this.headingProductTitle.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking ProductDetailsPage: ${error}`);
            return false;
        }
    }

    /**
     * Gets the displayed product name
     * @returns Promise<string> - Product name
     */
    async getProductName(): Promise<string> {
        return (await this.headingProductTitle.textContent()) || '';
    }

    /**
     * Sets the desired quantity
     * @param quantity - Quantity string
     */
    async setQuantity(quantity: string): Promise<void> {
        await this.txtQuantity.fill(quantity);
    }

    /**
     * Clicks the Add to Cart button
     */
    async clickAddToCart(): Promise<void> {
        await this.btnAddToCart.click();
    }

    /**
     * Verifies if the Add to Cart success alert is displayed
     * @returns Promise<boolean> - true if alert is visible
     */
    async isAddToCartSuccessVisible(): Promise<boolean> {
        try {
            await this.alertSuccess.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking add to cart alert: ${error}`);
            return false;
        }
    }

    /**
     * Gets the Add to Cart success alert text
     * @returns Promise<string> - Alert message content
     */
    async getSuccessAlertMessage(): Promise<string> {
        try {
            await this.alertSuccess.first().waitFor({ state: 'visible', timeout: 10000 });
            return (await this.alertSuccess.first().textContent())?.trim() || '';
        } catch (error) {
            console.log(`Error getting add to cart alert message: ${error}`);
            return '';
        }
    }

    /**
     * Navigates to the shopping cart page via alert link or header link
     */
    async openShoppingCart(): Promise<void> {
        if (await this.lnkCartInAlert.isVisible()) {
            await this.lnkCartInAlert.first().click();
        } else {
            await this.lnkCartHeader.first().click();
        }
    }
}
