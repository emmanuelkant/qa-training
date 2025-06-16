import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock sessionStorage
const mockSessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'sessionStorage', { value: mockSessionStorage });

describe('Calculator Integration Tests', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    // Mock empty history
    mockSessionStorage.getItem.mockReturnValue(null);
  });

  it('should perform calculation and save to history', () => {
    render(
      <App />
    );

    // Perform calculation
    const num1Input = screen.getByTestId('num1-input');
    const num2Input = screen.getByTestId('num2-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(num1Input, { target: { value: '5' } });
    fireEvent.change(num2Input, { target: { value: '3' } });
    fireEvent.click(addButton);

    // Check result
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 8');

    // Verify history was saved
    expect(mockSessionStorage.setItem).toHaveBeenCalledWith(
      'calculatorHistory',
      expect.stringContaining('"num1":5')
    );
    expect(mockSessionStorage.setItem).toHaveBeenCalledWith(
      'calculatorHistory',
      expect.stringContaining('"num2":3')
    );
    expect(mockSessionStorage.setItem).toHaveBeenCalledWith(
      'calculatorHistory',
      expect.stringContaining('"operation":"add"')
    );
  });

  it('should display history and allow clearing', () => {
    // Mock history data
    const mockHistory = JSON.stringify([
      {
        num1: 5,
        num2: 3,
        operation: 'add',
        result: 8,
        timestamp: new Date().toISOString()
      }
    ]);
    mockSessionStorage.getItem.mockReturnValue(mockHistory);

    render(
      <App />
    );

    // Navigate to history page
    const historyLink = screen.getByText('History');
    fireEvent.click(historyLink);

    // Verify history is displayed
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('add')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();

    // Clear history
    const clearButton = screen.getByText('Clear History');
    fireEvent.click(clearButton);

    // Verify history was cleared
    expect(mockSessionStorage.removeItem).toHaveBeenCalledWith('calculatorHistory');
    expect(screen.getByText('No calculations yet')).toBeInTheDocument();
  });
}); 