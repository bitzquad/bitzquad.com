<script lang="ts">
  import { lang } from "$lib/siteUtils";

  let Txt = {
    About: {
      en: "This is the minimal sample page",
      fr: "Ceci est la page d'exemple minimale",
      si: "මෙය පළමු උපදාරයේ පිටුවක් පෙන්වා ඇත",
    },
  };
</script>

<svelte:head>
  <title>Contact Us - Bitzquad | Software and IT Solutions</title>
</svelte:head>

<h1 class="text-xl text-center"  >Contact Us</h1>
<p>This text will be same on all languages</p>

<p>{Txt.About[lang]}</p>
