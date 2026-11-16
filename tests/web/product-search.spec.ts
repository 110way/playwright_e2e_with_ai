/**
 * Test Case: Scenario 5 - Product Search Flow
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Open the application
 * 2) Locate the main product search field
 * 3) Enter a valid known product name
 * 4) Submit the search
 * 5) Verify that the search results page is displayed
 * 6) Verify that the expected product appears in the results
 * 7) Verify that the displayed product name matches the search criteria
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test('Product Search Flow test @master @sanity @regression @web', async ({
    homePage,
    searchResultsPage,
}) => {
    const productDetails = Helper.getProductDetails();

    await test.step('1) Open application and search for a valid known product', async () => {
        await homePage.searchProduct(productDetails.productName);
    });

    await test.step('2) Verify that the search results page is displayed', async () => {
        const isSearchPage = await searchResultsPage.isSearchResultsPageExists();
        expect(isSearchPage).toBeTruthy();
    });

    await test.step('3) Verify that the expected product appears in the results', async () => {
        const isProductFound = await searchResultsPage.isProductVisible(productDetails.productName);
        expect(isProductFound).toBeTruthy();
    });

    await test.step('4) Verify that the displayed product name matches search criteria', async () => {
        const productTitle = await searchResultsPage.getProductTitle(productDetails.productName);
        expect(productTitle).toContain(productDetails.productName);
    });

    console.log('✅ ✔️ Completed successfully!');
});

