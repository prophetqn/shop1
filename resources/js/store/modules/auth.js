import Cookies from 'js-cookie'

const state = () => ({
    authenticated: false,
    user: {}
})

// getters
const getters = {
    authenticate: (state) => {
        state.authenticated = true;
    },

    user: (state) => {
        return state.user;
    }
}

// mutations
const mutations = {
    setAuthenticated (state, value) {
        state.authenticated = value;
    },

    setUser (state, user) {
        state.user = {...user};
    }
}

// actions
const actions = {
    async login ({ state, commit, dispatch }) {
        try {
            const response = await axios.get('/api/user');
            commit('setAuthenticated', true);
            commit('setUser', {...response.data});

            //update cart via database
            dispatch('cart/getCart', state.user.id, {root: true});

            //update order info
            dispatch('order/setOrderInfo', {key: 'name', value: state.user.name}, {root:true})
            dispatch('order/setOrderInfo', {key: 'email', value: state.user.email}, {root:true})
            if (state.user.phone !== null) dispatch('order/setOrderInfo', {key: 'phone', value: state.user.phone}, {root:true})
        } catch (error) {
            commit('setAuthenticated', false);
            commit('setUser', {});
            console.log(error.response.data);
        }
    },

    async logout ({ commit, dispatch }) {
        commit('setAuthenticated', false);
        commit('setUser', {});

        //delete cart
        dispatch('cart/setCart', [], {root: true});
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}