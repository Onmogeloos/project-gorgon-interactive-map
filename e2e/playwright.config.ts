import { defineConfig } from '@playwright/test';
import { register } from 'node:module';

// Mock asset imports to empty strings.
register('./src/mocks/mockAssetLoader.mjs', import.meta.url);

export default defineConfig({
  testDir: './src',
  use: {
    baseURL: 'http://localhost:5173',
  },
  webServer: {
    command: 'yarn workspace @project-gorgon-interactive-map/webapp dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true
  },
});