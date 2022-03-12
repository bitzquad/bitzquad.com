<script>
	import HeroSection from '$lib/Home/HeroSection.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { lang, Path } from '$lib/siteUtils';

	let Txt = {
		Slogun: {
			en: 'Solutions beyond Software Engineering',
			fr: 'Nous sommes une équipe de passionnés qui adore créer.',
			si: 'Api thamai hodatama karanne.',
		},
		GearingUp: {
			en: 'We are currently building infrastructure, preparing dev tools, and winding up servers for the next technological advancement of your business',
			fr: "Nous sommes en train de construire l'infrastructure, préparer les outils de développement, et terminer les serveurs pour la prochaine technologie de votre entreprise",
			si: 'Thaama hadana gaman',
		},
		LaunchingSoon: {
			en: 'The date, we are launching our services for you',
			fr: 'La date de lancement de nos services pour vous',
			si: 'Me davase aewith balanna',
		},
	};
</script>

<svelte:head>
	<title>Bitzquad | Software and IT Solutions</title>
	<meta charset="utf-8" />
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta name="title" content="Bitzquad | Software and IT Solutions" />
	<meta
		name="description"
		content="Bitzquad creates next generation future-proof digital solutions for you."
	/>
	<meta
		name="keywords"
		content="bitzquad, bitsquad, software, solutions, website"
	/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="author" content="Bitzquad" />

	<!-- Open Graph / Facebook Meta   -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://bitzquad.com/" />
	<meta property="og:title" content="Bitzquad | Software and IT Solutions" />
	<meta
		property="og:description"
		content="Bitzquad creates next generation future-proof digital solutions for you."
	/>
	<meta
		property="og:image"
		content="https://cdn.discordapp.com/attachments/920056089670729728/920056217764761681/logo.png"
	/>

	<!-- Twitter Meta tags   -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://bitzquad.com/" />
	<meta
		property="twitter:title"
		content="Bitzquad | Software and IT Solutions"
	/>
	<meta
		property="twitter:description"
		content="Bitzquad creates next generation future-proof digital solutions for you."
	/>
	<meta
		property="twitter:image"
		content="https://cdn.discordapp.com/attachments/920056089670729728/920056217764761681/logo.png"
	/>
</svelte:head>

<main class="main">
	<Navbar />
	<HeroSection />
</main>
