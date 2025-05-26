/**
 * Adds two numbers
 * @param a First number
 * @param b Second number
 * @returns Sum of a and b
 */
export const add = (a: number, b: number): number => a + b;

/**
 * Subtracts b from a
 * @param a First number
 * @param b Second number
 * @returns Difference between a and b
 */
export const subtract = (a: number, b: number): number => a - b;

/**
 * Multiplies two numbers
 * @param a First number
 * @param b Second number
 * @returns Product of a and b
 */
export const multiply = (a: number, b: number): number => a * b;

/**
 * Divides a by b
 * @param a First number
 * @param b Second number
 * @throws Error if b is 0
 * @returns Quotient of a divided by b
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

/**
 * Calculates the percentage of a number
 * @param value The number to calculate percentage of
 * @param percentage The percentage to calculate
 * @returns The calculated percentage value
 */
export const calculatePercentage = (value: number, percentage: number): number => {
  return (value * percentage) / 100;
}; 