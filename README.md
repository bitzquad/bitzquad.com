## CI
| main | dev  |
| :--: | :--: |
| [![Node build](https://github.com/bitzquad/bitzquad.com/actions/workflows/node.build.yml/badge.svg)](https://github.com/bitzquad/bitzquad.com/actions/workflows/node.build.yml) | [![Node build](https://github.com/bitzquad/bitzquad.com/actions/workflows/node.build.yml/badge.svg?branch=dev)](https://github.com/bitzquad/bitzquad.com/actions/workflows/node.build.yml) |

# How to setup dev environment

1. Install NPM
2. Install visual studio code ( must )
3. install git and sign in ( either using vscode or GH CLI )

## Setup Project

1. Request collaboration access for https://github.com/bitzquad/bitzquad.com
2. `git clone https://github.com/bitzquad/bitzquad.com-dev`
3. Go inside that folder and open it with VSCode
4. Open the terminal (CTRL + J )
5. Run `npm install`
6. Install visual studio code extentions - Tailwind CSS IntelliSense (by Tailwind Labs) and Svelte for VS Code (by Svelte)
7. Restart visual studio code two times

## Run

- Previewing the site as closer to the production server
  1. Run `npm run static`
  2. Open the output url in browser
  3. You should restart `npm run static` every time you make changes to the code
- Previewing the site with hot reloading
  1. Run `npm run dev`
  2. Open the output url in browser
  3. The server will apply changes automatically and restart every time you make changes to the code
  - You'll see a little flicker on page load due to delayed CSS loading

# How it works

We are using Svelte kit static site generation.
All the pages will be statically generated HTML files which are SEO/Cache friendly.
Please read and understand about Svelte and Svlete kit BEFORE doing any development in this repo.

Limitations :

- Client Side Svelte - OK
- Server Side Generation (SSG) - OK
- Server Side Rendering (SSR) - NOT OK

## What's configured

- Svelte with Svelte kit (Backend for Svelte)
- Svelte kit static Server-Side-Generation (SSG)
- Tailwind CSS
- PostCSS
- SASS and SCSS
- CSS resets and tailwind typography

# Rules

1. First-time load network traffic for any page must be below 60 kB. !important
2. Always use Tailwind classes and @apply attributes for styling.
3. Never import more than 10 lines of CSS copied from other sites/themes.
4. Never use icon packs/external fonts. Use inline SVGs and CSS embeded SVGs instead.
5. Refractor into components when possible.
6. Lighthouse score of every page must be higher than 95.

Breaking these rules could lead into git commit reverts or bans.

## How to contribute

Read the [contributing guide](/Contribute.md)

# Develop

## Static assets

- All the icons must be vector graphics in `svg` format. They should be URL encoded and embeded in CSS

- When possible, images and audio should be encoded in `base64` and used as inline data sources for image elements and audio elements

- Do not store small files (<16 KB) seperately as static files. Encode them and inline inside the markup. This reduces the number of network requests and gains better performance

- Bigger static assets like images and audio should be stored in ./static directory.

  - When programmatically accessing content in `./static` directory, use the file path relative to the `./static` directory. For example, to display `./static/images/cat.webp`, you should use `<img src="/images/cat.webp" />`. Note that the path starts with "/"

- All the raster images must be formated in `.webp` format and lossly compressed to balance size and quality

- Animated GIFs should not be used. Use `.webm` or JS/CSS animations instead.

- All the audio files should be formated in `.mp3` format

## Pages

We are using sveltekit routing system with a few tweaks for multilingual support.

Most of the content in the website should be available in all requested languages. These pages are called `multilingual` pages.

In some special cases, there could be some pages only available in the default language. These pages are called `monolingual` pages. This is not a best practice and these should be added if it's absolutely necessary.

### Routing for `multilingual` pages

All multilingual pages are stored inside `./src/routes/[pages]/`. These files will produce multiple routes for all defined languages.

For example, if we define languages `en`,`si` and `fr`, the page `./src/routes/[pages]/pets/cats.svelte` will produce the following paths.

- example.com/pets/cats
- example.com/en/pets/cats
- example.com/si/pets/cats
- example.com/fr/pets/cats

Here the first path "example.com/pets/cats" is a mirror for the default language path "example.com/en/pets/cats"

Boilplate for a multilingual page :

```svelte
<script lang="ts">
  import { lang, Path } from "$lib/siteUtils";

  let Txt = {
    About: {
      en: "This is the minimal sample page",
      fr: "Ceci est la page d'exemple minimale",
      si: "මෙය සරල උදාහරණයකි",
    },
  };
</script>

<p> This text will be same on all languages </p>

<p> This text will be multilingual : {Txt.About[lang]}</p>

<a href={Path("/")}>Go Home</a>
```

When the page gets bigger, it's better to move `Txt` content to a separate file. Ideally, the file should be named `{PageName}-Txt.ts` and the `Txt` object should be `default` exported from the file.

For example, if we define a page `./src/routes/[pages]/pets/cats.svelte` and the file `./src/routes/[pages]/pets/cats-Txt.ts` looks like this :

```ts
export default {
  About: {
    en: "This is the minimal sample page",
    fr: "Ceci est la page d'exemple minimale",
    si: "මෙය සරල උදාහරණයකි",
  },
};
```

### Linking `multilingual` pages

To link a multilingual page, use the `Path` function.
It will transform path to the correct page for the current language of user. The only parameter is the path relative to the `./src/routes/[pages]/` directory.

Path can be imported as

```js
import { Path } from "$lib/siteUtils";
```

#### Link using anchor tags

```svelte
<a href={Path("/pets/cats")}> Cats </a>
```


#### Link using javascript

```js
window.location.href = Path("/pets/cats");
```

### Routing for `monolingual` pages

Monolingual pages are stored inside `./src/routes/`. Each of these files will produce a single route for the default language.

For example, the page `./src/routes/monsters/basilisk.svelte` will produce the path `example.com/monsters/basilisk`

To link a monolingual page, use the URL path directly.

```svelte
<a href="/monsters/basilisk"> Basilisk </a>
```

**We should avoid creating monolingual pages as much as possible.**

# Deploy

To deploy the website in the live server, open https://github.com/bitzquad-dev/bitzquad.com and click `Fetch Upstream`. Only the developers in charge of the website can do this.
