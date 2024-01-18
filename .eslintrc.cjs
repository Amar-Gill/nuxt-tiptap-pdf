module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    // Global
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    '@typescript-eslint/no-non-null-assertion': 1,
  },
};
