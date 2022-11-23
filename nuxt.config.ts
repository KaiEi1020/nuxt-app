// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecre: '125',
    public: {
      apiBase: '/api/2345ty'
    }
  },
  ssr: true,
  nitro: {
    devProxy: {
      '/api/itable': {
        target: 'http://xxxx.com',
        changeOrigin: true,
      },
    }
  },
})
