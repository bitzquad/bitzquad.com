<script>
import Head from "$lib/Components/Head.svelte";
import Footer from "$lib/Footer.svelte";
import Navbar from "$lib/Navbar.svelte";

</script>

<Head title="Brand Design Bitzquad" />
<Navbar/>
<main class=" text-slate-600 md:bg-[url('/about-bg.webp')] bg-fixed  bg-cover bg-no-repeat bg-center">
    <div class="py-20 bg-slate-50 bg-opacity-80 backdrop-blur-lg flex flex-col justify-center items-center ">
		<h1
			class="text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-center md:text-left  text-gray-800 font-bold"
		>
            Brand Design
		</h1>
		<p class="mt-3 text-center">Build a solid brand that one day, everyone will know</p>
	</div>
    <div class="bz-container bg-slate-50">
		<div class="py-8 xl:py-20  w-full flex flex-col items-center justify-center px-5 lg:flex-row gap-10 container max-w-7xl">
			<div class="w-1/2 lg:flex flex-col justify-center items-center">
				<img src="/services-brand-side.svg" alt="contact-chatting" class="lg:w-3/4 flex justify-start items-start" />
			</div>
			<div class="w-full lg:w-1/2 flex items-center text-center flex-col">
                <div class="py-4 text-lg">
                    <p class="pt-2 text-center lg:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita, quas sunt vitae ipsam non impedit quia consectetur delectus? Illo dolorem culpa mollitia excepturi enim vel eius voluptate temporibus dolore?
                    </p>
                </div>
			</div>
		</div>
	</div>
</main>
<Footer/>