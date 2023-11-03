const attributesOrder = [
  'DEFINITION',
  'LIST_RENDERING',
  'CONDITIONALS',
  'RENDER_MODIFIERS',
  'GLOBAL',
  'UNIQUE',
  'SLOT',
  'TWO_WAY_BINDING',
  'OTHER_DIRECTIVES',
  'ATTR_SHORTHAND_BOOL',
  'ATTR_DYNAMIC',
  'ATTR_STATIC',
  'EVENTS',
  'CONTENT',
]

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'no-console': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'vue/attributes-order': ['error', { order: attributesOrder, alphabetical: true }],
  },
}
