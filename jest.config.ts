import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest',
  },
  rootDir: '.',
  modulePaths: ['<rootDir>'],
};

export default config;
