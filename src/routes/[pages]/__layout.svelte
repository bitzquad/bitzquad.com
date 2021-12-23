<script>
  import { page } from "$app/stores";
  import { DetectLanguage } from "../../siteUtils";

  DetectLanguage($page.params.pages);
</script>

<slot />
