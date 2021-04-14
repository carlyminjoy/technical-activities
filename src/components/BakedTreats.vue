<template>
  <div>
    <table>
      <tr>
        <TableHeader
          v-for="(column, i) in columns"
          :key="i"
          :column="column"
          @clicked="headerClicked"
          :sortByColumn="sortByColumn"
        />
      </tr>

      <Treat
        v-for="(treat, i) in sortedTreats"
        :key="i"
        :treat="treat"
      />
    </table>
  </div>
</template>

<script>
import Treat from "./Treat";
import TableHeader from "./TableHeader";

export default {
  name: "BakedTreats",
  components: {
    Treat,
    TableHeader,
  },
  props: {
    treats: Array,
  },
  data() {
    return {
      columns: ["id", "type", "name", "topping"],
      sortByColumn: "id",
      sortAscending: true,
    };
  },
  computed: {
    sortedTreats() {
      return [...this.treats].sort(this.sortTreats);
    },
  },
  methods: {
    headerClicked(data) {
      this.sortByColumn = data.column;
      this.sortAscending = data.sortAscending;
    },
    sortTreats(a, b) {
      if (this.sortAscending) {
        return a[this.sortByColumn] > b[this.sortByColumn] ? 1 : -1;
      } else {
        return a[this.sortByColumn] < b[this.sortByColumn] ? 1 : -1;
      }
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
</style>
