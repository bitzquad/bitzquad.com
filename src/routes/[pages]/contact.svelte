<script>
	import ContactForm from "$lib/Components/ContactForm.svelte";
	import Footer from "$lib/Footer.svelte";

	import Navbar from "$lib/Navbar.svelte";
	import { lang } from "$lib/siteUtils";
	import Txt from "./ContactText";
</script>

<Navbar />
<main class="bz-container text-slate-600">
	<div class="pt-20 pb-32 flex flex-col justify-center items-center">
		<h1
			class="text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-center md:text-left  text-gray-800 font-bold"
		>
			{Txt.ContactUs[lang]}
		</h1>
		<p class="mt-3">{Txt.ContactUsDescription[lang]}</p>
	</div>

	<div class="bg-slate-100 w-full bz-container">
		<div class="contact-section">
			<div class="contact-section-image">
				<img src="/contact-chatting.svg" alt="contact-chatting" />
			</div>
			<div class="contact-section-content">
				<h2>{Txt.LiveChat[lang]}</h2>
				<p>
					{Txt.LiveChatDescription[lang]}
				</p>
				<button>{Txt.LiveChat[lang]}</button>
			</div>
		</div>
	</div>

	<div class=" w-full bz-container">
		<div class="contact-section">
			<div class="contact-section-image">
				<img src="/contact-email.svg" alt="contact-email" />
			</div>
			<div class="contact-section-content">
				<h2>{Txt.EmailUs[lang]}</h2>
				<p>
					{Txt.EmailUsDescription[lang]}
				</p>
				<button>{Txt.EmailUs[lang]}</button>
			</div>
		</div>
	</div>

	<ContactForm />
</main>
<Footer />
