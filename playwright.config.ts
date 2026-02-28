import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './uitests',
  use: {
    baseURL: 'http://localhost:5173',
  },
  webServer: {
    command: 'yarn run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
});