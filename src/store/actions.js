export default {
    INCREASE_TOTAL({ commit }, amount) {
        setTimeout(() => {
            commit('INCREASE_TOTAL', amount)
        }, 100)
    },
    SET_CATEGORY({ commit }, categoryId) {
        setTimeout(() => {
            commit('SET_CATEGORY', categoryId)
        }, 100)
    },
    ADD_TO_CART({ commit, state }, productId) {
        setTimeout(() => {
            if (!productId) throw new Error('Invalid Product ID!');
            let exists = state.cart.find(({ pr_id }) => {
                return pr_id === productId
            })

            if (exists) {
                commit('INCREASE_CART_PRODUCT', productId)
                return;
            }
            let product = state.products.find(({ pr_id }) => {
                return pr_id === productId
            })
            if (!product) throw new Error('Product not found!');
            product.count = 1;
            commit('ADD_TO_CART', product)
        }, 100)
    },
    REMOVE_FROM_CART({ commit }, productId) {
        setTimeout(() => {
            commit('REMOVE_FROM_CART', productId)
        }, 100)
    }
}