<template>
    <footer class="site-footer" style="padding-top: var(--space-2xl);">
        <div class="l-container l-container--1440 | grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
                <nuxt-link to="/" rel="home">
                <img
                    class="mb-12"
                    src="/svg/logo-white.svg"
                    alt="Set To Pass - Driving School Logo"
                    width="200"
                    height="15"
                    loading="lazy"
                />
                </nuxt-link>

                <div class="grid grid-cols-2 gap-4 items-center">
                <img
                    src="/svg/dia.svg"
                    alt="DIA"
                    width="80"
                    height="80"
                    loading="lazy"
                />
                <img
                    src="/svg/pass-plus.svg"
                    alt="DIA"
                    width="80"
                    height="80"
                    loading="lazy"
                />
                </div>
            </div>
            <div>
                <h2 class="f-caps">MENU</h2>
                <ul>
                    <li>
                        <NuxtLink to="/about">About Us</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/stories">Stories</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/pricing">Pricing</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/faqs" aria-label="Frequently Asked Questions">FAQ's</NuxtLink>
                    </li>
                </ul>
            </div>            
            <div>
                <h2 class="f-caps">Contact</h2>
                <ul>
                    <li>
                        <NuxtLink to="07908248784" rel="tel">Telephone</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="mailto:sharon@settopass.co.uk">Email</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="">
                <h2 class="f-caps">SOCIAL</h2>
                <ul class="flex flex-row gap-4 items-center">
                    <li>
                        <NuxtLink to="https://www.facebook.com/passwithsharon/" rel="me" target="_blank" aria-label="Visit our Facebook">
                            <svg fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://www.instagram.com/settopasswithsharon/" rel="me" target="_blank" aria-label="Visit our Instagram">
                            <svg fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://goo.gl/maps/bUS6Pewcczbz77qh7?coh=178571&entry=tt" rel="me" target="_blank" aria-label="Visit our Google Business Page">
                            <svg fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-full h-px bg-white mt-8"></div>
        <div class="l-container l-container--1440">
            <small class="block py-8">&copy; {{ currentYear }} Set to Pass. All rights reserved.</small>
        </div>
    </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>