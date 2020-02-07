module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this":"off", // desabilita a obrigação de usar o this nas classes
    "no-param-reassign": "off",  // permite que receba parametro e faça alteração no parametro
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next"}], // Ignora caso a variavel next seja declarada e não usada
  },
};
