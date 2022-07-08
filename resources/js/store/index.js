import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import cart from './modules/cart.js'
import auth from './modules/auth.js'
import order from './modules/order.js'

const vuexLocal = new VuexPersistence ({
    storage: window.localStorage,
    modules: ['cart']
})

export default createStore({
    modules: {
        auth,
        cart,
        order
    },
    plugins: [vuexLocal.plugin]
})