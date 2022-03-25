<script lang="ts">
	import { OriginURL, Langs } from "../../../site-settings";
	import { lang, PathForLanguage } from "$lib/siteUtils";
	import { page } from "$app/stores";

	let pathname = $page.url.pathname;

	export const title: string = "Bitzquad";
	export const description: string = "Solutions Beyond Technology";
	export const image: string = OriginURL + "/logo-banner.webp";
	export const icon: string = "/favicon.png";
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={description} />
	<link rel="icon" href={icon} />

	<meta name="author" content="Bitzquad" />

	<!-- Open Graph / Facebook Meta   -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://bitzquad.com/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter Meta tags   -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://bitzquad.com/" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />

	<!-- Social Meta tags   -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={image} />

	<meta name="language" content={lang} />
	<link rel="canonical" href={OriginURL + PathForLanguage(pathname, lang)} />

	{#each Langs as langCode}
		{#if langCode != lang && langCode != "."}
			<link
				rel="alternate"
				href={OriginURL + PathForLanguage(pathname, langCode)}
				hreflang={langCode}
			/>
		{/if}
	{/each}
</svelte:head>
