import type { StorybookConfig } from '@storybook/nextjs-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '../../src');
const PUBLIC_DIR = path.resolve(__dirname, '../../public');

const config: StorybookConfig = {
    // пути относительно config/storybook
    stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: ['@chromatic-com/storybook', '@storybook/addon-a11y', '@storybook/addon-docs'],

    framework: {
        name: '@storybook/nextjs-vite',
        options: {},
    },

    staticDirs: [PUBLIC_DIR],

    async viteFinal(viteConfig) {
        // alias '@' -> <root>/src
        viteConfig.resolve = viteConfig.resolve ?? {};

        viteConfig.resolve.alias = {
            ...(viteConfig.resolve.alias ?? {}),
            '@': SRC_DIR,
        };

        // Sass loadPaths -> чтобы работало: @use 'shared/styles'
        viteConfig.css = viteConfig.css ?? {};
        viteConfig.css.preprocessorOptions = viteConfig.css.preprocessorOptions ?? {};
        viteConfig.css.preprocessorOptions.scss = viteConfig.css.preprocessorOptions.scss ?? {};

        const scss = viteConfig.css.preprocessorOptions.scss;
        scss.loadPaths = [...(scss.loadPaths ?? []), SRC_DIR];

        return viteConfig;
    },
};

export default config;
