<template>
    <article class="c-destinations text-center" style="padding-top: var(--space-3xl); padding-bottom: var(--space-3xl-5xl);">
        <div class="l-container">
            <div class="relative">                                
            <h2 class="font-display text-h2 mt-0 mb-8">Our destinations</h2>
            <p class="text-base max-w-prose mx-auto whitespace-balance">If you're looking for a reliable and experienced driving instructor in and around Shrewsbury, Shropshire, look no further.</p>
            </div>


            <img  class="mx-auto" src="~/assets/img/icon-road-cars.svg" alt="" width="450" loading="lazy" style="margin-top: var(--space-2xl);"/>

            <ul class="text-base justify-center text-center font-display w-full inline-flex gap-6 my-6" style="margin-top: var(--space-2xl);">
                <li>Ellesmere</li>
                <li class="font-semibold">Oswestry</li>
                <li>Bridgnorth</li>
                <li class="font-semibold">Whitchurch</li>
                <li>Telford</li>
                <li class="font-semibold">Shrewsbury</li>
                <li>Wem</li>
            </ul>
            <nuxt-link to="/contact" class="c-btn c-btn--primary | py-5 px-5 mt-4 ml-auto" style="margin-top: var(--space-xl);"><span class="relative z-1">Get In Touch</span></nuxt-link>
        </div>
    </article>
</template>
<style scoped lang="scss">
.c-destinations {
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