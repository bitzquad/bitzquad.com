<script lang="ts" context="module">
    import Techstack from "$lib/Techstack.svelte";
  import { page } from "$app/stores";
  import { lang, Path, PathForLanguage } from "$lib/siteUtils";
  import Txt from "./SamplePage-Text";
</script>

<Techstack></Techstack>

<br />
<br />

<div>
  <h1>{Txt.Welcome[lang]}</h1>

  <br />

  <p>This text will be same on all languages</p>

  <p>{Txt.About[lang]}</p>
</div>

<div>
  Change language :

  <a href={PathForLanguage($page.url.pathname, "en")}>English</a>
  <a href={PathForLanguage($page.url.pathname, "si")}>Sinhala</a>
  <a href={PathForLanguage($page.url.pathname, "fr")}>French</a>
</div>

<div>
  <a href={Path("/SimplePage")}>Go to SimplePage</a>
</div>
