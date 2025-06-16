import { useState } from 'react';
import { add, subtract, multiply, divide } from '../utils/mathUtils';

interface HistoryItem {
    num1: number;
    num2: number;
    operation: string;
    result: number;
    timestamp: string;
}

export const Calculator = () => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [result, setResult] = useState<number | string>('');
    const [error, setError] = useState<string>('');

    const saveToHistory = (n1: number, n2: number, operation: string, result: number) => {
        const historyItem: HistoryItem = {
            num1: n1,
            num2: n2,
            operation,
            result,
            timestamp: new Date().toISOString()
        };

        const savedHistory = sessionStorage.getItem('calculatorHistory');
        const history: HistoryItem[] = savedHistory ? JSON.parse(savedHistory) : [];
        history.unshift(historyItem); // Add new item at the beginning
        sessionStorage.setItem('calculatorHistory', JSON.stringify(history));
    };

    const handleCalculate = (operation: string) => {
        setError('');
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setError('Please enter valid numbers');
            return;
        }

        try {
            let calculatedResult: number;
            switch (operation) {
                case 'add':
                    calculatedResult = add(n1, n2);
                    break;
                case 'subtract':
                    calculatedResult = subtract(n1, n2);
                    break;
                case 'multiply':
                    calculatedResult = multiply(n1, n2);
                    break;
                case 'divide':
                    calculatedResult = divide(n1, n2);
                    break;
                default:
                    setError('Invalid operation');
                    return;
            }
            setResult(calculatedResult);
            saveToHistory(n1, n2, operation, calculatedResult);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };

    return (
        <div className="calculator">
            <h2>Simple Calculator</h2>
            <div className="inputs">
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
            <div className="buttons">
                <button
                    onClick={() => handleCalculate('add')}
                    data-testid="add-button"
                >
                    Add
                </button>
                <button
                    onClick={() => handleCalculate('subtract')}
                    data-testid="subtract-button"
                >
                    Subtract
                </button>
                <button
                    onClick={() => handleCalculate('multiply')}
                    data-testid="multiply-button"
                >
                    Multiply
                </button>
                <button
                    onClick={() => handleCalculate('divide')}
                    data-testid="divide-button"
                >
                    Divide
                </button>
                <button
                    onClick={() => handleCalculate('percentage')}
                    data-testid="percentage-button"
                >
                    Calculate Percentage
                </button>
            </div>
            {error && <div className="error" data-testid="error-message">{error}</div>}
            {result !== '' && <div className="result" data-testid="result">Result: {result}</div>}
        </div>
    );
}; 