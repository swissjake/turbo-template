import { config } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export default {
  ...config,
  rules: {
    ...config.rules,
    "@typescript-eslint/no-var-requires": "off",
    // or if you're using a different rule set:
    "import/no-commonjs": "off",
  },
};
