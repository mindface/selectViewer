<script lang="ts" setup>
import { ref, reactive, Events } from "vue";
import ListItem from "./ListItem.vue";

type TypeNumber = "number01" | "number02" | "number03" | "number04"

const switchMenu = ref(false);
const state = reactive({
  number01: 0,
  number02: 0,
  number03: 0,
  number04: 0,
});
const stateNumber01 = ref(0);
const stateNumber02 = ref(0);
const stateNumber03 = ref(0);
const stateNumber04 = ref(0);
const parts = ref({
  number01: 0
});

const chnageAction = (type:TypeNumber,value:string) => {
  state[type] = Number(value);
  if(type === "number01") stateNumber01.value = Number(value);
  if(type === "number02") stateNumber02.value = Number(value);
  if(type === "number03") stateNumber03.value = Number(value);
  if(type === "number04") stateNumber04.value = Number(value);

}

</script>

<template>
  <div class="content-list">
    <div class="content-list__items">
      <div class="item">
        <input type="range" :value="stateNumber01" @change="(e: Event) => chnageAction('number01',(e?.target as HTMLInputElement).value)" id="">
        {{ (state.number01) }}{{ stateNumber01 }}
      </div>
      <div class="item">
        <input type="range" :value="stateNumber02" @change="(e: Event) => chnageAction('number02',(e?.target as HTMLInputElement).value)" id="">
        {{ (state.number02) }}{{ 0.8 + stateNumber01 }}
      </div>
      <div class="item">
        <input type="range" :value="stateNumber03" @change="(e: Event) => chnageAction('number03',(e?.target as HTMLInputElement).value)" id="">
        {{ (state.number03) }}{{ 1.2 * stateNumber02 }}
      </div>
      <div class="item">
        <input type="range" :value="stateNumber04" @change="(e: Event) => chnageAction('number04',(e?.target as HTMLInputElement).value)" id="">
        {{ (state.number04) }}{{ stateNumber01 - stateNumber03*0.2 }}
      </div> 
    </div>
  </div>
</template>
