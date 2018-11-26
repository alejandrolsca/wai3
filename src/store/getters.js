export default {
    GET_TOTAL(state) {
        return state.cart.reduce((total, product) => {
            return total + product.pr_price
        }, 0)
    },
    GET_CATEGORYID(state) {
        return state.categoryId
    },
    GET_CATEGORIES(state) {
        return state.categories
    },
    GET_PRODUCTS(state) {
        return state.products.filter((product) => {
            return product.ca_id === state.categoryId
        })
    },
    GET_CART(state) {
        return state.cart
    },
}