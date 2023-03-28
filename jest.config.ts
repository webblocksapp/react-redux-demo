import { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(css|less)$': '<rootDir>/test-transforms/styleMock.js', //CSS ignore
  },
  testEnvironment: 'jsdom',
};

export default config;
