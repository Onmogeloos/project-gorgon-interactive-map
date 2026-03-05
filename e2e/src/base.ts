import { test as base } from '../../webapp/node_modules/@playwright/test/index.js';

export const test = base.extend<{
    mapData: any,
    globalData: any,
}>({
    page: async ({ page }, use) => {
        page.on('console', m => {
            if (m.type() === 'error') {
                throw new Error(`Console error: ${m.text()}`);
            }
        });

        await use(page);
    },
    data: async ({ page }, use) => {
        const data = await page.evaluate(() => {
            return new Promise(resolve => {
                window.addEventListener("message", (event) => {
                    if (event.data?.type === "mapDataLoaded") {
                        resolve({ mapData: event.data.mapData, globalData: event.data.globalData });
                    }
                }, { once: true });
            });
        });
        await use(data);
    },
});