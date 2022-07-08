import './bootstrap'
import { createApp } from 'vue'
import router from './router'
import store from './store'

import Layout from './components/layout/Layout.vue'

const app = createApp({}).component('layout', Layout).use(router).use(store).mount("#app");