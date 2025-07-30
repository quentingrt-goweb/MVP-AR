module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Règles spécifiques pour model-viewer
    'vue/no-unused-components': 'warn',
    'vue/valid-template-root': 'off',
    'vue/no-unused-vars': 'warn',
    // Désactiver la règle multi-word pour les composants
    'vue/multi-word-component-names': 'off'
  }
} 