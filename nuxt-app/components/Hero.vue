<template>
    <article class="c-hero flex flex-col justify-center pt-14">
        <div class="l-container grid gap-12 items-end grid-cols-1 md:grid-cols-2">
            <div>
                <h1 class="font-display text-h2">
                    Start learning today<span aria-hidden="true">...</span> 
                    <span class="sr-only">with Set To Pass Driving school</span>
                </h1>
                <p class="text-base max-w-prose whitespace-balance">We are an independent driving school based in Shrewsbury and the surrounding area. Providing driving lessons and intensive courses in a dual-controlled manual car.</p>
                <nuxt-link to="/contact" class="c-btn c-btn--primary |  mt-2 ml-auto"><span class="relative z-1">Get In Touch</span></nuxt-link>
            </div>
            <div class="order-first md:order-last">
                <img src="~/assets/img/icon-car.svg" alt="" width="600"/>
            </div>
        </div>
    </article>
</template>
<style scoped lang="scss">
.c-hero {
    min-height: fit-content;
    height: 90vh;
    height: 90svh;
    // background-color: black;
    // color: white;
    // background: linear-gradient(180deg, rgb(99.608% 99.608% 99.608%) 0%, rgb(99.573% 99.573% 99.573%) 6.25%, rgb(99.334% 99.328% 99.324%) 12.5%, rgb(98.702% 98.659% 98.632%) 18.75%, rgb(97.541% 97.34% 97.214%) 25%, rgb(95.831% 95.119% 94.672%) 31.25%, rgb(93.751% 91.699% 90.41%) 37.5%, rgb(91.79% 86.71% 83.519%) 43.75%, rgb(90.882% 79.684% 72.647%) 50%, rgb(91.919% 72.213% 59.831%) 56.25%, rgb(93.978% 66.307% 48.921%) 62.5%, rgb(96.128% 61.921% 40.428%) 68.75%, rgb(97.884% 58.909% 34.419%) 75%, rgb(99.074% 57.053% 30.652%) 81.25%, rgb(99.72% 56.093% 28.68%) 87.5%, rgb(99.965% 55.737% 27.948%) 93.75%, rgb(100% 55.686% 27.843%) 100% );
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
    // background: linear-gradient(180deg, #FFFFFF 0%, oklch(0.73 0.22 42.13) 100%);

    // @media screen and (min-width: 768px) {
    //     height: 80vh;
    //     height: 80svh;
    // }
}
</style>