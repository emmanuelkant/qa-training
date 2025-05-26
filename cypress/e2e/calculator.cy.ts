describe('Calculator E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should perform a complete calculation flow', () => {
    // Test addition
    cy.get('[data-testid="num1-input"]').type('10');
    cy.get('[data-testid="num2-input"]').type('5');
    cy.get('[data-testid="add-button"]').click();
    cy.get('[data-testid="result"]').should('contain', 'Result: 15');

    // Test subtraction
    cy.get('[data-testid="num1-input"]').clear().type('20');
    cy.get('[data-testid="num2-input"]').clear().type('8');
    cy.get('[data-testid="subtract-button"]').click();
    cy.get('[data-testid="result"]').should('contain', 'Result: 12');

    // Test multiplication
    cy.get('[data-testid="num1-input"]').clear().type('6');
    cy.get('[data-testid="num2-input"]').clear().type('7');
    cy.get('[data-testid="multiply-button"]').click();
    cy.get('[data-testid="result"]').should('contain', 'Result: 42');

    // Test division
    cy.get('[data-testid="num1-input"]').clear().type('100');
    cy.get('[data-testid="num2-input"]').clear().type('4');
    cy.get('[data-testid="divide-button"]').click();
    cy.get('[data-testid="result"]').should('contain', 'Result: 25');

    // Test percentage calculation
    cy.get('[data-testid="num1-input"]').clear().type('200');
    cy.get('[data-testid="num2-input"]').clear().type('25');
    cy.get('[data-testid="percentage-button"]').click();
    cy.get('[data-testid="result"]').should('contain', 'Result: 50');
  });

  it('should handle invalid inputs', () => {
    cy.get('[data-testid="num1-input"]').type('abc');
    cy.get('[data-testid="num2-input"]').type('3');
    cy.get('[data-testid="add-button"]').click();
    cy.get('[data-testid="error-message"]').should('contain', 'Please enter valid numbers');
  });

  it('should handle division by zero', () => {
    cy.get('[data-testid="num1-input"]').type('10');
    cy.get('[data-testid="num2-input"]').type('0');
    cy.get('[data-testid="divide-button"]').click();
    cy.get('[data-testid="error-message"]').should('contain', 'Division by zero is not allowed');
  });
}); 