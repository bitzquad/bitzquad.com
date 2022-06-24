<script context="module">
	import {
		Path,
		DetectAndSetLanguageFromPath,
		lang,
		PathForLanguage,
	} from "$lib/siteUtils";

	import { browser } from "$app/env";
	import Footer from "$lib/Footer.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import Head from "$lib/Components/Head.svelte";

	import GetTextData from "$lib/Text/Error";
	let Txt = GetTextData();

	export async function load({ fetch }) {
		if (browser) {
			if (
				window.location.search &&
				window.location.search.startsWith("?")
			) {
				let origlang = DetectAndSetLanguageFromPath(window.location.pathname);
				let queryLang = DetectAndSetLanguageFromPath(
					window.location.search.slice(1)
				);

				if (queryLang && queryLang !== origlang) {
					console.log("redirecting");
					window.location.replace(
						PathForLanguage(
							"/error" + window.location.search,
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

<Head
	title="Opps!"
	description="Welcome to Bitzquad We are a team of thinkers, engineers, designers, and marketers who represent different cultures around the globe, working together to build better solutions for a better world. Information Systems, Upgrade with the best technology that helps your business grow, Software Development, Powerful, yet intuitive web, desktop and mobile apps, Blockchain Solutions, Prepare for the next technological revolution of decentralizing, Brand Design, Build a solid brand that one day, everyone will know, Digital Marketing, Let us bring your presence to your future customers, E-commerce, We develop e-commerce applications using the latest technologies"
	keywords="bitzquad, Information Systems, Software Development, Powerful, yet intuitive web, desktop and mobile apps, Blockchain Solutions, Prepare for the next technological revolution of decentralizing, Brand Design, Build a solid brand that one day, everyone will know, Digital Marketing, Let us bring your presence to your future customers, E-commerce, We develop e-commerce applications using the latest technologies, bitzquad services"
/>

<Navbar />
<main>
	<div
		class="bz-container py-4 px-5 md:px-10 lg:px-20 2xl:py-20 bg-gray-100 text-gray-500"
	>
		<div
			class="container max-w-7xl flex items-center mt-12 justify-center flex-col"
		>
			<h1 class="text-4xl lg:text-3xl 2xl:text-4xl  font-bold">
				{statusCode === 404 ? Txt.msg404 : Txt.msgUnknown}
			</h1>
			<p class="md:w-1/2 lg:text-sm text-center mt-5">
				{statusCode === 404 ? Txt.decription404 : Txt.decriptionUnknown}
			</p>
			<div
				class="md:relative w-full md:w-1/2 2xl:w-3/4 mt-10 mb-5 flex flex-col-reverse"
			>
				<a
					href={Path("/")}
					class="md:absolute my-10 md:mt-0 w-full md:w-auto md:top-0 md:left-1/2 flex justify-center  md:-translate-x-1/2 bg-violet-400 text-violet-700 p-3 px-4 rounded hover:text-gray-600 transition-all duration-300 shadow-lg hover:bg-violet-300 hover:shadow-xl"
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
