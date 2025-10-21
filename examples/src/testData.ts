/**
 * Centralized test data for AG Grid examples and tests
 * This data can be imported and reused across multiple files
 */

export interface CarData {
  make: string;
  model: string;
  price: number;
}

/**
 * Car data for AG Grid
 */
export const carData: CarData[] = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxster", price: 72000 },
  { make: "BMW", model: "M3", price: 65000 },
  { make: "Audi", model: "A4", price: 42000 },
  { make: "Mercedes", model: "C-Class", price: 48000 },
  { make: "Honda", model: "Civic", price: 28000 },
  { make: "Mazda", model: "MX-5", price: 31000 },
  { make: "Nissan", model: "GT-R", price: 115000 },
  { make: "Chevrolet", model: "Corvette", price: 68000 },
  { make: "Tesla", model: "Model 3", price: 45000 },
  { make: "Volkswagen", model: "Golf", price: 29000 },
  { make: "Subaru", model: "WRX", price: 38000 },
  { make: "Lexus", model: "IS", price: 41000 },
  { make: "Jaguar", model: "F-Type", price: 73000 },
  { make: "Volvo", model: "S60", price: 43000 },
  { make: "Alfa Romeo", model: "Giulia", price: 46000 },
  { make: "Cadillac", model: "CT5", price: 44000 },
  { make: "Infiniti", model: "Q50", price: 40000 },
  { make: "Acura", model: "TLX", price: 39000 }
];

/**
 * Column definitions for AG Grid
 */
export const columnDefs = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price' }
];
