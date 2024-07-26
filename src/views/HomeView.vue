<template>
  <div class="container">
    <h1>Choose your sport</h1>
    <HoverEffect />
  </div>
</template>

<script setup>
import HoverEffect from "@/components/HoverEffect.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
h1 {
  color: white;
  font-family: "Bungee Inline", cursive;
  height: 5.5rem;
}
</style>
