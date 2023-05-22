<script lang="ts" setup>
import ItemImager from "./ItemImager.vue";
import type { ImageModelList } from "../types/imageModel";
import { ref } from "vue";
import imageModelData from "../json/imageModelData.json";
import methodData from "../json/methodData.json";
interface Props {
  id?: string;
  type?: string;
  description?: string;
}

const router = useRouter();
const menuView = ref(false);
const selectInfo = ref("");
const imageModelList = ref<ImageModelList>([]);
const nextPageView = ref(false);
const props = defineProps<Props>();
const { id, type, description } = props;
const itemViewAction = () => {
  menuView.value = !menuView.value;
}
const nextPageViewAction = () => {
  nextPageView.value = !nextPageView.value;
}
const movePage = () => {
  router.push({path: `/patternList/${id}`, query: {type: type}});
}
const setSelectInfo = (type: string) => {
  selectInfo.value = type; 
}

const setImageModeList = () => {
  if(selectInfo.value === "") return imageModelData;
  const list = imageModelData.filter((item) => {
    if(item.categoryIds === selectInfo.value) {
      return item;
    }
  });
  return list;
}
const setMethodList = () => {
  if(selectInfo.value === "") return methodData;
  const list = methodData.filter((item) => {
    if(item.categoryIds === selectInfo.value) {
      return item;
    }
  });
  return list;
}

</script>

<template>
<div class="list-rod">
  <div class="list-rod__inner">
    <div class="list-rod__info">
      <div class="list-rod__detail">
        <div class="icon front-card--icon">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0V4.5C0.5 5.60457 1.39543 6.5 2.5 6.5C3.60457 6.5 4.5 5.60457 4.5 4.5V1.5C4.5 0.947715 4.05228 0.5 3.5 0.5C2.94772 0.5 2.5 0.947715 2.5 1.5V5M6 0.5H12.5C13.0523 0.5 13.5 0.947715 13.5 1.5V13.5C13.5 14.0523 13.0523 14.5 12.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V8M11 4.5H7M11 7.5H7M11 10.5H4" stroke="white"/>
          </svg>
        </div>
        <div class="description">
          <p>{{ description }}teteteteteteteeteteteteteteteteteteeteteteteteteteteteteetetete</p>
        </div>
        <date class="date">2023/3/05</date>
        <div class="list-menu" @click="itemViewAction">
          <div v-if="menuView" class="menu-items">
            <div class="item" @click="nextPageViewAction">next page</div>
          </div>
        </div>
        <div v-if="nextPageView" class="next-page-select">
          <div class="content-phase">
            <div class="phase select-info">
              <div class="text" @click="movePage">次のページ</div>
              <div class="text" @click="() => setSelectInfo('select01')" >作成された議事録</div>
              <div class="text" @click="() => setSelectInfo('select03')">作成されたエビデンスを確認</div>
            </div>
            <div class="phase">
              <div class="item" v-for="item in setImageModeList()"><ItemImager /></div>
            </div>
            <div class="phase">
              <div class="item" v-for="item in setMethodList()"><ItemMethod /></div>
            </div>
          </div>
          <div class="btn" @click="nextPageViewAction">close</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
