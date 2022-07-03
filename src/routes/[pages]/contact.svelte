<script>
	import ContactForm from "$lib/Components/ContactForm.svelte";
	import Footer from "$lib/Footer.svelte";
	import Text from "$lib/Text/Contact";

	import Navbar from "$lib/Navbar.svelte";
	import { lang } from "$lib/siteUtils";

	import GetTextData from "$lib/Text/Contact";
	import Head from "$lib/Components/Head.svelte";
	let Txt = GetTextData();
</script>

<Head
	title="Contact Us"
	description="Welcome to Bitzquad We are a team of thinkers, engineers, designers, and marketers who represent different cultures around the globe, working together to build better solutions for a better world. We work alongside our customers. When we start a project, you become a member of our bitzquad family. You have all the freedom to discuss and clarify every aspect of 'our' project."
	keywords="bitzquad, contact bitzquad, reach bitzquad, chat with bitzquad,contact, contact us"
/>

<Navbar />
<main class="bz-container text-slate-600">
	<div class="pt-20 pb-32 flex flex-col justify-center items-center">
		<h1
			class="text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-center md:text-left  text-gray-800 font-bold"
		>
			{Txt.contactUs}
		</h1>
		<p class="mt-3 lg:w-1/2 text-center">{Txt.contactUsDescription}</p>
	</div>

	<div class="bg-slate-100 w-full bz-container">
		<div class="contact-section">
			<div class="contact-section-image">
				<img src="/contact-chatting.svg" alt="contact-chatting" />
			</div>
			<div class="contact-section-content">
				<h2>{Txt.liveChatTitle}</h2>
				<p>
					{Txt.liveChatDes}
				</p>
				<button>{Txt.liveChatBtn}</button>
			</div>
		</div>
	</div>

	<div class=" w-full bz-container">
		<div class="contact-section">
			<div class="contact-section-image">
				<img src="/contact-email.svg" alt="contact-email" />
			</div>
			<div class="contact-section-content">
				<h2>{Txt.emailUsTitle}</h2>
				<p>
					{Txt.emailUsDes}
				</p>
				<button>{Txt.emailUsBtn}</button>
			</div>
		</div>
	</div>

	<ContactForm />
</main>
<Footer />
