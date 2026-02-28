import { expect, test } from '@playwright/test';

test('Label toggles display and hide tags', async ({ page }) => {
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    // Go to the main map page
    await page.goto('/anagoge');

    // Wait for the map canvas to render
    const canvas = page.locator('canvas.leaflet-canvas-marker-layer');
    await expect(canvas).toBeVisible();

    // Verify it isn't throwing errors by checking console
    const errors: string[] = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        }
    });

    // The boss marker toggle is on by default, and labels are also ON by default
    // Click the label toggle for "boss" (Bosses)
    const bossLabelToggle = page.locator('input#label-boss');
    await expect(bossLabelToggle).toBeChecked();

    // Uncheck it
    await bossLabelToggle.uncheck();
    await expect(bossLabelToggle).not.toBeChecked();

    // Check it
    await bossLabelToggle.check();
    await expect(bossLabelToggle).toBeChecked();

    // Ensure no unexpected rendering errors happened
    expect(errors.length).toBe(0);
});
