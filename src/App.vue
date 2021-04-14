<template>
  <div id="app">
    <div class="treat-header">
      <h1>Tasty treats</h1>
      <Search v-model="searchVal" />
    </div>
    <BakedTreats :treats="filteredTreats" />
    <NewTreatForm @newTreat="addNewTreat" />
  </div>
</template>

<script>
import NewTreatForm from "./components/NewTreatForm";
import Search from "./components/Search";
import BakedTreats from "./components/BakedTreats.vue";
import { default as treats } from "../baked-treats.json";

export default {
  name: "App",
  components: {
    BakedTreats,
    Search,
    NewTreatForm,
  },
  data() {
    return {
      treats: treats,
      searchVal: "",
    };
  },
  computed: {
    filteredTreats() {
      return this.treats.filter((treat) => {
        return [treat.id, treat.type, treat.name, treat.topping]
          .join("")
          .toLowerCase()
          .includes(this.searchVal.toLowerCase());
      });
    },
  },
  methods: {
    addNewTreat(treat) {
      this.treats.push(treat);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a122a;
  margin: 2rem auto;
  padding: 0 80px;
}
.treat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: 900;
}
</style>
