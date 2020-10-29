export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'relatom-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#5a67d8',
    height: '5px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-tailwind',
    '~/plugins/vue-luxon',
    "~/plugins/vee-validate.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  //components: true,

  components: [
    {
      path: '~/components/layouts/'
    },
    {
      path: '~/components/ui/'
    },
    {
      path: '~/components/ui/t',
      prefix: 'T'
    },
    {
      path: '~/components/ui/form',
      prefix: 'Form'
    },
    {
      path: '~/components/events',
      prefix: 'events'
    }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/http'
  ],
  
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vee-validate/dist/rules"],
  },

  i18n: {
    locales: [
      {
        name: 'Français',
        code: 'fr',
        file: 'fr.js'
      },
      {
        name: 'Enflish',
        code: 'en',
        file: 'en.js'
      },
    ],
    lazy: true,
    langDir: 'assets/lang/',
    defaultLocale: 'fr',
  }
}
