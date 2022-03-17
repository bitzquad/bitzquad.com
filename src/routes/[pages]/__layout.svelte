<script>
	import { page } from "$app/stores";
	import { DetectLanguage } from "$lib/siteUtils";

	DetectLanguage($page.params.pages);
</script>

<slot />
