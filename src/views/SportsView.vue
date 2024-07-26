<template>
  <div class="loader" v-if="isPending">Loading data...</div>
  <div v-else-if="error">Error...</div>
  <div v-else-if="isSuccess" class="container">
    <h2>Sports</h2>
    <table>
      <tr>
        <th>Sport</th>
        <th>#Members</th>
        <th>GoToMembers</th>
        <th>Edit sport</th>
        <th>Delete sport</th>
      </tr>
      <tr v-for="sport in data" :key="sport.id">
        <td>{{ sport.name }}</td>
        <td>5 to do</td>
        <td>LINK</td>
        <td><button class="edit">Edit</button></td>
        <td><button class="delete">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";

// Function to fetch sports data
const getSports = async () => {
  try {
    const response = await axios.get(
      "https://404404fb-e9a1-458e-bc65-95b20051eec1.mock.pstmn.io/sports"
    );
    // Return the data directly
    return response.data;
  } catch (error) {
    // Throw error to be caught by useQuery
    throw new Error(error);
  }
};

// Use Vue Query to fetch data
const { data, error, isSuccess, isPending } = useQuery({
  queryKey: ["sports"],
  queryFn: getSports,
  cacheTime: 1000 * 60 * 5,
});
</script>

<style scoped lang="scss">
.loader {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
}

.container {
  height: 60vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
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
