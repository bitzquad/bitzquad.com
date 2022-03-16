<script context="module">
  import {
    Path,
    GetLanguageFromPath,
    lang as langOfPath,
  } from "$lib/siteUtils";

  import { browser } from "$app/env";
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";

  let lang = langOfPath;

  export async function load({ fetch }) {
    if (browser) {
      if (window.location.search && window.location.search.startsWith("?")) {
        lang = GetLanguageFromPath(window.location.search.slice(1));
      }
    } else {
      // Runs on server
    }
    return {};
  }

  let Txt = {
    Msg404: {
      en: "404 not found",
      fr: "404 not found in French",
      si: "404 not found in Sinhala",
    },
    MsgOther: {
      en: "Something went wrong",
      fr: "Something went wrong in French",
      si: "Something went wrong in Sinhala",
    },
    Description404: {
      en: "The page you are looking for does not exist.",
      fr: "The page you are looking for does not exist in French.",
      si: "The page you are looking for does not exist in Sinhala.",
    },
    DescriptionOther: {
      en: "You bloody idiot.",
      fr: "You bloody idiot in French.",
      si: "You bloody idiot in Sinhala.",
    },
  };
</script>

<script>
  export let statusCode = 404;
</script>

<Navbar />
<main>
  <div
    class="bz-container py-4 px-5 md:px-10 lg:px-20 2xl:py-20 bg-gray-100 text-gray-500"
  >
    <div
      class="container max-w-7xl flex items-center mt-12 justify-center flex-col"
    >
      <h1 class="text-4xl lg:text-3xl 2xl:text-4xl  font-bold">
        {statusCode === 404 ? Txt.Msg404[lang] : Txt.MsgOther[lang]}
      </h1>
      <p class="md:w-1/2 lg:text-sm text-center mt-5">
        {statusCode === 404
          ? Txt.Description404[lang]
          : Txt.DescriptionOther[lang]}
      </p>
      <div
        class="md:relative w-full md:w-1/2 2xl:w-3/4 mt-10 mb-5 flex flex-col-reverse"
      >
        <a
          href={Path("/")}
          class="md:absolute my-10 md:mt-0 w-full md:w-auto md:top-0 md:left-1/2 flex justify-center  md:-translate-x-1/2 bg-yellow-400 text-yellow-700 p-3 px-4 rounded hover:text-gray-600 transition-all duration-300 shadow-lg hover:bg-yellow-300 hover:shadow-xl"
          >Go To Home</a
        >
        <img
          src={statusCode === 404 ? "/404-error.svg" : "/bug-fix.svg"}
          alt="404-error"
          class="w-full"
        />
      </div>
    </div>
  </div>
</main>
<Footer />
