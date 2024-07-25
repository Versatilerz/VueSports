<template>
  <header>
    <div class="title">SportClub</div>
    <div class="navigation">
      <ul>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'sports' }">Sports</RouterLink>
        <RouterLink :to="{ name: 'members' }">Members</RouterLink>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
header {
  background: #212529;
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
  color: white;
  position: sticky;
  width: auto;
  display: flex;
  padding: 2.5em;
  justify-content: space-between;
}

.title {
  font-size: 30px;
  font-family: "Bungee Inline", cursive;
}

.navigation {
}
</style>
