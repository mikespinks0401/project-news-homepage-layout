// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.css"], 
    ssr: false,
    build:{
        transpile:["vuetify"]
    },
})
