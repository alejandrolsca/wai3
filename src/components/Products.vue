<template>
  <div class="products">
      <div v-for="product in products" :key="product.pr_id">
        <Product :product="product"/>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Product from "@/components/Product"

export default {
  name: "Products",
  components:{
    Product
  },
  computed: {
    ...mapGetters({
      products: 'GET_PRODUCTS'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
