<script>
	import { lang } from "$lib/siteUtils";
	import heroText from "./HeroSectionText";
</script>

<!-- hero section  -->
<section
	id="hero-section"
	class="hero-section bz-container py-5 px-5 lg:py-20 md:px-10 lg:px-20 bg-gray-50"
>
	<div
		class="container max-w-7xl flex md:items-center flex-col-reverse md:flex-row"
	>
		<div
			class="col-span-1 md:w-7/12 py-5 md:py-10 lg:py-20 xl:py-28 md:pr-10 flex flex-col justify-center"
		>
			<h1
				class="text-2xl md:text-4xl lg:text-5xl text-center md:text-left xl:text-7xl text-gray-800 font-bold"
			>
				{heroText.mainTitle[lang]}
			</h1>
			<h2
				class="text-lg md:text-xl text-center font-bold md:text-left mt-10 text-gray-600"
			>
				{heroText.subTitle[lang]}
			</h2>
			<p
				class="text-md text-center md:text-left md:text-start text-gray-600 mt-3"
			>
				{heroText.description[lang]}
			</p>
			<button
				class="bz-button rounded  mt-5 md:max-w-sm py-2 font-bold duration-500"
				>{heroText.learn_more[lang]}</button
			>
		</div>
		<div class="col-span-1 md:w-5/12 flex items-center justify-center">
			<img
				class="p-5 md:p-2"
				height="235"
				width="585"
				src="/heroImage.svg"
				alt="heroImage"
			/>
		</div>
	</div>
</section>
<!-- end of hero section -->
