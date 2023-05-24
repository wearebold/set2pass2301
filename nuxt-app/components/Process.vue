<template>

    <article class="c-about" style="padding-top: var(--space-3xl-5xl); padding-bottom: var(--space-3xl-5xl);">
        <div class="l-container">
            <h2 class="font-display text-h2 mt-0 mb-8" style="margin-bottom: var(--space-xl);">Our Process</h2>
            <div class="grid gap-6 grid-cols-1 md:grid-cols-3 md:gap-12">                        
             <div class="flex flex-col">
                <p class="max-w-prose whitespace-balance">Explore our services, instructors, and testimonials to understand what Set to Pass offers.</p>
                <p class="max-w-prose whitespace-balance">Please familiarize yourself with the range of courses we provide and the benefits of learning with us. Take your time to gather all the information you need before moving on to the next step.</p>
                <p class="max-w-prose whitespace-balance mb-auto">Once you have gathered all the necessary information, it's time to take the next step and get in touch with us.</p>
                <img  class="mx-auto mt-16 " src="~/assets/img/icon-checks.svg" alt="" width="260" loading="lazy"/>
             </div>   
            <div class="flex flex-col">
                                
                <p class="max-w-prose whitespace-balance">You can reach out to us by calling our dedicated <NuxtLink to="07908248784" rel="tel" class="decoration-brand">phone line</NuxtLink>, where our friendly team will be ready to assist you.</p>
                <p class="max-w-prose whitespace-balance mb-auto">Alternatively, you can fill out the <NuxtLink to="/contact" class="decoration-brand">contact form</NuxtLink> on our website, providing your name, email address, and any specific questions or requests you may have.</p>
                <img  class="mx-auto mt-16 " src="~/assets/img/icon-chat.svg" alt="" width="255" loading="lazy"/>

            </div>                    

            <div class="flex flex-col">                
                <p class="max-w-prose whitespace-balance">After you have contacted us, our team will promptly respond to your inquiry. We will provide you with further details, answer your questions, and discuss available options that align with your requirements. This will include scheduling your first driving lesson, providing information on course availability, and discussing any specific preferences you may have.</p>
                <p class="max-w-prose whitespace-balance mb-auto">Once everything is set and confirmed, you're ready to go! You'll be on your way to becoming a confident and skilled driver with Set to Pass.</p>
                <img  class="mx-auto mt-16 " src="~/assets/img/icon-calendar.svg" alt="" width="260" loading="lazy"/>                
            </div>
            </div>
            <div class="flex justify-center">
            <nuxt-link to="/about" class="c-btn c-btn--primary |  mt-4 mx-auto" style="margin-top: var(--space-2xl);"><span class="relative z-1">Start Your journey</span></nuxt-link>
            </div>
        </div>
    </article>
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

//     background:
//   linear-gradient(
//     to top,
//     hsla(30, 100%, 3.92%, 0) 0%,
//     hsla(30, 100%, 3.92%, 0.007) 18.7%,
//     hsla(30, 100%, 3.92%, 0.025) 34.9%,
//     hsla(30, 100%, 3.92%, 0.056) 48.8%,
//     hsla(30, 100%, 3.92%, 0.097) 60.6%,
//     hsla(30, 100%, 3.92%, 0.148) 70.4%,
//     hsla(30, 100%, 3.92%, 0.208) 78.4%,
//     hsla(30, 100%, 3.92%, 0.276) 84.8%,
//     hsla(30, 100%, 3.92%, 0.351) 89.8%,
//     hsla(30, 100%, 3.92%, 0.432) 93.6%,
//     hsla(30, 100%, 3.92%, 0.519) 96.3%,
//     hsla(30, 100%, 3.92%, 0.609) 98.1%,
//     hsla(30, 100%, 3.92%, 0.704) 99.2%,
//     hsla(30, 100%, 3.92%, 0.801) 99.8%,
//     hsla(30, 100%, 3.92%, 0.9) 100%,
//     hsl(30, 100%, 3.92%) 100%
//   );
}
</style>