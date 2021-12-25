<script lang="ts">
    import { page } from "$app/stores";
    import { DetectLanguage } from "$lib/siteUtils";
  
    let lang = DetectLanguage($page.params.pages);
  
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
  
  <h1>Contact Us</h1>
  <p>This text will be same on all languages</p>
  
  <p>{Txt.About[lang]}</p>
  