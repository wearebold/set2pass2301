<template>
    <div>
    <article class="c-about" style="padding-top: var(--space-3xl-5xl); padding-bottom: var(--space-3xl-5xl);">
        <div class="l-container">
            <h2 class="font-display text-h2 mt-0">About Us</h2>
            <div class="grid gap-12 grid-cols-1 md:grid-cols-2">
            
            <div>                
                <p class="text-h5 max-w-prose mx-auto whitespace-balance">We are dedicated to helping you become a confident and safe driver while ensuring you pass your driving test with flying colours.</p>                
                <p class="max-w-prose mx-auto whitespace-balance">Our team of experienced instructors will provide you with the skills and knowledge you need to navigate the roads quickly.</p>
                <p class="max-w-prose mx-auto whitespace-balance">We offer a range of courses to suit every need, from intensive driving courses to refresher lessons for experienced drivers. Our classes are tailored to your needs, so you can learn at your own pace and achieve your goals.</p>
                <!-- <p class="text-base max-w-prose mx-auto whitespace-balance">Contact us today to book your first lesson and start your journey to becoming a safe and confident driver. We look forward to hearing from you!</p> -->
                <nuxt-link to="/about" class="c-btn c-btn--primary | mt-2"><span class="relative z-1">Find out more</span></nuxt-link>
            </div>
            <div class="">
                
                <img  class="mx-auto" src="~/assets/img/icon-love.svg" alt="" width="250" loading="lazy"/>

            </div>                    
            </div>
        </div>
    </article>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.c-about {
    background:
    linear-gradient(
        to top,
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