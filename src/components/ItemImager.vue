<script lang="ts" setup>
interface Props {
  type?: string;
  description?: string;
}
const props = defineProps<Props>();
const { type, description } = props;
const cardViewAction = () => {}
</script>

<template>
<div :class="`item-imager ${type}`">
  <div class="item-imager__inner">
    <div class="pt"></div>
    <div class="detail">
      <h3 class="title">イメージモデル</h3>
      <div class="texts"></div>
    </div>
  </div>
</div>
</template>
