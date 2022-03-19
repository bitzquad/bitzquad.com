<script>
	export let name;
	export let role;
	export let country;
	export let imgUrl;
</script>

<div class="user-card">
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="img-placeholder" style="background-image:url({imgUrl})" />
	<div class="user-name">
		<span class="text-sm font-bold text-gray-100">{name}</span>
	</div>
	<div class="user-role">
		<span class="text-xs  font-semi-bold text-yellow-600">{role}</span>
	</div>
	<div class="location">
		<span class="text-gray-400 text-sm flex items-center"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 mr-1"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
					clip-rule="evenodd"
				/>
			</svg>{country}</span
		>
	</div>
</div>

<style>
</style>
