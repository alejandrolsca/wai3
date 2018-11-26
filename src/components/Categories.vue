<template>
  <div class="categories">
      <div v-for="category in categories" :key="category.ca_id" class="text item">
        <div v-on:click="set_category(category.ca_id)" class="card rounded-corners is-clipped">
          <div class="card-image">
          <figure class="image is-1x1">
              <img :src="require('@/assets/hamburger.png')">                  
          </figure>
        </div>
        <div class="card-content">
          <p class="s-size-5 has-text-dark has-text-centered">
          {{category.ca_name}}
          </p>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Categories",
  data() {
    return {
      /**
       * @type {{id: number, name: string }[]} number - A number
       */
      //categories: []
    };
  },
  computed: {
    ...mapGetters({
      categories: "GET_CATEGORIES"
    })
  },
  methods: {
    set_category(categoryId) {
      this.$store.dispatch("SET_CATEGORY", categoryId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
