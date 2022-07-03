<script>
import Head from "$lib/Components/Head.svelte";
import Footer from "$lib/Footer.svelte";
import Navbar from "$lib/Navbar.svelte";

</script>
<Head
	title=" Digital Marketing  - Services Bitzquad"
	description="Digital Marketing - "
	keywords="bitzquad, Digital Marketing, Marketing, Social Media Marketing, bitzquad services"
/>
<Navbar/>
<main class=" text-slate-600 md:bg-[url('/about-bg.webp')] bg-fixed  bg-cover bg-no-repeat bg-center">
    <div class="py-20 bg-slate-50 bg-opacity-80 backdrop-blur-lg flex flex-col justify-center items-center ">
		<h1
			class="text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-center md:text-left  text-gray-800 font-bold"
		>
            Digital Marketing
		</h1>
		<!-- <p class="mt-3 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> -->
	</div>
    <div class="bz-container bg-slate-50">
		<div class="py-8 xl:py-20  w-full flex flex-col items-center justify-center px-5 lg:flex-row gap-10 container max-w-7xl">
			<div class="w-1/2 lg:flex flex-col justify-center items-center">
				<img src="/services-marketing-side.svg" alt="contact-chatting" class="lg:w-3/4 flex justify-start items-start" />
			</div>
			<div class="w-full lg:w-1/2 flex items-center text-center flex-col">
                <div class="py-4 text-lg">
                    <p class="pt-2 text-center lg:text-left">
                        Marketing has always been focused on connecting your business with the right audience at the right time. Despite whether you're just starting off or if your business is already growing, we are ready to take your business to where the audience is already spending time at : the internet.</p>
                </div>
			</div>
		</div>
	</div>
</main>
<Footer/>