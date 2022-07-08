const state = () => ({
    info: {
        name: '',
        email: '',
        phone: '',
        address: '',
        ward: '',
        district: '',
        province: '',
        note: ''
    },
    shippingFee: undefined
})

// getters
const getters = {
    totalItems: (state) => {
        return state.items.reduce(((total, item) => total += item.pivot.quantity_select), 0)
    },

    totalPrice: (state) => {
        return state.items.reduce(((total, item) => { 
            return total + item.pivot.quantity_select * item.product.exact_price
        }), 0);
    }
}

// mutations
const mutations = {
    setOrderInfo (state, { key, value }) {
        state.info[key] = value;
    },

    resetOrder (state) {
        state.info = {
            name: '',
            email: '',
            phone: '',
            address: '',
            ward: '',
            district: '',
            province: '',
            note: ''
        }
    },
}

// actions
const actions = {
    setOrderInfo ({ commit }, {key, value}) {
        commit('setOrderInfo', { key: key, value: value });
    },

    resetOrder ({ commit }) {
        commit('resetOrder');
    },

    async createOrder ({ commit }, userId) {
        try {
            const response = await axios.post(`/api/order/${userId}`); 
            console.log(response);
            if (response.data) commit('resetOrder');
        } catch (error) {
            console.log(error);
        }
    },
}

function createOrderApi(userId) {
    try {
        return axios.post(`/api/order/${userId}`);
    } catch (error) {
        console.log(error);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
