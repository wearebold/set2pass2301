<template>
  <div>
    <Head>
        <Title>About Set to Pass - Driving School in Shrewsbury Committed to Your Success</Title>
        <Meta name="description" content="Learn more about Set to Pass, a dedicated driving school located in Shrewsbury. Our mission is to help learners become confident and safe drivers through our comprehensive driving lessons. With experienced instructors and a personalized approach, we tailor our lessons to your specific needs. Discover why Set to Pass is the right choice for your driving education journey in Shrewsbury."/>
    </Head>
  <article class="c-about" style="padding-top: var(--space-5xl); padding-bottom: var(--space-3xl-5xl);">
      <div class="l-container">
          <h1 class="font-display text-h2 mt-0 mb-8">About Us</h1>
          <div class="grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-12">                        
           <div>
              <p class="text-h5 max-w-prose whitespace-balance">At Set to Pass, we understand that learning to drive can be a daunting experience. That's why we provide a friendly and supportive learning environment where you can feel comfortable and confident behind the wheel.</p>
              <p class="max-w-prose whitespace-balance">Our instructors are patient and understanding and will help you gradually build your confidence and skills to become a safe and competent driver.</p>
              <p class="max-w-prose whitespace-balance">We also understand the importance of affordability, so we offer competitive prices for all our courses. Everyone should have access to high-quality driving lessons, regardless of their budget.</p>
              <p class="max-w-prose whitespace-balance">So why choose Set to Pass? We have a proven track record of success, with a high pass rate and many satisfied customers. We are committed to providing you with the best possible learning experience and helping you achieve your driving goals. With Set to Pass, you can be confident that you are safe.</p>

              <p class="max-w-prose whitespace-balance">Contact us today to book your first lesson and start your journey to becoming a safe and confident driver. We look forward to hearing from you!</p>
              <nuxt-link to="/contact" class="c-btn c-btn--primary |  mt-4" style="margin-top: var(--space-xl);"><span class="relative z-1">Start Your journey</span></nuxt-link>
           </div>   
          <div class="">
                            
                    
              <img  class="mx-auto mt-16 " src="~/assets/img/icon-pass.svg" alt="" width="550" loading="eager"/>

          </div>                              
          </div>
      </div>
  </article>

  <Stats />
  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.c-about {
  background:
  linear-gradient(
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