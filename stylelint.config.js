/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'block-no-empty'            : true,
    'no-descending-specificity' : null,
    'function-no-unknown'       : null,
    'media-query-no-invalid'    : null,
    indentation                 : [2, { baseIndentLevel: 0 }],
  },
};
