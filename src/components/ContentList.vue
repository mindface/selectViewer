<script lang="ts" setup>
import { ref } from "vue";
import ListItem from "./ListItem.vue";
interface Props {
  switch?: boolean;
}

const switchMenu = ref(false);
const props = defineProps<Props>();
const emitAction = defineEmits(["switchAction"]);
const changeAction = () => {
  switchMenu.value = !switchMenu.value;
  emitAction("switchAction", switchMenu.value);
};
</script>

<template>
  <div class="content-list">
    <div class="content-list__items">
      <ListItem />
    </div>
  </div>
</template>
