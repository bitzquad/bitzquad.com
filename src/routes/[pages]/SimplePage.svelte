<script lang="ts" context="module">
  import { lang, Path } from "$lib/siteUtils";

  let Txt = {
    About: {
      en: "This is the minimal sample page",
      fr: "Ceci est la page d'exemple minimale",
      si: "මෙය සරල උදාහරණයකි",
    },
  };
</script>

<h1>Simple page template</h1>
<p>This text will be same on all languages</p>

<p>{Txt.About[lang]}</p>

<div>
  <a href={Path("/SamplePage")}>Go to SamplePage</a>
  <a href={Path("/")}>Go Home</a>
</div>
