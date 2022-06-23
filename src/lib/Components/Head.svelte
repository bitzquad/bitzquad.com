<script lang="ts">
	import { OriginURL, Langs } from "../../../site-settings";
	import { lang, PathForLanguage } from "$lib/siteUtils";
	import { page } from "$app/stores";

	let pathname = $page.url.pathname;
	console.log($page.url);
	export let title: string;
	export let description: string;
	export let url: string = $page.url.href.replace('/en','');
	export let keywords: string;
	export let type: string = null;
	export let imagefb: string = OriginURL + "/bz-logo-dark.png";
	export let imagetw: string = OriginURL + "/bz-logo-dark.png";
	export let width: string = null;
	export let height: string = null;
	export let alt: string = null;
</script>

<svelte:head>
	<title>{title}</title>

	<link rel="canonical" href={url} />

	<!-- {/* Google */} -->
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<!-- {/* Facebook */} -->
	<meta property="og:type" content={type ? type : "website"} />
	<meta property="og:site_name" content="Bitzquad" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imagefb ? imagefb : imagetw} />
	<meta property="og:image:width" content={width ? width : "1200"} />
	<meta property="og:image:height" content={height ? height : "630"} />
	<meta property="og:locale" content="en_US" />

	<!-- {/* Twitter */} -->
	<meta property="article:publisher" content="https://twitter.com/Bitzquad" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@Bitzquad" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imagetw ? imagetw : imagefb} />
	<meta name="twitter:image:alt" content={alt} />

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
