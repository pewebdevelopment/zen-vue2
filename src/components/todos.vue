<template>
  <div>
    <h1>ToDo Component</h1>
    <div class="container">
      <label><h3>ToDo:</h3></label>
      <input v-model="nameofToDo" type="text" />
      <button @click="addtodo">Add Tods</button>
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
