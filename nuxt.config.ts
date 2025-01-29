// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/i18n",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt"
    ],
    i18n: {
        strategy: "prefix_except_default",
        lazy: true,
        langDir: "locales",
        defaultLocale: "en",
        locales: [
            {
                name: "English",
                code: "en",
                file: "en.json"
            }
        ],
        experimental: {
            localeDetector: "./localeDetector.ts"
        }
    },
    tailwindcss: {
        viewer: false
    },
    compatibilityDate: "2024-08-19",
    devtools: {
        enabled: true
    },
})
