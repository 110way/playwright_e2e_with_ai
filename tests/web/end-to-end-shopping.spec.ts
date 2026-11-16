/**
 * Test Case: Scenario 7 - End-to-End Shopping Flow
 *
 * Tags: @master @regression @end-to-end @web
 *
 * Steps:
 * 1) Open the application and navigate to registration
 * 2) Register a new customer using dynamically generated unique data
 * 3) Verify successful registration
 * 4) Log out from the application
 * 5) Log in again using the newly created credentials
 * 6) Verify successful authentication
 * 7) Search for a known product
 * 8) Open the product details page
 * 9) Add the product to the cart and verify confirmation
 * 10) Open the shopping cart
 * 11) Verify the correct product, quantity, unit price, and cart total
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { Helper } from '../../utils/helper';

test('End-to-End Shopping Flow test @master @regression @end-to-end @web', async ({
    homePage,
    registerPage,
    accountSuccessPage,
    loginPage,
    myAccountPage,
    logoutPage,
    searchResultsPage,
    productDetailsPage,
    shoppingCartPage,
}) => {
    // Generate unique customer data dynamically
    const customerData = {
        firstName: RandomDataUtil.getFirstName(),
        lastName: RandomDataUtil.getLastName(),
        email: RandomDataUtil.getEmail(),
        telephone: RandomDataUtil.getPhoneNumber(),
        password: RandomDataUtil.getPassword(10),
    };

    const productDetails = Helper.getProductDetails();

    await test.step('1) Open the application and navigate to Register', async () => {
        await homePage.clickMyAccount();
        await homePage.clickRegister();
        const isRegisterPage = await registerPage.isRegisterPageExists();
        expect(isRegisterPage).toBeTruthy();
    });

    await test.step('2) Register a new customer using dynamically generated data', async () => {
        await registerPage.registerCustomer(customerData);
        const isAccountCreated = await accountSuccessPage.isAccountCreated();
        expect(isAccountCreated).toBeTruthy();
        await accountSuccessPage.clickContinue();
    });

    await test.step('3) Log out of the newly created account', async () => {
        await myAccountPage.clickLogout();
        const isLogoutPage = await logoutPage.isLogoutPageExists();
        expect(isLogoutPage).toBeTruthy();
        await logoutPage.clickContinue();
    });

    await test.step('4) Log in again using the newly created credentials', async () => {
        await homePage.clickMyAccount();
        await homePage.clickLogin();
        const isLoginPage = await loginPage.isLoginPageExists();
        expect(isLoginPage).toBeTruthy();

        await loginPage.login(customerData.email, customerData.password);
        const isLoggedIn = await myAccountPage.isMyAccountPageExists();
        expect(isLoggedIn).toBeTruthy();
    });

    await test.step('5) Search for a known product and open details page', async () => {
        await homePage.searchProduct(productDetails.productName);
        const isSearchPage = await searchResultsPage.isSearchResultsPageExists();
        expect(isSearchPage).toBeTruthy();

        const isProductFound = await searchResultsPage.isProductVisible(productDetails.productName);
        expect(isProductFound).toBeTruthy();

        await searchResultsPage.selectProduct(productDetails.productName);
        const isDetailsPage = await productDetailsPage.isProductDetailsPageExists();
        expect(isDetailsPage).toBeTruthy();
    });

    await test.step('6) Add the product to the shopping cart', async () => {
        await productDetailsPage.setQuantity(productDetails.productQuantity);
        await productDetailsPage.clickAddToCart();
        const isSuccessAlert = await productDetailsPage.isAddToCartSuccessVisible();
        expect(isSuccessAlert).toBeTruthy();
    });

    await test.step('7) Open the shopping cart and verify cart contents', async () => {
        await productDetailsPage.openShoppingCart();
        const isCartPage = await shoppingCartPage.isShoppingCartPageExists();
        expect(isCartPage).toBeTruthy();

        // 11. Verify the correct product
        const isProductInCart = await shoppingCartPage.isProductInCart(productDetails.productName);
        expect(isProductInCart).toBeTruthy();

        const cartProductName = await shoppingCartPage.getProductName();
        expect(cartProductName).toContain(productDetails.productName);

        // 12. Verify the quantity
        const cartQuantity = await shoppingCartPage.getQuantity();
        expect(cartQuantity).toBe(productDetails.productQuantity);

        // 13. Verify the product price
        const unitPrice = await shoppingCartPage.getUnitPrice();
        expect(Helper.convertPriceToNumber(unitPrice)).toBeGreaterThan(0);

        // 14. Verify the applicable cart total
        const cartTotal = await shoppingCartPage.getCartTotal();
        const expectedTotalNumber = Helper.convertPriceToNumber(productDetails.totalPrice);
        const actualTotalNumber = Helper.convertPriceToNumber(cartTotal);
        expect(actualTotalNumber).toBe(expectedTotalNumber);
    });

    console.log('✅ ✔️ Completed successfully!');
});
