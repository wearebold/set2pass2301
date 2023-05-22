<template>
    <article class="c-hero flex flex-col justify-center h-100svh">
        <div class="l-container grid gap-6 grid-cols-1 md:grid-cols-2">
            <div>
                <h1 class="font-display text-h1 mb-8">
                    Start learning today<span aria-hidden="true">...</span> 
                    <span class="sr-only">with Set To Pass Driving school</span>
                </h1>
                <p class="text-base max-w-prose whitespace-balance">Set to Pass is an independent driving school based in Shrewsbury and the surrounding area. Sharon owns and operates the school, providing driving lessons and intensive courses in a dual-controlled manual car.</p>
                <nuxt-link to="/contact" class="c-btn c-btn--primary | py-5 px-5 mt-4 ml-auto"><span class="relative z-1">Get In Touch</span></nuxt-link>
            </div>
            <div>
                <img src="~/assets/img/mini-half.jpg" alt="" width="300"/>
            </div>
        </div>
    </article>
</template>
<style scoped lang="scss">
.c-hero {
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(246, 111, 37, 0.8) 100%);
    background: linear-gradient(180deg, #FFFFFF 0%, oklch(0.73 0.22 42.13) 100%);
}
</style>