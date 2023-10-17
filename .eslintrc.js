module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        indent: [2, 4],
        "react/jsx-indent": [2, 4],
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/semi": ["error", "always"],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", "tsx"] }],
        "no-unused-vars": 1,
        // "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/prefer-nullish-coalescing": 0, // maybe I'm wrong here
        "@typescript-eslint/strict-boolean-expressions": 0, // maybe I'm wrong here
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        // "@typescript-eslint/prefer-nullish-coalescing": "off",
        "react/react-in-jsx-scope": "off",
    }
}
