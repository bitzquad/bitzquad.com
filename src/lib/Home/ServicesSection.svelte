<script>
	import ServiceCard from '$lib/Components/ServiceCard.svelte';
	import { lang } from '$lib/siteUtils';

	let services = {
		title: {
			en: 'Services',
			fr: 'Services',
			si: 'අපගේ සේවාවන්',
		},
		web: {
			title: {
				en: 'Web Development',
				fr: 'Desarrollo Web',
				si: 'වෙබ් අඩවි නිර්මාණය',
			},
			description: {
				en: 'We develop web applications using the latest technologies and frameworks.',
				fr: 'Desarrollamos aplicaciones web utilizando las últimas tecnologías y frameworks.',
				si: 'We develop web applications using the latest technologies and frameworks.',
			},
			image: 'web.svg',
			link: 'web',
		},
		mobile: {
			title: {
				en: 'Mobile Apps',
				fr: 'Desarrollo Móvil',
				si: 'දුරකථන මෘදුකාංග ',
			},
			description: {
				en: 'We develop mobile applications using the latest technologies and frameworks.',
				fr: 'Desarrollamos aplicaciones móviles utilizando las últimas tecnologías y frameworks.',
				si: 'We develop mobile applications using the latest technologies and frameworks.',
			},
			image: 'mobile.png',
			link: 'mobile',
		},
		blockchain: {
			title: {
				en: 'Blockchain Solutions',
				fr: 'Blockchain',
				si: 'Blockchain',
			},
			description: {
				en: 'We develop blockchain applications using the latest technologies and frameworks.',
				fr: 'Desarrollamos aplicaciones blockchain utilizando las últimas tecnologías y frameworks.',
				si: 'We develop blockchain applications using the latest technologies and frameworks.',
			},
			image: 'ethereum.png',
			link: 'blockchain',
		},
		brand: {
			title: {
				en: 'Brand Designing',
				fr: 'Desarrollo de Marca',
				si: 'වෙළඳ නාම නිර්මාණය',
			},
			description: {
				en: 'We develop brand strategies and identity using the latest technologies and frameworks.',
				fr: 'Desarrollamos estrategias de marca y identidad utilizando las últimas tecnologías y frameworks.',
				si: 'We develop brand strategies and identity using the latest technologies and frameworks.',
			},
			image: 'brand.png',
			link: 'brand',
		},
		social: {
			title: {
				en: 'Social Media Marketing',
				fr: 'Redes Sociales',
				si: 'සමාජ මාධ්ය අලෙවිකරණය',
			},
			description: {
				en: 'We develop social media strategies and identity using the latest technologies and frameworks.',
				fr: 'Desarrollamos estrategias de redes sociales y identidad utilizando las últimas tecnologías y frameworks.',
				si: 'We develop social media strategies and identity using the latest technologies and frameworks.',
			},
			image: 'social.png',
			link: 'social',
		},
		ecommerce: {
			title: {
				en: 'E-commerce',
				fr: 'E-commerce',
				si: 'ඊ වාණිජ්‍යය',
			},
			description: {
				en: 'We develop e-commerce applications using the latest technologies and frameworks.',
				fr: 'Desarrollamos aplicaciones e-commerce utilizando las últimas tecnologías y frameworks.',
				si: 'We develop e-commerce applications using the latest technologies and frameworks.',
			},
			image: 'ecommerce.png',
			link: 'ecommerce',
		},
	};
</script>

<!-- services section -->
<section
	id="services-section"
	class="services-section bz-container px-5 md:px-10 lg:px-20 bg-gray-50"
>
	<div class="container max-w-7xl flex flex-col items-center mb-32">
		<h2 class="text-5xl mt-12 md:mt-32 font-bold text-gray-600">
			{services.title[lang]}
		</h2>
		<div class="flex justify-center md:justify-start w-full mt-10 md:mt-24">
			<div class="flex md:w-6/12 flex-col md:pr-5">
				<ServiceCard
					title={services.web.title[lang]}
					description={services.web.description[lang]}
					image={services.web.image}
					link={services.web.link}
				/>
				<ServiceCard
					title={services.mobile.title[lang]}
					description={services.mobile.description[lang]}
					image={services.mobile.image}
					link={services.mobile.link}
				/>
				<ServiceCard
					title={services.blockchain.title[lang]}
					description={services.blockchain.description[lang]}
					image={services.blockchain.image}
					link={services.blockchain.link}
				/>
				<ServiceCard
					title={services.brand.title[lang]}
					description={services.brand.description[lang]}
					image={services.brand.image}
					link={services.brand.link}
				/>
				<ServiceCard
					title={services.social.title[lang]}
					description={services.social.description[lang]}
					image={services.social.image}
					link={services.social.link}
				/>
				<ServiceCard
					title={services.ecommerce.title[lang]}
					description={services.ecommerce.description[lang]}
					image={services.ecommerce.image}
					link={services.ecommerce.link}
				/>
			</div>
			<div class="hidden w-6/12 md:flex items-center justify-center">
				<div
					class="image-holder w-full rounded-xl h-full p-2 bg-cover bg-center"
					style="background-image: url('services.svg');"
				/>
			</div>
		</div>
	</div>
</section>
<!-- end of servies section -->
