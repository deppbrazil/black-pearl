module.exports = {
    bail: true,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
      'packages/**/lib/**/*.{js,jsx}',
      'packages/**/lib/*.{js,jsx}',
      '!**/*-test.{js,jsx}',
    ],
    coverageReporters: ['json', 'lcov'],
    projects: ['<rootDir>/packages/*/jest.config.js'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
      '@blackpearl/(.*)': '<rootDir>/packages/$1/lib',
    },
  };