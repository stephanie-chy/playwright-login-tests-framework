import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#username';
  readonly passwordInput = '#password';
  readonly loginBtn = '#submit';
  readonly errorMessage = '#error';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/practice-test-login/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginBtn);
  }

  async getErrorMessage() {
    return this.page.locator(this.errorMessage).textContent();
  }
}
