import { test, expect } from '@playwright/test';

// Parse the .env file into variables in our script
const user = process.env.USERNAME
const pass = process.env.PASSWORD
const link = process.env.URL

test('det env login test', async ({ page, request }) => {
  await page.goto(link);
  await page.locator('#userName').click();
  await page.locator('#userName').fill(user);
  await page.locator('#password').click();
  await page.locator('#password').fill(pass);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: user }).click();
  await page.getByText('Logout').click();
  await page.close();
});