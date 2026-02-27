import { test } from './base';

test.describe('Load each map page', async () => {
    const areas = [
        "anagoge",
        "anagoge-records-facility",
        "casino",
        "boardedupbasement",
        "darkchapel",
        "eltibule",
        "eltibulecrypt",
        "goblindungeon",
        "goblindungeontopfloor",
        "hoganskeepbasement",
        "animalnexus",
        "faerealm",
        "thewintertide",
        "gazluk",
        "newprestonbule",
        "nonamecave",
        "snowbloodcave",
        "windyviewcave",
        "ilmari",
        "labyrinth",
        "kurcourtyard",
        "kurmountains",
        "kurtower",
        "wolfcave",
        "yeticave",
        "povus",
        "povuscavesaktaaricave",
        "povuscaveselvenjudgement",
        "povuscaveserrrukascave",
        "povuscavesforthragariancaves",
        "povuscaveslevel1",
        "povuscaveslevel2",
        "povuscaveslevel3",
        "povuscaveslevel4",
        "povuscavesnightmarecaves",
        "rahu",
        "rahusewer",
        "borghild",
        "brainbugcave",
        "carpaltunnels",
        "crystalcavern",
        "khyrulekscrypt",
        "myconianCave",
        "phantomilmari",
        "serbule",
        "serbulesewer",
        "ranalonbase",
        "serbulehills",
        "spidercave",
        "statehelm",
        "statehelmcavessafehousea",
        "vidaria",
        "sunvale",
        "sunvalecave1",
        "sunvalecave2",
        "sunvalecave3",
        "winternexus",
    ]

    for (const area of areas) {
        test(area, async ({ page }) => {
            await page.goto(`http://localhost:5173/#/${area}`);
            await page.waitForFunction(() => {
                return Array.from(document.querySelectorAll("img")).every((img) => img.complete && img.naturalWidth > 0)
            })
        });
    }

    test("Homepage (Anagoge)", async ({ page }) => {
        await page.goto(`http://localhost:5173/`);
        await page.waitForFunction(() => {
            return Array.from(document.querySelectorAll("img")).every((img) => img.complete && img.naturalWidth > 0)
        })
    });

    test.describe.configure({ mode: 'parallel' });
})