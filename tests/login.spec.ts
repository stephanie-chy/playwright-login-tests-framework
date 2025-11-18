import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser, invalidUsers } from '../data/loginData';

test.describe('Login Page Tests', () => {

  test('Successful login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(validUser.username, validUser.password);

    await expect(page).toHaveURL(/.*logged-in-successfully/);
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  });

  test('Invalid username', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(invalidUsers.wrongUsername.username, invalidUsers.wrongUsername.password);

    await expect(page.locator(login.errorMessage)).toHaveText('Your username is invalid!');
  });

  test('Invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(invalidUsers.wrongPassword.username, invalidUsers.wrongPassword.password);

    await expect(page.locator(login.errorMessage)).toHaveText('Your password is invalid!');
  });

  test('Empty fields', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(invalidUsers.emptyFields.username, invalidUsers.emptyFields.password);

    await expect(page.locator(login.errorMessage)).toBeVisible();
  });

});
