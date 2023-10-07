import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/Carousel.svelte",
  output: {
    dir: "build",
    format: "es",
  },
  plugins: [
    svelte({
      include: "src/Carousel.svelte",
      emitCss: true,
      compilerOptions: {
        customElement: true,
      },
    }),
    postcss(),
    resolve({
      browser: true,
      exportConditions: ["svelte"],
      extensions: [".svelte"],
    }),
  ],
};
