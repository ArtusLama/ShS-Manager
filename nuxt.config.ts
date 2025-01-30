// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/html-validator",
        "@vite-pwa/nuxt",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "shadcn-nuxt",
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
                language: "en-*",
                file: "en.json",
                isCatchallLocale: true
            }
        ],
        experimental: {
            localeDetector: "./localeDetector.ts"
        }
    },
    tailwindcss: {
        viewer: false
    },
    pwa: {
        registerType: "autoUpdate",
        manifestFilename: "site.webmanifest",
        registerWebManifestInRouteRules: true,
        devOptions: {
            enabled: true,
            suppressWarnings: true,
            navigateFallback: "/",
            type: "module"
        },
        manifest: {
            name: "ShS Förder Manager",
            short_name: "ShS Förder",
            theme_color: "#ffffff",
            background_color: "#ffffff",
            display: "standalone",
            orientation: "portrait",
            icons: [
                {
                    src: "pwa-96x96.png",
                    sizes: "96x96",
                    type: "image/png",
                    purpose: "any"
                },
                {
                    src: "pwa-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                    purpose: "any"
                },
                {
                    src: "pwa-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "any"
                },
            ],
        }
    },
    app: {
        head: {
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "icon", type: "image/png", href: "/favicon.png", sizes: "32x32" },
                { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
                { rel: "apple-touch-startup-image", href: "/apple-touch-icon.png" },
            ],
            meta: [
                { name: "apple-mobile-web-app-title", content: "ShS Förder" },
                { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }
            ]
        }
    },
    compatibilityDate: "2024-08-19",
    devtools: {
        enabled: true
    },
})
