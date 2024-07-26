<template>
  <header>
    <div class="title">SportClub</div>
    <div class="navigation">
      <ul>
        <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
        <li><RouterLink :to="{ name: 'sports' }">Sports</RouterLink></li>
        <li><RouterLink :to="{ name: 'members' }">Members</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
header {
  // background: #212529;
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
  margin-bottom: 0.5em;
  color: white;
  position: sticky;
  width: auto;
  display: flex;
  align-items: center;
  padding: 1em;
  padding-left: 8em;
  padding-right: 8em;
  justify-content: space-between;
  font-family: "Bungee Inline", cursive;
}

.title {
  font-size: 40px;
  font-family: "Bungee Inline", cursive;
}

.navigation {
  display: inline;
  li {
    padding: 1em;
    list-style-type: none;
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }
  a:hover {
    text-decoration: none !important;
    color: white;
  }
}
</style>
