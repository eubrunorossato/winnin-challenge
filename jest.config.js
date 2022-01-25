module.exports = {
  verbose: true,
  testEnvironment: 'node',
  roots: ['<rootDir>./src/__test__'],
  testPathIgnorePatterns: ['<rootDir>/(build|config|node_modules)/'],
  transformIgnorePatterns: ['<rootDir>/(build|config|node_modules)/'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
};
