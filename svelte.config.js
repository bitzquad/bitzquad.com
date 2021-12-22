import adapter from "@sveltejs/adapter-static";
// import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

import fs from "fs";
import { Langs } from "./site-settings.js";

let SSGRoutes = null;

function GenSSGRoutes() {

  if (SSGRoutes) {
    return;
  }

  SSGRoutes = ["*"];

  let SSGLangs = Langs;


  function langSSG(dirpath, udirpath) {
    fs.readdirSync(dirpath).forEach(file => {

      if (file.endsWith(".svelte")) {

        // Remove extension
        let upath = file.substring(0, file.length - 7);

        SSGLangs.forEach(lang => {
          let filepath = `/${lang}/${udirpath}${upath}`;
          SSGRoutes.push(filepath);
          console.log("SSG path : ", filepath);

        });

      } else if (!file.includes(".")) {
        // Treat as directory
        langSSG(dirpath + file + "/", udirpath + file + "/");
      }

    });
  }

  langSSG("src/routes/[pages]/", "");
  console.log("SSG Routes END ");

  return SSGRoutes;

}

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
      entries: GenSSGRoutes()
    },

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
