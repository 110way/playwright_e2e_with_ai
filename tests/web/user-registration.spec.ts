/**
 * Test Case: Scenario 1 - User Registration Flow
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Open the application
 * 2) Navigate to My Account → Register
 * 3) Verify that the registration page is displayed
 * 4) Generate a unique customer email and fill valid customer details:
 *    - First Name
 *    - Last Name
 *    - Email Address
 *    - Telephone
 *    - Password
 *    - Password Confirmation
 * 5) Accept the Privacy Policy
 * 6) Submit the registration form
 * 7) Verify that registration succeeds
 * 8) Verify the account-created confirmation ("Your Account Has Been Created!")
 * 9) Verify that the newly created account is available through the expected account navigation
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { RandomDataUtil } from '../../utils/dataGenerator';

test('User Registration Flow test @master @sanity @regression @web', async ({
    homePage,
    registerPage,
    accountSuccessPage,
    myAccountPage,
}) => {
    // Generate unique customer registration data dynamically
    const customerData = {
        firstName: RandomDataUtil.getFirstName(),
        lastName: RandomDataUtil.getLastName(),
        email: RandomDataUtil.getEmail(),
        telephone: RandomDataUtil.getPhoneNumber(),
        password: RandomDataUtil.getPassword(10),
    };

    await test.step('1) Open the application and navigate to My Account → Register', async () => {
        await homePage.clickMyAccount();
        await homePage.clickRegister();
    });

    await test.step('2) Verify that the registration page is displayed', async () => {
        const isRegisterPage = await registerPage.isRegisterPageExists();
        expect(isRegisterPage).toBeTruthy();
    });

    await test.step('3) Enter valid values and accept Privacy Policy', async () => {
        await registerPage.setFirstName(customerData.firstName);
        await registerPage.setLastName(customerData.lastName);
        await registerPage.setEmail(customerData.email);
        await registerPage.setTelephone(customerData.telephone);
        await registerPage.setPassword(customerData.password);
        await registerPage.setConfirmPassword(customerData.password);
        await registerPage.checkPrivacyPolicy();
    });

    await test.step('4) Submit the registration form', async () => {
        await registerPage.clickContinue();
    });

    await test.step('5) Verify registration succeeds and confirmation message is displayed', async () => {
        const isAccountCreated = await accountSuccessPage.isAccountCreated();
        expect(isAccountCreated).toBeTruthy();

        const confirmationHeading = await accountSuccessPage.getConfirmationHeading();
        expect(confirmationHeading).toContain('Your Account Has Been Created!');
    });

    await test.step('6) Verify that the newly created account is available through account navigation', async () => {
        await accountSuccessPage.clickContinue();
        const isMyAccountPage = await myAccountPage.isMyAccountPageExists();
        expect(isMyAccountPage).toBeTruthy();
    });

    console.log('✅ ✔️ Completed successfully!');
});

