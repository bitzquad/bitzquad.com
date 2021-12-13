### How to setup dev environment

1. Install NPM
2. Install visual studio code ( must )
3. install git and sign in ( either using vscode or GH CLI )

### Setup Project

1. Request collaboration access for https://github.com/bitzquad/bitzquad.com
2. `git clone https://github.com/bitzquad/bitzquad.com`
3. Go inside that folder and open it with VSCode
4. Open the terminal (CTRL + J )
5. Run `npm install`

### Run

1. Run `npm run dev`
2. Open the output url in browser. It will hot reload.

### Develop

1. Check if your git branch is `main` and sync


### How it works

We are using Next.JS static site generation.
Example : Create file `/pages/post/bitz.js` and it will generate `bitzquad.com/post/bitz`

They'll be statically generated HTML files which are SEO/Cache friendly.
Please read and understand about ReactJS + NextJS + NextJS static sites BEFORE doing any development in this repo.
Limitations : Client side React - OK ; Build-time static pages - OK ; Server prerendering - NOT OK

### Rules

1. First-time load network traffic for any page must be below 120 kB. !important
2. Always use Tailwind classes and @apply attributes for styling.
3. Never import more than 10 lines of CSS copied from other sites/themes.
4. Never use icon packs/external fonts. Use inline SVGs and CSS embeded SVGs instead.
5. Refractor into components when possible.
6. All images must be compressed into lossy JPGs. Use SVGs when possible.

Breaking these rules could lead into git commit reverts or bans 😮‍💨
