import { loadGlobalData } from '@webapp/data/Mapdata';
import { test } from '../base';
import { GlobalData, MarkerType, MarkerTypeGroup } from '@webapp/types/Map';
import { expect } from 'playwright/test';

test('Marker type toggle works correctly', async ({ page }) => {
   await page.goto('/');

   const data = await loadGlobalData() as GlobalData;
   const bossLabel = data.markerTypes[MarkerType.Boss].label;
   
   const label = page.getByTestId('sidebar').getByText(bossLabel)
   await label.scrollIntoViewIfNeeded();
   expect(label).not.toHaveCSS('text-decoration', 'line-through');
   await label.click();
   expect(label).toHaveCSS('text-decoration', 'line-through');
})

test('Marker type group toggle works correctly', async ({ page }) => {
   await page.goto('/');

   const data = await loadGlobalData() as GlobalData;
   const enemiesLabel = data.markerTypeGroups[MarkerTypeGroup.Enemies].label;
   
   const label = page.getByTestId('sidebar').getByText(enemiesLabel, { exact: true })
   await label.scrollIntoViewIfNeeded();
   expect(label).not.toHaveCSS('text-decoration', 'line-through');
   await label.click();
   expect(label).toHaveCSS('text-decoration', 'line-through');
})