export default {
  head: {
    title: 'home24uz',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    'ant-design-vue/dist/antd.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    '@/assets/css/main.css',
    '@/assets/css/fonts.css',
  ],

  plugins: [
    '~/plugins/antd-ui',
    '~/plugins/global-mixin.js',
    '~/plugins/axios',
    '~/plugins/v-mask'
  ],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios'],

  build: {},

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'categoryProduct',
        path: '/category/:category/:subCategory/:subSubCategory/:categoryProduct',
        component: resolve(__dirname, 'components/pages/categoryProduct.vue'),
      })
    },
  },

  components: true,
}
