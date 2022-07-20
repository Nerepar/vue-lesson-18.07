import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import Content from "@/components/router/Content/Content";
import Employe from "@/components/router/Empoyes/Employe";


const routes = [
    { path: '/', component: Content, name: 'Home' },
    { path: '/employs', component: Employe },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app')