<script>
import Head from "$lib/Components/Head.svelte";
import Footer from "$lib/Footer.svelte";
import Navbar from "$lib/Navbar.svelte";

</script>
<Head
	title="Information Systems Development - Services Bitzquad"
	description="Information Systems - Upgrade with the best technology that helps your business grow, Down to earth solutions - We will visit your business, observe how it works, speak with your employees and customers to deliver the best hand-tailored software that truly serves you. Flexible systems - Our modular, serverless architecture will seamlessly scale up and down as your business grows. Adding or changing features will be just a phone call away. Military grade security - Your system will be unbreachable and fail-safe with innovative security measures in this ever-changing industry. Your data, business strategies, and ideas will be safe and private."
	keywords="bitzquad, Information Systems, Information Systems Development, informtion system devolper, Down to earth solutions, bitzquad services"
/>
<Navbar/>
<main class=" text-slate-600 md:bg-[url('/about-bg.webp')] bg-fixed  bg-cover bg-no-repeat bg-center">
    <div class="py-20 bg-slate-50 bg-opacity-80 backdrop-blur-lg flex flex-col justify-center items-center ">
		<h1
			class="text-4xl md:text-3xl lg:text-4xl xl:text-6xl  md:text-left text-center  text-gray-800 font-bold"
		>
			Information Systems
		</h1>
		<p class="mt-3 text-center">Upgrade with the best technology that helps your business grow</p>
	</div>
    <div class="bz-container bg-slate-50">
		<div class="py-8 xl:py-20  w-full flex flex-col items-center justify-center px-5 lg:flex-row gap-10 container max-w-7xl">
			<div class="w-1/2 lg:flex flex-col justify-center items-center">
				<img src="/services-web-side.svg" alt="contact-chatting" class="lg:w-3/4 flex justify-start items-start" />
			</div>
			<div class="w-full lg:w-1/2 flex items-center text-center flex-col">
                <div class="py-4">
                    <h2 class="text-xl lg:text-2xl  text-gray-700 font-semibold">Down to earth solutions</h2>
                    <p class="pt-2 text-center">
                        We will visit your business, observe how it works, speak with your employees and customers to deliver the best hand-tailored software that truly serves you.
                    </p>
                </div>
                <div class="py-4">
                    <h2 class="text-xl lg:text-2xl  text-gray-700 font-semibold">Flexible systems</h2>
                    <p class="pt-2 text-center">
                        Our modular, serverless architecture will seamlessly scale up and down as your business grows. Adding or changing features will be just a phone call away.
                    </p>
                </div>    
                <div class="py-4">
                    <h2 class="text-xl lg:text-2xl  text-gray-700 font-semibold">Military grade security</h2>
                    <p class="pt-2 text-center">
                        Your system will be unbreachable and fail-safe with innovative security measures in this ever-changing industry. Your data, business strategies, and ideas will be safe and private.
                    </p>
                </div>   
			</div>
		</div>
	</div>
</main>
<Footer/>