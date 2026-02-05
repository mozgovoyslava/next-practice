/** @type {import("prettier").Config} */
module.exports = {
    // База
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    quoteProps: 'as-needed',

    // Строки/переносы
    endOfLine: 'lf',

    // JSX/TSX
    jsxSingleQuote: false,

    // Объекты/JS
    proseWrap: 'preserve',

    // Для стабильности в проектах с разными ОС
    embeddedLanguageFormatting: 'auto',

    // Overrides по типам файлов
    overrides: [
        // Next/TS: обычно удобнее, чтобы импорты/типизация выглядели аккуратно,
        // но Prettier сам не сортирует импорты — это делает ESLint.
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.mjs', '*.cjs'],
            options: {
                parser: 'typescript',
            },
        },

        // JSON/JSONC (например, tsconfig.json, eslint configs, VSCode settings)
        {
            files: ['*.json', '*.jsonc'],
            options: {
                tabWidth: 4, // общепринято для JSON
                singleQuote: false,
            },
        },

        // YAML
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },

        // Markdown/MDX: обычно лучше 2 пробела и более узкая ширина
        {
            files: ['*.md', '*.mdx'],
            options: {
                tabWidth: 2,
                printWidth: 100,
                proseWrap: 'always',
            },
        },

        // Стили (если используете CSS/SCSS)
        {
            files: ['*.css', '*.scss'],
            options: {
                tabWidth: 4,
                singleQuote: true,
            },
        },

        // HTML
        {
            files: ['*.html'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
