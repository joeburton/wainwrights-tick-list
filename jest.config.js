module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/components/$1',
    '^@/pages(.*)$': '<rootDir>/pages/$1',
    '^.+\\.module\\.(css)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/cypress/'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/cssTransform.js',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
