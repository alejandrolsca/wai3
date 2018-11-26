<template>
  <div class="total">
    <el-input
            placeholder="Bill"
            v-model="total">
            <i slot="prefix" class="el-input__icon el-icon-edit-outline"></i>
    </el-input>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Total",

  computed: {
    ...mapGetters({
        total: 'GET_TOTAL'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
