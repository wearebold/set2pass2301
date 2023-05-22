<template>
    <footer class="site-footer" style="padding-top: var(--space-2xl);">
        <div class="l-container grid grid-cols-2 md:grid-cols-4">
            <div>
                <nuxt-link to="/" rel="home">
                <img
                    src="/svg/logo-mark-colour.svg"
                    alt="Set To Pass - Driving School Logo"
                    width="32"
                    height="35"
                />
                </nuxt-link>
            </div>
            <div>
                <h2 class="f-caps">MENU</h2>
                <ul>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/stories">Stories</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/pricing">Pricing</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/faqs">FAQ's</NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="f-caps">SOCIAL</h2>
                <ul>
                    <li>
                        <NuxtLink to="#">Facebook</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">Twitter</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">Instagram</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">Google</NuxtLink>
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
        <div class="w-full h-px bg-orange-500 mt-8"></div>
        <div class="l-container">
            <small class="block py-8">&copy; 2023 Set to pass. All rights reserved.</small>
        </div>
    </footer>
</template>