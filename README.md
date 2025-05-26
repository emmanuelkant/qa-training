# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# QA Training Platform

This is a minimalistic web application designed as a training platform for Quality Assurance (QA) professionals. It demonstrates various testing methodologies including unit tests, integration tests, and end-to-end (E2E) tests using Cypress.

## Features

- Simple calculator application with basic mathematical operations
- Unit tests for pure functions
- Integration tests for React components
- E2E tests using Cypress
- Code coverage reporting with Istanbul

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Running Tests

### Unit and Integration Tests

To run unit and integration tests:
```bash
npm test
```

To run tests with coverage:
```bash
npm run test:coverage
```

### E2E Tests with Cypress

To open Cypress Test Runner:
```bash
npm run cypress:open
```

To run Cypress tests in headless mode:
```bash
npm run cypress:run
```

## Understanding Test Coverage

The project uses Istanbul for code coverage analysis. After running tests with coverage, you can find the coverage report in the `coverage` directory.

### Coverage Report Structure

- **Statements**: Percentage of program statements executed
- **Branches**: Percentage of control structures (if/else, switch) executed
- **Functions**: Percentage of functions called
- **Lines**: Percentage of program lines executed

### Interpreting Coverage

- **High Coverage (>90%)**: Most of the code is tested
- **Medium Coverage (70-90%)**: Good test coverage but room for improvement
- **Low Coverage (<70%)**: Significant portions of code are not tested

### Coverage Report Location

- HTML Report: `coverage/lcov-report/index.html`
- Raw Data: `coverage/lcov.info`

## Project Structure

```
├── src/
│   ├── components/        # React components
│   ├── utils/            # Utility functions
│   └── tests/            # Test files
├── cypress/
│   ├── e2e/             # Cypress E2E tests
│   └── support/         # Cypress support files
└── coverage/            # Coverage reports
```

## Adding New Tests

### Unit Tests
Create new test files with the `.test.ts` extension in the same directory as the file being tested.

### Integration Tests
Create new test files with the `.test.tsx` extension in the same directory as the component being tested.

### E2E Tests
Create new test files with the `.cy.ts` extension in the `cypress/e2e` directory.

## Best Practices

1. Write tests before implementing features (TDD)
2. Keep tests focused and isolated
3. Use meaningful test descriptions
4. Maintain high test coverage
5. Review coverage reports regularly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
