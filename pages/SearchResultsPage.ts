import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
    private readonly page: Page;

    // Locators
    private readonly headingSearch: Locator;
    private readonly productThumbnails: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.headingSearch = page.locator('#content h1, #content h2');
        this.productThumbnails = page.locator('.product-layout, .product-thumb');
    }

    /**
     * Verifies if the search results page is displayed
     * @returns Promise<boolean> - true if heading is visible
     */
    async isSearchResultsPageExists(): Promise<boolean> {
        try {
            await this.headingSearch.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking SearchResultsPage: ${error}`);
            return false;
        }
    }

    /**
     * Verifies if a product with the specified name exists in the search results
     * @param productName - Product name to find
     * @returns Promise<boolean> - true if product link is visible
     */
    async isProductVisible(productName: string): Promise<boolean> {
        try {
            const productLink = this.page.locator('.product-thumb h4 a, .product-layout a, #product-list a, .description a').filter({ hasText: productName });
            return await productLink.first().isVisible();
        } catch (error) {
            console.log(`Error checking product visibility: ${error}`);
            return false;
        }
    }

    /**
     * Gets the displayed title of the product matching the name
     * @param productName - Product name to match
     * @returns Promise<string> - Title text of the product
     */
    async getProductTitle(productName: string): Promise<string> {
        try {
            const productLink = this.page.locator('.product-thumb h4 a, .product-layout a, #product-list a, .description a').filter({ hasText: productName });
            return (await productLink.first().textContent())?.trim() || '';
        } catch (error) {
            console.log(`Error getting product title: ${error}`);
            return '';
        }
    }

    /**
     * Clicks on the product in the search results to open its details page
     * @param productName - Product name to select
     */
    async selectProduct(productName: string): Promise<void> {
        const productLink = this.page.locator('.product-thumb h4 a, .product-layout a, #product-list a, .description a').filter({ hasText: productName });
        await productLink.first().click();
    }
}
