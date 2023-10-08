// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-windicss"],
  runtimeConfig: {
    apiKey: "",
    apiBaseUrl: "",
    public: {
      imgBaseUrl: "",
    },
  },
  devtools: { enabled: true },
});
