# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping.spec.ts >> End-to-End Shopping Flow test @master @regression @end-to-end @web
- Location: tests\web\end-to-end-shopping.spec.ts:24:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=f7e1]:
  - navigation [ref=f7e2]:
    - generic [ref=f7e4]:
      - list [ref=f7e6]:
        - listitem [ref=f7e7]:
          - button [ref=f7e10] [cursor=pointer]:
            - strong [ref=f7e11]: $
            - text: Currency
        - listitem
      - list [ref=f7e14]:
        - listitem [ref=f7e15]:
          - link "123456789" [ref=f7e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
        - listitem [ref=f7e18]:
          - button "My Account" [ref=f7e20] [cursor=pointer]
        - listitem [ref=f7e23]:
          - link "Wish List (0)" [ref=f7e24] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=6706640048bacea7954d8f7afe
        - listitem [ref=f7e26]:
          - link "Shopping Cart" [ref=f7e27] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
        - listitem [ref=f7e29]:
          - link "Checkout" [ref=f7e30] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
  - banner [ref=f7e32]:
    - generic [ref=f7e34]:
      - link [ref=f7e37] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - img "Your Store" [ref=f7e38]
      - generic [ref=f7e40]:
        - textbox "Search" [ref=f7e41]
        - button [ref=f7e42] [cursor=pointer]
      - button "0 item(s) - $0.00" [ref=f7e46] [cursor=pointer]
  - main [ref=f7e48]:
    - navigation [ref=f7e50]:
      - list [ref=f7e52]:
        - listitem [ref=f7e53]:
          - link "Desktops" [ref=f7e54] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=20
        - listitem [ref=f7e55]:
          - link "Laptops & Notebooks" [ref=f7e56] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=18
        - listitem [ref=f7e57]:
          - link "Components" [ref=f7e58] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=25
        - listitem [ref=f7e59]:
          - link "Tablets" [ref=f7e60] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=57
        - listitem [ref=f7e61]:
          - link "Software" [ref=f7e62] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=17
        - listitem [ref=f7e63]:
          - link "Phones & PDAs" [ref=f7e64] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=24
        - listitem [ref=f7e65]:
          - link "Cameras" [ref=f7e66] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=33
        - listitem [ref=f7e67]:
          - link "MP3 Players" [ref=f7e68] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=34
    - generic [ref=f7e69]:
      - list [ref=f7e70]:
        - listitem [ref=f7e71]:
          - link [ref=f7e72] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - listitem [ref=f7e74]:
          - link "Account" [ref=f7e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=6706640048bacea7954d8f7afe
      - generic [ref=f7e76]:
        - generic [ref=f7e77]:
          - heading "My Account" [level=1] [ref=f7e78]
          - list [ref=f7e79]:
            - listitem [ref=f7e80]:
              - link "Edit your account information" [ref=f7e81] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/edit&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e82]:
              - link "Change your password" [ref=f7e83] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/password&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e84]:
              - link "Stored payment methods" [ref=f7e85] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e86]:
              - link "Modify your address book entries" [ref=f7e87] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e88]:
              - link "Modify your wish list" [ref=f7e89] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=6706640048bacea7954d8f7afe
          - heading "My Orders" [level=2] [ref=f7e90]
          - list [ref=f7e91]:
            - listitem [ref=f7e92]:
              - link "View your order history" [ref=f7e93] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e94]:
              - link "Subscriptions" [ref=f7e95] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e96]:
              - link "Downloads" [ref=f7e97] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e98]:
              - link "Your Reward Points" [ref=f7e99] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e100]:
              - link "View your return requests" [ref=f7e101] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e102]:
              - link "Your Transactions" [ref=f7e103] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb&customer_token=6706640048bacea7954d8f7afe
          - heading "My Affiliate Account" [level=2] [ref=f7e104]
          - list [ref=f7e105]:
            - listitem [ref=f7e106]:
              - link "Register for an affiliate account" [ref=f7e107] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb&customer_token=6706640048bacea7954d8f7afe
          - heading "Newsletter" [level=2] [ref=f7e108]
          - list [ref=f7e109]:
            - listitem [ref=f7e110]:
              - link "Subscribe / unsubscribe to newsletter" [ref=f7e111] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=6706640048bacea7954d8f7afe
        - complementary [ref=f7e112]:
          - generic [ref=f7e113]:
            - link "My Account" [ref=f7e114] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Edit Account" [ref=f7e115] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/edit&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Password" [ref=f7e116] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/password&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Payment Methods" [ref=f7e117] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Address Book" [ref=f7e118] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Wish List" [ref=f7e119] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Order History" [ref=f7e120] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Downloads" [ref=f7e121] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Subscriptions" [ref=f7e122] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Reward Points" [ref=f7e123] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Returns" [ref=f7e124] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Transactions" [ref=f7e125] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Newsletter" [ref=f7e126] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - link "Logout" [ref=f7e127] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/logout&language=en-gb
  - contentinfo [ref=f7e128]:
    - generic [ref=f7e129]:
      - generic [ref=f7e130]:
        - generic [ref=f7e131]:
          - heading "Information" [level=5] [ref=f7e132]
          - list [ref=f7e133]:
            - listitem [ref=f7e134]:
              - link "Terms & Conditions" [ref=f7e135] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=f7e136]:
              - link "Delivery Information" [ref=f7e137] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=f7e138]:
              - link "About Us" [ref=f7e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=f7e140]:
              - link "Privacy Policy" [ref=f7e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=f7e142]:
          - heading "Customer Service" [level=5] [ref=f7e143]
          - list [ref=f7e144]:
            - listitem [ref=f7e145]:
              - link "Contact Us" [ref=f7e146] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=f7e147]:
              - link "Returns" [ref=f7e148] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=f7e149]:
              - link "Site Map" [ref=f7e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=f7e151]:
          - heading "Extras" [level=5] [ref=f7e152]
          - list [ref=f7e153]:
            - listitem [ref=f7e154]:
              - link "Brands" [ref=f7e155] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=f7e156]:
              - link "Affiliate" [ref=f7e157] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e158]:
              - link "Specials" [ref=f7e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb&customer_token=6706640048bacea7954d8f7afe
        - generic [ref=f7e160]:
          - heading "My Account" [level=5] [ref=f7e161]
          - list [ref=f7e162]:
            - listitem [ref=f7e163]:
              - link "My Account" [ref=f7e164] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e165]:
              - link "Order History" [ref=f7e166] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e167]:
              - link "Wish List" [ref=f7e168] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=6706640048bacea7954d8f7afe
            - listitem [ref=f7e169]:
              - link "Newsletter" [ref=f7e170] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=6706640048bacea7954d8f7afe
      - separator [ref=f7e171]
      - paragraph [ref=f7e172]:
        - text: Powered By
        - link "OpenCart" [ref=f7e173] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: Scenario 7 - End-to-End Shopping Flow
  3   |  *
  4   |  * Tags: @master @regression @end-to-end @web
  5   |  *
  6   |  * Steps:
  7   |  * 1) Open the application and navigate to registration
  8   |  * 2) Register a new customer using dynamically generated unique data
  9   |  * 3) Verify successful registration
  10  |  * 4) Log out from the application
  11  |  * 5) Log in again using the newly created credentials
  12  |  * 6) Verify successful authentication
  13  |  * 7) Search for a known product
  14  |  * 8) Open the product details page
  15  |  * 9) Add the product to the cart and verify confirmation
  16  |  * 10) Open the shopping cart
  17  |  * 11) Verify the correct product, quantity, unit price, and cart total
  18  |  */
  19  | 
  20  | import { test, expect } from '../../fixtures/pageFixtures';
  21  | import { RandomDataUtil } from '../../utils/dataGenerator';
  22  | import { Helper } from '../../utils/helper';
  23  | 
  24  | test('End-to-End Shopping Flow test @master @regression @end-to-end @web', async ({
  25  |     homePage,
  26  |     registerPage,
  27  |     accountSuccessPage,
  28  |     loginPage,
  29  |     myAccountPage,
  30  |     logoutPage,
  31  |     searchResultsPage,
  32  |     productDetailsPage,
  33  |     shoppingCartPage,
  34  | }) => {
  35  |     // Generate unique customer data dynamically
  36  |     const customerData = {
  37  |         firstName: RandomDataUtil.getFirstName(),
  38  |         lastName: RandomDataUtil.getLastName(),
  39  |         email: RandomDataUtil.getEmail(),
  40  |         telephone: RandomDataUtil.getPhoneNumber(),
  41  |         password: RandomDataUtil.getPassword(10),
  42  |     };
  43  | 
  44  |     const productDetails = Helper.getProductDetails();
  45  | 
  46  |     await test.step('1) Open the application and navigate to Register', async () => {
  47  |         await homePage.clickMyAccount();
  48  |         await homePage.clickRegister();
  49  |         const isRegisterPage = await registerPage.isRegisterPageExists();
  50  |         expect(isRegisterPage).toBeTruthy();
  51  |     });
  52  | 
  53  |     await test.step('2) Register a new customer using dynamically generated data', async () => {
  54  |         await registerPage.registerCustomer(customerData);
  55  |         const isAccountCreated = await accountSuccessPage.isAccountCreated();
  56  |         expect(isAccountCreated).toBeTruthy();
  57  |         await accountSuccessPage.clickContinue();
  58  |     });
  59  | 
  60  |     await test.step('3) Log out of the newly created account', async () => {
  61  |         await myAccountPage.clickLogout();
  62  |         const isLogoutPage = await logoutPage.isLogoutPageExists();
  63  |         expect(isLogoutPage).toBeTruthy();
  64  |         await logoutPage.clickContinue();
  65  |     });
  66  | 
  67  |     await test.step('4) Log in again using the newly created credentials', async () => {
  68  |         await homePage.clickMyAccount();
  69  |         await homePage.clickLogin();
  70  |         const isLoginPage = await loginPage.isLoginPageExists();
  71  |         expect(isLoginPage).toBeTruthy();
  72  | 
  73  |         await loginPage.login(customerData.email, customerData.password);
  74  |         const isLoggedIn = await myAccountPage.isMyAccountPageExists();
> 75  |         expect(isLoggedIn).toBeTruthy();
      |                            ^ Error: expect(received).toBeTruthy()
  76  |     });
  77  | 
  78  |     await test.step('5) Search for a known product and open details page', async () => {
  79  |         await homePage.searchProduct(productDetails.productName);
  80  |         const isSearchPage = await searchResultsPage.isSearchResultsPageExists();
  81  |         expect(isSearchPage).toBeTruthy();
  82  | 
  83  |         const isProductFound = await searchResultsPage.isProductVisible(productDetails.productName);
  84  |         expect(isProductFound).toBeTruthy();
  85  | 
  86  |         await searchResultsPage.selectProduct(productDetails.productName);
  87  |         const isDetailsPage = await productDetailsPage.isProductDetailsPageExists();
  88  |         expect(isDetailsPage).toBeTruthy();
  89  |     });
  90  | 
  91  |     await test.step('6) Add the product to the shopping cart', async () => {
  92  |         await productDetailsPage.setQuantity(productDetails.productQuantity);
  93  |         await productDetailsPage.clickAddToCart();
  94  |         const isSuccessAlert = await productDetailsPage.isAddToCartSuccessVisible();
  95  |         expect(isSuccessAlert).toBeTruthy();
  96  |     });
  97  | 
  98  |     await test.step('7) Open the shopping cart and verify cart contents', async () => {
  99  |         await productDetailsPage.openShoppingCart();
  100 |         const isCartPage = await shoppingCartPage.isShoppingCartPageExists();
  101 |         expect(isCartPage).toBeTruthy();
  102 | 
  103 |         // 11. Verify the correct product
  104 |         const isProductInCart = await shoppingCartPage.isProductInCart(productDetails.productName);
  105 |         expect(isProductInCart).toBeTruthy();
  106 | 
  107 |         const cartProductName = await shoppingCartPage.getProductName();
  108 |         expect(cartProductName).toContain(productDetails.productName);
  109 | 
  110 |         // 12. Verify the quantity
  111 |         const cartQuantity = await shoppingCartPage.getQuantity();
  112 |         expect(cartQuantity).toBe(productDetails.productQuantity);
  113 | 
  114 |         // 13. Verify the product price
  115 |         const unitPrice = await shoppingCartPage.getUnitPrice();
  116 |         expect(Helper.convertPriceToNumber(unitPrice)).toBeGreaterThan(0);
  117 | 
  118 |         // 14. Verify the applicable cart total
  119 |         const cartTotal = await shoppingCartPage.getCartTotal();
  120 |         const expectedTotalNumber = Helper.convertPriceToNumber(productDetails.totalPrice);
  121 |         const actualTotalNumber = Helper.convertPriceToNumber(cartTotal);
  122 |         expect(actualTotalNumber).toBe(expectedTotalNumber);
  123 |     });
  124 | 
  125 |     console.log('✅ ✔️ Completed successfully!');
  126 | });
  127 | 
```