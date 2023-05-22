// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir:"./src",
  // ssr: false,
  css: [
    { src: "~/style/base.sass" }
  ],
  proxy: {
    "/": {
      target: "http://ewq1234.php.xdomain.jp"
    }
  }
})
