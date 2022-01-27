<script>
  import HomePageBanner from "$lib/HomePageBanner.svelte";
  import Header from "$lib/Header.svelte";

  import { lang, Path } from "$lib/siteUtils";

  let Txt = {
    Slogun: {
      en: "Solutions beyond Software Engineering",
      fr: "Nous sommes une équipe de passionnés qui adore créer.",
      si: "Api thamai hodatama karanne.",
    },
    GearingUp: {
      en: "We are currently building infrastructure, preparing dev tools, and winding up servers for the next technological advancement of your business",
      fr: "Nous sommes en train de construire l'infrastructure, préparer les outils de développement, et terminer les serveurs pour la prochaine technologie de votre entreprise",
      si: "Thaama hadana gaman",
    },
    LaunchingSoon: {
      en: "The date, we are launching our services for you",
      fr: "La date de lancement de nos services pour vous",
      si: "Me davase aewith balanna",
    },
  };
</script>

<svelte:head>
  <title>Bitzquad | Software and IT Solutions</title>
  <style>
    body {
      background: url("/bg-home.webp") no-repeat;
      @apply bg-center md:bg-cover;
    }
  </style>
</svelte:head>

<main class="main">
  <div class="col-left">
    <div
      class=" bg-gray-900 bg-opacity-10 rounded-lg shadow-xl xl:rounded-2xl"
    />
    <HomePageBanner slogun={Txt.Slogun[lang]} />
  </div>
  <div
    class="bg-gray-900 absolute bg-opacity-0 md:bg-opacity-30 md:w-1/2 top-0 bottom-0 md:right-0 flex-col items-center justify-center;"
  >
    <Header />
    <div class="md:hidden mt-10">
      <HomePageBanner slogun={Txt.Slogun[lang]} />
    </div>
    <div class="home-card">
      <h3 class="home-card-title">Gearing up</h3>
      <p class="text-gray-300 font-light mt-2 2xl:text-2xl">
        {Txt.GearingUp[lang]}
      </p>
    </div>
    <div class="home-card">
      <h3 class="home-card-title">2022.07.22</h3>
      <p class="home-card-description">
        {Txt.LaunchingSoon[lang]}
      </p>
    </div>
  </div>
</main>

<style>
  .main {
    @apply md:table w-screen h-screen;
  }

  .col-left {
    @apply hidden md:flex flex-col items-center justify-center absolute md:w-1/2 md:top-0 md:bottom-0 md:left-0;
  }

  .home-card {
    @apply w-10/12 my-10 md:mt-20 md:ml-10 mx-auto p-10 bg-gray-900 bg-opacity-10 shadow-lg md:shadow-none md:bg-opacity-0;
  }

  .home-card-title {
    @apply text-gray-100 font-semibold text-4xl md:text-5xl 2xl:text-7xl;
  }

  .home-card-description {
    @apply text-gray-300 font-light mt-2 2xl:text-2xl;
  }
</style>
