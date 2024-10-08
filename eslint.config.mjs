import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      pluginJs,
      pluginReact,
      pluginPrettier,
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
    },
  },
];
