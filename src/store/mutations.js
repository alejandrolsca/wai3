export default {
    INCREASE_TOTAL(state, amount) {
        state.total += amount
    },
    DECREASE_TOTAL(state, amount) {
        state.total -= amount
    },
    SET_CATEGORY(state, categoryId) {
        state.categoryId = categoryId
    },
    INCREASE_CART_PRODUCT(state, productId) {
        let product = state.cart.find(product => {
            return product.pr_id === productId
        })
        product.count += 1
    },
    DECREASE_CART_PRODUCT(state, productId) {
        let product = state.cart.find(product => {
            return product.pr_id === productId
        })
        product.count -= 1
    },
    ADD_TO_CART(state, product) {
        state.cart.push(product)

    },
    REMOVE_FROM_CART(state, index) {
        if (state.cart[index].count > 1) {
            state.cart[index].count -= 1
        } else {
            state.cart.splice(index, 1)
        }
    }
}