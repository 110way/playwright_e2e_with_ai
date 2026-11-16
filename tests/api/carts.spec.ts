/**
 * Test Suite: FakeStore Carts API Tests
 *
 * Prompts Covered:
 * 20. Get All Carts
 * 21. Get Cart by ID
 * 22. Get Carts by Date Range
 * 23. Get User Cart
 * 24. Get Carts with Limit
 * 25. Sort Carts
 * 26. Cart CRUD – Create
 * 27. Cart CRUD – Update
 * 28. Cart CRUD – Delete
 *
 * Tags: @master @sanity @regression @api @carts
 */

import { test, expect } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { RandomDataUtil } from '../../utils/dataGenerator';
import dotenv from 'dotenv';

dotenv.config({ override: true });

test.describe('Carts API Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------
    const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
    const CART_ID = Number(process.env.CART_ID || 1);
    const USER_ID = Number(process.env.USER_ID || 1);
    const LIMIT = Number(process.env.LIMIT || 3);
    const START_DATE = process.env.START_DATE || '2019-12-10';
    const END_DATE = process.env.END_DATE || '2020-10-10';

    // ---------------------------------------------------------
    // 20. Get All Carts
    // ---------------------------------------------------------
    test('GET - All Carts @master @sanity @api @carts', async ({ request }) => {
        const response = await request.get(`${BASE_URL}${Routes.GET_ALL_CARTS}`);

        expect(response.status(), 'Expected status code 200 for getting all carts').toBe(200);

        const carts = await response.json();

        expect(Array.isArray(carts), 'Response should be an array of carts').toBeTruthy();
        expect(carts.length, 'Carts array should not be empty').toBeGreaterThan(0);

        const firstCart = carts[0];
        expect(firstCart.id, 'Cart should have an id').toBeDefined();
        expect(firstCart.userId, 'Cart should have a userId').toBeDefined();
        expect(firstCart.date, 'Cart should have a date').toBeDefined();
        expect(Array.isArray(firstCart.products), 'Cart products should be an array').toBeTruthy();

        console.log(`✅ Retrieved all carts successfully. Total count: ${carts.length}`);
    });

    // ---------------------------------------------------------
    // 21. Get Cart by ID
    // ---------------------------------------------------------
    test('GET - Cart by ID @master @sanity @api @carts', async ({ request }) => {
        const endpoint = Routes.GET_CART_BY_ID.replace('{id}', String(CART_ID));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for cart by ID').toBe(200);

        const cart = await response.json();

        expect(cart.id, 'Returned cart ID must match requested cart ID').toBe(CART_ID);
        expect(cart.userId, 'Cart userId should be defined').toBeDefined();
        expect(cart.date, 'Cart date should be defined').toBeDefined();
        expect(Array.isArray(cart.products), 'Cart products should be an array').toBeTruthy();

        console.log(`✅ Successfully retrieved cart ID ${CART_ID} for user ${cart.userId}.`);
    });

    // ---------------------------------------------------------
    // 22. Get Carts by Date Range
    // ---------------------------------------------------------
    test('GET - Carts by Date Range @master @regression @api @carts', async ({ request }) => {
        const endpoint = Routes.GET_CARTS_BY_DATE_RANGE
            .replace('{startdate}', START_DATE)
            .replace('{enddate}', END_DATE);
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for date range query').toBe(200);

        const carts: Array<{ id: number; date: string }> = await response.json();

        expect(Array.isArray(carts), 'Response should be an array').toBeTruthy();
        expect(carts.length, 'Date range should return cart records').toBeGreaterThan(0);

        const startTimestamp = new Date(START_DATE).getTime();
        const endTimestamp = new Date(`${END_DATE}T23:59:59.999Z`).getTime();

        carts.forEach((cart) => {
            const cartTimestamp = new Date(cart.date).getTime();
            expect(
                cartTimestamp >= startTimestamp && cartTimestamp <= endTimestamp,
                `Cart ${cart.id} date (${cart.date}) should be within ${START_DATE} and ${END_DATE}`
            ).toBeTruthy();
        });

        console.log(`✅ Verified ${carts.length} carts within date range ${START_DATE} to ${END_DATE}.`);
    });

    // ---------------------------------------------------------
    // 23. Get User Cart
    // ---------------------------------------------------------
    test('GET - User Carts @master @regression @api @carts', async ({ request }) => {
        const endpoint = Routes.GET_USER_CART.replace('{userId}', String(USER_ID));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for user carts').toBe(200);

        const userCarts: Array<{ id: number; userId: number; products: any[] }> = await response.json();

        expect(Array.isArray(userCarts), 'Response should be an array').toBeTruthy();
        expect(userCarts.length, `Expected user ${USER_ID} to have cart records`).toBeGreaterThan(0);

        userCarts.forEach((cart) => {
            expect(cart.userId, `Each cart record must belong to user ID ${USER_ID}`).toBe(USER_ID);
        });

        console.log(`✅ Retrieved ${userCarts.length} carts for user ID ${USER_ID}.`);
    });

    // ---------------------------------------------------------
    // 24. Get Carts with Limit
    // ---------------------------------------------------------
    test('GET - Carts with Limit @master @regression @api @carts', async ({ request }) => {
        const endpoint = Routes.GET_CARTS_WITH_LIMIT.replace('{limit}', String(LIMIT));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for carts limit query').toBe(200);

        const carts = await response.json();

        expect(Array.isArray(carts), 'Response should be an array').toBeTruthy();
        expect(carts.length, `Returned cart count should match requested limit ${LIMIT}`).toBe(LIMIT);

        console.log(`✅ Retrieved carts with limit: received ${carts.length} items.`);
    });

    // ---------------------------------------------------------
    // 25. Sort Carts
    // ---------------------------------------------------------
    test('GET - Sort Carts Ascending & Descending @master @regression @api @carts', async ({ request }) => {
        // Ascending
        const ascEndpoint = Routes.GET_CARTS_SORTED.replace('{order}', 'asc');
        const ascResponse = await request.get(`${BASE_URL}${ascEndpoint}`);
        expect(ascResponse.status(), 'Expected status code 200 for asc sorting').toBe(200);

        const ascCarts: Array<{ id: number }> = await ascResponse.json();
        const ascIds = ascCarts.map((c) => c.id);
        for (let i = 0; i < ascIds.length - 1; i++) {
            expect(ascIds[i], `Cart ID ${ascIds[i]} should be <= next ID ${ascIds[i + 1]}`).toBeLessThanOrEqual(ascIds[i + 1]);
        }

        // Descending
        const descEndpoint = Routes.GET_CARTS_SORTED.replace('{order}', 'desc');
        const descResponse = await request.get(`${BASE_URL}${descEndpoint}`);
        expect(descResponse.status(), 'Expected status code 200 for desc sorting').toBe(200);

        const descCarts: Array<{ id: number }> = await descResponse.json();
        const descIds = descCarts.map((c) => c.id);
        for (let i = 0; i < descIds.length - 1; i++) {
            expect(descIds[i], `Cart ID ${descIds[i]} should be >= next ID ${descIds[i + 1]}`).toBeGreaterThanOrEqual(descIds[i + 1]);
        }

        console.log(`✅ Cart sorting verified: asc [${ascIds.join(', ')}], desc [${descIds.join(', ')}]`);
    });

    // ---------------------------------------------------------
    // 26. Cart CRUD – Create
    // ---------------------------------------------------------
    test('POST - Create Cart @master @regression @api @carts', async ({ request }) => {
        const newCartPayload = RandomDataUtil.generateCartPayload(USER_ID);

        const response = await request.post(`${BASE_URL}${Routes.CREATE_CART}`, {
            data: newCartPayload,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status(), 'Expected status code 201 for creating cart').toBe(201);

        const createdCart = await response.json();

        expect(createdCart.id, 'Cart ID should be returned').toBeDefined();
        expect(createdCart.userId, 'Created cart userId should match submitted data').toBe(newCartPayload.userId);
        expect(createdCart.products.length, 'Created cart products length should match submitted data')
            .toBe(newCartPayload.products.length);

        console.log(`✅ Cart created successfully with ID ${createdCart.id}.`);
    });

    // ---------------------------------------------------------
    // 27. Cart CRUD – Update
    // ---------------------------------------------------------
    test('PUT - Update Cart @master @regression @api @carts', async ({ request }) => {
        const endpoint = Routes.UPDATE_CART.replace('{id}', String(CART_ID));
        const updatedQuantity = 10;
        const updatePayload = {
            userId: USER_ID,
            date: RandomDataUtil.getCurrentDate(),
            products: [
                {
                    productId: 1,
                    quantity: updatedQuantity,
                },
            ],
        };

        const response = await request.put(`${BASE_URL}${endpoint}`, {
            data: updatePayload,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status(), 'Expected status code 200 for updating cart').toBe(200);

        const updatedCart = await response.json();

        expect(updatedCart.products[0].quantity, 'Cart product quantity should reflect updated value')
            .toBe(updatedQuantity);

        console.log(`✅ Cart ID ${CART_ID} updated successfully with new quantity ${updatedQuantity}.`);
    });

    // ---------------------------------------------------------
    // 28. Cart CRUD – Delete
    // ---------------------------------------------------------
    test('DELETE - Delete Cart @master @regression @api @carts', async ({ request }) => {
        const endpoint = Routes.DELETE_CART.replace('{id}', String(CART_ID));
        const response = await request.delete(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for deleting cart').toBe(200);

        const deletedCart = await response.json();
        expect(Number(deletedCart.id), 'Deleted cart ID should match requested cart ID').toBe(CART_ID);

        console.log(`✅ Cart ID ${CART_ID} deleted successfully.`);
    });
});

