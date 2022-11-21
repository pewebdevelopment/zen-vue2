<template>
  <div>
    <!-- Seperate Functions -->

    <h1 class="font-extrabold text-5xl p-5">{{ Count }}</h1>

    <span class="spanclass">
      <!-- The decrement 1 button -->
      <button
        class="
          relative
          inline-flex
          items-center
          justify-center
          p-0.5
          mb-2
          mr-2
          overflow-hidden
          text-sm
          font-medium
          text-gray-900
          rounded-lg
          group
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          group-hover:from-purple-600 group-hover:to-blue-500
          hover:text-white
          dark:text-white
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800
        "
      >
        <span
          class="
            relative
            px-5
            py-2.5
            transition-all
            ease-in
            duration-75
            bg-white
            dark:bg-gray-900
            rounded-md
            group-hover:bg-opacity-0
          "
          @click="handleClick(-1)"
        >
          Decrement 1
        </span>
      </button>
      <!-- The increment 1 button -->
      <button
        class="
          relative
          inline-flex
          items-center
          justify-center
          p-0.5
          mb-2
          mr-2
          overflow-hidden
          text-sm
          font-medium
          text-gray-900
          rounded-lg
          group
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          group-hover:from-purple-600 group-hover:to-blue-500
          hover:text-white
          dark:text-white
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800
        "
      >
        <span
          class="
            relative
            px-5
            py-2.5
            transition-all
            ease-in
            duration-75
            bg-white
            dark:bg-gray-900
            rounded-md
            group-hover:bg-opacity-0
          "
          @click="handleClick(1)"
        >
          Increment 1
        </span>
      </button>
    </span>

    <br />

    <span class="spanclass">
      <!-- The decrement 2 button -->
      <button
        class="
          relative
          inline-flex
          items-center
          justify-center
          p-0.5
          mb-2
          mr-2
          overflow-hidden
          text-sm
          font-medium
          text-gray-900
          rounded-lg
          group
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          group-hover:from-purple-600 group-hover:to-blue-500
          hover:text-white
          dark:text-white
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800
        "
      >
        <span
          class="
            relative
            px-5
            py-2.5
            transition-all
            ease-in
            duration-75
            bg-white
            dark:bg-gray-900
            rounded-md
            group-hover:bg-opacity-0
          "
          @click="handleClick(-2)"
        >
          Decrement 2
        </span>
      </button>
      <!-- The increment 5 button -->
      <button
        class="
          relative
          inline-flex
          items-center
          justify-center
          p-0.5
          mb-2
          mr-2
          overflow-hidden
          text-sm
          font-medium
          text-gray-900
          rounded-lg
          group
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          group-hover:from-purple-600 group-hover:to-blue-500
          hover:text-white
          dark:text-white
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800
        "
      >
        <span
          class="
            relative
            px-5
            py-2.5
            transition-all
            ease-in
            duration-75
            bg-white
            dark:bg-gray-900
            rounded-md
            group-hover:bg-opacity-0
          "
          @click="handleClick(5)"
        >
          Increment 5
        </span>
      </button>
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
</style>

// entity framework  
// Store Procedue