module.exports = {
    extends: 'airbnb',
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
      'react/jsx-filename-extension': 0,
      'react/prop-types': 0,
      'linebreak-style': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'max-len': 0,
      'import/prefer-default-export': 0,
    },
    globals: {
      document: 1,
    },
    parser: 'babel-eslint',
    env: {
      browser: 1,
    },
  };
  