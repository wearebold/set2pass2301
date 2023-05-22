<template>
  <header class="site-header | py-5 fixed top-0 x-0 w-full">
    <div class="l-container | flex justify-between items-center">
      <div>
        <nuxt-link to="/" rel="home">
          <img
            src="/svg/logo-colour.svg"
            alt="Set To Pass - Driving School Logo"
            width="210"
          />
        </nuxt-link>
      </div>
      <nav class="inline-flex ml-auto font-display">
        <nuxt-link to="/about" class="text-xs mx-4">About</nuxt-link>
        <nuxt-link to="/stories" class="text-xs mx-4">Stories</nuxt-link>
        <nuxt-link to="/pricing" class="text-xs mx-4">Pricing</nuxt-link>
        <nuxt-link to="/faqs" class="text-xs mx-4">FAQ's</nuxt-link>

        <!-- <nuxt-link to="/posts">Posts</nuxt-link>  -->
      </nav>

      <nuxt-link to="/contact" class="c-btn c-btn--primary | py-5 px-5 ml-auto"><span class="relative z-1">Contact</span></nuxt-link>
    </div>
  </header>
</template>
