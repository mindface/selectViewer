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
<div :class="`item-method ${type}`">
  <div class="item-method__inner">
    <div class="detail">
      <h3 class="title">メソッドメソッドメソッド</h3>
      <div class="texts">テキストテキストテキストテキストテキストテキスト</div>
    </div>
  </div>
</div>
</template>
