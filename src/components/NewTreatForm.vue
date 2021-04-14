<template>
  <form id="add-treat-form" @submit.prevent="addTreat">
    <h2>Add new treat:</h2>
    <div class="form-group">
      <label for="id">Id:</label>
      <input type="text" name="id" v-model="form.id" />
    </div>
    <div class="form-group">
      <label for="type">Type:</label>
      <input type="text" name="type" v-model="form.type" />
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" name="name" v-model="form.name" />
    </div>
    <div class="form-group">
      <label for="topping">Topping:</label>
      <input type="text" name="topping" v-model="form.topping" />
    </div>
    <button type="submit">Add Treat</button>
  </form>
</template>

<script>
export default {
  name: "NewTreatForm",
  props: {
    value: String,
  },
  data() {
    return {
      form: {
        id: "",
        type: "",
        name: "",
        topping: "",
      },
    };
  },
  methods: {
    addTreat() {
      this.$emit("newTreat", this.form);
      this.resetForm();
    },
    resetForm() {
      this.form = {
        id: "",
        type: "",
        name: "",
        topping: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  text-align: left;
}

form input {
  border-radius: 0;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}

form button {
  background: #0a122a;
  padding: 0.5rem 0.75rem;
  color: #fbfaf8;
  font-size: 1rem;
  cursor: pointer;
}

.form-group {
  display: flex;
  flex-direction: row;
}

.form-group label {
  flex-basis: 100px;
}

.form-group input {
  flex-grow: 1;
}
</style>
