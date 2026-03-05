import { expect, test } from '@playwright/test';

test('Form submits correct data', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Propose new marker' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('test');
    await page.getByRole('combobox', { name: 'Type' }).click();
    await page.getByRole('option', { name: 'Bosses' }).click();
    await page.locator('canvas').click({
        position: {
            x: 500,
            y: 500
        }
    });
    const [request] = await Promise.all([
        page.waitForRequest(request => request.url().includes('/save-marker') && request.method() === 'POST'),
        page.getByRole('button', { name: 'Submit' }).click()
    ]);
    const jsonbody = request.postDataJSON();
    expect(jsonbody).toEqual({
        name: 'test',
        type: 'boss',
        position: [220, 220],
        map: 'anagoge'
    });
})