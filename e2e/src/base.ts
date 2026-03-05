import { test as base } from '@playwright/test';
import { GlobalData, GlobalMapData } from "@webapp/types/Map";

export const test = base.extend({
    page: async ({ page }, use) => {
        page.on('console', m => {
            if (m.type() === 'error') {
                throw new Error(`Console error: ${m.text()}`);
            }
        });

        await use(page);
    },
    // data: async ({ page }, use) => {
    //     await page.goto('/');
    //     const data = await page.evaluate(() => {
    //         return new Promise<{
    //             mapData: GlobalMapData,
    //             globalData: GlobalData,
    //         }>(resolve => {
    //             window.addEventListener("message", (event) => {
    //                 if (event.data?.type === "mapDataLoaded") {
                        
    //                     console.log(JSON.stringify(event.data.data))
    //                     resolve({ mapData: event.data.data.mapData, globalData: event.data.data.globalData });
    //                 }
    //             }, { once: true });
    //         });
    //     });
    //     console.log(JSON.stringify(data))
    //     await use(data);
    // },
});