<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="content">type | {{ route.query.type }}</div>
</template>
