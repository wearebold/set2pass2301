<template>
  <div>
    <Head>
        <Title>Contact Set to Pass - Get in Touch for Expert Driving Instruction</Title>
        <Meta name="description" content="Contact Set to Pass, a trusted driving school, for professional driving instruction tailored to your needs. Whether you have questions, want to book lessons, or require further information, our friendly team in Shrewsbury is here to assist you. Reach out to us today and take the first step towards becoming a confident and skilled driver with Set to Pass."/>
    </Head>
    <article
      class="c-contact"
      style="
        padding-top: var(--space-5xl);
        padding-bottom: var(--space-3xl-5xl);
      "
    >
      <div class="l-container">
        <h1 class="font-display text-h2 mt-0 mb-8">Contact Us</h1>
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-12">
          <div>
            <p class="text-h5 max-w-prose whitespace-balance">
              We're excited to hear from you and assist you in any way we can.
              Whether you have a question, need more information, or want to
              book your first driving lesson, our team is ready to help.
            </p>
            <p class="max-w-prose whitespace-balance">
              You have a few options to get in touch with us. The quickest and
              most direct way is to give us a call on our dedicated
              <NuxtLink to="07908248784" rel="tel" class="decoration-brand"
                >phone line</NuxtLink
              >. Our friendly team is available during our business hours to
              answer your queries, provide guidance, and assist you with any
              concerns you may have.
            </p>
            <p class="max-w-prose whitespace-balance">
              If you prefer written communication, you can also reach out to us
              by filling out the contact form below. Simply provide your name,
              email address, and a brief message detailing your inquiry.
            </p>
            <p class="max-w-prose whitespace-balance">
              We strive to respond to all messages promptly and provide you with
              the information you need..
            </p>

            <p class="max-w-prose whitespace-balance">
              Thank you for considering Set to Pass as your trusted driving
              school. We are passionate about helping you become a confident and
              skilled driver. Contact us today, and let's start your journey
              towards mastering the art of driving. We look forward to hearing
              from you soon!
            </p>

            <div style="margin-top: var(--space-xl)">
                <NuxtLink to="07908248784" rel="tel" class="font-display text-h5 block mb-2">+44 7908248784</NuxtLink>
                <NuxtLink to="mailto:hello@settopass.co.uk" class="font-display text-h5 block">hello@settopass.co.uk</NuxtLink>
            </div>
          </div>
          <div class="">
            <img  class="mx-auto " style="margin-bottom: var(--space-xl)" src="~/assets/img/icon-contact-form.svg" alt="" width="250" height="205" loading="eager"/>
            <!-- <img  class="mx-auto mt-16" src="~/assets/img/icon-pass.svg" alt="" width="550" loading="lazy"/> -->
            <form name="contact" action="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <p class="hidden">
                    <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </p>
                <input type="hidden" name="subject" data-remove-prefix value="New enquiry from %{formName} (%{submissionId})" />
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >First name</label
                  >
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Last name</label
                  >
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="email"
                    class="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Email address</label
                  >
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Phone number</label
                  >
                </div>
              </div>
              <div class="grid md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <textarea
                    name="company"
                    id="company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    for="company"
                    class="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Message</label
                  >
                </div>
              </div>

              <button
                type="submit"
                class="c-btn c-btn--primary |  mt-8"
              >
                <span class="relative z-1">Send</span>
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </article>

    <Stats />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.c-contact {
  background: linear-gradient(
    to bottom,
    hsla(28.94, 100%, 50%, 0) 0%,
    hsla(28.94, 100%, 50%, 0.007) 18.7%,
    hsla(28.94, 100%, 50%, 0.025) 34.9%,
    hsla(28.94, 100%, 50%, 0.056) 48.8%,
    hsla(28.94, 100%, 50%, 0.097) 60.6%,
    hsla(28.94, 100%, 50%, 0.148) 70.4%,
    hsla(28.94, 100%, 50%, 0.208) 78.4%,
    hsla(28.94, 100%, 50%, 0.276) 84.8%,
    hsla(28.94, 100%, 50%, 0.351) 89.8%,
    hsla(28.94, 100%, 50%, 0.432) 93.6%,
    hsla(28.94, 100%, 50%, 0.519) 96.3%,
    hsla(28.94, 100%, 50%, 0.609) 98.1%,
    hsla(28.94, 100%, 50%, 0.704) 99.2%,
    hsla(28.94, 100%, 50%, 0.801) 99.8%,
    hsla(28.94, 100%, 50%, 0.9) 100%,
    hsl(28.94, 100%, 50%) 100%
  );
}
</style>
