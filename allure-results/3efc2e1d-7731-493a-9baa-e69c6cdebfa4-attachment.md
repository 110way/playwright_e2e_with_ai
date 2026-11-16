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
- generic [ref=f1e1]:
  - navigation [ref=f1e2]:
    - generic [ref=f1e4]:
      - list [ref=f1e6]:
        - listitem [ref=f1e7]:
          - button [ref=f1e10] [cursor=pointer]:
            - strong [ref=f1e11]: $
            - text: Currency
        - listitem
      - list [ref=f1e14]:
        - listitem [ref=f1e15]:
          - link "123456789" [ref=f1e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
        - listitem [ref=f1e18]:
          - button "My Account" [ref=f1e20] [cursor=pointer]
        - listitem [ref=f1e23]:
          - link "Wish List (0)" [ref=f1e24] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
        - listitem [ref=f1e26]:
          - link "Shopping Cart" [ref=f1e27] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
        - listitem [ref=f1e29]:
          - link "Checkout" [ref=f1e30] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
  - banner [ref=f1e32]:
    - generic [ref=f1e34]:
      - link [ref=f1e37] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - img "Your Store" [ref=f1e38]
      - generic [ref=f1e40]:
        - textbox "Search" [ref=f1e41]
        - button [ref=f1e42] [cursor=pointer]
      - button "0 item(s) - $0.00" [ref=f1e46] [cursor=pointer]
  - main [ref=f1e48]:
    - navigation [ref=f1e50]:
      - list [ref=f1e52]:
        - listitem [ref=f1e53]:
          - link "Desktops" [ref=f1e54] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=20
        - listitem [ref=f1e55]:
          - link "Laptops & Notebooks" [ref=f1e56] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=18
        - listitem [ref=f1e57]:
          - link "Components" [ref=f1e58] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=25
        - listitem [ref=f1e59]:
          - link "Tablets" [ref=f1e60] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=57
        - listitem [ref=f1e61]:
          - link "Software" [ref=f1e62] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=17
        - listitem [ref=f1e63]:
          - link "Phones & PDAs" [ref=f1e64] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=24
        - listitem [ref=f1e65]:
          - link "Cameras" [ref=f1e66] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=33
        - listitem [ref=f1e67]:
          - link "MP3 Players" [ref=f1e68] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=34
    - generic [ref=f1e69]:
      - list [ref=f1e70]:
        - listitem [ref=f1e71]:
          - link [ref=f1e72] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - listitem [ref=f1e74]:
          - link "Account" [ref=f1e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
        - listitem [ref=f1e76]:
          - link "Register" [ref=f1e77] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
      - generic [ref=f1e78]:
        - generic [ref=f1e79]:
          - heading "Register Account" [level=1] [ref=f1e80]
          - paragraph [ref=f1e81]:
            - text: If you already have an account with us, please login at the
            - link "login page" [ref=f1e82] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
            - text: .
          - generic [ref=f1e83]:
            - group "Your Personal Details" [ref=f1e84]:
              - generic [ref=f1e86]:
                - generic [ref=f1e87]: "* First Name"
                - textbox "* First Name" [ref=f1e89]:
                  - /placeholder: First Name
                  - text: Kenny
              - generic [ref=f1e90]:
                - generic [ref=f1e91]: "* Last Name"
                - textbox "* Last Name" [ref=f1e93]:
                  - /placeholder: Last Name
                  - text: Reynolds
              - generic [ref=f1e94]:
                - generic [ref=f1e95]: "* E-Mail"
                - textbox "* E-Mail" [ref=f1e97]:
                  - /placeholder: E-Mail
                  - text: Titus.Corwin42@yahoo.com
            - group "Your Password" [ref=f1e98]:
              - generic [ref=f1e100]:
                - generic [ref=f1e101]: "* Password"
                - textbox "* Password" [ref=f1e103]:
                  - /placeholder: Password
                  - text: PylSAQ8dT6
            - group "Newsletter" [ref=f1e104]:
              - generic [ref=f1e106]:
                - generic [ref=f1e107]: Subscribe
                - checkbox [ref=f1e110]
            - generic [ref=f1e111]:
              - generic [ref=f1e112]:
                - generic [ref=f1e113]:
                  - text: I have read and agree to the
                  - link "Privacy Policy" [ref=f1e114] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/index.php?route=information/information.info&language=en-gb&information_id=3
                - checkbox [checked] [ref=f1e115]
              - button [disabled]
        - complementary [ref=f1e116]:
          - generic [ref=f1e117]:
            - link "Login" [ref=f1e118] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
            - link "Register" [ref=f1e119] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
            - link "Forgotten Password" [ref=f1e120] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/forgotten&language=en-gb
            - link "My Account" [ref=f1e121] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - link "Payment Methods" [ref=f1e122] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb
            - link "Address Book" [ref=f1e123] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb
            - link "Wish List" [ref=f1e124] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - link "Order History" [ref=f1e125] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - link "Downloads" [ref=f1e126] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb
            - link "Subscriptions" [ref=f1e127] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb
            - link "Reward Points" [ref=f1e128] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb
            - link "Returns" [ref=f1e129] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb
            - link "Transactions" [ref=f1e130] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb
            - link "Newsletter" [ref=f1e131] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
  - contentinfo [ref=f1e132]:
    - generic [ref=f1e133]:
      - generic [ref=f1e134]:
        - generic [ref=f1e135]:
          - heading "Information" [level=5] [ref=f1e136]
          - list [ref=f1e137]:
            - listitem [ref=f1e138]:
              - link "Terms & Conditions" [ref=f1e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=f1e140]:
              - link "Delivery Information" [ref=f1e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=f1e142]:
              - link "About Us" [ref=f1e143] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=f1e144]:
              - link "Privacy Policy" [ref=f1e145] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=f1e146]:
          - heading "Customer Service" [level=5] [ref=f1e147]
          - list [ref=f1e148]:
            - listitem [ref=f1e149]:
              - link "Contact Us" [ref=f1e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=f1e151]:
              - link "Returns" [ref=f1e152] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=f1e153]:
              - link "Site Map" [ref=f1e154] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=f1e155]:
          - heading "Extras" [level=5] [ref=f1e156]
          - list [ref=f1e157]:
            - listitem [ref=f1e158]:
              - link "Brands" [ref=f1e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=f1e160]:
              - link "Affiliate" [ref=f1e161] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb
            - listitem [ref=f1e162]:
              - link "Specials" [ref=f1e163] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb
        - generic [ref=f1e164]:
          - heading "My Account" [level=5] [ref=f1e165]
          - list [ref=f1e166]:
            - listitem [ref=f1e167]:
              - link "My Account" [ref=f1e168] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - listitem [ref=f1e169]:
              - link "Order History" [ref=f1e170] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - listitem [ref=f1e171]:
              - link "Wish List" [ref=f1e172] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - listitem [ref=f1e173]:
              - link "Newsletter" [ref=f1e174] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
      - separator [ref=f1e175]
      - paragraph [ref=f1e176]:
        - text: Powered By
        - link "OpenCart" [ref=f1e177] [cursor=pointer]:
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
> 56  |         expect(isAccountCreated).toBeTruthy();
      |                                  ^ Error: expect(received).toBeTruthy()
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
  75  |         expect(isLoggedIn).toBeTruthy();
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