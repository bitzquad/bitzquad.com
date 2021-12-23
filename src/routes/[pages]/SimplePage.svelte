<script lang="ts">
  import { page } from "$app/stores";
  import { DetectLanguage } from "../../siteUtils";

  let lang = DetectLanguage($page.params.pages);

  let Txt = {
    About: {
      en: "This is the minimal sample page",
      fr: "Ceci est la page d'exemple minimale",
      si: "මෙය පළමු උපදාරයේ පිටුවක් පෙන්වා ඇත",
    },
  };
</script>

<h1>Simple page template</h1>
<p>This text will be same on all languages</p>

<p>{Txt.About[lang]}</p>
