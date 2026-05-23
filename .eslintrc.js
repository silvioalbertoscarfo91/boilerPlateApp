module.exports = {
  root: true,
  extends: '@react-native-community',
  ignorePatterns: ['app/styles/'],
  overrides: [
    {
      files: ['**/*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: { presets: ['module:@react-native/babel-preset'] },
      },
    },
  ],
};
