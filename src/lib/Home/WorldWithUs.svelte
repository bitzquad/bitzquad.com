<script>
	import { lang } from '$lib/siteUtils';

	let worldWithUs = {
		title: {
			en: 'The world with us',
			fr: 'Services',
			si: 'ලොව පුරා ව්‍යාප්ත අපගේ කණ්ඩායම',
		},
		description: {
			en: 'Our increasing team of passionate people who love to work together to make the world a better place.',
			fr: 'Nous sommes une équipe de passionnés qui adorent travailler ensemble pour rendre le monde meilleur.',
			si: 'අප දිනෙන් දින වර්ධනය වන, ලෝකය වඩා හොඳ තැනක් කිරීමට එකට වැඩ කිරීමට කැමති උද්‍යෝගිමත් කණ්ඩායමකි.',
		},
	};
</script>

<!-- services section -->
<section
	id="services-section"
	class="services-section bz-container px-5 md:px-10 lg:px-20 bg-gray-50"
>
	<div class="container max-w-7xl flex flex-col items-center mb-24">
		<h2
			class="text-3xl md:text-5xl mt-12 md:mt-32 font-bold text-center text-gray-600"
		>
			{worldWithUs.title[lang]}
		</h2>
		<p class="text-md text-gray-600 mt-5 max-w-xl text-center">
			{worldWithUs.description[lang]}
		</p>

		<img
			class="w-full mt-10 md:mt-24"
			width="1280"
			height="547.719"
			src="world.svg"
			alt="World"
		/>
	</div>
</section>
<!-- end of servies section -->
