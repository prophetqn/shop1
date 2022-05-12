require('./bootstrap');

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();


import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import ProductLists from './components/ProductLists.vue';
import Layout from './components/Layout.vue';

const routes = [
    {path: '/', component: ProductLists},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = createApp({});

app.use(router);

app.component('layout', Layout);
app.component('product-lists', ProductLists);

app.mount("#app");
