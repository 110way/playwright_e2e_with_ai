/**
 * Test Case: Scenario 3 - Invalid Login Flow
 *
 * Tags: @master @regression @web
 *
 * Steps:
 * 1) Open the application
 * 2) Navigate to My Account → Login
 * 3) Enter an invalid email and/or password
 * 4) Submit the form
 * 5) Verify that authentication fails
 * 6) Verify the appropriate warning/error message:
 *    "Warning: No match for E-Mail Address and/or Password."
 * 7) Verify that the customer is not authenticated
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { RandomDataUtil } from '../../utils/dataGenerator';

test('Invalid Login Flow test @master @regression @web', async ({
    homePage,
    loginPage,
    myAccountPage,
}) => {
    // Generate invalid customer credentials
    const invalidEmail = RandomDataUtil.getEmail();
    const invalidPassword = RandomDataUtil.getPassword(10);

    await test.step('1) Open the application and navigate to My Account → Login', async () => {
        await homePage.clickMyAccount();
        await homePage.clickLogin();
    });

    await test.step('2) Verify that the login page is displayed', async () => {
        const isLoginPage = await loginPage.isLoginPageExists();
        expect(isLoginPage).toBeTruthy();
    });

    await test.step('3) Enter invalid customer credentials and submit form', async () => {
        await loginPage.login(invalidEmail, invalidPassword);
    });

    await test.step('4) Verify authentication fails with expected warning message', async () => {
        const isWarningVisible = await loginPage.isWarningVisible();
        expect(isWarningVisible).toBeTruthy();

        const warningMessage = await loginPage.getWarningMessage();
        expect(warningMessage).toContain('Warning: No match for E-Mail Address and/or Password.');
    });

    await test.step('5) Verify that the customer is not authenticated', async () => {
        // Customer remains on the login page
        const isStillLoginPage = await loginPage.isLoginPageExists();
        expect(isStillLoginPage).toBeTruthy();

        // My Account page is not accessed
        const isMyAccountPage = await myAccountPage.isMyAccountPageExists(1000);
        expect(isMyAccountPage).toBeFalsy();
    });

    console.log('✅ ✔️ Completed successfully!');
});

