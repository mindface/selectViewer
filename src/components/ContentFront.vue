<script lang="ts" setup>
import { ref } from "vue";
import { ItemCard } from "../types/ItemCard";
import Dialog from "./Dialog.vue";
import json from "../json/data.json";
import FrontCard from "./FrontCard.vue";
interface Props {
  switch?: boolean;
}

const switchMenu = ref(false);
const props = defineProps<Props>();
const emitAction = defineEmits(["switchAction"]);
const changeAction = () => {
  switchMenu.value = !switchMenu.value;
  emitAction("switchAction",switchMenu.value);
};
</script>

<template>
  <div class="content-bord">
    <div class="content-bord__items">
      <FrontCard />
      <FrontCard />
    </div>
  </div>
</template>
