export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'DentiMéxico in Tijuana',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'DentiMéxico',
        name: 'Dental Center in Tijuana',
        content:
          'Dental, Tijuana, Dentist, Crowns, Root Canal, White fillings, Brackets, Dental implants, endodontist, orthodontist, periodontist, Mexico, cheap, affordable, price, cost'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // SCSS file in the project
    '@/assets/scss/argon.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue2-transitions',
    '~/plugins/argon-kit',
    '~/plugins/globalComponents',
    '~/plugins/globalDirectives',
    '~/plugins/vueLazyLoad',
    '~/plugins/v-click-outside',
    '~/plugins/argon'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
