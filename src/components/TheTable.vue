<template>
  <h2>{{ props.title }}</h2>
  <table>
    <tr>
      <th v-for="header in headerData" :key="header">{{ header }}</th>
    </tr>
    <tr
      v-show="props.type === 'sports'"
      v-for="sport in props.tableData"
      :key="sport.id"
    >
      <td>{{ sport.name }}</td>
      <td>5 to do</td>
      <td>LINK</td>
      <td><button class="edit">Edit</button></td>
      <td>
        <button class="delete" @click="onDelete(sport.id)">Delete</button>
      </td>
    </tr>
    <tr
      v-show="props.type === 'members'"
      v-for="member in props.tableData"
      :key="member.id"
    >
      <td>{{ member.name.lastName }}</td>
      <td>{{ member.name.firstName }}</td>
      <td># of sports</td>
      <td>ToMember</td>
      <td><button class="edit">Edit</button></td>
      <td>
        <button class="delete" @click="onDelete(member.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script setup>
const props = defineProps([
  "type",
  "sports ",
  "title",
  "headerData",
  "tableData",
]);
</script>

<style scoped lang="scss">
h2 {
  font-family: "Bungee Inline", cursive;
  color: hsla(160, 100%, 37%, 1);
}

th {
  border: 1px solid white;
}
td {
  border: 1px solid white;
  width: 7rem;
  text-align: center;
}

button {
  background-color: rgb(43, 40, 40);
  width: 4rem;
}
.edit {
  color: orange;
}

.delete {
  color: red;
}
</style>
