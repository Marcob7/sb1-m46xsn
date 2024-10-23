<script setup lang="ts">
import NavMenu from './components/layout/NavMenu.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <NavMenu />
    <router-view />
  </div>
</template>

<style>
#app {
  max-width: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>