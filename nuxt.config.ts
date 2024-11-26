// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    baseURL: '/',
    head: {
      title:'Projects || Neeraj Maurya',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My amazing site.' }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  css: ['~/assets/scss/main.scss'],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    }
  },
  plugins: [
     '~/plugins/vuedraggable'
  ]
})