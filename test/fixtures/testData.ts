/**
 * Centralized test data for AG Grid tests
 * This data can be imported and reused across multiple test files
 */

import { carData } from '../../examples/src/testData';

export interface CarDataString {
  make: string;
  model: string;
  price: string;
}

/**
 * Expected rows for API-based tests (price as number)
 * Imported from the examples data to ensure consistency
 */
export const expectedApiRows = carData;

/**
 * Expected rows for DOM-based tests (price as string)
 * DOM returns price as string, so we convert the carData
 */
export const expectedDomRows: CarDataString[] = carData.map(row => ({
  ...row,
  price: row.price.toString()
}));

/**
 * Expected column field names
 */
export const expectedColumns: string[] = ['make', 'model', 'price'];
