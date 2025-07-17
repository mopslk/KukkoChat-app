module.exports = {
  env: {
    browser : true,
    es2021  : true,
    node    : true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion         : 'latest',
    parser              : '@typescript-eslint/parser',
    sourceType          : 'module',
    project             : './tsconfig.json',
    extraFileExtensions : ['.vue'],
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-console'                  : 'off',
    'no-underscore-dangle'        : 'off',
    semi                          : 'off',
    'space-before-function-paren' : 'off',
    'require-await'               : 'off',
    'no-useless-constructor'      : 'off',
    'comma-dangle'                : ['error', 'always-multiline'],
    'key-spacing'                 : ['error', {
      align: {
        beforeColon : true,
        afterColon  : true,
        on          : 'colon',
      },
    }],
    'max-len'                           : ['error', 150],
    'no-shadow'                         : 'off',
    'class-methods-use-this'            : 'off',
    '@typescript-eslint/no-shadow'      : 'off',
    'import/extensions'                 : ['error', 'ignorePackages', { ts: 'never' }],
    'import/no-extraneous-dependencies' : ['error', { devDependencies: true }],
    'vue/multi-word-component-names'    : 'off',
    'no-spaced-func'                    : 'off',
    'no-unused-vars'                    : 'off',
    'vue/script-setup-uses-vars'        : 'error',
    'vue/no-v-html'                     : 'off',
    'vue/require-default-prop'          : 'off',
    'linebreak-style'                   : ['error', 'unix'],
    '@typescript-eslint/no-unused-vars' : [
      'error',
      {
        argsIgnorePattern         : '^_',
        varsIgnorePattern         : '^_',
        caughtErrorsIgnorePattern : '^_',
      },
    ],
    'vue/no-v-for-template-key'    : 'off',
    'import/prefer-default-export' : 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes : true,
        project        : './tsconfig.json',
      },
    },
  },
};
