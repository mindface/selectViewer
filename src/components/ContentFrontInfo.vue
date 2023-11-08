<script lang="ts" setup>
import { ref } from "vue";
import { t, Animal, classAnimal } from "../lib/confa";
import FrontBord from "../components/FrontBord.vue";
onMounted(() => {
  //   let dog = new Animal("Dog", "woof");
  // console.log(dog.makeSound());
  // let og = new classAnimal("Dog", "woof");
  // console.log(og.makeSound());
});
</script>

<template>
  <div class="content-front-bord">
    <div class="content-front-bord__items">
      <FrontBord />
    </div>
  </div>
</template>
