<script>
	import Footer from "$lib/Footer.svelte";
	import HeroSection from "$lib/Home/HeroSection.svelte";
	import ServicesSection from "$lib/Home/ServicesSection.svelte";
	import WorldWithUs from "$lib/Home/WorldWithUs.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import { lang, Path } from "$lib/siteUtils";
</script>

<svelte:head>
	<title>Bitzquad | Software and IT Solutions</title>

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
<header>
	<Navbar />
</header>
<main class="main">
	<HeroSection />
	<ServicesSection />
	<WorldWithUs />
</main>
<Footer />
