<script>
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
  <div class="bg-slate-100 w-full py-10 lg:py-20 bz-container">
    <div class="bg-slate-100 w-full container max-w-7xl">
      <div>
        <h3 class="text-3xl  text-center">Get in Touch</h3>
        <p class="py-2 text-center">Amet minim mollit non deserunt</p>
      </div>
      <div class="px-5 w-full flex lg:flex-row">
        <img
          src="/contact-form.svg"
          alt="contact-form"
          class="hidden lg:block lg:w-1/2 lg:h-auto px-20"
        />
        <form class="pt-10 w-full lg:w-1/2 md:px-20">
          <div class="group relative  z-0 mb-6 w-full">
            <input
              type="text"
              name="floating_name"
              class="peer block w-full px-2 appearance-none border rounded border-gray-300 bg-transparent py-2.5 Stext-sm text-gray-900 outline-none autofill:bg-none focus:border-yellow-600  focus:ring-0 dark:border-gray-600 "
              placeholder=" "
              required
            />
            <label
              for="floating_name"
              class="absolute top-3 mx-2 z-10 px-1 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:bg-slate-100 dark:text-gray-400 peer-focus:text-yellow-600"
            >
              Name
            </label>
          </div>
          <div class="group relative  z-0 mb-6 w-full">
            <input
              type="text"
              name="floating_email"
              class="peer block w-full px-2 appearance-none border rounded border-gray-300 bg-transparent py-2.5 Stext-sm text-gray-900 outline-none autofill:bg-none focus:border-yellow-600  focus:ring-0 dark:border-gray-600 "
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="absolute top-3 mx-2 z-10 px-1 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:bg-slate-100 dark:text-gray-400 peer-focus:text-yellow-600"
            >
              Email
            </label>
          </div>
          <div class="group relative  z-0 mb-6 w-full">
            <input
              type="text"
              name="floating_subject"
              class="peer block w-full px-2 appearance-none border rounded border-gray-300 bg-transparent py-2.5 Stext-sm text-gray-900 outline-none autofill:bg-none focus:border-yellow-600  focus:ring-0 dark:border-gray-600 "
              placeholder=" "
              required
            />
            <label
              for="floating_subject"
              class="absolute top-3 mx-2 z-10 px-1 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:bg-slate-100 dark:text-gray-400 peer-focus:text-yellow-600"
            >
              Subject
            </label>
          </div>
          <div class="group relative  z-0 mb-6 w-full">
            <textarea
              name="floating_subject"
              class="peer block w-full px-2 appearance-none border rounded border-gray-300 bg-transparent py-2.5 Stext-sm text-gray-900 outline-none autofill:bg-none focus:border-yellow-600  focus:ring-0 dark:border-gray-600 "
              placeholder=" "
              rows="4"
              required
            />
            <label
              for="floating_subject"
              class="absolute top-3 mx-2 z-10 px-1 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:bg-slate-100 dark:text-gray-400 peer-focus:text-yellow-600"
            >
              Subject
            </label>
          </div>
          <div class="bz-button rounded  py-2 text-center">Send Message</div>
        </form>
      </div>
    </div>
  </div>
</main>
<Footer />
