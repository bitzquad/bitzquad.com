
<script>
import Footer from "$lib/Footer.svelte";
import Navbar from "$lib/Navbar.svelte";
import Head from "$lib/Components/Head.svelte";

</script>

<Head
	title="About Us"
	description="Who We are? We are a team of thinkers, engineers, designers, and marketers who represent different cultures around the globe, working together to build better solutions for future world. Let's Collaborate With Us. We are passionate to build new digital products for a better future by collaborating with new clients. If you have an idea to create a new digital product for your business needs or any other questions, inquire us. Our team/specialists are always available to help you."
	keywords="bitzquad, about bitzquad, bitzquad information, about, about us"
/>

<Navbar/>
<main class="text-slate-600 bg-slate-200 md:bg-[url('/about-bg.webp')] bg-fixed  bg-cover bg-no-repeat bg-center">
	<div class="bz-container w-screen bg-slate-200 md:pt-20 bg-opacity-50 backdrop-blur-lg">
		<div class="container max-w-7xl bg-slate-200 2xl:my-20 md:my-10">
		<div class="w-full py-10 md:py-20 flex flex-col md:flex-row justify-center items-center">
			<div class="w-11/12 md:w-5/12 relative flex flex-col md:flex-row md:justify-center md:items-center">
				<div class="md:w-3/4 relative bg-slate-200 group"><img src="/about-team.svg" alt="about-team" class=" w-full h-full p-3 z-20">
				</div>
				
			</div>
			<div class=" w-full md:w-7/12 px-10 pt-10 text-center">
				<h2 class="about-title text-3xl font-bold pb-5">Who We are?</h2>
				<p>We are a team of thinkers, engineers, designers, and marketers who represent different cultures around the globe, working together to build better solutions for future world.</p>
			</div>
		</div>
	</div>
	</div>
	<!-- <div class="bz-container bg-black bg-opacity-60"> 
		<div class=" hidden md:block w-full  container max-w-7xl  pt-28 pb-20">
		<blockquote class="mx-20 text-center text-slate-300 text-3xl italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ac nibh eu ornare. Nulla turpis ipsum, viverra non tellus ut, consequat gravida arcu. Maecenas pulvinar cursus nisl. Etiam ut est eu mi feugiat ultrices at nec sapien.</blockquote>
		<div class="text-center mx-auto text-2xl mt-3 text-gray-400 font-bold">Edward simon</div>
		
	</div>
	</div> -->
	
	
	<div class="bz-container bg-slate-200 py-20">
		<div class="container max-w-7xl bg-slate-200 ">
			<h2 class="about-title text-3xl font-bold pt-5 text-center">We use Modern Tools & Technologies.</h2>
			<div class="w-full  py-20 flex flex-col md:flex-row justify-center">
				<div class=" md:w-5/12 relative flex flex-row justify-center items-center">
					<div class="w-3/4 relative bg-slate-200 group"><img src="/about-technology.svg" alt="about-team" class=" w-full h-full p-3 z-20">
					<div class="absolute top-0 w-full h-full overflow-y-auto  bg-slate-400 bg-opacity-50 -z-10 translate-y-10 translate-x-10 group-hover:translate-x-10 group-hover:translate-y-10 transition-all duration-1000"></div></div>
					
				</div>
				<div class="md:w-7/12 px-10 pt-10">
					
					<p class="text-center md:text-left mb-5 md:mb-0">Hence technologies are updating day by day, We always try to keep up with the latest technologies & tools to make our products better, reliable, faster, and secure. By doing so we can provide the best solutions and products for our valued customers as they wish. Here are some of the latest technologies & tools we use to build our products recognized by professionals in the industry:</p>
					<div class="md:w-1/2 py-3">
						<span class="about-tech-tag">AWS</span>
						<span class="about-tech-tag">GraphQL</span>
						<span class="about-tech-tag">Mongo DB</span>
						<span class="about-tech-tag">Git</span>
						<span class="about-tech-tag">Docker</span>
						<span class="about-tech-tag">Kubernetes</span>
						<button class="about-tech-tag-see-all">See All</button>
					</div>
					
				</div>
				
			</div>
			<div class="pb-20 mx-10">
				<h2 class="about-title text-3xl font-bold pt-5 text-center ">Let's Collaborate With Us.</h2>
				<div class="mt-10 flex flex-col justify-center items-center">
					<p class="md:w-1/2 text-center">We are passionate to build new digital products for a better future by collaborating with new clients. If you have an idea to create a new digital product for your business needs or any other questions, inquire us. Our team/specialists are always available to help you.</p>
				</div>
			</div>
		</div>
	</div>
	<div class=" hidden md:block h-[50vh] w-full bg-black bg-opacity-50">
		
		
	</div>
	
</main>
<Footer/>

