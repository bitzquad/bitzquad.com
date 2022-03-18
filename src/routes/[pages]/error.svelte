<script context="module">
	import {
		Path,
		GetLanguageFromPath,
		lang,
		PathForLanguage,
	} from "$lib/siteUtils";

	import { browser } from "$app/env";
	import Footer from "$lib/Footer.svelte";
	import Navbar from "$lib/Navbar.svelte";

	import Txt from "./ErrorText";

	export async function load({ fetch }) {
		if (browser) {
			if (
				window.location.search &&
				window.location.search.startsWith("?")
			) {
				let origlang = GetLanguageFromPath(window.location.pathname);
				let queryLang = GetLanguageFromPath(
					window.location.search.slice(1)
				);

				if (queryLang && queryLang !== origlang) {
					console.log("redirecting");
					window.location.replace(
						PathForLanguage(
							"/Error" + window.location.search,
							queryLang
						)
					);
				}
			}
		} else {
			// Runs on server
		}
		return {};
	}
</script>

<script>
	export let statusCode = 404;
</script>

<Navbar />
<main>
	<div
		class="bz-container py-4 px-5 md:px-10 lg:px-20 2xl:py-20 bg-gray-100 text-gray-500"
	>
		<div
			class="container max-w-7xl flex items-center mt-12 justify-center flex-col"
		>
			<h1 class="text-4xl lg:text-3xl 2xl:text-4xl  font-bold">
				{statusCode === 404 ? Txt.Msg404[lang] : Txt.MsgOther[lang]}
			</h1>
			<p class="md:w-1/2 lg:text-sm text-center mt-5">
				{statusCode === 404
					? Txt.Description404[lang]
					: Txt.DescriptionOther[lang]}
			</p>
			<div
				class="md:relative w-full md:w-1/2 2xl:w-3/4 mt-10 mb-5 flex flex-col-reverse"
			>
				<a
					href={Path("/")}
					class="md:absolute my-10 md:mt-0 w-full md:w-auto md:top-0 md:left-1/2 flex justify-center  md:-translate-x-1/2 bg-yellow-400 text-yellow-700 p-3 px-4 rounded hover:text-gray-600 transition-all duration-300 shadow-lg hover:bg-yellow-300 hover:shadow-xl"
					>Go To Home</a
				>
				<img
					src={statusCode === 404 ? "/404-error.svg" : "/bug-fix.svg"}
					alt="404-error"
					class="w-full"
				/>
			</div>
		</div>
	</div>
</main>
<Footer />
