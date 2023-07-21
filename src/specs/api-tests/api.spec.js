import fetch from 'node-fetch';
import { expect, test } from '@jest/globals';

test('Get all products', async () => {
    const URL = 'https://dummyjson.com/products';
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    expect(response.status).toBe(200)
});