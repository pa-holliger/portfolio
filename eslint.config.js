import antfu from "@antfu/eslint-config"

export default antfu({
  stylistic: {
    quotes: "double",
  },
  vue: true,
  typescript: true,
}, {
  files: ["**/*.vue"],
  rules: {
    "vue/block-order": ["error", {
      order: ["template", "script", "style"],
    }],
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    "vue/html-closing-bracket-newline": ["error", {
      multiline: "never",
      singleline: "never",
    }],
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      registeredComponentsOnly: false,
    }],
    "vue/attributes-order": ["error", {
      order: [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "SLOT",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT",
      ],
    }],
  },
})
