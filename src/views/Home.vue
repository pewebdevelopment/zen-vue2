<template>
  <div class="home">
    <Navbar />

    <!-- table -->
    <table>
      <tr>
        <th><h1>ID</h1></th>
        <th><h1>First Name</h1></th>
        <th><h1>Last Name</h1></th>
      </tr>
      <tr v-for="student of studentList" :key="student.id">
        <td>{{ student.id }}</td>
        <td>{{ student.firstName }}</td>
        <td>{{ student.lastName }}</td>
      </tr>
    </table>
    <!-- form -->
    <div>
      <form class="myform" @submit.prevent="">
        <span
          ><label for="fname">First name:</label>
          <input
            v-model="formdata.firstName"
            type="text"
            id="fname"
            name="fname"
          />
        </span>

        <br />
        <span
          ><label for="lname">Last name:</label>
          <input
            v-model="formdata.lastName"
            type="text"
            id="lname"
            name="lname"
          />
        </span>

        <br />
        <span
          ><label for="PEID">PEID:</label>
          <input v-model="formdata.id" type="text" id="peid" name="peid" />
        </span>

        <br />
        <button @click="handleRest">Reset</button>
        <button @click="handleClick">Submit</button>
      </form>

      <div v-show="showLoader" class="loader">
        <img src="../assets/images/loader.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/navbar.vue";
// @ is an alias to /src

export default {
  name: "Home",

  components: [Navbar],

  data() {
    return {
      studentList: [
        { firstName: "Ojas", lastName: "Deshpande", id: "PE01" },
        { firstName: "Aadya", lastName: "Deshpande", id: "PE02" },
        { firstName: "Nihar", lastName: "Maphankar", id: "PE03" },
        { firstName: "Soumil", lastName: "Kelkar", id: "PE04" },
      ],

      formdata: {},

      showLoader: false,

      // v-model creates the keys automatically for the object
    };
  },

  methods: {
    handleClick() {
      console.log(this.formdata);

      this.showLoader = true;

      this.studentList.push(this.formdata);

      axios
        .post("/wrongURL-that-we-dont-have", {
          firstName: this.formdata.firstName,
          lastName: this.formdata.lastName,
          id: this.formdata.id,
        }) // promise is initiated
        .then(function (response) {
          console.log(response);
        }) // if promise is successful
        .catch(function (error) {
          console.log(error);
        }) // if promise is unsuccessful
        .finally(() => {
          console.log(this.showLoader);
          this.showLoader = false;
        }); // if promise is resolved
    },

    handleRest() {
      this.formdata = {};
    },
  },
};
</script>
