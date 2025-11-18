import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://practicetestautomation.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'report' }]],
  timeout: 30000
});
