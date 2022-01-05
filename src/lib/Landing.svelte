<script>
</script>

<div class="hero-section">
 <nav class="navbar">
    <div class="navbar-brand">
        <!-- <svg width="47" height="52" viewBox="0 0 47 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.5639 13.0743C37.5639 13.5566 37.4454 14.0148 37.2084 14.4006C37.2084 14.4247 37.1847 14.4488 37.161 14.473L37.1373 14.5212L26.7569 31.9323L26.2829 32.7522C26.0459 32.9693 25.7141 33.0898 25.3823 33.0898C24.6239 33.0898 24.0077 32.4869 23.9603 31.7394L24.5291 30.4854L31.3546 15.5823H31.0465H30.9991L7.77347 15.4617H6.63589C2.91505 15.1482 0 11.9891 0 8.13068C0 4.07935 3.24685 0.775574 7.22839 0.775574L11.6365 2.29483L35.0754 10.4216L36.45 10.9039C37.1136 11.3621 37.5639 12.1579 37.5639 13.0743Z" fill="#37D2F4"/>
        <path d="M8.53125 38.9498C8.53125 38.4675 8.64975 38.0093 8.88674 37.6235C8.88674 37.5994 8.91044 37.5753 8.93414 37.5511L8.95784 37.5029L19.362 20.0677L19.836 19.2478C20.073 19.0307 20.4048 18.9102 20.7366 18.9102C21.4949 18.9102 22.1111 19.513 22.1585 20.2606L21.5897 21.5146L14.7642 36.4177H15.0723H15.1197L38.3454 36.5383H39.483C43.2038 36.8518 46.1188 40.0109 46.1188 43.8693C46.1188 47.9207 42.872 51.2244 38.8905 51.2244L34.4823 49.7052L11.0434 41.5784L9.66883 41.0961C8.98154 40.662 8.53125 39.8662 8.53125 38.9498Z" fill="#37D2F4"/>
        </svg> -->
        <img src="/logo-sq.jpg"/>
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
    <!-- <div class="navbar-toggler"></div> -->
 </nav>   
<!-- <div class="hero-container">
    <div class="hero">
        <img src="./Hero-Logo.svg" alt="">
        <p>Solutions Beyond Technology</p>
    </div>
</div> -->
</div>


<style>
    .hero-section {
        @apply w-screen h-screen;
    }
    .navbar {
        @apply w-full px-20 pt-20 flex flex-row justify-between items-center;
    }
    /* .navbar-brand {
        @apply ;
    } */
    .nav-link-container {
        @apply flex flex-row;
    }
    .nav-link {
        @apply ml-12 text-xl font-semibold  text-gray-500 ;
    }
    .nav-link a {
        @apply flex items-center;
    }
    .nav-link-more svg {
        @apply mr-3;
    }
    .hero-container {
        @apply absolute 
    }
    .hero img {
        @apply w-1/4;
    }
    .hero p {
        @apply text-2xl font-semibold text-gray-500 tracking-wide;
    }
</style>