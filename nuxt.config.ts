// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.css"], 
    ssr: false,
    app:{
        baseURL:"/project-news-homepage-layout/",
        cdnURL: "https://mikespinks0401.github.io"
    },
    build:{
        transpile:["vuetify"]
    },
})
