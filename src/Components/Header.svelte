<header>
  <nav class="navbar">
    <h2 class="nav-brand">Bitzquad</h2>
    <div>
      <a href="/" class="nav-link"> Projects </a>
      <a href="/" class="nav-link">Contact </a>
    </div>
  </nav>
</header>

<style>
  .navbar {
    @apply bg-white bg-opacity-5 text-gray-200 h-16 w-full p-6 flex justify-between items-center;
  }

  .nav-brand {
    @apply text-2xl font-extrabold;
  }
  .nav-link {
    @apply invisible md:visible my-3 ml-12 font-semibold border-b-2 border-opacity-0 hover:border-opacity-100 transition-all duration-200;
  }
</style>
