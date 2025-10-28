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
  { make: "Acura", model: "TLX", price: 39000 },
  { make: "Hyundai", model: "Genesis", price: 47000 },
  { make: "Kia", model: "Stinger", price: 36000 },
  { make: "Genesis", model: "G70", price: 38000 },
  { make: "Lincoln", model: "Continental", price: 49000 },
  { make: "Buick", model: "Regal", price: 33000 },
  { make: "Chrysler", model: "300", price: 34000 },
  { make: "Dodge", model: "Charger", price: 37000 },
  { make: "Jeep", model: "Grand Cherokee", price: 41000 },
  { make: "Ram", model: "1500", price: 38000 },
  { make: "GMC", model: "Sierra", price: 42000 },
  { make: "Mitsubishi", model: "Eclipse Cross", price: 27000 },
  { make: "Suzuki", model: "Swift", price: 19000 },
  { make: "Fiat", model: "500", price: 21000 },
  { make: "Mini", model: "Cooper", price: 30000 },
  { make: "Land Rover", model: "Range Rover", price: 95000 },
  { make: "Bentley", model: "Continental GT", price: 220000 },
  { make: "Rolls-Royce", model: "Ghost", price: 350000 },
  { make: "Aston Martin", model: "DB11", price: 215000 },
  { make: "McLaren", model: "570S", price: 195000 }
];

/**
 * Column definitions for AG Grid
 */
export const columnDefs = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price' }
];
