import { Page, Locator } from '@playwright/test';

export interface AdminCustomerDetails {
    firstName: string;
    lastName: string;
    email: string;
    isEnabled: boolean;
}

export class AdminCustomersPage {
    private readonly page: Page;

    // Locators
    private readonly menuCustomer: Locator;
    private readonly subCustomer: Locator;
    private readonly headingCustomers: Locator;
    private readonly filterEmail: Locator;
    private readonly btnFilter: Locator;
    private readonly tableRows: Locator;
    private readonly btnEdit: Locator;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly chkStatus: Locator;
    private readonly btnModalClose: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS and text selectors
        this.menuCustomer = page.locator('#menu-customer > a, #menu-customer, a:has-text("Customers")');
        this.subCustomer = page.locator('#collapse-customer a:has-text("Customers"), #menu-customer ul a:has-text("Customers"), a[href*="route=customer/customer"]');
        this.headingCustomers = page.locator('#content h1:has-text("Customers"), h1:has-text("Customers")');
        this.filterEmail = page.locator('#input-email');
        this.btnFilter = page.locator('#button-filter');
        this.tableRows = page.locator('#customer tbody tr, form table tbody tr, .table-responsive tbody tr');
        this.btnEdit = page.locator('tbody tr td:last-child a.btn.btn-primary, tbody tr a[href*="customer/customer.form"], tbody tr td:last-child a.btn');
        this.txtFirstName = page.locator('#input-firstname');
        this.txtLastName = page.locator('#input-lastname');
        this.txtEmail = page.locator('#input-email');
        this.chkStatus = page.locator('#input-status');
        this.btnModalClose = page.locator('#modal-security .btn-close, .modal .btn-close');
    }

    /**
     * Closes the security notification modal if it pops up on admin dashboard
     */
    async closeSecurityModal(): Promise<void> {
        try {
            if (await this.btnModalClose.count() > 0 && await this.btnModalClose.first().isVisible()) {
                await this.btnModalClose.first().click();
            }
        } catch (error) {
            console.log(`Security modal close skipped: ${error}`);
        }
    }

    /**
     * Navigates to the Customers section from the admin side menu
     */
    async navigateToCustomers(): Promise<void> {
        await this.closeSecurityModal();
        await this.menuCustomer.first().click();
        await this.subCustomer.first().click();
        await this.page.waitForURL('**/customer**', { timeout: 15000 });
        await this.headingCustomers.first().waitFor({ state: 'visible', timeout: 10000 });
    }

    /**
     * Searches for a customer using email address filter
     * @param email - Customer email address
     */
    async filterCustomerByEmail(email: string): Promise<void> {
        await this.filterEmail.fill(email);
        await this.btnFilter.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Verifies if a customer row with the given email exists in the results table
     * @param email - Customer email address
     * @returns Promise<boolean> - true if customer row is found
     */
    async isCustomerVisibleInTable(email: string): Promise<boolean> {
        try {
            const customerRow = this.tableRows.filter({ hasText: email });
            await customerRow.first().waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Customer ${email} not found in admin table: ${error}`);
            return false;
        }
    }

    /**
     * Opens customer details/edit record
     */
    async openCustomerRecord(): Promise<void> {
        await this.btnEdit.first().click();
        await this.page.waitForURL('**/customer.form**', { timeout: 15000 });
        await this.txtFirstName.waitFor({ state: 'visible', timeout: 10000 });
    }

    /**
     * Retrieves the displayed customer details from the record form
     * @returns Promise<AdminCustomerDetails> - Customer form values
     */
    async getCustomerRecordDetails(): Promise<AdminCustomerDetails> {
        const firstName = (await this.txtFirstName.inputValue()).trim();
        const lastName = (await this.txtLastName.inputValue()).trim();
        const email = (await this.txtEmail.inputValue()).trim();

        // Check status (checkbox in OpenCart 4, select dropdown in OpenCart 3)
        let isEnabled = false;
        if (await this.chkStatus.count() > 0) {
            const isCheckbox = await this.chkStatus.evaluate(el => el.getAttribute('type') === 'checkbox').catch(() => false);
            if (isCheckbox) {
                isEnabled = await this.chkStatus.isChecked();
            } else {
                const val = await this.chkStatus.inputValue();
                isEnabled = val === '1' || val.toLowerCase() === 'enabled';
            }
        }

        return {
            firstName,
            lastName,
            email,
            isEnabled,
        };
    }
}

