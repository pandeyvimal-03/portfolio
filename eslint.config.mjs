import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-sync-scripts": "off",  // Disable sync script warning
      "react/no-unescaped-entities": "off", // Disable unescaped entities warning
      "prefer-const": "off",                // Disable prefer const rule
      "@typescript-eslint/no-explicit-any": "off", // Disable explicit any rule
      "@typescript-eslint/no-unused-vars": "off", // Disable unused vars warning
    },
  },
];

export default eslintConfig;
