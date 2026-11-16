/**
 * Test Suite: FakeStore JSON Schema Validation Tests
 *
 * Prompts Covered:
 * 29. Product Response Schema
 * 30. User Response Schema
 * 31. Cart Response Schema
 *
 * Tags: @master @regression @schema @api
 */

import { test, expect } from '@playwright/test';
import path from 'path';
import Ajv from 'ajv';
import { Routes } from '../../api/endpoints/routes';
import { DataProvider } from '../../utils/DataReader';
import dotenv from 'dotenv';

dotenv.config({ override: true });

test.describe('JSON Schema Validation Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------
    const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
    const PRODUCT_ID = Number(process.env.PRODUCT_ID || 1);
    const USER_ID = Number(process.env.USER_ID || 1);
    const CART_ID = Number(process.env.CART_ID || 1);

    const ajv = new Ajv({ allErrors: true });

    // ---------------------------------------------------------
    // 29. Product Response Schema
    // ---------------------------------------------------------
    test('SCHEMA - Product Response Schema @master @regression @schema @api', async ({ request }) => {
        const endpoint = Routes.GET_PRODUCT_BY_ID.replace('{id}', String(PRODUCT_ID));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for product fetch').toBe(200);

        const product = await response.json();

        const schemaPath = path.resolve(__dirname, '../../api/schemas/product_api_schema.json');
        const schema = DataProvider.readJson(schemaPath);

        const validate = ajv.compile(schema);
        const isValid = validate(product);

        if (!isValid) {
            console.error('Product schema validation errors:', validate.errors);
        }

        expect(
            isValid,
            `Product response failed JSON schema validation: ${JSON.stringify(validate.errors, null, 2)}`
        ).toBeTruthy();

        console.log(`✅ Product ID ${PRODUCT_ID} conforms to product JSON schema.`);
    });

    // ---------------------------------------------------------
    // 30. User Response Schema
    // ---------------------------------------------------------
    test('SCHEMA - User Response Schema @master @regression @schema @api', async ({ request }) => {
        const endpoint = Routes.GET_USER_BY_ID.replace('{id}', String(USER_ID));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for user fetch').toBe(200);

        const user = await response.json();

        const schemaPath = path.resolve(__dirname, '../../api/schemas/user_api_schema.json');
        const schema = DataProvider.readJson(schemaPath);

        const validate = ajv.compile(schema);
        const isValid = validate(user);

        if (!isValid) {
            console.error('User schema validation errors:', validate.errors);
        }

        expect(
            isValid,
            `User response failed JSON schema validation: ${JSON.stringify(validate.errors, null, 2)}`
        ).toBeTruthy();

        console.log(`✅ User ID ${USER_ID} conforms to user JSON schema.`);
    });

    // ---------------------------------------------------------
    // 31. Cart Response Schema
    // ---------------------------------------------------------
    test('SCHEMA - Cart Response Schema @master @regression @schema @api', async ({ request }) => {
        const endpoint = Routes.GET_CART_BY_ID.replace('{id}', String(CART_ID));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for cart fetch').toBe(200);

        const cart = await response.json();

        const schemaPath = path.resolve(__dirname, '../../api/schemas/cart_api_schema.json');
        const schema = DataProvider.readJson(schemaPath);

        const validate = ajv.compile(schema);
        const isValid = validate(cart);

        if (!isValid) {
            console.error('Cart schema validation errors:', validate.errors);
        }

        expect(
            isValid,
            `Cart response failed JSON schema validation: ${JSON.stringify(validate.errors, null, 2)}`
        ).toBeTruthy();

        console.log(`✅ Cart ID ${CART_ID} conforms to cart JSON schema.`);
    });
});

