<script>
	let menuActive = false;
	import { lang } from '$lib/siteUtils';
	let PrimaryMenu = {
		Services: {
			en: 'Services',
			fr: 'Nous sommes une équipe de passionnés qui adore créer.',
			si: 'සේවා',
		},
		Contact: {
			en: 'Contact',
			fr: "Nous sommes en train de construire l'infrastructure, préparer les outils de développement, et terminer les serveurs pour la prochaine technologie de votre entreprise",
			si: 'අමතන්න',
		},
		Blog: {
			en: 'News',
			fr: 'La date de lancement de nos services pour vous',
			si: 'පුවත්',
		},
		About: {
			en: 'About',
			fr: 'La date de lancement de nos services pour vous',
			si: 'අප ගැන',
		},
	};
</script>

<nav
	class="bz-container py-4 px-5 md:px-10 lg:px-20 bg-gray-100 text-gray-600  font-bold"
>
	<div class="container max-w-7xl grid grid-cols-2">
		<div
			class="flex justify-start cursor-pointer"
			on:click={() => {
				location.href = '/';
			}}
		>
			<!-- logo  -->
			<img
				src="/circleYellow-Logo.svg"
				alt="Bitzquad Logo"
				class="h-8 sm:hidden"
				width="29"
				height="32"
			/>
			<img
				src="/textYellow-Logo-White-Text.svg"
				alt="Bitzquad Logo"
				class="h-8 hidden sm:inline-block"
				width="147"
				height="32"
			/>
		</div>
		<div class="justify-end hidden md:flex">
			<!--  menu  -->
			<a href="#" class="mx-2 px-2 py-1 duration-500 hover:bg-gray-200 rounded"
				>{PrimaryMenu.Services[lang]}</a
			>
			<a href="#" class="mx-2 px-2 py-1 duration-500 hover:bg-gray-200 rounded"
				>{PrimaryMenu.Contact[lang]}</a
			>
			<a href="#" class="mx-2  rounded px-2 py-1 bz-button duration-500 "
				>{PrimaryMenu.Blog[lang]}</a
			>
			<a
				href="#"
				class="flex items-cener mx-2 px-2 py-1 hover:bg-gray-200 rounded duration-500"
				>{PrimaryMenu.About[lang]}</a
			>
		</div>

		<div class="md:hidden flex items-center justify-end">
			<button
				on:click={() => (menuActive = !menuActive)}
				aria-label="Mobile Hamburger Menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
		{#if menuActive == true}
			<div class="pt-5 md:hidden w-full col-span-2">
				<a href="#" class="block py-2 px-2 w-full  hover:bg-gray-200"
					>{PrimaryMenu.Services[lang]}</a
				>
				<a href="#" class="block py-2 px-2  hover:bg-gray-200"
					>{PrimaryMenu.Contact[lang]}</a
				>
				<a href="#" class="block py-2 px-2  hover:bg-gray-200"
					>{PrimaryMenu.Blog[lang]}</a
				>
				<a href="#" class="block py-2 px-2  hover:bg-gray-200"
					>{PrimaryMenu.About[lang]}</a
				>
			</div>
		{/if}
	</div>
</nav>
