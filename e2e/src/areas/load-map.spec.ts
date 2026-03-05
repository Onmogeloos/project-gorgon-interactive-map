import { loadGlobalData, loadMapData } from '@webapp/data/Mapdata';
import { test } from '../base';
import { GlobalData, GlobalMapData } from '@webapp/types/Map';

test.describe('Load each map page', async () => {
    const data: GlobalMapData = await loadMapData();
    const areas = Object.values(data).map((area) => area.slug);

    for (const area of areas) {
        test(area, async ({ page }) => {
            await page.goto(`http://localhost:5173/#/${area}`);
            await page.waitForFunction(() => {
                return Array.from(document.querySelectorAll("img")).every((img) => img.complete && img.naturalWidth > 0)
            })
        });
    }

    test("-homepage-", async ({ page }) => {
        await page.goto(`http://localhost:5173/`);
        await page.waitForFunction(() => {
            return Array.from(document.querySelectorAll("img")).every((img) => img.complete && img.naturalWidth > 0)
        })
    });

    test.describe.configure({ mode: 'parallel' });
})