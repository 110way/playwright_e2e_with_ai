# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping.spec.ts >> End-to-End Shopping Flow test @master @regression @end-to-end @web
- Location: tests\web\end-to-end-shopping.spec.ts:24:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import dotenv from 'dotenv';
  3  | import { HomePage } from '../pages/HomePage';
  4  | import { RegisterPage } from '../pages/RegisterPage';
  5  | import { AccountSuccessPage } from '../pages/AccountSuccessPage';
  6  | import { LoginPage } from '../pages/LoginPage';
  7  | import { MyAccountPage } from '../pages/MyAccountPage';
  8  | import { LogoutPage } from '../pages/LogoutPage';
  9  | import { SearchResultsPage } from '../pages/SearchResultsPage';
  10 | import { ProductDetailsPage } from '../pages/ProductDetailsPage';
  11 | import { ShoppingCartPage } from '../pages/ShoppingCartPage';
  12 | 
  13 | dotenv.config();
  14 | 
  15 | const APP_URL = process.env.WEB_APP_URL || 'http://localhost/opencart/upload/';
  16 | 
  17 | type PageFixtures = {
  18 |     homePage: HomePage;
  19 |     registerPage: RegisterPage;
  20 |     accountSuccessPage: AccountSuccessPage;
  21 |     loginPage: LoginPage;
  22 |     myAccountPage: MyAccountPage;
  23 |     logoutPage: LogoutPage;
  24 |     searchResultsPage: SearchResultsPage;
  25 |     productDetailsPage: ProductDetailsPage;
  26 |     shoppingCartPage: ShoppingCartPage;
  27 | };
  28 | 
  29 | export const test = base.extend<PageFixtures>({
  30 |     homePage: async ({ page }, use) => {
> 31 |         await page.goto(APP_URL);
     |                    ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  32 |         await use(new HomePage(page));
  33 |     },
  34 |     registerPage: async ({ page }, use) => {
  35 |         await use(new RegisterPage(page));
  36 |     },
  37 |     accountSuccessPage: async ({ page }, use) => {
  38 |         await use(new AccountSuccessPage(page));
  39 |     },
  40 |     loginPage: async ({ page }, use) => {
  41 |         await use(new LoginPage(page));
  42 |     },
  43 |     myAccountPage: async ({ page }, use) => {
  44 |         await use(new MyAccountPage(page));
  45 |     },
  46 |     logoutPage: async ({ page }, use) => {
  47 |         await use(new LogoutPage(page));
  48 |     },
  49 |     searchResultsPage: async ({ page }, use) => {
  50 |         await use(new SearchResultsPage(page));
  51 |     },
  52 |     productDetailsPage: async ({ page }, use) => {
  53 |         await use(new ProductDetailsPage(page));
  54 |     },
  55 |     shoppingCartPage: async ({ page }, use) => {
  56 |         await use(new ShoppingCartPage(page));
  57 |     },
  58 | });
  59 | 
  60 | export { expect } from '@playwright/test';
  61 | 
```