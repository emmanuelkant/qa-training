import { add, subtract, multiply, divide, calculatePercentage } from './mathUtils';

describe('Math Utils', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
    });

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative numbers', () => {
      expect(subtract(3, -2)).toBe(5);
    });

    it('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });

    it('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
    });

    it('should handle negative numbers', () => {
      expect(divide(-6, 2)).toBe(-3);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('calculatePercentage', () => {
    it('should calculate percentage correctly', () => {
      expect(calculatePercentage(100, 50)).toBe(50);
    });

    it('should handle zero values', () => {
      expect(calculatePercentage(0, 50)).toBe(0);
    });

    it('should handle negative percentages', () => {
      expect(calculatePercentage(100, -50)).toBe(-50);
    });
  });
}); 