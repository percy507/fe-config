module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier', // Make sure this is always the last element in the array.
  ],
  plugins: ['stylelint-order'],
  rules: {
    'block-no-empty': null,
    'no-empty-source': null,
    'color-function-notation': ['legacy'],
    'selector-id-pattern': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
