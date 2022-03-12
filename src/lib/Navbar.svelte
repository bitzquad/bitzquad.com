<script>
	let menuActive = false;
</script>

<nav
	class="bz-container py-4 px-5 md:px-10 lg:px-20 bg-gray-100 text-gray-500 dark:bg-black dark:text-gray-200 font-bold"
>
	<div class="container max-w-7xl grid grid-cols-2">
		<div class="flex justify-start">
			<!-- logo  -->
			<img
				src="static/circleYellow-Logo.svg"
				alt="Bitzquad Logo"
				class="h-8 sm:hidden"
			/>
			<img
				src="static/textYellow-Logo-White-Text.svg"
				alt="Bitzquad Logo"
				class="h-8 hidden sm:inline-block"
			/>
		</div>
		<div class="justify-end hidden md:flex">
			<!--  menu  -->
			<a href="#" class="mx-2 px-2 py-1 duration-500 hover:bg-gray-200 rounded"
				>Services</a
			>
			<a href="#" class="mx-2 px-2 py-1 duration-500 hover:bg-gray-200 rounded"
				>Contact</a
			>
			<a
				href="#"
				class="mx-2 bg-yellow-400 text-yellow-700 rounded px-2 py-1 hover:bg-yellow-500 hover:text-white duration-500 "
				>Blog</a
			>
			<a
				href="#"
				class="flex items-cener mx-2 px-2 py-1 hover:bg-gray-200 rounded duration-500"
				>About</a
			>
		</div>

		<div class="md:hidden flex items-center justify-end">
			<button on:click={() => (menuActive = !menuActive)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
		{#if menuActive == true}
			<div class="pt-5 md:hidden w-full col-span-2">
				<a href="#" class="block py-2 px-2 w-full  hover:bg-gray-200"
					>Services</a
				>
				<a href="#" class="block py-2 px-2  hover:bg-gray-200">Services</a>
				<a href="#" class="block py-2 px-2  hover:bg-gray-200">Services</a>
				<a href="#" class="block py-2 px-2  hover:bg-gray-200">Services</a>
			</div>
		{/if}
	</div>
</nav>
