<template>
  <div>
    <counter />
    <Navbar class="m-7" />
    <Navbar2 class="m-7" />
  </div>
</template>

<script>
import Counter from "../components/counter.vue";
import Navbar from "../components/navbar.vue";
import Navbar2 from "../components/navbar2.vue";

export default {
  components: {
    Counter,
    Navbar,
    Navbar2,
  },
  // date() {
  //     return{
  //     }
  // }
};
</script>

<style  scoped>
</style>