// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#095095'//colors.red.darken1, // #E53935
          }
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
