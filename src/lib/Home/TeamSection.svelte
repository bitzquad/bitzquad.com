<script>
	import UserCard from "$lib/Components/UserCard.svelte";
	import { lang } from "$lib/siteUtils";
	// @ts-ignore
	import Users from "./TeamSectionText.ts";
</script>

<div class="bz-container max-w-7xl my-8 mx-auto px-4 md:px-12 ">
	<h2 class="text-3xl md:text-5xl mt-12 md:mt-32 font-bold text-gray-600">
		Our Team
	</h2>
	<p
		class="text-lg font-normal text-gray-500 mt-3 md:mt-6 mb-8 md:mb-10 text-center"
	>
		We are from all around the world
	</p>
	<div class="container">
		<div class="flex md:flex-wrap -mx-1 lg:-mx-4 overflow-x-scroll">
			{#each Users as user}
				<!-- Column -->
				<div
					class="my-1 flex md:justify-center w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:w-1/4"
				>
					<!-- Article -->
					<UserCard
						name={user.name[lang]}
						country={user.country[lang]}
						role={user.role[lang]}
						imgUrl={user.img}
					/>
					<!-- END Article -->
				</div>
				<!-- END Column -->
			{/each}
		</div>
	</div>
</div>
