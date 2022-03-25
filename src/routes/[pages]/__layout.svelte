<script>
	import { page } from "$app/stores";
	import { DetectAndSetLanguage } from "$lib/siteUtils";

	DetectAndSetLanguage($page.params.pages);
</script>

<slot />
