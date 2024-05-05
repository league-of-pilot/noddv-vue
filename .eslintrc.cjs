/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:import/typescript',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@app/**',
            group: 'internal', // Using internal to keep @app within the same top-level grouping
            position: 'after'
          },
          {
            pattern: '@comps/**',
            group: 'internal', // Adding @core after @app in the internal group
            position: 'after'
          },
          {
            pattern: '@views/**',
            group: 'internal', // Adding @core after @app in the internal group
            position: 'after'
          },
          {
            pattern: '@feat/**',
            group: 'internal', // Adding @core after @app in the internal group
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['./app', '*/../app'],
            message: 'App imports must be absolute.'
          },
          {
            group: ['./components', '*/../components'],
            message: 'components imports must be absolute.'
          },
          {
            group: ['./views', '*/../views'],
            message: 'views imports must be absolute.'
          },
          {
            group: ['./feature', '*/../feature'],
            message: 'feature imports must be absolute.'
          }
        ]
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
