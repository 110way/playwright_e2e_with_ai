/**
 * Test Suite: FakeStore Products API Tests
 *
 * Prompts Covered:
 * 3. Get All Products
 * 4. Get Product by ID
 * 5. Get Products with Limit
 * 6. Sort Products – Ascending
 * 7. Sort Products – Descending
 * 8. Get All Product Categories
 * 9. Get Products by Category
 * 10. Product CRUD – Create
 * 11. Product CRUD – Update
 * 12. Product CRUD – Delete
 *
 * Tags: @master @sanity @regression @api @products
 */

import { test, expect } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { RandomDataUtil } from '../../utils/dataGenerator';
import dotenv from 'dotenv';

dotenv.config({ override: true });

test.describe('Products API Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------
    const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
    const PRODUCT_ID = Number(process.env.PRODUCT_ID || 1);
    const LIMIT = Number(process.env.LIMIT || 3);
    const CATEGORY = 'electronics';

    // ---------------------------------------------------------
    // 3. Get All Products
    // ---------------------------------------------------------
    test('GET - All Products @master @sanity @api @products', async ({ request }) => {
        const response = await request.get(`${BASE_URL}${Routes.GET_ALL_PRODUCTS}`);

        expect(response.status(), 'Expected status code 200 for getting all products').toBe(200);

        const responseBody = await response.json();

        expect(Array.isArray(responseBody), 'Response body should be an array').toBeTruthy();
        expect(responseBody.length, 'Products array should contain at least one item').toBeGreaterThan(0);

        // Validate important fields on the first product item
        const firstProduct = responseBody[0];
        expect(firstProduct.id, 'Product should have an id').toBeDefined();
        expect(firstProduct.title, 'Product should have a title').toBeDefined();
        expect(firstProduct.price, 'Product should have a price').toBeDefined();
        expect(firstProduct.category, 'Product should have a category').toBeDefined();
        expect(firstProduct.image, 'Product should have an image URL').toBeDefined();

        console.log(`✅ Retrieved all products. Total items: ${responseBody.length}`);
    });

    // ---------------------------------------------------------
    // 4. Get Product by ID
    // ---------------------------------------------------------
    test('GET - Product by ID @master @sanity @api @products', async ({ request }) => {
        const endpoint = Routes.GET_PRODUCT_BY_ID.replace('{id}', String(PRODUCT_ID));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for getting product by ID').toBe(200);

        const product = await response.json();

        expect(product.id, 'Returned product ID must match requested ID').toBe(PRODUCT_ID);
        expect(product.title, 'Product title should be a non-empty string').toBeTruthy();
        expect(typeof product.price, 'Product price should be a number').toBe('number');
        expect(product.category, 'Product category should be defined').toBeDefined();
        expect(product.description, 'Product description should be defined').toBeDefined();
        expect(product.image, 'Product image should be defined').toBeDefined();

        console.log(`✅ Successfully retrieved product ID ${PRODUCT_ID}: "${product.title}"`);
    });

    // ---------------------------------------------------------
    // 5. Get Products with Limit
    // ---------------------------------------------------------
    test('GET - Products with Limit @master @regression @api @products', async ({ request }) => {
        const endpoint = Routes.GET_PRODUCTS_WITH_LIMIT.replace('{limit}', String(LIMIT));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for limit query').toBe(200);

        const products = await response.json();

        expect(Array.isArray(products), 'Response body should be an array').toBeTruthy();
        expect(products.length, `Expected exactly ${LIMIT} products returned`).toBe(LIMIT);

        console.log(`✅ Retrieved products with limit: received ${products.length} items.`);
    });

    // ---------------------------------------------------------
    // 6. Sort Products – Ascending
    // ---------------------------------------------------------
    test('GET - Sort Products Ascending @master @regression @api @products', async ({ request }) => {
        const endpoint = Routes.GET_PRODUCTS_SORTED.replace('{order}', 'asc');
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for ascending sorted products').toBe(200);

        const products: Array<{ id: number }> = await response.json();
        expect(Array.isArray(products), 'Response should be an array').toBeTruthy();
        expect(products.length, 'Products array should not be empty').toBeGreaterThan(1);

        const ids = products.map((item) => item.id);
        for (let i = 0; i < ids.length - 1; i++) {
            expect(ids[i], `Product ID ${ids[i]} should be <= next ID ${ids[i + 1]}`).toBeLessThanOrEqual(ids[i + 1]);
        }

        console.log(`✅ Verified products sorted in ascending order: [${ids.slice(0, 5).join(', ')}...]`);
    });

    // ---------------------------------------------------------
    // 7. Sort Products – Descending
    // ---------------------------------------------------------
    test('GET - Sort Products Descending @master @regression @api @products', async ({ request }) => {
        const endpoint = Routes.GET_PRODUCTS_SORTED.replace('{order}', 'desc');
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for descending sorted products').toBe(200);

        const products: Array<{ id: number }> = await response.json();
        expect(Array.isArray(products), 'Response should be an array').toBeTruthy();
        expect(products.length, 'Products array should not be empty').toBeGreaterThan(1);

        const ids = products.map((item) => item.id);
        for (let i = 0; i < ids.length - 1; i++) {
            expect(ids[i], `Product ID ${ids[i]} should be >= next ID ${ids[i + 1]}`).toBeGreaterThanOrEqual(ids[i + 1]);
        }

        console.log(`✅ Verified products sorted in descending order: [${ids.slice(0, 5).join(', ')}...]`);
    });

    // ---------------------------------------------------------
    // 8. Get All Product Categories
    // ---------------------------------------------------------
    test('GET - All Product Categories @master @sanity @api @products', async ({ request }) => {
        const response = await request.get(`${BASE_URL}${Routes.GET_ALL_CATEGORIES}`);

        expect(response.status(), 'Expected status code 200 for categories').toBe(200);

        const categories = await response.json();

        expect(Array.isArray(categories), 'Categories response should be an array').toBeTruthy();
        expect(categories.length, 'Categories list should not be empty').toBeGreaterThan(0);
        expect(categories, `Categories should include "${CATEGORY}"`).toContain(CATEGORY);

        console.log(`✅ Retrieved all categories: ${JSON.stringify(categories)}`);
    });

    // ---------------------------------------------------------
    // 9. Get Products by Category
    // ---------------------------------------------------------
    test('GET - Products by Category @master @regression @api @products', async ({ request }) => {
        const endpoint = Routes.GET_PRODUCTS_BY_CATEGORY.replace('{category}', CATEGORY);
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for products by category').toBe(200);

        const products: Array<{ id: number; category: string }> = await response.json();

        expect(Array.isArray(products), 'Response should be an array').toBeTruthy();
        expect(products.length, 'Products list for category should not be empty').toBeGreaterThan(0);

        products.forEach((product) => {
            expect(product.category, `Product category should match requested category "${CATEGORY}"`).toBe(CATEGORY);
        });

        console.log(`✅ All ${products.length} returned products belong to category "${CATEGORY}".`);
    });

    // ---------------------------------------------------------
    // 10. Product CRUD – Create
    // ---------------------------------------------------------
    test('POST - Create Product @master @regression @api @products', async ({ request }) => {
        const newProduct = RandomDataUtil.generateProductPayload();

        const response = await request.post(`${BASE_URL}${Routes.CREATE_PRODUCT}`, {
            data: newProduct,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status(), 'Expected status code 201 for creating product').toBe(201);

        const createdProduct = await response.json();

        expect(createdProduct.id, 'Created product should have a returned id').toBeDefined();
        expect(createdProduct.title, 'Created product title should match submitted data').toBe(newProduct.title);
        expect(createdProduct.price, 'Created product price should match submitted data').toBe(newProduct.price);
        expect(createdProduct.category, 'Created product category should match submitted data').toBe(newProduct.category);

        console.log(`✅ Created product successfully with ID ${createdProduct.id}.`);
    });

    // ---------------------------------------------------------
    // 11. Product CRUD – Update
    // ---------------------------------------------------------
    test('PUT - Update Product @master @regression @api @products', async ({ request }) => {
        const endpoint = Routes.UPDATE_PRODUCT.replace('{id}', String(PRODUCT_ID));
        const updatedPayload = RandomDataUtil.generateUpdatedProductPayload();

        const response = await request.put(`${BASE_URL}${endpoint}`, {
            data: updatedPayload,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status(), 'Expected status code 200 for updating product').toBe(200);

        const updatedProduct = await response.json();

        expect(Number(updatedProduct.id), 'Updated product ID should match requested ID').toBe(PRODUCT_ID);
        expect(updatedProduct.title, 'Updated product title should reflect changes').toBe(updatedPayload.title);
        expect(updatedProduct.price, 'Updated product price should reflect changes').toBe(updatedPayload.price);

        console.log(`✅ Product ID ${PRODUCT_ID} updated successfully.`);
    });

    // ---------------------------------------------------------
    // 12. Product CRUD – Delete
    // ---------------------------------------------------------
    test('DELETE - Delete Product @master @regression @api @products', async ({ request }) => {
        const endpoint = Routes.DELETE_PRODUCT.replace('{id}', String(PRODUCT_ID));
        const response = await request.delete(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for deleting product').toBe(200);

        const deletedProduct = await response.json();
        expect(Number(deletedProduct.id), 'Deleted product ID should match requested ID').toBe(PRODUCT_ID);

        console.log(`✅ Product ID ${PRODUCT_ID} deleted successfully.`);
    });
});

