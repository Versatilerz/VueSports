<template>
  <div class="loader" v-if="isPending">Loading data...</div>
  <div v-else-if="error">Error...</div>
  <div v-else-if="isSuccess" class="container">
    <TheTable
      type="sports"
      title="Sports"
      :headerData="headers"
      :tableData="data"
      :onDelete="onDelete"
    />
    <div class="sport">
      <form @submit.prevent="onSubmit">
        <div>
          <label for="name">Name</label>
          <input v-model="formData.name" type="text" />
        </div>
        <button type="submit">Add Sport</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { getSports, addSport, deleteSport } from "@/api-requests/sports";
import { reactive } from "vue";
import TheTable from "@/components/TheTable.vue";

const headers = [
  "Sport",
  "#Members",
  "GoToMembers",
  "Edit sport",
  "Delete sport",
];

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
  mutationDelete.mutate(id);
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
  max-height: 60vh;
  position: relative;
  top: 4rem;
  // overflow-y: scroll;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.sport {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 1 rem;

  button {
    width: 5rem;
    padding: 0.2rem;
    margin: 1rem;
    background-color: rgb(43, 40, 40);
    width: 5rem;
  }
}
</style>
