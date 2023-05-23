<template>
    <article class="c-pricing text-center" style="padding-top: var(--space-5xl); padding-bottom: var(--space-3xl-5xl);">
        <div class="l-container">
            <h1 class="font-display text-h2 mt-0 mb-8">Our Pricing</h1>
            <p class="text-base max-w-prose mx-auto whitespace-balance">We believe that quality driving education should be accessible to everyone. That's why we have designed our pricing structure to offer a range of options that fit various budgets and learning needs.</p>            


            <!-- <img  class="mx-auto" src="~/assets/img/icon-road-cars.svg" alt="" width="450" loading="lazy" style="margin-top: var(--space-2xl);"/> -->

            <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
                <section class="w-full max-w-sm p-4 bg-white border border-black shadow sm:p-8 " style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
                    <h5 class="mb-4 text-xl font-display mt-6">Single driving lesson</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        <span class="text-3xl font-display">£</span>
                        <span class="text-h3 font-display tracking-tight">35</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 ">/per hour</span>
                    </div>
                    <!-- List -->
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                            <!-- Icon -->
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-orange-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 ">1 hour</span>
                        </li>                    
                    </ul>
                    <nuxt-link to="/contact" class="c-btn c-btn--primary c-btn--orange | py-5 px-5 mt-4 ml-auto w-full" style="margin-top: var(--space-xl);"><span class="relative z-1">Choose plan</span></nuxt-link>
                </section>

                <section class="w-full max-w-sm p-4 bg-white border border-black shadow sm:p-8 " style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
                    <h5 class="mb-4 text-xl font-display mt-6">10 driving lessons</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        <span class="text-3xl font-display">£</span>
                        <span class="text-h3 font-display tracking-tight">330</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 ">/total</span>
                    </div>
                    <!-- List -->
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                            <!-- Icon -->
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-orange-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 ">10 hours</span>
                        </li>                                        
                    </ul>
                    <nuxt-link to="/contact" class="c-btn c-btn--primary c-btn--orange | py-5 px-5 mt-4 ml-auto w-full" style="margin-top: var(--space-xl);"><span class="relative z-1">Choose plan</span></nuxt-link>
                </section>

                <section class="w-full max-w-sm p-4 bg-white border border-black shadow sm:p-8 " style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
                    <h5 class="mb-4 text-xl font-display mt-6">Intensive driving course</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        <span class="text-3xl font-display">£</span>
                        <span class="text-h3 font-display tracking-tight">660</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 ">/total</span>
                    </div>
                    <!-- List -->
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                            <!-- Icon -->
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-orange-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 ">20 hours</span>
                        </li>                                        
                    </ul>
                    <nuxt-link to="/contact" class="c-btn c-btn--primary c-btn--orange | py-5 px-5 mt-4 ml-auto w-full" style="margin-top: var(--space-xl);"><span class="relative z-1">Choose plan</span></nuxt-link>
                </section>
            </div>                                            
            
            <h2 class="font-display text-h4 max-w-prose mx-auto whitespace-balance" style="padding-top: var(--space-xl); padding-bottom: var(--space-xl);">We have carefully crafted each course to ensure that you receive the highest standard of instruction and support.</h2>

            <section class="text-left">

                <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <div>
                        <p class="text-base max-w-prose whitespace-balance">Our pricing page provides a comprehensive breakdown of our courses and their associated costs. We offer a diverse selection of courses, from intensive driving courses for those looking to fast-track their learning, to refresher lessons for experienced drivers in need of a skills boost.</p>
                        <p class="max-w-prose whitespace-balance">We understand that transparency is key when it comes to pricing, which is why we provide detailed information about what is included in each course package. From the number of lessons to additional features such as mock tests and theory support, we want you to have a clear understanding of what you'll receive.</p>
                        <p class="max-w-prose whitespace-balance">We are excited to be part of your journey and look forward to helping you achieve your driving goals. Let's get started on the road to becoming a confident and skilled driver together!</p>
                    </div>
                    <div>
                        <img  class="mx-auto mt-16" src="~/assets/img/icon-path.svg" alt="" width="550" loading="lazy"/>
                    </div>
                </div>

            </section>

            
        </div>
    </article>
</template>
<style scoped lang="scss">
.c-pricing {
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