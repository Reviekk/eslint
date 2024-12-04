import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended, // Configuración recomendada
  {
    rules: {
      "semi": ["error", "always"], // Exige punto y coma
      "no-var": "error", // Prohíbe el uso de `var`
      "quotes": ["error", "single"], // Exige comillas simples
      "indent": ["error", 2], // Indentación de 2 espacios
      "no-unused-vars": "error", // Detecta variables no usadas
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
];