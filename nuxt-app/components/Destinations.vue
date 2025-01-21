<template>
    <article class="c-destinations text-center" style="padding-bottom: var(--space-3xl-5xl);">
        <div class="l-container">
            <div class="relative">                                
            <h2 ref="heading" class="font-display text-h2 mt-0 mb-8">Our destinations</h2>
            <p ref="paragraph" class="text-h5 max-w-prose mx-auto whitespace-balance">If you're looking for a reliable and experienced driving instructor in and around Shrewsbury, Shropshire, look no further.</p>
            </div>


            <img ref="image" class="mx-auto " src="~/assets/img/icon-road-cars.svg" alt="" width="450" height="376" loading="lazy" style="margin-top: var(--space-2xl);"/>

            <ul class="text-base justify-center text-center font-display w-full flex flex-wrap gap-6 my-6" style="margin-top: var(--space-2xl);">
                <li ref="location1">Ellesmere</li>
                <li ref="location2" class="font-semibold">Oswestry</li>
                <li ref="location3">Bridgnorth</li>
                <li ref="location4" class="font-semibold">Whitchurch</li>
                <li ref="location5">Telford</li>
                <li ref="location6" class="font-semibold">Shrewsbury</li>
                <li ref="location7">Wem</li>
            </ul>
            <div ref="button">
            <nuxt-link to="/contact" class="c-btn c-btn--primary |  mt-4 ml-auto" style="margin-top: var(--space-xl);"><span class="relative z-1">Get In Touch</span></nuxt-link>
            </div>  
        </div>
    </article>
</template>
<script setup>
const { slideInFromLeft, fadeInUp } = useTextAnimations()
const location1 = ref(null)
const location2 = ref(null)
const location3 = ref(null)
const location4 = ref(null)
const location5 = ref(null)
const location6 = ref(null)
const location7 = ref(null)

const heading = ref(null)
const paragraph = ref(null)
const image = ref(null)
const button = ref(null)

onMounted(() => {

    fadeInUp(heading.value, 0.2)
    fadeInUp(paragraph.value, 0.4)
    fadeInUp(image.value, 0.3)  
    fadeInUp(button.value, 0.6)

  // Animate heading
  slideInFromLeft(location1.value, 0.2)
  slideInFromLeft(location2.value, 0.3)
  slideInFromLeft(location3.value, 0.4)
  slideInFromLeft(location4.value, 0.5)
  slideInFromLeft(location5.value, 0.6)
  slideInFromLeft(location6.value, 0.7)
  slideInFromLeft(location7.value, 0.8)
  
//   // Animate paragraph
//   fadeInUp(paragraph.value, 0.4)
  
//   // Animate button
//   fadeInUp(button.value, 0.6)
  
//   // Animate image
//   fadeInUp(image.value, 0.3)
})
</script>
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