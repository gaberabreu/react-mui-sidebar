/// <reference types="vitest/config" />

import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      exclude: [
        "src/setupTests.ts",
        "**/*.test.tsx",
        "**/*.stories.tsx",
        "src/components/SideBarContext.ts",
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MUI",
          "@mui/icons-material": "MUIIcons",
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reporter: ["lcov", "html"],
      include: ["src"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    },
  },
});
