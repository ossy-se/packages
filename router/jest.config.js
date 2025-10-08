/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    roots: ['./src'],
    moduleDirectories: ["./node_modules"],
    moduleNameMapper: {
      '^@/(.*)$': '$1',
    },
  }