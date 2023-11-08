<script lang="ts" setup>
import ListItem from "../../components/ListItem.vue";
const list = [
  { id: "1", type: "card", description: "description1" },
  { id: "2", type: "card", description: "description2" },
  { id: "3", type: "card", description: "description3" },
  { id: "4", type: "card", description: "description4" },
  { id: "5", type: "card", description: "description5" },
  { id: "6", type: "card", description: "description6" },
];
</script>

<template>
  <div class="content">
    <ListItem
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :type="item.type"
      :description="item.description"
    />
  </div>
</template>
