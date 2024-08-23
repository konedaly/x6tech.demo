import { build } from "nuxt";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@prisma/nuxt",
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icons',
    //"@nuxtjs/supabase",
    "nuxt-lodash",
    '@nuxt/icon',
  ],
  runtimeConfig:{
    public:{
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app : {
    head:{
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true}
      ],
    }
  },
  build:{
    transpile:['pinia-plugin-persistedstate'],
  },
  experimental: {
    watcher: "chokidar",
 },
})