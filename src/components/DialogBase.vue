<script lang="ts" setup>
import { ref, onMounted } from "vue";
interface Props {
  openBtn?: string;
  btnlabel?: string;
  className?: string;
}
const switchMenu = ref(false);
const dialog = ref<HTMLDialogElement>();
const props = defineProps<Props>();
const emitAction = defineEmits(["openAction"]);
const { btnlabel } = props;
const openDialog = () => {
  dialog.value?.showModal();
};
const closeDialog = () => {
  dialog.value?.close();
};
defineExpose({
  openDialog,
});
</script>

<template>
  <div :class="`content-dialog ${className}`">
    <button v-if="openBtn !== 'none'" class="btn" @click="openDialog">
      {{ btnlabel ? btnlabel : "open" }}
    </button>
    <dialog class="dialog" ref="dialog">
      <div class="dialog-content">
        <div class="dialog-content__main">
          <slot />
        </div>
        <div class="dialog-content__action">
          <button class="btn" @click="closeDialog">close</button>
        </div>
      </div>
    </dialog>
  </div>
</template>
