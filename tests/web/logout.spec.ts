/**
 * Test Case: Scenario 4 - Logout Flow
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Open the application
 * 2) Log in using valid customer credentials
 * 3) Verify that authentication succeeds
 * 4) Navigate to account logout option and click Logout
 * 5) Verify that the logout confirmation page is displayed
 * 6) Click Continue
 * 7) Verify the expected redirect (homepage)
 * 8) Verify that authenticated account options are no longer available
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test('Logout Flow test @master @sanity @regression @web', async ({
    homePage,
    loginPage,
    myAccountPage,
    logoutPage,
}) => {
    const { email, password } = Helper.getLoginDetails();

    await test.step('1) Open application and log in with valid credentials', async () => {
        await homePage.clickMyAccount();
        await homePage.clickLogin();
        await loginPage.login(email, password);
        const isLoggedIn = await myAccountPage.isMyAccountPageExists();
        expect(isLoggedIn).toBeTruthy();
    });

    await test.step('2) Navigate to account logout option and click Logout', async () => {
        await myAccountPage.clickLogout();
    });

    await test.step('3) Verify that logout confirmation page is displayed', async () => {
        const isLogoutPage = await logoutPage.isLogoutPageExists();
        expect(isLogoutPage).toBeTruthy();
    });

    await test.step('4) Click Continue on logout page and verify redirect to homepage', async () => {
        await logoutPage.clickContinue();
        const isHomePage = await homePage.isHomePageExists();
        expect(isHomePage).toBeTruthy();
    });

    await test.step('5) Verify that authenticated account options are no longer available', async () => {
        await homePage.clickMyAccount();
        // Dropdown menu should show Login and Register, not Logout
        const isLoginOptionVisible = await homePage.isLoginOptionVisible();
        expect(isLoginOptionVisible).toBeTruthy();

        const isLogoutOptionVisible = await homePage.isLogoutOptionVisible();
        expect(isLogoutOptionVisible).toBeFalsy();
    });

    console.log('✅ ✔️ Completed successfully!');
});
