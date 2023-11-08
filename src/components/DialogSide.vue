<script lang="ts" setup>
import { ref } from "vue";
interface Props {
  openBtn?: string;
  btnlabel?: string;
  className?: string;
}
const switchMenu = ref(false);
const dialog = ref<HTMLDivElement>();
const props = defineProps<Props>();
const emitAction = defineEmits(["openAction"]);
const { btnlabel } = props;
const openDialog = () => {
  switchMenu.value = true;
};
const closeDialog = () => {
  switchMenu.value = false;
};
defineExpose({
  openDialog,
});
</script>

<!-- daialog ２つ重なると100vhが90vh程度になる -->
<template>
  <div :class="`content-dialog-side ${className}`">
    <button v-if="openBtn !== 'none'" class="btn" @click="openDialog">
      {{ btnlabel ? btnlabel : "open" }}
    </button>
    <div v-if="switchMenu" class="dialog-side" ref="dialog">
      <div class="dialog-content">
        <div class="dialog-content__main">
          <slot />
        </div>
        <div class="dialog-content__action">
          <button class="btn" @click="closeDialog">close</button>
        </div>
      </div>
    </div>
  </div>
</template>
