import { Link } from "./.nuxt/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:['@nuxtjs/tailwindcss'],
    app: {
       head: {
            title: 'uos club',
            meta: [
                { name: 'description',content: 'uos club' },
            ],
            link: [
                { rel: 'stylesheet',href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]            
       }    
    }
})
