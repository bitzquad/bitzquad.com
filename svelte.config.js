import adapter from "@sveltejs/adapter-static";
// import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

import { GetStaticRoutes } from "./panthera-build.js"




/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,

      scss: {
        prependData: '@import "src/variables.scss";',
      },
    }),
  ],

  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    prerender: {
      entries: GetStaticRoutes()
    },

    files: {
      hooks: 'src/hooks',
    },

    router: false,

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "src/variables.scss";',
          },
        },
      },
    },
  },
};

export default config;
