<script>
	import ServiceCard from "$lib/Components/ServiceCard.svelte";

	import GetTextData from "$lib/Text/ServicesSection";
	let services = GetTextData();
</script>

<!-- services section -->
<section
	id="services-section"
	class="services-section bz-container px-5 md:px-10 lg:px-20 bg-gray-50"
>
	<div class="container max-w-7xl flex flex-col items-center mb-24">
		<h2 class="text-3xl md:text-5xl mt-12 md:mt-32 font-bold text-gray-600">
			{services.title}
		</h2>
		<div class="flex justify-center md:justify-start w-full mt-10 md:mt-24">
			<div class="flex md:w-6/12 flex-col md:pr-5">
				<ServiceCard
					title={services.sysTitle}
					description={services.sysDescription}
					image="/web.svg"
					link="web"
					width="53"
				/>
				<ServiceCard
					title={services.appTitle}
					description={services.appDescription}
					image="/mobile.png"
					link="mobile"
					width="27"
				/>
				<ServiceCard
					title={services.blockchainTitle}
					description={services.blockchainDescription}
					image="/ethereum.png"
					link="blockchain"
					width="41"
				/>
				<ServiceCard
					title={services.brandTitle}
					description={services.brandDescription}
					image="/brand.png"
					link="brand"
					width="43"
				/>
				<ServiceCard
					title={services.brandTitle}
					description={services.brandDescription}
					image="/social.png"
					link="social"
					width="37"
				/>
				<ServiceCard
					title={services.ecommerceTitle}
					description={services.ecommerceDescription}
					image="/ecommerce.png"
					link="ecommerce"
					width="44"
				/>
			</div>
			<div class="hidden w-6/12 md:flex items-center justify-center">
				<div
					class="image-holder w-full rounded-xl h-full p-2 bg-cover bg-center"
					style="background-image: url('/services.svg');"
				/>
			</div>
		</div>
	</div>
</section>
<!-- end of servies section -->
