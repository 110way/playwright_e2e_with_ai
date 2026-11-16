# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping.spec.ts >> End-to-End Shopping Flow test @master @regression @end-to-end @web
- Location: tests\web\end-to-end-shopping.spec.ts:24:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "MacBook"
Received string:    ""
```

# Page snapshot

```yaml
- generic [ref=f10e1]:
  - navigation [ref=f10e2]:
    - generic [ref=f10e4]:
      - list [ref=f10e6]:
        - listitem [ref=f10e7]:
          - button [ref=f10e10] [cursor=pointer]:
            - strong [ref=f10e11]: $
            - text: Currency
        - listitem
      - list [ref=f10e14]:
        - listitem [ref=f10e15]:
          - link "123456789" [ref=f10e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
        - listitem [ref=f10e18]:
          - button "My Account" [ref=f10e20] [cursor=pointer]
        - listitem [ref=f10e23]:
          - link "Wish List (0)" [ref=f10e24] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=7a3aac88c5c1b9fe5c723d1ca2
        - listitem [ref=f10e26]:
          - link "Shopping Cart" [ref=f10e27] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
        - listitem [ref=f10e29]:
          - link "Checkout" [ref=f10e30] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
  - banner [ref=f10e32]:
    - generic [ref=f10e34]:
      - link [ref=f10e37] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - img "Your Store" [ref=f10e38]
      - generic [ref=f10e40]:
        - textbox "Search" [ref=f10e41]
        - button [ref=f10e42] [cursor=pointer]
      - button "1 item(s) - $602.00" [ref=f10e46] [cursor=pointer]
  - main [ref=f10e48]:
    - navigation [ref=f10e50]:
      - list [ref=f10e52]:
        - listitem [ref=f10e53]:
          - link "Desktops" [ref=f10e54] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=20
        - listitem [ref=f10e55]:
          - link "Laptops & Notebooks" [ref=f10e56] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=18
        - listitem [ref=f10e57]:
          - link "Components" [ref=f10e58] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=25
        - listitem [ref=f10e59]:
          - link "Tablets" [ref=f10e60] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=57
        - listitem [ref=f10e61]:
          - link "Software" [ref=f10e62] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=17
        - listitem [ref=f10e63]:
          - link "Phones & PDAs" [ref=f10e64] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=24
        - listitem [ref=f10e65]:
          - link "Cameras" [ref=f10e66] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=33
        - listitem [ref=f10e67]:
          - link "MP3 Players" [ref=f10e68] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=34
    - generic [ref=f10e69]:
      - list [ref=f10e70]:
        - listitem [ref=f10e71]:
          - link [ref=f10e72] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - listitem [ref=f10e74]:
          - link "Shopping Cart" [ref=f10e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
      - generic [ref=f10e78]:
        - heading "Shopping Cart (0.00kg)" [level=1] [ref=f10e79]
        - table [ref=f10e81]:
          - rowgroup [ref=f10e82]:
            - row [ref=f10e83]:
              - columnheader "Image" [ref=f10e84]
              - columnheader "Product" [ref=f10e85]
              - columnheader "Quantity" [ref=f10e86]
              - columnheader "Unit Price" [ref=f10e87]
              - columnheader "Total" [ref=f10e88]
          - rowgroup [ref=f10e89]:
            - row [ref=f10e90]:
              - cell [ref=f10e91]:
                - link [ref=f10e92] [cursor=pointer]:
                  - /url: http://localhost/opencart/upload/index.php?route=product/product&language=en-gb&product_id=43
                  - img "MacBook" [ref=f10e93]
              - cell [ref=f10e94]:
                - link "MacBook" [ref=f10e95] [cursor=pointer]:
                  - /url: http://localhost/opencart/upload/index.php?route=product/product&language=en-gb&product_id=43
                - list [ref=f10e96]:
                  - listitem [ref=f10e97]: "- Model: Product 16"
                  - listitem [ref=f10e98]: "- Reward Points: 600"
              - cell [ref=f10e99]:
                - generic [ref=f10e101]:
                  - textbox [ref=f10e102]: "1"
                  - button "Update" [ref=f10e103] [cursor=pointer]
                  - link "Remove" [ref=f10e105] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/index.php?route=checkout/cart.remove&language=en-gb&key=1
              - cell "$602.00" [ref=f10e107]
              - cell "$602.00" [ref=f10e108]
          - rowgroup [ref=f10e109]:
            - row [ref=f10e110]:
              - cell [ref=f10e111]:
                - strong [ref=f10e112]: Sub-Total
              - cell "$500.00" [ref=f10e113]
            - row [ref=f10e114]:
              - cell [ref=f10e115]:
                - strong [ref=f10e116]: Eco Tax (-2.00)
              - cell "$2.00" [ref=f10e117]
            - row [ref=f10e118]:
              - cell [ref=f10e119]:
                - strong [ref=f10e120]: VAT (20%)
              - cell "$100.00" [ref=f10e121]
            - row [ref=f10e122]:
              - cell [ref=f10e123]:
                - strong [ref=f10e124]: Total
              - cell "$602.00" [ref=f10e125]
        - heading "What would you like to do next?" [level=2] [ref=f10e126]
        - paragraph [ref=f10e127]: Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.
        - heading [level=2] [ref=f10e130]:
          - button "Use Coupon Code" [ref=f10e131] [cursor=pointer]
        - generic [ref=f10e132]:
          - link "Continue Shopping" [ref=f10e134] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
          - link "Checkout" [ref=f10e136] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
  - contentinfo [ref=f10e137]:
    - generic [ref=f10e138]:
      - generic [ref=f10e139]:
        - generic [ref=f10e140]:
          - heading "Information" [level=5] [ref=f10e141]
          - list [ref=f10e142]:
            - listitem [ref=f10e143]:
              - link "Terms & Conditions" [ref=f10e144] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=f10e145]:
              - link "Delivery Information" [ref=f10e146] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=f10e147]:
              - link "About Us" [ref=f10e148] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=f10e149]:
              - link "Privacy Policy" [ref=f10e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=f10e151]:
          - heading "Customer Service" [level=5] [ref=f10e152]
          - list [ref=f10e153]:
            - listitem [ref=f10e154]:
              - link "Contact Us" [ref=f10e155] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=f10e156]:
              - link "Returns" [ref=f10e157] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=f10e158]:
              - link "Site Map" [ref=f10e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=f10e160]:
          - heading "Extras" [level=5] [ref=f10e161]
          - list [ref=f10e162]:
            - listitem [ref=f10e163]:
              - link "Brands" [ref=f10e164] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=f10e165]:
              - link "Affiliate" [ref=f10e166] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb&customer_token=7a3aac88c5c1b9fe5c723d1ca2
            - listitem [ref=f10e167]:
              - link "Specials" [ref=f10e168] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb&customer_token=7a3aac88c5c1b9fe5c723d1ca2
        - generic [ref=f10e169]:
          - heading "My Account" [level=5] [ref=f10e170]
          - list [ref=f10e171]:
            - listitem [ref=f10e172]:
              - link "My Account" [ref=f10e173] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=7a3aac88c5c1b9fe5c723d1ca2
            - listitem [ref=f10e174]:
              - link "Order History" [ref=f10e175] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=7a3aac88c5c1b9fe5c723d1ca2
            - listitem [ref=f10e176]:
              - link "Wish List" [ref=f10e177] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=7a3aac88c5c1b9fe5c723d1ca2
            - listitem [ref=f10e178]:
              - link "Newsletter" [ref=f10e179] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=7a3aac88c5c1b9fe5c723d1ca2
      - separator [ref=f10e180]
      - paragraph [ref=f10e181]:
        - text: Powered By
        - link "OpenCart" [ref=f10e182] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
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
> 108 |         expect(cartProductName).toContain(productDetails.productName);
      |                                 ^ Error: expect(received).toContain(expected) // indexOf
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