<script>
	import { Path, lang } from "$lib/siteUtils";

	import Language from "./Components/Language.svelte";
	import { setContext } from "svelte";
	let langModelVisible = false;
	const setLang = () => {
		langModelVisible = !langModelVisible;
	};
	setContext("setLang", setLang);

	import Txt from "./Footer_Text";
</script>

<!-- dark:bg-slate-900 -->
<footer class="bz-container pt-20 pb-7 px-5 md:px-10 lg:px-20">
	<div
		class="container grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:gap-20  max-w-7xl lg:bg-[url('/footer-map.svg')]  bg-contain bg-no-repeat bg-right"
	>
		<div
			class="flex flex-col md:col-span-3 md:mb-10 xl:col-span-1 items-center lg:items-start"
		>
			<!-- Logo -->
			<img
				src="/textYellow-Logo-White-Text.svg"
				width="147"
				height="32"
				alt="Bitzquad Logo"
				class="w-1/2 lg:h-8 lg:w-auto "
			/>
			<span
				class="mx-10 lg:mx-0 lg:w-full lg:text-lg py-3 text-center text-gray-500 lg:text-left"
				>{Txt.LogoSubtitle[lang]}</span
			>
			<div
				class="w-full flex items-center lg:items-start flex-col lg:flex-col-reverse"
			>
				<!-- NewsLetter -->
				<form
					class="mt-8 flex flex-col items-center w-full gap-y-3 lg:items-start"
				>
					<span class="text-xl font-bold text-gray-600"
						>{Txt.SubscribeToNewsletter[lang]}</span
					>
					<div class="w-full gap-y-3 flex flex-col lg:gap-3 ">
						<input
							type="email"
							name="email"
							id="input-email"
							class="h-10 w-full border rounded border-gray-400 p-3 lg:w-full"
							placeholder="Enter Your Email..."
						/>

						<button
							type="submit"
							class="h-10 px-2 w-full border rounded border-none  bz-button font-bold tracking-wide"
							>{Txt.Subscribe[lang]}</button
						>
					</div>
				</form>
			</div>
		</div>

		<!-- <div
			class="text-gray-400 lg:w-8/12 flex flex-col lg:flex-row lg:justify-end lg:bg-[url('footer-map.svg')]  bg-contain bg-no-repeat bg-top"
		> -->
		<!-- Links - Explore -->
		<div class="mt-20 lg:mt-0   flex flex-col items-center ">
			<span class="mb-4 text-xl text-gray-700 font-bold">Explore</span>
			<div
				class="flex items-center text-lg flex-col gap-y-1.5 font-bold text-gray-500"
			>
				<a href={Path("/")}> {Txt.Home[lang]} </a>
				<a href={Path("/about")}> {Txt.AboutUs[lang]}</a>
				<a href={Path("/team")}>{Txt.OurTeam[lang]}</a>
				<a href={Path("/contact")}>{Txt.ContactUs[lang]}</a>
			</div>
		</div>
		<!-- Links - Resources -->
		<div class="mt-20 lg:mt-0  flex flex-col items-center  ">
			<span class="mb-4 text-xl text-gray-700 font-bold"
				>{Txt.Resources[lang]}</span
			>
			<div
				class="flex items-center text-lg flex-col gap-y-1.5 font-bold text-gray-500"
			>
				<a href={Path("/news")}>{Txt.NewFeed[lang]}</a>

				<a href={Path("/school")}>BitZchool</a>
				<!-- Social Links - Resources -->
				<div class="mt-3.5 flex gap-4 ">
					<a href={Path("/social/behance")}
						><img
							src="/social-behance.svg"
							height="31"
							width="31"
							alt="social-behance"
							class=""
						/></a
					>
					<a href={Path("/social/github")}
						><img
							src="/social-github.svg"
							height="31"
							width="31"
							alt="social-github"
							class=""
						/></a
					>
				</div>
			</div>
		</div>
		<!-- Links - Contact -->
		<div class="mt-20 lg:mt-0  mb-20 flex flex-col items-center ">
			<span class="mb-4 text-xl text-gray-700 font-bold"
				>{Txt.ReachUs[lang]}</span
			>
			<div
				class="flex items-center text-lg flex-col gap-y-1.5 font-bold text-gray-500"
			>
				<a href={Path("/location")}>Colombo, Sri Lanka</a>
				<a href="tel:+94778813384">+94 778813384</a>
				<a href="mailto:contact@bitzquad.com">contact@bitzquad.com</a>
			</div>
		</div>
	</div>
	<!-- </div> -->
	<div class="bz-container w-full max-w-7xl border-t-2 border-gray-500 pt-5">
		<div
			class="container flex flex-col-reverse md:flex-row items-center justify-between"
		>
			<div class="text-gray-500 font-normal mt-3 md:mt-0">
				© Bitzquad. 2022
			</div>
			<!-- Social Links -->
			<div class="flex gap-4 md:items-center">
				<div class="social flex gap-4">
					<a href={Path("/social/facebook")}
						><img
							src="/social-facebook.svg"
							height="31"
							width="31"
							alt="social-facebook"
							class=""
						/></a
					>
					<a href={Path("/social/linkedin")}
						><img
							src="/social-linkedin.svg"
							height="31"
							width="31"
							alt="social-linkedin"
							class=""
						/></a
					>
					<a href={Path("/social/instagram")}
						><img
							src="/social-instagram.svg"
							height="31"
							width="31"
							alt="social-instagram"
							class=""
						/></a
					>
					<a href={Path("/social/twitter")}
						><img
							src="/social-twitter.svg"
							height="31"
							width="31"
							alt="social-twitter"
							class=""
						/></a
					>
					<a href={Path("/social/youtube")}
						><img
							src="/social-youtube.svg"
							height="31"
							width="31"
							alt="social-youtube"
							class=""
						/></a
					>
				</div>
				{#if langModelVisible == true}
					<Language />
				{/if}
				<div
					class="flex gap-1 rounded-xl p-2 hover:bg-gray-200 cursor-pointer"
					on:click={setLang}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="rgb(107 114 128 / var(--tw-border-opacity))"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
						/>
					</svg>
					<span class="text-gray-500 font-semibold"
						>{#if lang == "en"}English{:else if lang == "si"}සිංහල{/if}</span
					>
				</div>
			</div>
		</div>
	</div>
</footer>
