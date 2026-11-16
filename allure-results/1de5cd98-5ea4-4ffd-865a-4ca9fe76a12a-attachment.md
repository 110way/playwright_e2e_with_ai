# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping.spec.ts >> End-to-End Shopping Flow test @master @regression @end-to-end @web
- Location: tests\web\end-to-end-shopping.spec.ts:24:5

# Error details

```
Error: locator.isVisible: Error: strict mode violation: locator('a:has-text("Logout"), a.list-group-item:has-text("Logout"), #column-right a:has-text("Logout")') resolved to 2 elements:
    1) <a class="dropdown-item" href="http://localhost/opencart/upload/index.php?route=account/logout&language=en-gb">Logout</a> aka locator('#top').getByText('Logout')
    2) <a class="list-group-item" href="http://localhost/opencart/upload/index.php?route=account/logout&language=en-gb">Logout</a> aka getByRole('link', { name: 'Logout' })

Call log:
    - checking visibility of locator('a:has-text("Logout"), a.list-group-item:has-text("Logout"), #column-right a:has-text("Logout")')

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e4]:
      - list [ref=f3e6]:
        - listitem [ref=f3e7]:
          - button [ref=f3e10] [cursor=pointer]:
            - strong [ref=f3e11]: $
            - text: Currency
        - listitem
      - list [ref=f3e14]:
        - listitem [ref=f3e15]:
          - link "123456789" [ref=f3e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
        - listitem [ref=f3e18]:
          - button "My Account" [ref=f3e20] [cursor=pointer]
        - listitem [ref=f3e23]:
          - link "Wish List (0)" [ref=f3e24] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
        - listitem [ref=f3e26]:
          - link "Shopping Cart" [ref=f3e27] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
        - listitem [ref=f3e29]:
          - link "Checkout" [ref=f3e30] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
  - banner [ref=f3e32]:
    - generic [ref=f3e34]:
      - link [ref=f3e37] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - img "Your Store" [ref=f3e38]
      - generic [ref=f3e40]:
        - textbox "Search" [ref=f3e41]
        - button [ref=f3e42] [cursor=pointer]
      - button "0 item(s) - $0.00" [ref=f3e46] [cursor=pointer]
  - main [ref=f3e48]:
    - navigation [ref=f3e50]:
      - list [ref=f3e52]:
        - listitem [ref=f3e53]:
          - link "Desktops" [ref=f3e54] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=20
        - listitem [ref=f3e55]:
          - link "Laptops & Notebooks" [ref=f3e56] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=18
        - listitem [ref=f3e57]:
          - link "Components" [ref=f3e58] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=25
        - listitem [ref=f3e59]:
          - link "Tablets" [ref=f3e60] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=57
        - listitem [ref=f3e61]:
          - link "Software" [ref=f3e62] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=17
        - listitem [ref=f3e63]:
          - link "Phones & PDAs" [ref=f3e64] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=24
        - listitem [ref=f3e65]:
          - link "Cameras" [ref=f3e66] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=33
        - listitem [ref=f3e67]:
          - link "MP3 Players" [ref=f3e68] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=34
    - generic [ref=f3e69]:
      - list [ref=f3e70]:
        - listitem [ref=f3e71]:
          - link [ref=f3e72] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - listitem [ref=f3e74]:
          - link "Account" [ref=f3e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
      - generic [ref=f3e76]:
        - generic [ref=f3e77]:
          - heading "My Account" [level=1] [ref=f3e78]
          - list [ref=f3e79]:
            - listitem [ref=f3e80]:
              - link "Edit your account information" [ref=f3e81] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/edit&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e82]:
              - link "Change your password" [ref=f3e83] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/password&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e84]:
              - link "Stored payment methods" [ref=f3e85] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e86]:
              - link "Modify your address book entries" [ref=f3e87] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e88]:
              - link "Modify your wish list" [ref=f3e89] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
          - heading "My Orders" [level=2] [ref=f3e90]
          - list [ref=f3e91]:
            - listitem [ref=f3e92]:
              - link "View your order history" [ref=f3e93] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e94]:
              - link "Subscriptions" [ref=f3e95] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e96]:
              - link "Downloads" [ref=f3e97] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e98]:
              - link "Your Reward Points" [ref=f3e99] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e100]:
              - link "View your return requests" [ref=f3e101] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e102]:
              - link "Your Transactions" [ref=f3e103] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
          - heading "My Affiliate Account" [level=2] [ref=f3e104]
          - list [ref=f3e105]:
            - listitem [ref=f3e106]:
              - link "Register for an affiliate account" [ref=f3e107] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
          - heading "Newsletter" [level=2] [ref=f3e108]
          - list [ref=f3e109]:
            - listitem [ref=f3e110]:
              - link "Subscribe / unsubscribe to newsletter" [ref=f3e111] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
        - complementary [ref=f3e112]:
          - generic [ref=f3e113]:
            - link "My Account" [ref=f3e114] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Edit Account" [ref=f3e115] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/edit&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Password" [ref=f3e116] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/password&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Payment Methods" [ref=f3e117] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Address Book" [ref=f3e118] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Wish List" [ref=f3e119] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Order History" [ref=f3e120] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Downloads" [ref=f3e121] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Subscriptions" [ref=f3e122] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Reward Points" [ref=f3e123] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Returns" [ref=f3e124] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Transactions" [ref=f3e125] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Newsletter" [ref=f3e126] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - link "Logout" [ref=f3e127] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/logout&language=en-gb
  - contentinfo [ref=f3e128]:
    - generic [ref=f3e129]:
      - generic [ref=f3e130]:
        - generic [ref=f3e131]:
          - heading "Information" [level=5] [ref=f3e132]
          - list [ref=f3e133]:
            - listitem [ref=f3e134]:
              - link "Terms & Conditions" [ref=f3e135] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=f3e136]:
              - link "Delivery Information" [ref=f3e137] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=f3e138]:
              - link "About Us" [ref=f3e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=f3e140]:
              - link "Privacy Policy" [ref=f3e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=f3e142]:
          - heading "Customer Service" [level=5] [ref=f3e143]
          - list [ref=f3e144]:
            - listitem [ref=f3e145]:
              - link "Contact Us" [ref=f3e146] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=f3e147]:
              - link "Returns" [ref=f3e148] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=f3e149]:
              - link "Site Map" [ref=f3e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=f3e151]:
          - heading "Extras" [level=5] [ref=f3e152]
          - list [ref=f3e153]:
            - listitem [ref=f3e154]:
              - link "Brands" [ref=f3e155] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=f3e156]:
              - link "Affiliate" [ref=f3e157] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e158]:
              - link "Specials" [ref=f3e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
        - generic [ref=f3e160]:
          - heading "My Account" [level=5] [ref=f3e161]
          - list [ref=f3e162]:
            - listitem [ref=f3e163]:
              - link "My Account" [ref=f3e164] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e165]:
              - link "Order History" [ref=f3e166] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e167]:
              - link "Wish List" [ref=f3e168] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
            - listitem [ref=f3e169]:
              - link "Newsletter" [ref=f3e170] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=04dd82a8faaf31ded49b7bd032
      - separator [ref=f3e171]
      - paragraph [ref=f3e172]:
        - text: Powered By
        - link "OpenCart" [ref=f3e173] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class MyAccountPage {
  4  |     private readonly page: Page;
  5  | 
  6  |     // Locators
  7  |     private readonly headingMyAccount: Locator;
  8  |     private readonly lnkLogoutSidebar: Locator;
  9  |     private readonly lnkMyAccountDropdown: Locator;
  10 |     private readonly lnkLogoutDropdown: Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 | 
  15 |         // Initialize locators with CSS and text selectors
  16 |         this.headingMyAccount = page.locator('#content h2:has-text("My Account"), h2:has-text("My Account")');
  17 |         this.lnkLogoutSidebar = page.locator('a:has-text("Logout"), a.list-group-item:has-text("Logout"), #column-right a:has-text("Logout")');
  18 |         this.lnkMyAccountDropdown = page.locator('nav#top, #top-links, #top').locator('button:has-text("My Account"), a:has-text("My Account")').first();
  19 |         this.lnkLogoutDropdown = page.locator('a:has-text("Logout")');
  20 |     }
  21 | 
  22 |     /**
  23 |      * Verifies if the My Account page is displayed
  24 |      * @returns Promise<boolean> - true if My Account heading is visible
  25 |      */
  26 |     async isMyAccountPageExists(): Promise<boolean> {
  27 |         try {
  28 |             await this.headingMyAccount.first().waitFor({ state: 'visible', timeout: 10000 });
  29 |             return true;
  30 |         } catch (error) {
  31 |             console.log(`Error checking MyAccountPage: ${error}`);
  32 |             return false;
  33 |         }
  34 |     }
  35 | 
  36 |     /**
  37 |      * Clicks the Logout link from the right sidebar or dropdown
  38 |      */
  39 |     async clickLogout(): Promise<void> {
> 40 |         if (await this.lnkLogoutSidebar.isVisible()) {
     |                                         ^ Error: locator.isVisible: Error: strict mode violation: locator('a:has-text("Logout"), a.list-group-item:has-text("Logout"), #column-right a:has-text("Logout")') resolved to 2 elements:
  41 |             await this.lnkLogoutSidebar.first().click();
  42 |         } else {
  43 |             await this.lnkMyAccountDropdown.click();
  44 |             await this.lnkLogoutDropdown.first().click();
  45 |         }
  46 |     }
  47 | }
  48 | 
```