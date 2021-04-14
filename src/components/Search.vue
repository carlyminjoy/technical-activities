<template>
  <div class="search-container">
    <input
      type="text"
      placeholder="Search treats.."
      @input="updateSearch"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    value: String,
  },
  methods: {
    updateSearch(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: flex-end;
}
input {
  border-radius: 0;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #eee;
}
</style>
