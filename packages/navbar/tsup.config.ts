import { defineConfig, Options } from "tsup";

import { commonjs } from "@hyrious/esbuild-plugin-commonjs";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  external: ["react"],
  plugins: [commonjs()],
  ...options,
}));
