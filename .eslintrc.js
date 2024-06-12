module.exports = {
  root: true,
  extends: ['@react-native', 'eslint-config-prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'off',
  },
};
