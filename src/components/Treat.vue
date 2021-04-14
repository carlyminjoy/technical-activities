<template>
  <tr>
    <td>{{ treat.id }}</td>
    <td>{{ treat.type }}</td>
    <td>{{ treat.name }}</td>
    <td>{{ treat.topping }}</td>
  </tr>
</template>

<script>
export default {
  name: "Treat",
  props: {
    treat: Object,
  },
};
</script>

<style scoped>
tr {
  transition: 0.3s ease;
}
tr:hover {
  background: #eee;
}
td {
  padding: 0.5rem 0.75rem;
  text-align: left;
  border: 1px solid #eee;
}
</style>
