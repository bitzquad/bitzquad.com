<script>
    import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';

    let visible = false;
    onMount(async () => {
		visible = true
	});

    
</script>

<div class="hero-section">
    {#if visible}
 <nav class="navbar" in:fly="{{y: -20, duration: 800,delay:150}}">
    <div class="navbar-brand">
        <img src="/circleYellow-Logo.svg" alt="brand"/>
        <!-- <img src="./logo-sq.jpg" alt="brand"/> -->
    </div>
    <div class="nav-link-container">
        <div class="nav-link"><a href="#services">Services</a></div>
        <div class="nav-link"><a href="#team">Team</a></div>
        <div class="nav-link"><a href="#about">About</a></div>
        <div class="nav-link nav-link-more">
            <a href="#more">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 19L3 12M3 12L10 5M3 12H21" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
             More
            </a>
        </div>
    </div> 
    
 </nav> 
 <div class="navbar-toggler">
     <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M10.2127 18.3306L3.58789 11.7058M3.58789 11.7058L10.2127 5.08105M3.58789 11.7058H20.623" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
 </div>

    <div class="hero" in:fly="{{y: -30, duration: 800,delay:300,}}" >
            <img src="/textYellow-Logo-White-Text.svg" alt="" >
            <p>
                {#each 'Solutions Beyond Technology' as char, i}
			<span
				in:fade="{{delay:500 + i * 150, duration: 1200,}}"
			>{char}</span>
		{/each}
            </p>
    </div>
{/if}
</div>

<style>
    
    .hero-section {
        @apply w-screen h-screen ;
    }
    .navbar {
        @apply absolute hidden md:flex w-full px-20 pt-20  flex-row justify-between items-center;
    }
    .navbar-brand {
        @apply  w-[47px] cursor-pointer;
    }
    .nav-link-container {
        @apply flex flex-row;
    }
    .nav-link {
        @apply ml-12 text-xl font-semibold  text-gray-500 border-b border-gray-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-700 transition-all duration-200;
    }
    .nav-link a{
        @apply flex items-center ;
    }
    .nav-link-more svg {
        @apply mr-3 ;
    }
    .navbar-toggler {
        @apply block md:hidden absolute top-0 right-0 ;
    }
    .navbar-toggler button {
        @apply p-3 bg-gray-50 rounded-md m-5 shadow;
    } 
    .hero {
        @apply h-full  flex  flex-col justify-center items-center;
    }
    .hero img {
        @apply w-2/5 max-w-7xl min-w-[300px];
    }
    .hero p {
        @apply md:text-2xl 2xl:text-3xl mt-2 font-semibold text-gray-500 tracking-wide;
    }
</style>