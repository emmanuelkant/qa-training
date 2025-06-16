import '@testing-library/jest-dom';

// Polyfill for TextEncoder
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder; 