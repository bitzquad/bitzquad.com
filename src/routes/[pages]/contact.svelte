<script>

import ContactForm from '$lib/Components/ContactForm.svelte';
import Footer from '$lib/Footer.svelte';

  import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />
<main class="bz-container text-slate-600">
  <div class="pt-20 pb-32 flex flex-col justify-center items-center">
    <h1
      class="text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-center md:text-left  text-gray-800 font-bold"
    >
      Contact Us
    </h1>
    <p class="mt-3">Amet minim mollit non deserunt</p>
  </div>
  <!-- section - chat with us -->
  <div class="bg-slate-100 w-full bz-container">
    <div class="contact-section">
      <div class="contact-section-image">
        <img src="/contact-chatting.svg" alt="contact-chatting" />
      </div>
      <div class="contact-section-content">
        <h2>Chat With Us</h2>
        <p>
          We've got live Social Experts waiting to help you monday to friday
          from 9am to 5pm EST.
        </p>
        <button>Chat With Us</button>
      </div>
    </div>
  </div>

  <!-- section -Email us -->
  <div class=" w-full bz-container">
    <div class="contact-section">
      <div class="contact-section-image">
        <img src="/contact-email.svg" alt="contact-email" />
      </div>
      <div class="contact-section-content">
        <h2>Email Us</h2>
        <p>
          Simple drop us an email at hellothemetags@gmail.com and you'll receive
          a reply within 24 hours
        </p>
        <button>Email Us</button>
      </div>
    </div>
  </div>
  <!-- Form Section - get in touch -->

  <ContactForm/>

</main>
<Footer />
