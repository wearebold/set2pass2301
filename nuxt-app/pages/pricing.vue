<template>
  <div>
    <Head>
      <Title>Driving Lesson Pricing - Set to Pass Driving School</Title>
      <Meta
        name="description"
        content="Discover the competitive rates and flexible lesson plans offered by Set to Pass, a trusted driving school in Shrewsbury. Choose a package that suits your budget and needs, and start your journey towards becoming a confident driver."
      />
    </Head>
    <article
      class="c-pricing text-center"
      style="
        padding-top: var(--space-5xl);
        padding-bottom: var(--space-3xl-5xl);
      "
    >
      <div class="l-container">
        <h1 class="font-display text-h2 mt-0 mb-8">Our Pricing</h1>
        <p class="text-h5 max-w-prose mx-auto whitespace-balance">
          We believe that quality driving education should be accessible to
          everyone. That's why we have designed our pricing structure to offer a
          range of options that fit various budgets and learning needs.
        </p>

        <img
          class="mx-auto my-16"
          src="~/assets/img/icon-price.svg"
          alt=""
          width="250"
          height="256"
          loading="eager"
        />
        <!-- <img  class="mx-auto" src="~/assets/img/icon-road-cars.svg" alt="" width="450" loading="lazy" style="margin-top: var(--space-2xl);"/> -->

        <h2
          class="text-h4 text-center"
        >
          We have carefully crafted each course to ensure that you receive the
          highest standard of instruction and support.
        </h2>
        <p class="max-w-prose text-center mx-auto">
          Our pricing page provides a comprehensive breakdown of our courses and
          their associated costs. We offer a diverse selection of courses, from
          intensive driving courses for those looking to fast-track their
          learning, to refresher lessons for experienced drivers in need of a
          skills boost.
        </p>
      </div>
      <div class="l-container l-container--1440">
        <div
          class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-12"
          style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl)"
        >
          <section
            class="flex flex-col w-full max-w-sm mx-auto p-4 bg-white border border-black shadow sm:p-8 md:max-w-none"
          >
            <h5 class="mb-4 text-xl text-left font-display mt-0">
              Single Lesson
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-display">£</span>
              <span class="text-h3 font-display tracking-tight">40</span>
              <span class="ml-1 text-xl font-normal text-gray-500"
                >/per hour</span
              >
            </div>
            <!-- List -->
            <ul role="list" class="space-y-5 mt-7 mb-auto">
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >1 hour</span
                >
              </li>
            </ul>
            <nuxt-link
              to="/contact#enquiry-single-lesson"
              class="c-btn c-btn--primary c-btn--orange | py-5 px-5 mt-4 ml-auto w-full"
              style="margin-top: var(--space-xl)"
              ><span class="relative z-1">Enquiry Now</span></nuxt-link
            >
          </section>

          <section
            class="flex flex-col w-full max-w-sm mx-auto p-4 bg-white border border-black shadow sm:p-8 md:max-w-none"
          >
            <h5 class="mb-4 text-xl text-left font-display mt-0">
              Block of 10 hours
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-display">£</span>
              <span class="text-h3 font-display tracking-tight">340</span>
              <span class="ml-1 text-xl font-normal text-gray-500">/total</span>
            </div>
            <!-- List -->
            <ul role="list" class="space-y-5 mt-7 mb-auto">
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >10 hours</span
                >
              </li>
              <li class="flex space-x-3 text-left">
                <!-- Icon -->
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-black"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                >
                  <path
                    d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"
                  />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >Prepaid by bank transfer minimum 48 hours ahead of first
                  lesson</span
                >
              </li>
            </ul>
            <nuxt-link
              to="/contact#enquire-block-of-10-lessons"
              class="c-btn c-btn--primary c-btn--orange | py-5 px-5 mt-4 ml-auto w-full"
              style="margin-top: var(--space-xl)"
              ><span class="relative z-1">Enquiry Now</span></nuxt-link
            >
          </section>

          <section
            class="flex flex-col w-full max-w-sm mx-auto p-4 bg-white border border-black shadow sm:p-8 md:max-w-none"
          >
            <h5 class="mb-4 text-xl text-left font-display mt-0">
              Intensive Course
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-display">£</span>
              <span class="text-h3 font-display tracking-tight">TBC</span>
              <span class="ml-1 text-xl font-normal text-gray-500">/total</span>
            </div>
            <!-- List -->
            <ul role="list" class="space-y-5 mt-7 mb-auto">
              <li class="flex space-x-3 text-left">
                <!-- Icon -->
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-black"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                >
                  <path
                    d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"
                  />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >Price on application</span
                >
              </li>
              <li class="flex space-x-3 text-left">
                <!-- Icon -->
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-black"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                >
                  <path
                    d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"
                  />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >Deposit required on booking</span
                >
              </li>
            </ul>
            <nuxt-link
              to="/contact#enquire-intensive-course"
              class="c-btn c-btn--primary c-btn--orange | py-5 px-5 mt-4 ml-auto w-full"
              style="margin-top: var(--space-xl)"
              ><span class="relative z-1">Enquiry Now</span></nuxt-link
            >
          </section>

          <section
            class="flex flex-col w-full max-w-sm mx-auto p-4 bg-white border border-black shadow sm:p-8 md:max-w-none"
          >
            <h5 class="mb-4 text-xl text-left font-display mt-0">Pass Plus</h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-display">£</span>
              <span class="text-h3 font-display tracking-tight">400</span>
              <span class="ml-1 text-xl font-normal text-gray-500">/total</span>
            </div>
            <!-- List -->
            <ul role="list" class="space-y-5 mt-7 mb-auto">
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >10 hours</span
                >
              </li>
            </ul>
            <nuxt-link
              to="/pass-plus"
              aria-label="Read more about Pass Plus"
              class="c-btn c-btn--primary c-btn--black | py-5 px-5 mt-auto ml-auto w-full"
              style="margin-top: var(--space-xl)"
              ><span class="relative z-1">Read More</span></nuxt-link
            >
            <nuxt-link
              to="/contact#enquiry-pass-plus"
              class="c-btn c-btn--primary c-btn--orange | py-5 px-5 mt-2 ml-auto w-full"
              ><span class="relative z-1">Enquiry Now</span></nuxt-link
            >
          </section>
        </div>
      </div>
    </article>
  </div>
</template>
<style scoped lang="scss">
.c-pricing {
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
