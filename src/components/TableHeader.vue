<template>
  <th>
    <div @click="sortTreats">
      {{ column | capitalize }}
      {{ isActive ? (sortAscending ? "▲" : "▼") : "" }}
    </div>
  </th>
</template>

<script>
export default {
  name: "TableHeader",
  props: {
    column: String,
    sortByColumn: String,
  },
  data() {
    return {
      sortAscending: false,
    };
  },
  computed: {
    isActive() {
      return this.sortByColumn == this.column;
    },
  },
  filters: {
    capitalize(word) {
      return [
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      ].join(" ");
    },
  },
  methods: {
    sortTreats() {
      this.sortAscending = !this.sortAscending;
      this.$emit("clicked", {
        column: this.column,
        sortAscending: this.sortAscending,
      });
    },
  },
};
</script>

<style scoped>
th {
  padding: 0.75rem;
  text-align: left;
  background-color: #0a122a;
  color: #fbfaf8;
  cursor: pointer;
}
</style>
