// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
    },
    ignorePatterns: ['node_modules/', 'tests/**/node_modules/', '.eslintrc.js'],
};
