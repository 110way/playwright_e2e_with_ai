/**
 * Test Case: Scenario 6 - Add Product to Cart
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Open the application
 * 2) Search for a valid known product
 * 3) Open the product details page
 * 4) Verify that the product details are displayed
 * 5) Set the required quantity
 * 6) Click Add to Cart
 * 7) Verify the product-added success/confirmation message
 * 8) Open the shopping cart
 * 9) Verify that the selected product is present
 * 10) Verify the displayed quantity matches the requested quantity
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test('Add Product to Cart test @master @sanity @regression @web', async ({
    homePage,
    searchResultsPage,
    productDetailsPage,
    shoppingCartPage,
}) => {
    const productDetails = Helper.getProductDetails();

    await test.step('1) Search for a valid known product and open details page', async () => {
        await homePage.searchProduct(productDetails.productName);
        const isSearchPage = await searchResultsPage.isSearchResultsPageExists();
        expect(isSearchPage).toBeTruthy();

        await searchResultsPage.selectProduct(productDetails.productName);
        const isDetailsPage = await productDetailsPage.isProductDetailsPageExists();
        expect(isDetailsPage).toBeTruthy();
    });

    await test.step('2) Verify that the product details are displayed', async () => {
        const productName = await productDetailsPage.getProductName();
        expect(productName).toContain(productDetails.productName);
    });

    await test.step('3) Set required quantity and add product to cart', async () => {
        await productDetailsPage.setQuantity(productDetails.productQuantity);
        await productDetailsPage.clickAddToCart();
    });

    await test.step('4) Verify product-added confirmation message', async () => {
        const isSuccessAlert = await productDetailsPage.isAddToCartSuccessVisible();
        expect(isSuccessAlert).toBeTruthy();

        const successMessage = await productDetailsPage.getSuccessAlertMessage();
        expect(successMessage).toContain(productDetails.productName);
    });

    await test.step('5) Open shopping cart and verify product and quantity', async () => {
        await productDetailsPage.openShoppingCart();
        const isCartPage = await shoppingCartPage.isShoppingCartPageExists();
        expect(isCartPage).toBeTruthy();

        const isProductInCart = await shoppingCartPage.isProductInCart(productDetails.productName);
        expect(isProductInCart).toBeTruthy();

        const cartQuantity = await shoppingCartPage.getQuantity();
        expect(cartQuantity).toBe(productDetails.productQuantity);
    });

    console.log('✅ ✔️ Completed successfully!');
});

