<script>
	import { PathForLanguage } from "$lib/siteUtils";
	import { getContext } from "svelte";
	import { page } from "$app/stores";
	let setLang = getContext("setLang");

	/**
	 * @param {string} lang
	 */
	function SetLanguage(lang) {
		if (window) {
			window.location.href = PathForLanguage($page.url.pathname, lang);
		}
	}
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
	class="fixed z-10 inset-0 overflow-y-auto"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div
		class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
	>
		<!--
        Background overlay, show/hide based on modal state.
  
        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
		<div
			on:click={setLang}
			class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
			aria-hidden="true"
		/>

		<!-- This element is to trick the browser into centering the modal contents. -->
		<span
			class="hidden sm:inline-block sm:align-middle sm:h-screen"
			aria-hidden="true">&#8203;</span
		>

		<!--
        Modal panel, show/hide based on modal state.
  
        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
		<div
			class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
		>
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
					<div
						class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10"
					>
						<!-- Heroicon name: outline/exclamation -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
							/>
						</svg>
					</div>
					<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<h3
							class="text-lg font-bold leading-6 mt-2 text-gray-900"
							id="modal-title"
						>
							Choose a Language
						</h3>
						<div class="mt-2">
							<ul class="text-sm text-gray-500">
								<li
									class="mt-5 cursor-pointer"
									on:click={() => {
										SetLanguage("en");
									}}
								>
									English
								</li>
								<li
									class="mt-5 cursor-pointer"
									on:click={() => {
										SetLanguage("si");
									}}
								>
									සිංහල
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
			>
				<button
					on:click={setLang}
					type="button"
					class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					>Cancel</button
				>
			</div>
		</div>
	</div>
</div>
