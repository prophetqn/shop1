require('./bootstrap');

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();


import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import ExampleComponent from './components/ExampleComponent.vue';

const routes = [
    {path: '/', component: ExampleComponent},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = createApp({});

app.use(router);

app.component('example-component', ExampleComponent);

app.mount("#app");
