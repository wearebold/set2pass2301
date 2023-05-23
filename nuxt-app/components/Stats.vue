<template>
  <article class="c-stats border-y border-black">
    <div class="l-container l-container--1440 | h-full">
      <div
        class="grid gap-px grid-cols-4 justify-center justify-items-center items-center bg-black h-full"
      >
        <div
          class="flex flex-col justify-center items-center gap-6 p-6 bg-white h-full w-full | md:flex-row"
        >
          <div class="flex -space-x-4">
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
              <span class="font-body text-sm text-gray-500">Trained students</span>
            </h2>
          </div>
        </div>
        <div
          class="flex justify-center items-center p-6 bg-white h-full w-full"
        >
          <h2 class="f-stat m-0">
            <span class="text-h5 block">10yr+</span>
            <span class="font-body text-sm text-gray-500">Experience</span>
          </h2>
        </div>
        <div
          class="flex justify-center items-center p-6 bg-white h-full w-full"
        >
          <h2 class="f-stat m-0">
            <span class="text-h5 block">97%</span>
            <span class="font-body text-sm text-gray-500">Passed 1st time</span>
          </h2>
        </div>
        <div
          class="flex flex-col justify-center items-center gap-6 p-6 bg-white h-full w-full md:flex-row-reverse"
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
              <span class="font-body text-sm text-gray-500">5 star reviews</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.c-stats {
    height: 10vh;
    height: 10svh;
}
</style>
