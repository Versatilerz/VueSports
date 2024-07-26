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
        <td>
          <button class="delete" @click="onDelete(sport.id)">Delete</button>
        </td>
      </tr>
    </table>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">Name</label>
        <input v-model="formData.name" type="text" />
      </div>
      <button type="submit">Add Sport</button>
    </form>
  </div>
</template>

<script setup>
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { getSports, addSport, deleteSport } from "@/api-requests/sports";
import { reactive, ref } from "vue";

const queryClient = useQueryClient();
// Use Vue Query to fetch data
const { data, error, isSuccess, isPending } = useQuery({
  queryKey: ["sports"],
  queryFn: getSports,
});
const formData = reactive({
  name: "",
});

// Mutation for adding a new sport
const mutationAdd = useMutation({
  mutationFn: addSport,
  onSuccess: () => {
    // Invalidate and refetch the sports query
    queryClient.invalidateQueries({ queryKey: ["sports"] });
    // Clear the form data after successful mutation
    formData.name = "";
  },
});

const onSubmit = () => {
  if (formData.name !== "") {
    mutationAdd.mutate(formData);
  }
};

const mutationDelete = useMutation({
  mutationFn: deleteSport,
  onSuccess: () => {
    // Invalidate and refetch the sports query
    queryClient.invalidateQueries({ queryKey: ["sports"] });
  },
});

//delete a sport
const onDelete = (id) => {
  const check = window.prompt("Type 'yes' if you want to delete this sport");
  if (check === "yes") {
    mutationDelete.mutate(id);
  }
  console.log(formData);
};
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
