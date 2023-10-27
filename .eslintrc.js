module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            files: ['**/src/**/*.test.{tsx,ts}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ],
    globals: {
        _IS_DEV_: true
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/semi': ['error', 'always'],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'no-unused-vars': 1,
        'import/prefer-default-export': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 0, // maybe I'm wrong here
        '@typescript-eslint/strict-boolean-expressions': 0, // maybe I'm wrong here
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        'react/react-in-jsx-scope': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to']
            }
        ],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        '@typescript-eslint/prefer-includes': 'off',
        'linebreak-style': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
