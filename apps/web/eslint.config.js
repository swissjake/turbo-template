import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config} */
export default {
  ...nextJsConfig,
  rules: {
    ...nextJsConfig.rules,
    "@typescript-eslint/no-var-requires": "off",
    // or if you're using a different rule set:
    "import/no-commonjs": "off",
  },
};
