<script context="module">
  import Footer from '$lib/Footer.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import '../app.scss';
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
  export let error;
  export let status;
</script>

<div class="w-screen">
  <Navbar />
  <div
    class="bz-container py-4 px-5 md:px-10 lg:px-20 bg-gray-100 text-gray-500 "
  >
    <div
      class="container max-w-7xl flex items-center mt-12 justify-center flex-col"
    >
      <h1 class="text-4xl font-bold">
        {status === 404 ? 'Page Not Found! ' : `Server Error ${status}`}
      </h1>
      <p class="md:w-1/2 text-center mt-5">
        {status === 404
          ? "Page you're trying reach dose not exsits. Or content may be moved to another page, or you don't have access to view requested content."
          : 'an error occured on our side. Our Engineers are working on it!'}
      </p>
      <div class="md:relative w-full md:w-1/2 mt-10 mb-5 flex flex-col-reverse">
        <a
          href="/"
          class="md:absolute my-10 md:mt-0 w-full md:w-auto md:top-0 md:left-1/2 flex justify-center  md:-translate-x-1/2 bg-yellow-400 text-yellow-700 p-3 px-4 rounded hover:text-gray-600 transition-all duration-300 shadow-lg hover:bg-yellow-300 hover:shadow-xl"
          >Go To Home</a
        >
        <img
          src={status === 404 ? '/404-error.svg' : '/bug-fix.svg'}
          alt="404-error"
          class="w-full"
        />
      </div>
    </div>
  </div>
  <Footer />
</div>
