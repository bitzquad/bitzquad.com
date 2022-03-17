<script>
	import { Path } from "$lib/siteUtils";
	export let title;
	export let description;
	export let image;
	export let link;
	export let width;
</script>

<div
	class="service-card w-full flex my-2 shadow-md hover:shadow-lg duration-500 rounded-md max-w-md min-w-min cursor-pointer"
	on:click={() => {
		window.location.href = Path(link);
	}}
>
	<div
		class="card-left bg-gray-200 p-2 w-3/12 flex items-center rounded-md justify-center"
	>
		<img src={image} {width} height="35" alt={title} />
	</div>
	<div class="card-right  flex flex-col w-9/12 py-2 px-3">
		<h3 class="text-lg font-bold text-gray-700">{title}</h3>
		<p class="text-sm text-gray-500">
			{description}
		</p>
	</div>
</div>
