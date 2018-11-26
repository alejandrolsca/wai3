<template>
  <div class="product">
      <div class="card rounded-corners">
          <div class="card-content">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-96x96">
                        <img class="rounded-corners" :src="require('@/assets/hamburger.png')">                  
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <div class="is-size-5 has-text-dark has-text-left">{{product.title}}</div>
                        <div class="is-size-6 has-text-grey has-text-left" v-line-clamp="2">{{product.pr_name}}</div>
                    </div>
                </div>
            </article>
            <div class="test level">
                    <div class="level-left">
                        <div class="level-item">
                            <div class="has-text-warning">
                                <i class="material-icons md-24">star</i>
                                <i class="material-icons md-24">star</i>
                                <i class="material-icons md-24">star</i>
                                <i class="material-icons md-24">star</i>
                                <i class="material-icons md-24">star</i>
                            </div>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <a class="button is-success is-outlined" v-on:click="add_to_cart(product.pr_id)">${{product.pr_price.toFixed(2)}}</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
/**
 * @typedef {Object} Product
 * @property {number} pr_id
 * @property {string} pr_image
 * @property {string} pr_name
 * @property {number} pr_price
 */
export default {
  name: "Product",
  props: {
    /** @type {Product} */
    product: Object
  },
  methods: {
    add_to_cart(productId) {
      this.$store.dispatch("ADD_TO_CART", productId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
