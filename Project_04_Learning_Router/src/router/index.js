//router adında bir klasör oluşturup içersine index.js adında bir javascript dosyası oluşturuyourz.
//Burada routing kurallarımızı yazacağız.

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //BUNLAR NE İŞE YARIYOR ARAŞTIRILIP YAZILACAK.
    routes:[
        {
            path:"/",
            name:"home",
            component: HomeView
        },
        {
            path: "/about",
            name:"about",
            component:AboutView
        }
    ]
})

export default router;