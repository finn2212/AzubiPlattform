// nuxt.config.js
export default {
  ssr: true,

  // Ensure your target is set to 'server' for full SSR capabilities
  target: 'server',
  modules: ['@nuxtjs/tailwindcss'],

  // modules: [
  //   '@nuxtjs/tailwindcss',
  // ],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: [
      {
        path: '~/components',
        global: true, // Automatically import components globally
      },
    ],
  },
  devtools: true,
  compatibilityDate: '2024-11-14'
};