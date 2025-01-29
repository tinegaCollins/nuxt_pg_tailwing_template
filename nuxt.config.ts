export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [
        "@nuxt/ui",
        "@nuxtjs/tailwindcss",
        "@nuxt/icon",
        "@prisma/nuxt",
        "nuxt-auth-utils",
        "notivue/nuxt",
        "@nuxt/image",
        "@nuxt/fonts",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt"
    ],
    css: [
        "~/assets/style.css",
        "notivue/notification.css",
        "notivue/animations.css",
    ],
    devtools: {enabled: true},
    notivue: {
        limit: 3,
        avoidDuplicates: true,
        notifications: {
            global: {
                duration: 5000,
            },
        },
    },
    vite: {
        resolve: {
            alias: {
                ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js"
            }
        }
    }
})
