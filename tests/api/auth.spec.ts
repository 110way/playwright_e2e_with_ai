/**
 * Test Suite: FakeStore Authentication API Tests
 *
 * Prompts Covered:
 * 1. Successful Login
 * 2. Invalid Login
 *
 * Tags: @master @sanity @regression @api @auth
 */

import { test, expect } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { RandomDataUtil } from '../../utils/dataGenerator';
import dotenv from 'dotenv';

dotenv.config({ override: true });

test.describe('Authentication API Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------
    const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
    const USERNAME = process.env.USERNAME || 'mor_2314';
    const PASSWORD = process.env.PASSWORD || '83r5^_';

    // ---------------------------------------------------------
    // 1. Successful Login
    // ---------------------------------------------------------
    test('POST - Successful Login @master @sanity @api @auth', async ({ request }) => {
        const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
            data: {
                username: USERNAME,
                password: PASSWORD,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status(), 'Expected status code 201 for successful login').toBe(201);

        const responseBody = await response.json();

        expect(responseBody, 'Response body should be defined').toBeDefined();
        expect(responseBody.token, 'Token property should exist in response').toBeDefined();
        expect(typeof responseBody.token, 'Token should be a string').toBe('string');
        expect(responseBody.token.length, 'Token should be a non-empty string').toBeGreaterThan(0);

        console.log('✅ Successful authentication verified. Token received.');
    });

    // ---------------------------------------------------------
    // 2. Invalid Login
    // ---------------------------------------------------------
    test('POST - Invalid Login @master @regression @api @auth', async ({ request }) => {
        const invalidCredentials = RandomDataUtil.generateInvalidLoginPayload();

        const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
            data: invalidCredentials,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status(), 'Expected status code 401 for invalid login').toBe(401);

        const responseText = await response.text();

        expect(responseText.trim(), 'Error message should match expected authentication error')
            .toBe('username or password is incorrect');

        console.log('✅ Authentication failure verified with expected error message.');
    });
});
