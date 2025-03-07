import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
