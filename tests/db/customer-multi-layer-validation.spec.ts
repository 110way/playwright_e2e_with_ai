/**
 * Test Case: Customer Multi-Layer Validation (Frontend UI + Admin Portal + MySQL DB)
 *
 * Tags: @master @regression @db @end-to-end
 *
 * Steps:
 * 1) Register a new customer through the Frontend UI with unique dynamic data
 * 2) Verify account-created confirmation and store customer data
 * 3) Log into OpenCart Admin Portal with configured admin credentials
 * 4) Search and verify the customer in Admin Portal (Table and Record Details)
 * 5) Query MySQL oc_customer table and validate customer record fields
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { executeQuery } from '../../utils/dbClient';

test('Customer Multi-Layer Validation (Frontend UI + Admin + MySQL DB) @master @regression @db @end-to-end', async ({
    homePage,
    registerPage,
    accountSuccessPage,
    adminLoginPage,
    adminCustomersPage,
}) => {
    // -------------------------------------------------------------
    // Configuration & Dynamic Data Generation
    // -------------------------------------------------------------
    const ADMIN_URL = process.env.ADMIN_URL || 'http://localhost/opencart/upload/admin/index.php';
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';

    // Step 1: Generate unique dynamic customer data
    const customerData = {
        firstName: RandomDataUtil.getFirstName(),
        lastName: RandomDataUtil.getLastName(),
        email: RandomDataUtil.getEmail(),
        telephone: RandomDataUtil.getPhoneNumber(),
        password: RandomDataUtil.getPassword(10),
    };

    // -------------------------------------------------------------
    // LAYER 1: Frontend Customer Registration
    // -------------------------------------------------------------
    await test.step('Step 1.1) Navigate to Frontend Registration page', async () => {
        await homePage.clickMyAccount();
        await homePage.clickRegister();
        const isRegisterPage = await registerPage.isRegisterPageExists();
        expect(isRegisterPage, 'Expected Register Account page to be displayed').toBeTruthy();
    });

    await test.step('Step 1.2) Fill mandatory registration fields and accept Privacy Policy', async () => {
        await registerPage.setFirstName(customerData.firstName);
        await registerPage.setLastName(customerData.lastName);
        await registerPage.setEmail(customerData.email);
        await registerPage.setTelephone(customerData.telephone);
        await registerPage.setPassword(customerData.password);
        await registerPage.setConfirmPassword(customerData.password);
        await registerPage.checkPrivacyPolicy();
    });

    await test.step('Step 1.3) Submit registration and verify account-created confirmation', async () => {
        await registerPage.clickContinue();
        const isAccountCreated = await accountSuccessPage.isAccountCreated();
        expect(isAccountCreated, 'Expected account creation success to be displayed').toBeTruthy();

        const confirmationHeading = await accountSuccessPage.getConfirmationHeading();
        expect(confirmationHeading, 'Expected confirmation heading to contain "Your Account Has Been Created!"')
            .toContain('Your Account Has Been Created!');
    });

    // -------------------------------------------------------------
    // LAYER 2: OpenCart Admin Portal Verification
    // -------------------------------------------------------------
    await test.step('Step 2.1) Log in to OpenCart Admin Portal', async () => {
        await adminLoginPage.goto(ADMIN_URL);
        const isAdminPage = await adminLoginPage.isAdminLoginPageExists();
        expect(isAdminPage, 'Expected Admin login page to be displayed').toBeTruthy();

        await adminLoginPage.login(ADMIN_USERNAME, ADMIN_PASSWORD);
    });

    await test.step('Step 2.2) Navigate to Customers and search for newly created customer', async () => {
        await adminCustomersPage.navigateToCustomers();
        await adminCustomersPage.filterCustomerByEmail(customerData.email);

        const isVisibleInTable = await adminCustomersPage.isCustomerVisibleInTable(customerData.email);
        expect(isVisibleInTable, `Expected customer ${customerData.email} to be visible in admin table`).toBeTruthy();
    });

    await test.step('Step 2.3) Open customer record and verify First Name, Last Name, Email, and Status', async () => {
        await adminCustomersPage.openCustomerRecord();
        const adminDetails = await adminCustomersPage.getCustomerRecordDetails();

        expect(adminDetails.firstName, 'Admin First Name must match generated value').toBe(customerData.firstName);
        expect(adminDetails.lastName, 'Admin Last Name must match generated value').toBe(customerData.lastName);
        expect(adminDetails.email.toLowerCase(), 'Admin Email must match generated value').toBe(customerData.email.toLowerCase());
        expect(adminDetails.isEnabled, 'Admin Customer status must be enabled/active').toBeTruthy();
    });

    // -------------------------------------------------------------
    // LAYER 3: MySQL Database Verification
    // -------------------------------------------------------------
    await test.step('Step 3) Query oc_customer table in MySQL and validate record fields', async () => {
        const query = 'SELECT customer_id, firstname, lastname, email, status, date_added FROM oc_customer WHERE email = ?';
        const rows = await executeQuery(query, [customerData.email]) as any[];

        expect(rows, 'Expected query result to be an array').toBeDefined();
        expect(rows.length, `Expected exactly 1 customer record in database for email ${customerData.email}`).toBe(1);

        const dbRecord = rows[0];
        expect(dbRecord.firstname, 'DB firstname must match generated first name').toBe(customerData.firstName);
        expect(dbRecord.lastname, 'DB lastname must match generated last name').toBe(customerData.lastName);
        expect(dbRecord.email.toLowerCase(), 'DB email must match generated email').toBe(customerData.email.toLowerCase());
        expect(Number(dbRecord.status), 'DB status must be 1 (active/enabled)').toBe(1);
        expect(dbRecord.date_added, 'DB date_added column must exist and have a valid timestamp').toBeDefined();
    });

    console.log('✅ ✔️ Completed multi-layer customer verification successfully!');
});

