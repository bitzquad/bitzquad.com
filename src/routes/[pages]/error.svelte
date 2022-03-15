<script>
  import { Path, GetLanguageFromPath, lang } from "$lib/siteUtils";

  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";

  let Txt = {
    Msg: {
      en: "404 not found",
      fr: "404 not found in French",
      si: "404 not found in Sinhala",
    },
  };
</script>

<svelte:head>
  <title>{Txt.Msg[lang]}</title>

  <meta name="title" content="Bitzquad | Software and IT Solutions" />
  <meta
    name="description"
    content="Bitzquad creates next generation future-proof digital solutions for you."
  />
  <meta
    name="keywords"
    content="bitzquad, bitsquad, software, solutions, website"
  />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
  <meta name="author" content="Bitzquad" />

  <!-- Open Graph / Facebook Meta   -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://bitzquad.com/" />
  <meta property="og:title" content="Bitzquad | Software and IT Solutions" />
  <meta
    property="og:description"
    content="Bitzquad creates next generation future-proof digital solutions for you."
  />
  <meta
    property="og:image"
    content="https://cdn.discordapp.com/attachments/920056089670729728/920056217764761681/logo.png"
  />

  <!-- Twitter Meta tags   -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://bitzquad.com/" />
  <meta
    property="twitter:title"
    content="Bitzquad | Software and IT Solutions"
  />
  <meta
    property="twitter:description"
    content="Bitzquad creates next generation future-proof digital solutions for you."
  />
  <meta
    property="twitter:image"
    content="https://cdn.discordapp.com/attachments/920056089670729728/920056217764761681/logo.png"
  />
</svelte:head>

<div>
  <h1>{Txt.Msg[lang]}</h1>
</div>
