import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import jest from 'eslint-plugin-jest';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';

export default defineConfig([
    // --- ignores (единое место) ---
    globalIgnores(['.next/**', 'out/**', 'build/**', 'coverage/**', 'node_modules/**', 'next-env.d.ts']),

    // --- Next recommended ---
    ...nextVitals,
    ...nextTs,

    // --- Jest + Testing Library rules только для тестов ---
    {
        files: ['**/*.{test,spec}.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
        plugins: {
            jest,
            'testing-library': testingLibrary,
            'jest-dom': jestDom,
        },
        languageOptions: {
            globals: {
                ...jest.environments.globals.globals, // describe/it/expect/jest
            },
        },
        rules: {
            // Jest
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/valid-expect': 'error',

            // Testing Library
            'testing-library/no-node-access': 'error',
            'testing-library/no-container': 'error',
            'testing-library/no-debugging-utils': 'warn',

            // jest-dom
            'jest-dom/prefer-checked': 'warn',
            'jest-dom/prefer-enabled-disabled': 'warn',
            'jest-dom/prefer-required': 'warn',
            'jest-dom/prefer-to-have-attribute': 'warn',
        },
    },

    // --- Optional: scripts/configs (Node env) ---
    {
        files: ['**/*.config.{js,cjs,mjs,ts}', 'config/**/*.{js,cjs,mjs,ts}'],
        rules: {
            // часто мешает в конфигах
            'import/no-anonymous-default-export': 'off',
        },
    },
]);
