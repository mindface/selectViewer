<script lang="ts" setup>
import { ref } from "vue";
import DialogBase from "../components/DialogBase.vue";
import { User } from "../types/User";

interface Props {
  detail?: boolean;
  userInfo?: User
}
const switchMenu = ref(false);
const dialog = ref<HTMLDivElement>();
const props = defineProps<Props>();
const { userInfo, detail } = props;
const _detail = computed(() => props.detail);
const openDialog = () => {
  console.log("user-dialog");
  dialog.value?.openDialog();
}
</script>

<template>
  <div class="info-user">
    <div class="icon-box pointer" @click="openDialog">
      <div class="icon">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.49804C10.5 5.15396 9.157 6.49609 7.5 6.49609C5.843 6.49609 4.5 5.15396 4.5 3.49804C4.5 1.84212 5.843 0.5 7.5 0.5C9.157 0.5 10.5 1.84212 10.5 3.49804Z" stroke="white" stroke-linecap="square"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 14.4909H2.5C2.5 13.7808 2.5 13.1053 2.5 12.4936C2.5 10.8368 3.84315 9.49414 5.5 9.49414H9.5C11.1569 9.49414 12.5 10.8368 12.5 12.4936C12.5 13.1053 12.5 13.7808 12.5 14.4909Z" stroke="white" stroke-linecap="square"/>
        </svg>
      </div>
      <span v-if="_detail" class="name">{{ userInfo?.name }}</span>
    </div>
    <div v-if="_detail" class="info-line">
      <div class="line-text">参加時間 : 12:00</div>
      <div class="line-text">終了タスク数 : 4</div>
      <div class="line-text">アサイン日数 : 12</div>
    </div>
    <DialogBase
      ref="dialog"
      openBtn="none"
    >
      <div class="view-user-info">
        <div class="view-user-info__name">name | {{ userInfo?.name }}</div>
        <div class="view-user-info__detail">detail | {{ userInfo?.detail }}</div>
        <div class="view-user-info__belongId">belongId | {{ userInfo?.belongId }}</div>
      </div>
    </DialogBase>
  </div>
</template>
