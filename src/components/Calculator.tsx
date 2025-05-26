import { useState } from 'react';
import { add, subtract, multiply, divide, calculatePercentage } from '../utils/mathUtils';

export const Calculator = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | string>('');
  const [error, setError] = useState<string>('');

  const handleCalculate = (operation: string) => {
    setError('');
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setError('Please enter valid numbers');
      return;
    }

    try {
      switch (operation) {
        case 'add':
          setResult(add(n1, n2));
          break;
        case 'subtract':
          setResult(subtract(n1, n2));
          break;
        case 'multiply':
          setResult(multiply(n1, n2));
          break;
        case 'divide':
          setResult(divide(n1, n2));
          break;
        case 'percentage':
          setResult(calculatePercentage(n1, n2));
          break;
        default:
          setError('Invalid operation');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          data-testid="num1-input"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          data-testid="num2-input"
        />
      </div>
      <div>
        <button onClick={() => handleCalculate('add')} data-testid="add-button">
          Add
        </button>
        <button onClick={() => handleCalculate('subtract')} data-testid="subtract-button">
          Subtract
        </button>
        <button onClick={() => handleCalculate('multiply')} data-testid="multiply-button">
          Multiply
        </button>
        <button onClick={() => handleCalculate('divide')} data-testid="divide-button">
          Divide
        </button>
        <button onClick={() => handleCalculate('percentage')} data-testid="percentage-button">
          Calculate Percentage
        </button>
      </div>
      {error && <div data-testid="error-message">{error}</div>}
      {result !== '' && <div data-testid="result">Result: {result}</div>}
    </div>
  );
}; 