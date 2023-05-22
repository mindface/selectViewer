<script lang="ts" setup>
const list = [
  {
    id: 1,
    path: "selectView",
  },
  {
    id: 2,
    path: "viewer",
  }
];
</script>

<template>
  <div class="content">
    <div class="pattern" v-for="l in list">
      <NuxtLink class="link" :to="`/${l.path}`">{{ l.path }}</NuxtLink>
    </div>
  </div>
</template>