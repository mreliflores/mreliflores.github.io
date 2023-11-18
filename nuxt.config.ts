// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: ""
  },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true
    }
  },
  components: [
    { path: '~/components/atoms',
      pathPrefix: false
    },
    { path: '~/components/molecules',
      pathPrefix: false
    },
    { path: '~/components/organism',
      pathPrefix: false
    },
    '~/components',
  ],
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],
  googleFonts: {
    families: {
      Nunito: true,
    }
  }
})
