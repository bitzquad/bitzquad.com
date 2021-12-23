<script lang="ts">
  import { page } from "$app/stores";
  import { lang, Path, PathForLanguage } from "../../siteUtils";
  import Txt from "./SamplePage-Text";
</script>

<div>
  <h1>{Txt.Welcome[lang]}</h1>

  <br />

  <p>This text will be same on all languages</p>

  <p>{Txt.About[lang]}</p>
</div>

<div>
  Change language :

  <a rel="external" href={PathForLanguage($page.path, "en")}>English</a>
  <a rel="external" href={PathForLanguage($page.path, "si")}>Sinhala</a>
  <a rel="external" href={PathForLanguage($page.path, "fr")}>French</a>
</div>

<div>
  <a rel="external" href={Path("/SimplePage")}>Go to SimplePage</a>
</div>
