<script context="module">
	import "../app.scss";
	import Error from "./[pages]/Error.svelte";
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				error,
				status,
			},
		};
	}
</script>

<script>
	export let status;
</script>

<Error statusCode={status} />
