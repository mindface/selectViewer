<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import AppNavi from "@/components/AppNavi.vue";
import Loading from "@/components/Loading.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { flowView } from "../lib/flow-view";

const switchMenu = ref(false);
const route = useRoute();

const changeSwitchAction = () => {
  switchMenu.value = !switchMenu.value;
};

onMounted(() => {
  if (route.path) {
    flowView(route.path);
  }
});
</script>

<template>
  <div class="wrapper">
    <Loading />
    <AppHeader :switch="switchMenu" @switchAction="changeSwitchAction" />
    <slot />
    <AppFooter />
    <transition name="fade">
      <AppNavi v-if="switchMenu" @switchAction="changeSwitchAction" />
    </transition>
  </div>
</template>
