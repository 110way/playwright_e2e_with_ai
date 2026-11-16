/**
 * Test Suite: FakeStore Users API Tests
 *
 * Prompts Covered:
 * 13. Get All Users
 * 14. Get User by ID
 * 15. Get Users with Limit
 * 16. Sort Users
 * 17. User CRUD – Create
 * 18. User CRUD – Update
 * 19. User CRUD – Delete
 *
 * Tags: @master @sanity @regression @api @users
 */

import { test, expect } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { RandomDataUtil } from '../../utils/dataGenerator';
import dotenv from 'dotenv';

dotenv.config({ override: true });

test.describe('Users API Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------
    const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
    const USER_ID = Number(process.env.USER_ID || 1);
    const LIMIT = Number(process.env.LIMIT || 3);

    // ---------------------------------------------------------
    // 13. Get All Users
    // ---------------------------------------------------------
    test('GET - All Users @master @sanity @api @users', async ({ request }) => {
        const response = await request.get(`${BASE_URL}${Routes.GET_ALL_USERS}`);

        expect(response.status(), 'Expected status code 200 for getting all users').toBe(200);

        const users = await response.json();

        expect(Array.isArray(users), 'Response should be an array of users').toBeTruthy();
        expect(users.length, 'Users array should not be empty').toBeGreaterThan(0);

        const firstUser = users[0];
        expect(firstUser.id, 'User record must have an id').toBeDefined();
        expect(firstUser.email, 'User record must have an email').toBeDefined();
        expect(firstUser.username, 'User record must have a username').toBeDefined();
        expect(firstUser.name, 'User record must have a name object').toBeDefined();
        expect(firstUser.address, 'User record must have an address object').toBeDefined();

        console.log(`✅ Retrieved all users successfully. Total count: ${users.length}`);
    });

    // ---------------------------------------------------------
    // 14. Get User by ID
    // ---------------------------------------------------------
    test('GET - User by ID @master @sanity @api @users', async ({ request }) => {
        const endpoint = Routes.GET_USER_BY_ID.replace('{id}', String(USER_ID));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for user by ID').toBe(200);

        const user = await response.json();

        expect(user.id, 'Returned user ID must match requested user ID').toBe(USER_ID);
        expect(user.email, 'User email should be defined').toBeDefined();
        expect(user.username, 'User username should be defined').toBeDefined();
        expect(user.name.firstname, 'User firstname should be defined').toBeDefined();
        expect(user.name.lastname, 'User lastname should be defined').toBeDefined();

        console.log(`✅ Successfully retrieved user ID ${USER_ID}: ${user.username} (${user.email})`);
    });

    // ---------------------------------------------------------
    // 15. Get Users with Limit
    // ---------------------------------------------------------
    test('GET - Users with Limit @master @regression @api @users', async ({ request }) => {
        const endpoint = Routes.GET_USERS_WITH_LIMIT.replace('{limit}', String(LIMIT));
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for user limit').toBe(200);

        const users = await response.json();

        expect(Array.isArray(users), 'Response should be an array').toBeTruthy();
        expect(users.length, `Returned user count should equal limit ${LIMIT}`).toBe(LIMIT);

        console.log(`✅ Retrieved users with limit: received ${users.length} items.`);
    });

    // ---------------------------------------------------------
    // 16. Sort Users
    // ---------------------------------------------------------
    test('GET - Sort Users Ascending & Descending @master @regression @api @users', async ({ request }) => {
        // Test Ascending Sort
        const ascEndpoint = Routes.GET_USERS_SORTED.replace('{order}', 'asc');
        const ascResponse = await request.get(`${BASE_URL}${ascEndpoint}`);
        expect(ascResponse.status(), 'Expected status code 200 for asc sorting').toBe(200);

        const ascUsers: Array<{ id: number }> = await ascResponse.json();
        const ascIds = ascUsers.map((u) => u.id);
        for (let i = 0; i < ascIds.length - 1; i++) {
            expect(ascIds[i], `User ID ${ascIds[i]} should be <= next ID ${ascIds[i + 1]}`).toBeLessThanOrEqual(ascIds[i + 1]);
        }

        // Test Descending Sort
        const descEndpoint = Routes.GET_USERS_SORTED.replace('{order}', 'desc');
        const descResponse = await request.get(`${BASE_URL}${descEndpoint}`);
        expect(descResponse.status(), 'Expected status code 200 for desc sorting').toBe(200);

        const descUsers: Array<{ id: number }> = await descResponse.json();
        const descIds = descUsers.map((u) => u.id);
        for (let i = 0; i < descIds.length - 1; i++) {
            expect(descIds[i], `User ID ${descIds[i]} should be >= next ID ${descIds[i + 1]}`).toBeGreaterThanOrEqual(descIds[i + 1]);
        }

        console.log(`✅ User sorting validated: asc [${ascIds.join(', ')}], desc [${descIds.join(', ')}]`);
    });

    // ---------------------------------------------------------
    // 17. User CRUD – Create
    // ---------------------------------------------------------
    test('POST - Create User @master @regression @api @users', async ({ request }) => {
        const newUserPayload = RandomDataUtil.generateUserPayload();

        const response = await request.post(`${BASE_URL}${Routes.CREATE_USER}`, {
            data: newUserPayload,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status(), 'Expected status code 201 for creating user').toBe(201);

        const createdUser = await response.json();

        expect(createdUser.id, 'Generated user ID should be returned').toBeDefined();
        expect(typeof createdUser.id, 'User ID should be a number').toBe('number');

        console.log(`✅ User created successfully with generated ID ${createdUser.id}.`);
    });

    // ---------------------------------------------------------
    // 18. User CRUD – Update
    // ---------------------------------------------------------
    test('PUT - Update User @master @regression @api @users', async ({ request }) => {
        const endpoint = Routes.UPDATE_USER.replace('{id}', String(USER_ID));
        const updateUserPayload = RandomDataUtil.generateUserUpdatePayload();

        const response = await request.put(`${BASE_URL}${endpoint}`, {
            data: updateUserPayload,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status(), 'Expected status code 200 for updating user').toBe(200);

        const updatedUser = await response.json();

        expect(updatedUser.username, 'Updated user username should reflect changes').toBe(updateUserPayload.username);
        expect(updatedUser.email, 'Updated user email should reflect changes').toBe(updateUserPayload.email);

        console.log(`✅ User ID ${USER_ID} updated successfully.`);
    });

    // ---------------------------------------------------------
    // 19. User CRUD – Delete
    // ---------------------------------------------------------
    test('DELETE - Delete User @master @regression @api @users', async ({ request }) => {
        const endpoint = Routes.DELETE_USER.replace('{id}', String(USER_ID));
        const response = await request.delete(`${BASE_URL}${endpoint}`);

        expect(response.status(), 'Expected status code 200 for deleting user').toBe(200);

        const deletedUser = await response.json();
        expect(Number(deletedUser.id), 'Deleted user ID should match requested ID').toBe(USER_ID);

        console.log(`✅ User ID ${USER_ID} deleted successfully.`);
    });
});

