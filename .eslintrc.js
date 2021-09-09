module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
      'airbnb',
      "plugin:@typescript-eslint/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
    rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
        "linebreak-style": 0,
        "import/prefer-default-export": "off",
        "react/react-in-jsx-scope": "off",
        "no-param-reassign": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
                "tsx": "never"
            }
        ],
        "react/prop-types": 0
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
};
