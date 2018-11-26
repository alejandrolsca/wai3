<template>
  <div class="home">
    <div class="columns">
      <div class="column is-2">
        <Categories/>
      </div>
      <div class="column is-6">
        <Products/>
      </div>
      <div class="column is-4">
        <Check/>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from '@/components/Categories'
import Products from '@/components/Products'
import Check from '@/components/Check'

export default {
    components: {
      Categories,
      Products,
      Check
    }
  }
</script>
