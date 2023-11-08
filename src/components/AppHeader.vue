<script lang="ts" setup>
import { ref } from "vue";
const switchMenu = ref(false);
const emitAction = defineEmits(["switchAction"]);
const changeAction = () => {
  switchMenu.value = !switchMenu.value;
  emitAction("switchAction", switchMenu.value);
};
const changeClassAction = () => {
  return switchMenu ? "g-menu pointer" : "g-menu pointer";
};
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <div :class="changeClassAction()" @click="changeAction">
        <div class="menu-part"></div>
        <div class="menu-part"></div>
        <div class="menu-part"></div>
      </div>
    </div>
  </header>
</template>
