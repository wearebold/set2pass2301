import tailwindTypography from '@tailwindcss/typography'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssr: true,
    pages: true,
    // router: {
    //   options: {
    //     strict: true,
    //   },
    // },
    nitro: {
      preset: 'netlify', 
      prerender: {
        crawlLinks: true
      }     
   },  
   build: {
    transpile: ['gsap'],
   },
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    css: [
      '@/assets/scss/app.scss'
    ],
    // vite: {
    //   css: {
    //     preprocessorOptions: {
    //       scss: {
    //         additionalData: '@use "@/assets/scss/app.scss" as *;'
    //       }
    //     }
    //   }
    // },  
    app: {
        head: {
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                // { src: 'https://awesome-lib.js' }
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                { rel: 'stylesheet', href: 'https://use.typekit.net/zix8cwn.css' }
            ],
        }
    },
    // Defaults options
    tailwindcss: {
      // add '~tailwind.config` alias
      exposeConfig: true
    }
})
