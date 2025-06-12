import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Calculator } from './Calculator';

describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it('should render calculator with all buttons', () => {
    expect(screen.getByTestId('num1-input')).toBeInTheDocument();
    expect(screen.getByTestId('num2-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
    expect(screen.getByTestId('subtract-button')).toBeInTheDocument();
    expect(screen.getByTestId('multiply-button')).toBeInTheDocument();
    expect(screen.getByTestId('divide-button')).toBeInTheDocument();
  });

  it('should perform addition correctly', async () => {
    await userEvent.type(screen.getByTestId('num1-input'), '5');
    await userEvent.type(screen.getByTestId('num2-input'), '3');
    fireEvent.click(screen.getByTestId('add-button'));
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 8');
  });

  it('should perform subtraction correctly', async () => {
    await userEvent.type(screen.getByTestId('num1-input'), '5');
    await userEvent.type(screen.getByTestId('num2-input'), '3');
    fireEvent.click(screen.getByTestId('subtract-button'));
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 2');
  });

  it('should perform division correctly', async () => {
    await userEvent.type(screen.getByTestId('num1-input'), '4');
    await userEvent.type(screen.getByTestId('num2-input'), '2');
    fireEvent.click(screen.getByTestId('divide-button'));
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 2');
  });

  it('should show error for division by zero', async () => {
    await userEvent.type(screen.getByTestId('num1-input'), '5');
    await userEvent.type(screen.getByTestId('num2-input'), '0');
    fireEvent.click(screen.getByTestId('divide-button'));
    expect(screen.getByTestId('error-message')).toHaveTextContent('Division by zero is not allowed');
  });

  it('should show error for invalid input', async () => {
    await userEvent.type(screen.getByTestId('num1-input'), 'abc');
    await userEvent.type(screen.getByTestId('num2-input'), '3');
    fireEvent.click(screen.getByTestId('add-button'));
    expect(screen.getByTestId('error-message')).toHaveTextContent('Please enter valid numbers');
  });

  it('should show error for invalid operation', async () => {
    await userEvent.type(screen.getByTestId('num1-input'), '2');
    await userEvent.type(screen.getByTestId('num2-input'), '2');
    fireEvent.click(screen.getByTestId('percentage-button'));
    expect(screen.getByTestId('error-message')).toHaveTextContent('Invalid operation');
  });

}); 