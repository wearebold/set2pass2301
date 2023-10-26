<template>
  <article class="c-stats border-y border-black">
    <div class="l-container l-container--1440 | h-full">
      <div
        class="grid gap-px grid-cols-1 justify-start justify-items-center items-center bg-black h-full lg:grid-cols-3 lg:justify-center"
      >
        <div
          class="c-stat__item flex flex-row items-center gap-3 p-6 bg-white h-full w-full | lg:justify-center"
        >
          <span class="font-display" style="font-size: 3.3rem;" aria-hidden="true">1.</span>
          <div>
            <h2 class="f-stat m-0">
              <span class="text-h5 block">Ready</span>
              <span class="font-body text-xs text-gray-500">To get in touch</span>
            </h2>
          </div>
        </div>

        <div
          class="c-stat__item flex flex-row items-center gap-3 p-6 bg-white h-full w-full | lg:justify-center"
        >
        <span class="font-display" style="font-size: 3.3rem;" aria-hidden="true">2.</span>
          <div>
            <h2 class="f-stat m-0">
              <span class="text-h5 block">Set</span>
              <span class="font-body text-xs text-gray-500">Your learning driving schedule</span>
            </h2>
          </div>
        </div>

        <div
          class="c-stat__item flex flex-row items-center gap-3 p-6 bg-white h-full w-full | lg:justify-center"
        >
        <span class="font-display" style="font-size: 3.3rem;" aria-hidden="true">3.</span>
          <div>
            <h2 class="f-stat m-0">
              <span class="text-h5 block">Go</span>
              <span class="font-body text-xs text-gray-500">Start your journey</span>
            </h2>
          </div>
        </div>
       
      </div>
    </div>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped>
.c-stats {
    .l-container {
        padding: 0;
    }
}
.c-stat__item {
    min-height: 10svh;
}
</style>
