module.exports = {
  // Specify the test environment
  testEnvironment: 'jsdom',

  // Specify the test files
  testMatch: ['**/__tests__/**/*.test.ts?(x)', '**/?(*.)+(test).ts?(x)'],

  // Specify the transform configuration
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },

  // Specify the module name mapper
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },

  // Specify the module file extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Specify the setup files
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};