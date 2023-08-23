<template>
    <Head>
    <Title>Pass Plus - Set to Pass Driving School</Title>
    <Meta name="description" content="Elevate your driving skills with a structured program designed for new drivers. Enhance your road confidence and safety while enjoying potential insurance discounts. Explore the comprehensive modules and benefits of Pass Plus today."/>
</Head>
<article
class="c-pass-plus"
style="padding-top: var(--space-5xl); padding-bottom: var(--space-3xl-5xl)"
>
<div class="l-container">
<div class="text-center">
  <h1 class="font-display text-h2 mt-0 mb-8">Pass Plus</h1>
  <p class="text-h5 max-w-prose mx-auto whitespace-balance">
    Step into safer driving with Pass Plus. Elevate your skills, gain confidence, and unlock insurance benefits as a new driver. Discover our comprehensive modules for a road-ready future.
  </p>
  </div>

  <img  class="mx-auto my-16 " src="~/assets/img/icon-pass-plus.svg" alt="" width="250" height="193" loading="eager"/>

    <h3 class="text-h4 text-center">Experience success and savings through Pass Plus – unlocking safer driving skills and a more secure future on the road.</h3>
    <p class="max-w-prose text-center mx-auto">Pass Plus not only enhances skills but also boosts confidence, particularly for those nervous about driving alone. Successfully completing the syllabus offers new drivers financial incentives and potential insurance savings.</p>

    <div class="text-center">
    <nuxt-link to="/contact#enquiry-pass-plus" class="c-btn c-btn--primary c-btn--orange | py-5 px-5 mt-4" style="margin-top: var(--space-xl);"><span class="relative z-1">Enquiry Now</span></nuxt-link>
    </div>

      
  <div class="grid gap-6 grid-cols-1 md:grid-cols-3 md:gap-12" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
    <div class="flex flex-col w-full max-w-sm mx-auto p-4 bg-white border border-black shadow sm:p-8 md:max-w-none">
        <h2 class="mb-6 text-h5 font-display mt-6">Pass Plus benefits:</h2>
        <ul class="list-plus">
            <li class="mb-2"><strong>Newly Qualified Car Drivers:</strong> Enhance driving skills and access discounted motor insurance.</li>
            <li class="mb-2"><strong>Instructors:</strong> Opportunities to help new drivers develop skills and knowledge.</li>
            <li class="mb-2"><strong>Insurers:</strong> Fewer claims and reduced costs.</li>
            <li class="mb-2"><strong>General Public:</strong> Safer roads for everyone.</li>
        </ul>
    </div>

    <div class="flex flex-col w-full max-w-sm mx-auto p-4 bg-white border border-black shadow sm:p-8 md:max-w-none">
        <h2 class="mb-6 text-h5 font-display mt-6">Key Elements:</h2>
        <ul class="list-plus ">
            <li class="mb-2">Syllabus designed by the Driving Standards Agency (DSA), now part of the Driver and Vehicle Standards Agency (DVSA), in collaboration with the driving instruction industry.</li>
            <li class="mb-2">Structured, competence-based training by Approved Driving Instructors (ADIs).</li>
            <li class="mb-2">Discounts from participating insurance companies.</li>
            <li class="mb-2">Support from the driving instruction and insurance sectors.</li>
        </ul>
    </div>

    <div class="flex flex-col w-full max-w-sm mx-auto p-4 bg-white border border-black shadow sm:p-8 md:max-w-none">
        <h2 class="mb-6 text-h5 font-display mt-6">Pass Plus aims to:</h2>
        <ul class="list-plus">
            <li class="mb-2">Develop existing skills and acquire new ones.</li>
            <li class="mb-2">Enhance anticipation skills and hazard management.</li>
            <li class="mb-2">Reduce crash risk and promote safe driving.</li>
            <li class="mb-2">Cultivate courteous and considerate attitudes towards other road users.</li>
        </ul>
    </div>    

  </div>
  
</div>
</article>
</template>

<script setup></script>

<style lang="scss" scoped>
.c-pass-plus {
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
}</style>
