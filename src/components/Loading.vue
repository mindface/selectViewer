<script lang="ts" setup>
import { useTaskStore } from "../store/dataTask";

const { loading } = useTaskStore();
</script>

<template>
  <div v-if="loading" class="loading">
    <div class="loading-action">データ取得中...</div>
    <div class="data-structs">情報と構造と結びつきに関しての因子</div>
  </div>
</template>
