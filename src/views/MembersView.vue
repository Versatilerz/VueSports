<template>
  <div class="loader" v-if="isPending">Loading data...</div>
  <div v-else-if="error">Error...</div>
  <div v-else-if="isSuccess" class="container">
    <TheTable
      type="members"
      title="Members"
      :headerData="headers"
      :tableData="data"
      :onDelete="onDelete"
    />
    <div class="member">
      <form @submit.prevent="onSubmit">
        <div>
          <label for="firstName">First Name</label>
          <input v-model="formData.name.firstName" type="text" />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input v-model="formData.name.lastName" type="text" />
        </div>
        <div>
          <label for="image">Image url</label>
          <input v-model="formData.image" type="url" />
        </div>
        <div>
          <label for="sports">Select your sport</label>
          <select v-model="formData.sports" placeholder="Choose a sport">
            <option>Tennis</option>
            <option>Soccer</option>
            <option>Basketball</option>
            <option>Karting</option>
            <option>Kickboxing</option>
            <option>Sailing</option>
            <option>Rock Climbing</option>
            <option>American Football</option>
            <option>Archery</option>
            <option>IceHockey</option>
            <option>Spear Throwing</option>
            <option>Baseball</option>
            <option>Padel</option>
          </select>
        </div>
        <button type="submit">Add Member</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { getMembers, addMember, deleteMember } from "@/api-requests/members";
import { reactive } from "vue";
import TheTable from "@/components/TheTable.vue";

const headers = [
  "LastName",
  "FirstName",
  "#of Sports",
  "ToMember",
  "Edit",
  "Delete",
];

const queryClient = useQueryClient();
// Use Vue Query to fetch data
const { data, error, isSuccess, isPending } = useQuery({
  queryKey: ["members"],
  queryFn: getMembers,
});

const formData = reactive({
  image: "",
  name: {
    firstName: "",
    lastName: "",
  },
  sports: [],
});

// Mutation for adding a new member
const mutationAdd = useMutation({
  mutationFn: addMember,
  onSuccess: () => {
    // Invalidate and refetch the members query
    queryClient.invalidateQueries({ queryKey: ["members"] });
    // Clear the form data after successful mutation
    formData.name = "";
  },
});

const onSubmit = () => {
  console.log(formData);
  if (formData.name !== "") {
    mutationAdd.mutate(formData);
  }
};

const mutationDelete = useMutation({
  mutationFn: deleteMember,
  onSuccess: () => {
    // Invalidate and refetch the members query
    queryClient.invalidateQueries({ queryKey: ["members"] });
  },
});

//delete a member
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
.member {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  margin: 1 rem;
  text-align: center;

  div {
    width: 300px;
    margin: 0.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;

    input {
      width: 50%;
    }

    select {
      width: 50%;
    }
  }
  button {
    width: 6rem;
    padding: 0.2rem;
    margin: 1rem;
    background-color: rgb(43, 40, 40);

    color: hsla(160, 100%, 37%, 1);
  }
}
</style>
