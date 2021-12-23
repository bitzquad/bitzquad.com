<script lang="ts">
  import { page } from "$app/stores";
  import { DetectLanguage, Path, PathForLanguage } from "../../siteUtils";
  import Txt from "./SamplePage-Text";

  let lang = DetectLanguage($page.params.pages);
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
  All links should be external and wrapped in Path( )
  <a rel="external" href={Path("/")}>Go home</a>
</div>
