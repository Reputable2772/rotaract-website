// eslint.config.js
import js from "@eslint/js"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import importPlugin from "eslint-plugin-import"
import prettier from "eslint-config-prettier"
import babelParser from "@babel/eslint-parser"
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
            // Provide browser + ES globals so `document`, `window`, etc. are known
            globals: {
                ...globals.browser,
                ...globals.es2021
            }
        },

        settings: {
            react: { version: "detect" },
            "import/resolver": {
                // use node resolver, works well with Vite-style extensionless imports
                node: { extensions: [".js", ".jsx"] }
            }
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
            import: importPlugin
        },

        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,

            // Modern React rules
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",

            // Allow extensionless imports (Vite/ESM style)
            "import/extensions": [
                "error",
                "ignorePackages",
                { js: "never", jsx: "never" }
            ],

            "import/no-unresolved": [
                "error",
                { ignore: ["\\.js$", "\\.jsx$"] }
            ],

            // Import sorting
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
                    "newlines-between": "always"
                }
            ]
        }
    },

    // Prettier at the end to disable format-related ESLint rules
    prettier
]
