<template>
  <article class="c-stats border-y border-black">
    <div class="l-container l-container--1440 | h-full">
      <div
        class="grid gap-px grid-cols-1 justify-center justify-items-center items-center bg-black h-full sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
          class="c-stat__item flex flex-row justify-center items-center gap-6 bg-white h-full w-full "
        >
          <div class="-space-x-4 flex">
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
              class="w-10 h-10 bg-white border border-black rounded-full"
              src="~/assets/img/icon-avatar_03.svg"
              alt=""
            />
          </div>
          <div>
            <h2 class="f-stat m-0">
              <span class="text-h5 block">2k+</span>
              <span class="font-body text-xs text-gray-500 | md:text-sm">Trained students</span>
            </h2>
          </div>
        </div>
        <div
          class="c-stat__item justify-center items-center px-2 bg-white h-full w-full hidden lg:flex"
        >
          <h2 class="f-stat m-0">
            <span class="text-base block | md:text-h5">10yr+</span>
            <span class="font-body text-xs text-gray-500 | md:text-sm">Experience</span>
          </h2>
        </div>
        <div
          class="c-stat__item  justify-center items-center px-2 bg-white h-full w-full hidden lg:flex"
        >
          <h2 class="f-stat m-0">
            <span class="text-base block | md:text-h5">97%</span>
            <span class="font-body text-xs text-gray-500 | md:text-sm">Passed 1st time</span>
          </h2>
        </div>
        <div
          class="c-stat__item  flex flex-row justify-center items-center gap-6 bg-white h-full w-full lg:flex-row-reverse"
        >
          <div class="flex">
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
              <span class="text-h5 block">38+</span>
              <span class="font-body text-xs text-gray-500 | md:text-sm">5 star reviews</span>
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
    // height: 20vh;
    // height: 20svh;
    .l-container {
        padding: 0;
    }
}

.c-stat__item {
    min-height: 10svh;
}
</style>
