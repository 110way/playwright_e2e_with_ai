import { Page, Locator } from '@playwright/test';

export class ShoppingCartPage {
    private readonly page: Page;

    // Locators
    private readonly headingShoppingCart: Locator;
    private readonly cartTable: Locator;
    private readonly cartProductLink: Locator;
    private readonly txtQuantity: Locator;
    private readonly cellUnitPrice: Locator;
    private readonly cellLineTotal: Locator;
    private readonly cellCartTotal: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with selectors supporting OpenCart 3 & 4
        this.headingShoppingCart = page.locator('#content h1:has-text("Shopping Cart"), h1:has-text("Shopping Cart")');
        this.cartTable = page.locator('table');
        this.cartProductLink = page.locator('table tbody tr td:nth-child(2) a, .table-responsive tbody tr td a:not(:empty)');
        this.txtQuantity = page.locator('table tbody tr td:nth-child(3) input, input[name*="quantity"]');
        this.cellUnitPrice = page.locator('table tbody tr td:nth-child(4), table tbody tr td:nth-child(5)');
        this.cellLineTotal = page.locator('table tbody tr td:nth-child(5), table tbody tr td:nth-child(6)');
        this.cellCartTotal = page.locator('table tr:has(strong:text-is("Total")) td:last-child, table tr:has-text("Total:") td:last-child, #content .row table tr:last-child td:last-child');
    }

    /**
     * Verifies if the shopping cart page is displayed
     * @returns Promise<boolean> - true if shopping cart heading is visible
     */
    async isShoppingCartPageExists(): Promise<boolean> {
        try {
            await this.headingShoppingCart.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking ShoppingCartPage: ${error}`);
            return false;
        }
    }

    /**
     * Verifies if the specified product is present in the cart
     * @param productName - Product name
     * @returns Promise<boolean> - true if product link is visible in cart table
     */
    async isProductInCart(productName: string): Promise<boolean> {
        try {
            const product = this.page.locator('.table-responsive tbody tr td a, #shopping-cart tbody tr td a, form table tbody tr td a').filter({ hasText: productName });
            await product.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking product in cart: ${error}`);
            return false;
        }
    }

    /**
     * Gets the product name displayed in the first row of the cart
     * @returns Promise<string> - Product name
     */
    async getProductName(): Promise<string> {
        return (await this.cartProductLink.first().textContent())?.trim() || '';
    }

    /**
     * Gets the quantity value of the product in the cart
     * @returns Promise<string> - Quantity entered/displayed in input
     */
    async getQuantity(): Promise<string> {
        return (await this.txtQuantity.first().inputValue())?.trim() || '';
    }

    /**
     * Gets the unit price of the product
     * @returns Promise<string> - Unit price string (e.g. "$500.00" or "$602.00")
     */
    async getUnitPrice(): Promise<string> {
        return (await this.cellUnitPrice.first().textContent())?.trim() || '';
    }

    /**
     * Gets the line total price of the product in the table row
     * @returns Promise<string> - Row total price string
     */
    async getLineTotal(): Promise<string> {
        return (await this.cellLineTotal.first().textContent())?.trim() || '';
    }

    /**
     * Gets the applicable grand total from the cart totals table
     * @returns Promise<string> - Applicable cart total string (e.g. "$602.00")
     */
    async getCartTotal(): Promise<string> {
        return (await this.cellCartTotal.last().textContent())?.trim() || '';
    }
}
