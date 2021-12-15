## How to setup dev environment

1. Install NPM
2. Install visual studio code ( must )
3. install git and sign in ( either using vscode or GH CLI )

## Setup Project

1. Request collaboration access for https://github.com/bitzquad/bitzquad.com-dev
2. `git clone https://github.com/bitzquad/bitzquad.com-dev`
3. Go inside that folder and open it with VSCode
4. Open the terminal (CTRL + J )
5. Run `npm install`
6. Install visual studio code extentions - Tailwind CSS IntelliSense (by Tailwind Labs) and Svelte for VS Code (by Svelte)
7. Restart visual studio code two times

## Run

1. Run `npm run dev`
2. Open the output url in browser. It will hot reload.

## How it works

We are using Svelte kit static site generation.

Example : Creating file `src/routes/posts/mypost.svelte` will generate `bitzquad.com/post/mypost`

They'll be statically generated HTML files which are SEO/Cache friendly.
Please read and understand about Svelte and Svlete kit BEFORE doing any development in this repo.

Limitations : Client side svelte - OK ; Build-time static pages - OK ; Server Side Rendering - NOT OK

## What's configured
- Svelte with Svelte kit (Backend for Svelte)
- Svelte kit static only pre-rendering
- Tailwind CSS
- PostCSS
- SASS and SCSS
- CSS resets and tailwind typography

## Rules

1. First-time load network traffic for any page must be below 60 kB. !important
2. Always use Tailwind classes and @apply attributes for styling.
3. Never import more than 10 lines of CSS copied from other sites/themes.
4. Never use icon packs/external fonts. Use inline SVGs and CSS embeded SVGs instead.
5. Refractor into components when possible.
6. All images must be compressed into lossy JPGs. Use SVGs when possible.
7. Lighthouse score of every page must be higher than 90.

Breaking these rules could lead into git commit reverts or bans 😮‍💨

## Contribute

We are following 'Scrum' git version control concepts for all our projects. Everyone must sync `main` and `dev` branches but never commit directly. For every feature, one should create a branch from `dev` and then pull commits from that branch to `dev`. Use more sub branches like `dev` for complex features.

1. Make sure your branch is `dev` and sync with remote.

![C1](https://user-images.githubusercontent.com/35098511/146059407-5dc7f192-83c3-489a-91b3-d274dd491d8e.png)

2. Create a new branch.

![C2](https://user-images.githubusercontent.com/35098511/146059479-b6b12c30-db97-4cd1-a710-129022dbcde9.png)

3. Use your name or the topic you are developing as the name. Example : `Rick` or `Chatbox`

![C3](https://user-images.githubusercontent.com/35098511/146059503-e8bc5f2e-faac-4c03-a5d7-d38f070317d7.png)

4. Code! Develop and test the app.

When you completed an atomic feature, git commit it. Always use a descriptive and formal commit message.

![C4](https://user-images.githubusercontent.com/35098511/146059505-5ff3bb81-0964-46a2-8a08-15304ce5affd.png)

5. Publish your branch.

![C5](https://user-images.githubusercontent.com/35098511/146059514-c7594fc7-8677-451f-b03a-04d3760b11ef.png)

Repeatly commit into the same branch and sync until your feature is stable.

(Optional) When published, go to github.com and switch into your branch. If you see an orange color dot like this, it means that some of the checks aren't finished yet. If you have time, you can wait ~7 minutes until this checks are complete and a green color tick appears here. Click the tick and you'll get a tempory URL from cloudflare that hosts a live version of the site, with your code changes. This is completely optional.

![C5-Checks](https://user-images.githubusercontent.com/35098511/146059508-d0204f85-596a-45ae-a230-40dc3b535234.png)

6. When commits are ready for publishing, Create a Pull Request.

![C6](https://user-images.githubusercontent.com/35098511/146059518-3777028a-eb9b-4f01-b136-1f8ff0920ce4.png)

7. Make sure you are pulling 'from' your branch and pulling 'into' `dev` or immediate upstream branch. Write a pull request title and description.

![C7](https://user-images.githubusercontent.com/35098511/146059521-b73e6872-0be8-4d1c-8b03-0cc48a3e09d1.png)

8. Wait until all checks are completed. Select `Squash and Merge` for small features with a few commits. Select `Create Merge Commit` for complex features with many commits.

![C8-ok](https://user-images.githubusercontent.com/35098511/146059525-5197b1cb-df57-4a65-b0d9-d2b3ab8efbc1.png)

9. When checks are complete you'll get a 'Preview URL' from cloudflare. Open it and check if everything is working. Then, click `Merge Pull Request`. Otherwise, `Close Pull Request`.

![C9](https://user-images.githubusercontent.com/35098511/146059735-acb690ec-a57b-4b9a-8114-d701dc0e78ad.png)

10. Create a Merge commit if asked.

![C10](https://user-images.githubusercontent.com/35098511/146059744-2b81910f-64c1-48b6-9c03-5e1f540a796e.png)

11. After checking out the pull request, `Delete branch`. Do this even if you are planning to do more development on the same topic.

![C11](https://user-images.githubusercontent.com/35098511/146059752-dd162cf6-4cd2-4bb7-9e60-259dcc24c975.png)

12. Delete both remote and local branches.

![C12](https://user-images.githubusercontent.com/35098511/146059757-8c59c336-6608-496e-acc5-383e3ca071a1.png)

13. Switch to branch `main` and sync. Then switch to branch `dev` and sync. Start over from step 1 for your next feature.

![C13](https://user-images.githubusercontent.com/35098511/146059761-af3f9677-0c3c-45c0-9f98-86ac4b044628.png)

14. When the feature is stable, you can pull commits into `main`. Doing so, you should delete `dev` branch and recreate it. Inform other developers before doing this.

### Alternative case :

In step 8, if you face some 'unresolved conflicts' in the branch, like this :

![D8-conflicts](https://user-images.githubusercontent.com/35098511/146059762-0360376a-0cd7-4d07-a6f9-663ac71471ad.png)

You should open the browser, go to https://github.com/bitzquad/bitzquad.com and open the pull request page. Click [Resolve Conflicts]

![D9](https://user-images.githubusercontent.com/35098511/146059770-383a3ba9-00d5-4229-ae73-62a871bc4f40.png)

Resolve the code conflicts very carefully. If you have any doubts, do not resolve the conflicts. Contact the developer who wrote the conflicting commits for support.

![D10](https://user-images.githubusercontent.com/35098511/146059931-7a9387d8-0a90-4e57-bbb8-d6bd45c37303.png)

