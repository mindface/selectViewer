<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import ContentBord from "../components/ContentBord.vue";
import ContentWideBord from "../components/ContentWideBord.vue";
import ContentMap from "../components/ContentMap.vue";
import ContentL from "../components/ContentL.vue";
const route = useRoute();
watchEffect(() => {
  const id = route.params;
  if (id) {
    console.log(id)
  }
});
const tab = ref("tab1");

</script>

<template>
  <div class="content">
    <div class="content-tab">
      <button :class="tab === 'tab1' ? 'btn active' : 'btn'" @click="tab = 'tab1'">01</button>
      <button :class="tab === 'tab2' ? 'btn active' : 'btn'" @click="tab = 'tab2'">02</button>
      <button :class="tab === 'tab3' ? 'btn active' : 'btn'" @click="tab = 'tab3'">03</button>
      <button :class="tab === 'tab4' ? 'btn active' : 'btn'" @click="tab = 'tab4'">04</button>
    </div>
    <ContentWideBord v-if="tab === 'tab1'" />
    <ContentBord v-if="tab === 'tab2'" />
    <ContentMap v-if="tab === 'tab3'" />
    <ContentL v-if="tab === 'tab4'" />
  </div>
</template>