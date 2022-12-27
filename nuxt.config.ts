// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '学习使者',
      meta: [
        { name: 'description', content: '学习使者' }
      ],
    },
    // 过渡效果
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  // typescript类型检查
  typescript: {
    strict: true
  },
  css: ["vuetify/lib/styles/main.sass", '@/assets/scss/common.scss'],
  build: {
    transpile: ["vuetify"]
  },
  vite: {
    define: {
      "process.env.DEBUG": false
    }
  }
})
