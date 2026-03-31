import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)//bunu nye yaptı bilmiyom araştırılcak

app.use(router)//bizim router kurallarımızı uygulaması için yazıldı galiba emin değilim

app.mount('#app')
