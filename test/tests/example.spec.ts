import { expect, test } from '@playwright/test';
import { expectedApiRows, expectedDomRows, expectedColumns } from '../fixtures/testData';

test.beforeEach( async ({ page }) => {
  await page.addInitScript({ path: '../src/lib/aggrid-test-util.js' });
});

test('Test our AGGrids API rows and columns match the data we expect', async ({ page }) => {

  await page.goto('http://localhost:5173/');

  const grid = page.locator('.my-grid-id');
  
  await grid.waitFor();

  const agGridApiRows = await page.evaluate(() => window.agGrid.getApiRows('my-grid-id'));
  const agGridApiColumns = await page.evaluate(() => window.agGrid.getApiColumns('my-grid-id'));

  expect(agGridApiRows).toEqual(expectedApiRows);
  expect(agGridApiColumns).toEqual(expectedColumns);

});

test('Test our AGGrids DOM rows and columns match the data we expect', async ({ page }) => {

  await page.goto('http://localhost:5173/');

  const grid = page.locator('.my-grid-id');
  
  await grid.waitFor();

  const agGridDomRows = await page.evaluate(() => window.agGrid.getDomRows('my-grid-id'));
  const agGridDomColumns = await page.evaluate(() => window.agGrid.getDomColumns('my-grid-id'));

  expect(agGridDomRows).toEqual(expectedDomRows);
  expect(agGridDomColumns).toEqual(expectedColumns);

});
