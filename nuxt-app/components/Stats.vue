<template>
  <article class="c-stats border-y border-black">
    <div class="l-container l-container--1440 | h-full">
      <div
        class="grid gap-px grid-cols-4 justify-center justify-items-center items-center bg-black h-full"
      >
        <div
          class="flex flex-col justify-center items-center gap-6 px-4 bg-white h-full w-full | md:flex-row"
        >
          <div class="-space-x-4 hidden lg:flex">
            <img
              class="w-10 h-10 bg-white border border-black rounded-full"
              src="~/assets/img/icon-avatar_01.svg"
              alt=""
            />
            <img
              class="w-10 h-10 bg-white border border-black rounded-full"
              src="~/assets/img/icon-avatar_04.svg"
              alt=""
            />
            <img
              class="w-10 h-10 bg-white border border-black rounded-full"
              src="~/assets/img/icon-avatar_02.svg"
              alt=""
            />
            <img
              class="w-10 h-10 bg-white border border-black rounded-full hidden | xl:block"
              src="~/assets/img/icon-avatar_03.svg"
              alt=""
            />
          </div>
          <div>
            <h2 class="f-stat m-0">
              <span class="text-base block | md:text-h5">2k+</span>
              <span class="font-body text-xxs text-gray-500 | md:text-sm">Trained students</span>
            </h2>
          </div>
        </div>
        <div
          class="flex justify-center items-center px-4 bg-white h-full w-full"
        >
          <h2 class="f-stat m-0">
            <span class="text-base block | md:text-h5">10yr+</span>
            <span class="font-body text-xxs text-gray-500 | md:text-sm">Experience</span>
          </h2>
        </div>
        <div
          class="flex justify-center items-center px-4 bg-white h-full w-full"
        >
          <h2 class="f-stat m-0">
            <span class="text-base block | md:text-h5">97%</span>
            <span class="font-body text-xxs text-gray-500 | md:text-sm">Passed 1st time</span>
          </h2>
        </div>
        <div
          class="flex flex-col justify-center items-center gap-6 px-4 bg-white h-full w-full md:flex-row-reverse"
        >
          <div class="hidden xl:flex">
            <img
              class="w-6 h-6 rounded-full"
              src="~/assets/img/icon-star.svg"
              alt=""
            />
            <img
              class="w-6 h-6 rounded-full"
              src="~/assets/img/icon-star.svg"
              alt=""
            />
            <img
              class="w-6 h-6 rounded-full"
              src="~/assets/img/icon-star.svg"
              alt=""
            />
            <img
              class="w-6 h-6 rounded-full"
              src="~/assets/img/icon-star.svg"
              alt=""
            />
            <img
              class="w-6 h-6 rounded-full"
              src="~/assets/img/icon-star.svg"
              alt=""
            />
          </div>
          <div>
            <h2 class="f-stat m-0">
              <span class="text-base block | md:text-h5">38+</span>
              <span class="font-body text-xxs text-gray-500 | md:text-sm">5 star reviews</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.c-stats {
    height: 10vh;
    height: 10svh;
    .l-container {
        padding: 0;
    }
}
</style>
