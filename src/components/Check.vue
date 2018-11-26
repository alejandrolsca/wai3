<template>
  <div class="cart"> 
        <div class="card rounded-corners is-clipped">
        <div class="card-content">
          <div v-for="(product, index) in cart" :key="product.pr_id">
          <span class="is-size-7 has-text-dark has-text-left">
          {{product.count}} {{product.title}}<br>
          ${{product.pr_price}} - Total: {{(product.pr_price * product.count).toFixed(2)}}
          </span>
          <a v-on:click="remove_from_cart(index)" class="button is-danger is-outlined is-small">
          <span> Remove </span>
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </a>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters({
      cart: 'GET_CART'
    })
  },
  methods: {
    remove_from_cart(index) {
      this.$store.dispatch('REMOVE_FROM_CART', index)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
