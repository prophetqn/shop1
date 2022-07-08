const state = () => ({
    items: []
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
    setCart (state, cart) {
        state.items = cart;
    },

    addItemToCart (state, item) {
        state.items.push(item);
    },

    modifyCartItemQuantity(state, { index, quantity }) {
        state.items[index].pivot.quantity_select = quantity;
    },

    deleteCartItem (state, index) {
        state.items.splice(index, 1);
    },

}

// actions
const actions = {
    async getCart({ state, commit }, userId) {
        const data = await getCartApi(userId);
        if (data) {
            if (data.units.length) {
                const cart = data.units.map(unit => {
                    const {id, ...restProps} = unit;
                    return {unit_id: id, ...restProps};
                });
                commit('setCart', cart);
                return;
            }
        }
        if (state.items.length) {
            updateCartApi({ authenticated: true, user: {id: userId} }, state.items);
        }
    },

    setCart({ commit }, cart) {
        commit('setCart', cart);
    },

    addItemToCart ({ rootState, state, commit }, item) {
        let existingItemIndex = state.items.findIndex(cartItem => cartItem.product.id === item.product.id && cartItem.unit_id === item.unit_id);
        if (existingItemIndex > -1) {
            commit('modifyCartItemQuantity', { 
                index: existingItemIndex, 
                quantity: Math.min(item.pivot.quantity_select + state.items[existingItemIndex].pivot.quantity_select, state.items[existingItemIndex].quantity_stock)
            });
        } else {
            commit('addItemToCart', item);
        }
        updateCartApi(rootState.auth, state.items);
    },

    modifyCartItemQuantity ({ rootState, state, commit }, { index, quantity }) {
        if (quantity > state.items[index].quantity_stock) {
            commit('modifyCartItemQuantity', { index: index, quantity: state.items[index].quantity_stock });
        } else if (quantity < 1) {
            commit('modifyCartItemQuantity', { index: index, quantity: 1 });
        } else {
            commit('modifyCartItemQuantity', { index: index, quantity: quantity });
        }
        updateCartApi(rootState.auth, state.items);
    },
    
    deleteCartItem ({ rootState, state, commit }, index) {
        commit('deleteCartItem', index);
        updateCartApi(rootState.auth, state.items);
    }
}

async function getCartApi(userId) {
    try {
        const response = await axios.get(`/api/cart/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function updateCartApi(auth, fullCart) {
    if (auth.authenticated) {
        const cart = fullCart.map(item => {
            return {unit_id: item.unit_id, quantity_select: item.pivot.quantity_select};
        });
        try {
            const response = await axios.put(`/api/cart/${auth.user.id}`, cart);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
