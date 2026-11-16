/**
 * Test Case: Scenario 2 - Valid Login Flow
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Open the application
 * 2) Navigate to My Account → Login
 * 3) Verify that the login page is displayed
 * 4) Enter valid customer credentials from the project's configured test data
 * 5) Submit the login form
 * 6) Verify successful authentication
 * 7) Verify that the user is redirected to the My Account section
 * 8) Verify that the account dashboard or appropriate authenticated account navigation is visible
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test('Valid Login Flow test @master @sanity @regression @web', async ({
    homePage,
    loginPage,
    myAccountPage,
}) => {
    // Retrieve valid configured customer credentials
    const { email, password } = Helper.getLoginDetails();

    await test.step('1) Open the application and navigate to My Account → Login', async () => {
        await homePage.clickMyAccount();
        await homePage.clickLogin();
    });

    await test.step('2) Verify that the login page is displayed', async () => {
        const isLoginPage = await loginPage.isLoginPageExists();
        expect(isLoginPage).toBeTruthy();
    });

    await test.step('3) Enter valid customer credentials and submit login form', async () => {
        await loginPage.login(email, password);
    });

    await test.step('4) Verify successful authentication and redirection to My Account section', async () => {
        const isMyAccountPage = await myAccountPage.isMyAccountPageExists();
        expect(isMyAccountPage).toBeTruthy();
    });

    console.log('✅ ✔️ Completed successfully!');
});

