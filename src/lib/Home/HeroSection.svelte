<script>
	import { lang } from '$lib/siteUtils';
	let heroText = {
		mainTitle: {
			en: 'Solutions Beyond Technology',
			fr: 'Nous sommes une équipe de passionnés qui adore créer.',
			si: 'Solutions Beyond Technology',
		},
		subTitle: {
			en: 'Welcome to Bitzquad',
			fr: "Nous sommes en train de construire l'infrastructure, préparer les outils de développement, et terminer les serveurs pour la prochaine technologie de votre entreprise",
			si: 'Bitzquad වෙත ඔබව සාදරයෙන් පිළිගනිමු.',
		},
		description: {
			en: 'lorem100',
			fr: 'La date de lancement de nos services pour vous',
			si: 'පුවත්',
		},
	};
</script>

<main class="bz-container py-5 px-5 md:px-10 lg:px-20 bg-gray-50">
	<div class="container flex flex-col-reverse md:flex-row">
		<div
			class="col-span-1 py-5 md:p-10 lg:p-20 xl:p-28 flex flex-col justify-center"
		>
			<h1
				class="text-2xl md:text-4xl lg:text-5xl text-center md:text-left xl:text-7xl text-gray-800 font-bold"
			>
				{heroText.mainTitle[lang]}
			</h1>
			<h2
				class="text-lg md:text-xl text-center md:text-left mt-10 text-gray-500"
			>
				{heroText.subTitle[lang]}
			</h2>
			<button
				class="rounded bg-yellow-400 mt-5 py-2 font-bold text-yellow-700 hover:bg-yellow-500 hover:text-white duration-500"
				>Learn More</button
			>
		</div>
		<div class="col-span-1 flex items-center">
			<img class="p-5 md:p-10" src="heroImage.svg" alt="heroImage" />
		</div>
	</div>
</main>
