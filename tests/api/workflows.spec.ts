/**
 * Test Suite: FakeStore End-to-End API Workflows
 *
 * Prompts Covered:
 * 32. Product CRUD Workflow
 * 33. User CRUD Workflow
 * 34. Cart CRUD Workflow
 *
 * Tags: @master @regression @workflow @crud @api
 */

import { test, expect } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { RandomDataUtil } from '../../utils/dataGenerator';
import dotenv from 'dotenv';

dotenv.config({ override: true });

test.describe('End-to-End API Workflows', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------
    const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;

    // ---------------------------------------------------------
    // 32. Product CRUD Workflow
    // ---------------------------------------------------------
    test('WORKFLOW - Complete Product CRUD Workflow @master @regression @workflow @crud @api', async ({ request }) => {
        let generatedProductId: number;
        const newProductPayload = RandomDataUtil.generateProductPayload();
        const updatedProductPayload = RandomDataUtil.generateUpdatedProductPayload();

        await test.step('1) Create a new product', async () => {
            const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_PRODUCT}`, {
                data: newProductPayload,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            expect(createResponse.status(), 'Expected status code 201 for creating product').toBe(201);

            const createdProduct = await createResponse.json();
            expect(createdProduct.id, 'Returned product ID must exist').toBeDefined();
            generatedProductId = Number(createdProduct.id);

            expect(createdProduct.title, 'Created product title should match payload').toBe(newProductPayload.title);
            console.log(`[Step 1] Product created with generated ID: ${generatedProductId}`);
        });

        await test.step('2) Update the product using the generated product ID', async () => {
            const updateEndpoint = Routes.UPDATE_PRODUCT.replace('{id}', String(generatedProductId));
            const updateResponse = await request.put(`${BASE_URL}${updateEndpoint}`, {
                data: updatedProductPayload,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            expect(updateResponse.status(), 'Expected status code 200 for updating product').toBe(200);

            const updatedProduct = await updateResponse.json();
            expect(updatedProduct.title, 'Product title should reflect updated value').toBe(updatedProductPayload.title);
            console.log(`[Step 2] Product ${generatedProductId} updated successfully.`);
        });

        await test.step('3) Delete the product using the generated product ID', async () => {
            const deleteEndpoint = Routes.DELETE_PRODUCT.replace('{id}', String(generatedProductId));
            const deleteResponse = await request.delete(`${BASE_URL}${deleteEndpoint}`);

            expect(deleteResponse.status(), 'Expected status code 200 for deleting product').toBe(200);
            console.log(`[Step 3] Product ${generatedProductId} deleted successfully.`);
        });

        console.log('✅ ✔️ Product CRUD workflow completed successfully!');
    });

    // ---------------------------------------------------------
    // 33. User CRUD Workflow
    // ---------------------------------------------------------
    test('WORKFLOW - Complete User CRUD Workflow @master @regression @workflow @crud @api', async ({ request }) => {
        let generatedUserId: number;
        const newUserPayload = RandomDataUtil.generateUserPayload();
        const updatedUserPayload = RandomDataUtil.generateUserUpdatePayload();

        await test.step('1) Create a new user', async () => {
            const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_USER}`, {
                data: newUserPayload,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            expect(createResponse.status(), 'Expected status code 201 for creating user').toBe(201);

            const createdUser = await createResponse.json();
            expect(createdUser.id, 'Returned user ID must exist').toBeDefined();
            generatedUserId = Number(createdUser.id);
            console.log(`[Step 1] User created with generated ID: ${generatedUserId}`);
        });

        await test.step('2) Update the user using the generated user ID', async () => {
            const updateEndpoint = Routes.UPDATE_USER.replace('{id}', String(generatedUserId));
            const updateResponse = await request.put(`${BASE_URL}${updateEndpoint}`, {
                data: updatedUserPayload,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            expect(updateResponse.status(), 'Expected status code 200 for updating user').toBe(200);

            const updatedUser = await updateResponse.json();
            expect(updatedUser.username, 'Updated user username should reflect changes').toBe(updatedUserPayload.username);
            console.log(`[Step 2] User ${generatedUserId} updated successfully.`);
        });

        await test.step('3) Delete the user using the generated user ID', async () => {
            const deleteEndpoint = Routes.DELETE_USER.replace('{id}', String(generatedUserId));
            const deleteResponse = await request.delete(`${BASE_URL}${deleteEndpoint}`);

            expect(deleteResponse.status(), 'Expected status code 200 for deleting user').toBe(200);
            console.log(`[Step 3] User ${generatedUserId} deleted successfully.`);
        });

        console.log('✅ ✔️ User CRUD workflow completed successfully!');
    });

    // ---------------------------------------------------------
    // 34. Cart CRUD Workflow
    // ---------------------------------------------------------
    test('WORKFLOW - Complete Cart CRUD Workflow @master @regression @workflow @crud @api', async ({ request }) => {
        let generatedCartId: number;
        const testUserId = 1;
        const newCartPayload = RandomDataUtil.generateCartPayload(testUserId);
        const updatedQuantity = 99;

        await test.step('1) Create a new cart', async () => {
            const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_CART}`, {
                data: newCartPayload,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            expect(createResponse.status(), 'Expected status code 201 for creating cart').toBe(201);

            const createdCart = await createResponse.json();
            expect(createdCart.id, 'Returned cart ID must exist').toBeDefined();
            generatedCartId = Number(createdCart.id);

            expect(createdCart.userId, 'Returned cart userId must match submitted userId').toBe(newCartPayload.userId);
            expect(Array.isArray(createdCart.products), 'Returned cart products must be an array').toBeTruthy();
            expect(createdCart.products.length, 'Returned cart products length must match').toBe(newCartPayload.products.length);

            console.log(`[Step 1] Cart created with generated ID: ${generatedCartId}`);
        });

        await test.step('2) Update the cart using the generated cart ID', async () => {
            const updateEndpoint = Routes.UPDATE_CART.replace('{id}', String(generatedCartId));
            const updateCartPayload = {
                userId: testUserId,
                date: RandomDataUtil.getCurrentDate(),
                products: [
                    {
                        productId: 1,
                        quantity: updatedQuantity,
                    },
                ],
            };

            const updateResponse = await request.put(`${BASE_URL}${updateEndpoint}`, {
                data: updateCartPayload,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            expect(updateResponse.status(), 'Expected status code 200 for updating cart').toBe(200);

            const updatedCart = await updateResponse.json();
            expect(updatedCart.products[0].quantity, 'Cart product quantity should reflect updated value')
                .toBe(updatedQuantity);

            console.log(`[Step 2] Cart ${generatedCartId} updated with quantity ${updatedQuantity}.`);
        });

        await test.step('3) Delete the cart using the generated cart ID', async () => {
            const deleteEndpoint = Routes.DELETE_CART.replace('{id}', String(generatedCartId));
            const deleteResponse = await request.delete(`${BASE_URL}${deleteEndpoint}`);

            expect(deleteResponse.status(), 'Expected status code 200 for deleting cart').toBe(200);
            console.log(`[Step 3] Cart ${generatedCartId} deleted successfully.`);
        });

        console.log('✅ ✔️ Cart CRUD workflow completed successfully!');
    });
});

