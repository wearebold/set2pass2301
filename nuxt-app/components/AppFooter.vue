<template>
    <footer class="site-footer" style="padding-top: var(--space-2xl);">
        <div class="l-container grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
                <nuxt-link to="/" rel="home">
                <img
                    src="/svg/logo-white.svg"
                    alt="Set To Pass - Driving School Logo"
                    width="160"
                    height="12"
                    loading="lazy"
                />
                </nuxt-link>
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
            <div class="">
                <h2 class="f-caps">SOCIAL</h2>
                <ul>
                    <li>
                        <NuxtLink to="https://www.facebook.com/passwithsharon/" rel="me" target="_blank">Facebook</NuxtLink>
                    </li>
                    <!-- <li>
                        <NuxtLink to="#">Twitter</NuxtLink>
                    </li> -->
                    <li>
                        <NuxtLink to="https://www.instagram.com/settopasswithsharon/" rel="me" target="_blank">Instagram</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://goo.gl/maps/bUS6Pewcczbz77qh7?coh=178571&entry=tt" rel="me" target="_blank">Google</NuxtLink>
                    </li>
                </ul></div>
            <div>
                <h2 class="f-caps">Contact</h2>
                <ul>
                    <li>
                        <NuxtLink to="07908248784" rel="tel">+44 7908248784</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="mailto:hello@settopass.co.uk">hello@settopass.co.uk</NuxtLink>
                    </li>
                </ul></div>
        </div>
        <div class="w-full h-px bg-white mt-8"></div>
        <div class="l-container">
            <small class="block py-8">&copy; 2023 Set to Pass. All rights reserved.</small>
        </div>
    </footer>
</template>