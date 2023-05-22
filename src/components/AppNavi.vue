<script lang="ts" setup>
const emitAction = defineEmits(["switchAction"]);
const changeAction = (e:Event) => {
  emitAction("switchAction");
};
const list = [
{ id: "1",path: "/", name: "home"},
{ id: "2",path: "/viewer", name: "viewer"},
{ id: "3",path: "/patternInfo", name: "patternInfo"}
];
</script>

<template>
  <div class="app-navi">
    <div class="overlay" @click.stop="changeAction"></div>
    <div class="app-navi__inner" @click="($event) => $event.preventDefault()">
      <nav class="app-navi__nav">
        <p v-for="item in list"><NuxtLink class="link" :to="item.path">{{ item.name }}</NuxtLink></p>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.app-navi {
  /* animation: nav 0s ease-in 1.2s forwards; */
}

/* .app-navi {
  opacity: 0;
} */

@keyframes nav {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
