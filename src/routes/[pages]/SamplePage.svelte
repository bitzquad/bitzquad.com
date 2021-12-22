<script lang="ts">
  import { page } from "$app/stores";
  import { GetLanguage } from "../../siteUtils";
  import Txt from "./SamplePage-Text";

  let lang = GetLanguage($page.params.pages);
</script>

<h1>{Txt.Welcome[lang]}</h1>

<br />

<p>This text will be same on all languages</p>

<p>{Txt.About[lang]}</p>
