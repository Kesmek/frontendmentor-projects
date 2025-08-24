export default {
  extends: [
    "stylelint-config-standard", // Use a standard set of rules as a base
    "stylelint-config-html",
  ],
  plugins: [
    "stylelint-selector-bem-pattern", // Add the BEM plugin
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["layer"],
      },
    ],
    // Add this line to disable the default kebab-case rule.
    "selector-class-pattern": null,
    // Configure the BEM pattern for class selectors
    "plugin/selector-bem-pattern": {
      preset: "bem",
      implicitComponents: true,
    },
    "import-notation": "string",
  },
};
