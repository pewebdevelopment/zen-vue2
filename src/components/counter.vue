<template>
  <div>
    <!-- Seperate Functions -->

    <h1>{{ Count }}</h1>
    <span class="spanclass">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </span>

    <!-- Single Function  -->

    <h1>{{ Count }}</h1>
    <span class="spanclass">
      <button @click="handleClick(1)">Increment 1</button>
      <button @click="handleClick(-1)">Decrement 1</button>
    </span>

    <br />

    <span class="spanclass">
      <button @click="handleClick(5)">Increment 5</button>
      <button @click="handleClick(-2)">Decrement 2</button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Count: 0,
    };
  },
  methods: {
    increment() {
      this.Count++;
    },
    decrement() {
      this.Count--;
    },

    handleClick(x) {
      this.Count = this.Count + x;
      // this refers to the data object
    },
  },
};
</script>


<style>
.spanclass {
}
</style>

// entity framework  
// Store Procedue