<template>
    <div>
    <Head>
    <Title>Success - Email sent</Title>
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
            </div>
            <div class="">
              <img  class="mx-auto " style="margin-bottom: var(--space-xl)" src="~/assets/img/icon-sent.svg" alt="" width="350" loading="eager"/>              
            
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
  