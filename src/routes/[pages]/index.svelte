<script>
	import Head from "$lib/Components/Head.svelte";
	import Footer from "$lib/Footer.svelte";
	import HeroSection from "$lib/Home/HeroSection.svelte";
	import ServicesSection from "$lib/Home/ServicesSection.svelte";
	import WorldWithUs from "$lib/Home/WorldWithUs.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import { lang, Path } from "$lib/siteUtils";
</script>

<Head />

<header>
	<Navbar />
</header>
<main class="main">
	<HeroSection />
	<ServicesSection />
	<WorldWithUs />
</main>
<Footer />
