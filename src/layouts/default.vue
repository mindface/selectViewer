<script lang="ts" setup>
import { ref } from "vue";
import AppNavi from "@/components/AppNavi.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

const switchMenu = ref(false);

const changeSwitchAction = () => {
  switchMenu.value = !switchMenu.value;
};
</script>

<template>
  <div class="wrapper">
    <AppHeader :switch="switchMenu" @switchAction="changeSwitchAction" />
    <slot />
    <AppFooter />
    <transition name="fade">
      <AppNavi v-if="switchMenu" @switchAction="changeSwitchAction" />
    </transition>
  </div>
</template>
