<template>
  <div id="todo" class="mx-auto max-w-screen-md flex flex-col gap-4">
    <h1 class="text-4xl m-7 font-bold">Zenith's ToDos Component</h1>

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

    <!-- Table for Displaying the Todos -->

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="
            text-xs text-gray-700
            uppercase
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <tr>
            <th scope="col" class="py-3 px-6">Serial Number</th>
            <th scope="col" class="py-3 px-6">ToDo Name</th>

            <th scope="col" class="py-3 px-6">Action</th>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    rounded
                    border-gray-300
                    focus:ring-blue-500
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600
                  "
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="todo in ToDos"
            :key="todo.srNo"
            class="
              bg-white
              border-b
              dark:bg-gray-800 dark:border-gray-700
              hover:bg-gray-50
              dark:hover:bg-gray-600
            "
          >
            <th
              scope="row"
              class="
                py-4
                px-6
                font-medium
                text-gray-900
                whitespace-nowrap
                dark:text-white
              "
            >
              {{ todo.srNo }}
            </th>
            <td class="py-4 px-6">{{ todo.name }}</td>

            <td class="flex items-center py-4 px-6 space-x-3">
              <button
                id="edit"
                class="
                  font-medium
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                "
                @click="editToDo(todo.name)"
              >
                Edit
              </button>
              <button
                id="delete"
                class="
                  font-medium
                  text-red-600
                  dark:text-red-500
                  hover:underline
                "
                @click="deleteToDo(todo.srNo)"
              >
                Delete
              </button>
            </td>
            <td class="p-4 w-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    rounded
                    border-gray-300
                    focus:ring-blue-500
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600
                  "
                  @click="toggleToDo"
                />
              </div>
            </td>
          </tr>
        </tbody>
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
