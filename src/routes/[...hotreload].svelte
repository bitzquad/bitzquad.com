<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { Langs, DefaultLang } from "../siteSettings";

  // This code will only run in development mode with vite hot reloading
  // In production, this code will not be included

  let Redirect = true;

  let paths = $page.path.split("/");
  if (paths && paths.length > 0) {
    let lang = paths[1];
    if (Langs.includes(lang)) {
      Redirect = false;
    }
  }

  if (Redirect) {
    onMount(() => {
      document.location.replace("/" + DefaultLang + location.pathname);
    });
  } else {
  }
</script>

{#if !Redirect}
  <div>
    <p>Path you are looking for is not found.</p>
    <p>
      This error message will not be visible in the production website. It will
      show a HTTP 404 error instead
    </p>
  </div>
{/if}
