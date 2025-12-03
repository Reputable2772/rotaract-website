import babelParser from "@babel/eslint-parser"
import js from "@eslint/js"
import prettier from "eslint-config-prettier"
import importPlugin from "eslint-plugin-import"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import globals from "globals"

export default [
    {
        files: ["**/*.{js,jsx}"],

        ignores: ["dist/", "node_modules/"],

        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: { presets: ["@babel/preset-react"] },
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true }
            },
            globals: {
                ...globals.browser,
                ...globals.es2021
            }
        },

        settings: {
            react: { version: "detect" },
            "import/resolver": {
                node: { extensions: [".js", ".jsx"] }
            }
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
            import: importPlugin
        },

        rules: {
            // Base recommended
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,

            // Strict React
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/no-unknown-property": "error",
            "react/jsx-no-useless-fragment": "error",
            "react/jsx-no-constructed-context-values": "warn",

            // Strict Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // Strict JavaScript safety
            "no-unused-vars": ["error", { args: "none", ignoreRestSiblings: true }],
            "no-constant-condition": "warn",
            "no-empty": "error",
            "no-shadow": "error",
            "no-var": "error",
            "no-useless-return": "error",
            "no-useless-concat": "error",
            "no-useless-escape": "error",
            "no-useless-catch": "error",
            "no-await-in-loop": "error",

            // Console restrictions (but sensible):
            "no-console": [
                "warn",
                { allow: ["warn", "error"] }
            ],

            // Import rules (strict)
            "import/extensions": [
                "error",
                "ignorePackages",
                { js: "never", jsx: "never" }
            ],

            "import/no-unresolved": [
                "error",
                { ignore: ["\\.js$", "\\.jsx$"] }
            ],

            "import/no-duplicates": "error",
            "import/no-mutable-exports": "error",
            "import/no-named-default": "error",

            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index"
                    ],
                    alphabetize: { order: "asc", caseInsensitive: true },
                    "newlines-between": "always"
                }
            ]
        }
    },

    prettier
]
