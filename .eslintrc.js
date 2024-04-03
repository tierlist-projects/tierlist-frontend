module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // eslint의 포매팅을 prettier로 사용.
    'prettier', // eslint-config-prettier prettier와 중복된 eslint 규칙 제거
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // 경고표시, 파일 확장자를 .ts나 .tsx 모두 허용함
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
  },
}
