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

  css: ['ant-design-vue/dist/antd.css'],

  plugins: ['@/plugins/antd-ui'],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  build: {},
}
components: true
