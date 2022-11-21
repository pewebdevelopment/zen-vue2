<template>
  <div id="todo" class="">
    <h1 class="text-4xl">ToDos Component</h1>

    <div class="flex justify-center mx-auto max-w-md">
      <div
        class="
          inline-flex
          items-center
          px-3
          text-sm text-gray-900
          bg-gray-200
          rounded-l-md
          border border-r-0 border-gray-300
          dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600
        "
      >
        #
      </div>
      <input
        v-model="nameofToDo"
        type="text"
        id="website-admin"
        class="
          rounded-none rounded-r-lg
          bg-gray-50
          border border-gray-300
          text-gray-900
          focus:ring-blue-500 focus:border-blue-500
          block
          flex-1
          min-w-0
          w-full
          text-sm
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        placeholder="Add to dos"
      />
      <button
        @click="addtodo"
        type="button"
        class="
          text-white
          bg-gray-800
          hover:bg-gray-900
          focus:outline-none focus:ring-4 focus:ring-gray-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          mx-5
          dark:bg-gray-800
          dark:hover:bg-gray-700
          dark:focus:ring-gray-700
          dark:border-gray-700
        "
      >
        Add ToDos
      </button>
    </div>

    <div class="table-container">
      <table>
        <tr>
          <th>Sr Number</th>
          <th>ToDo</th>
          <th>Actions</th>
        </tr>
        <tr v-for="todo in ToDos" :key="todo.srNo">
          <td>{{ todo.srNo }}</td>
          <td>{{ todo.name }}</td>
          <td>
            <button class="edit" @click="editToDo(todo.name)">Edit</button>
            <button class="delete" @click="deleteToDo(todo.srNo)">
              Delete
            </button>
            <input type="checkbox" @click="toggleToDo" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameofToDo: "", // this is the varible that will store the input value from the vmodel
      ToDos: [
        { srNo: 1, name: "Walk dog" },
        { srNo: 2, name: "Drink Water" },
      ],
    };
  },

  methods: {
    addtodo() {
      this.ToDos.push({ srNo: this.ToDos.length + 1, name: this.nameofToDo });
      // this.ToDos.push({ srNo: Math.random(), name: this.nameofToDo });

      console.log(this.nameofToDo);
    },
    editToDo() {},

    deleteToDo(srNo) {
      console.log(srNo);

      this.ToDos = this.ToDos.filter((toDoobj) => {
        console.log(toDoobj.srNo, srNo);
        return toDoobj.srNo !== srNo;
      });
    },

    toggleToDo() {},
  },
};
</script>

<style scoped>
.h3 {
  display: inline-block;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
