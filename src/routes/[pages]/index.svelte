<script>
	import Head from "$lib/Components/Head.svelte";
	import Footer from "$lib/Footer.svelte";
	import HeroSection from "$lib/Home/HeroSection.svelte";
	import ServicesSection from "$lib/Home/ServicesSection.svelte";
	import WorldWithUs from "$lib/Home/WorldWithUs.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import { lang, Path } from "$lib/siteUtils";
</script>

<Head
	title="Bitzquad - Solutions Beyond Technology"
	description="Welcome to Bitzquad We are a team of thinkers, engineers, designers, and marketers who represent different cultures around the globe, working together to build better solutions for a better world. Information Systems, Upgrade with the best technology that helps your business grow, Software Development, Powerful, yet intuitive web, desktop and mobile apps, Blockchain Solutions, Prepare for the next technological revolution of decentralizing, Brand Design, Build a solid brand that one day, everyone will know, Digital Marketing, Let us bring your presence to your future customers, E-commerce, We develop e-commerce applications using the latest technologies"
	keywords="bitzquad, Information Systems, Software Development, Powerful, yet intuitive web, desktop and mobile apps, Blockchain Solutions, Prepare for the next technological revolution of decentralizing, Brand Design, Build a solid brand that one day, everyone will know, Digital Marketing, Let us bring your presence to your future customers, E-commerce, We develop e-commerce applications using the latest technologies, bitzquad services"
/>

<header>
	<Navbar />
</header>
<main class="main">
	<HeroSection />
	<ServicesSection />
	<WorldWithUs />
</main>
<Footer />
