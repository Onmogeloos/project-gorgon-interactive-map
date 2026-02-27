import { test as base } from '@playwright/test';

export const test = base.extend({
    page: async ({ page }, use) => {
        page.on('console', m => {
            if (m.type() === 'error') {
                throw new Error(`Console error: ${m.text()}`);
            }
        });
        await use(page);
    },
});