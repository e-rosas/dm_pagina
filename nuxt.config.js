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
        hid: 'keywords',
        name: 'keywords',
        content:
          'Dental, Tijuana, Dentist, Crowns, Root Canal, White fillings, Brackets, Dental implants, endodontist, orthodontist, periodontist, Mexico, cheap, affordable, price, cost, Dentista, Aseguranza'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'DentiMexico is the Dental Center integrated to Hospital México, providing affordable dental care for everyone. Call now for any questions you may have.'
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
  plugins: ['~/plugins/vue2-transitions', '~/plugins/argon'],
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
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],
  sitemap: {
    hostname: 'https://dentimexico.com/'
    // gzip: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  }
}
