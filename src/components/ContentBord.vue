<script lang="ts" setup>
import { ref, inject } from "vue";
import { ItemCards, ItemCard } from "../types/ItemCard";
import BordCardView02 from "./BordCardView02.vue";
import BordCardView from "./BordCardView.vue";
import { useCardStore } from "../store/dataCard";
interface Props {
  switch?: boolean;
}
const list = [
  {
    id: "card01",
    title: "title1",
    detail: "detaildetaildetaildetail",
    category: "ttttt,gg",
    selectedId: "",
  },
  {
    id: "card02",
    title: "title2",
    detail: "detail",
    category: "tt,gg",
    selectedId: "",
  },
  {
    id: "card03",
    title: "title3",
    detail: "detail",
    category: "tt,gg",
    selectedId: "",
  },
  {
    id: "card04",
    title: "title4",
    detail: "detail",
    category: "tt,gg",
    selectedId: "",
  },
  {
    id: "card05",
    title: "title5",
    detail: "detail",
    category: "tt,gg",
    selectedId: "",
  },
];
const list01 = [
  {
    id: "card01",
    title: "title1",
    detail: "detail",
    category: "ttttt,gg",
    selectedId: "",
  },
];
const { cardList, addCardList, updateCardList } = useCardStore();
onMounted(() => {
  console.log("cardList@@@@@@");
});

const switchMenu = ref(false);
const props = defineProps<Props>();
const emitAction = defineEmits(["switchAction"]);
const changeAction = () => {
  switchMenu.value = !switchMenu.value;
  emitAction("switchAction", switchMenu.value);
};
const changeClassAction = () => {
  return switchMenu ? "g-menu pointer" : "g-menu pointer";
};
const updateAction = () => {
  updateCardList({
    id: "3",
    title: "kokoko3",
    detail: "body",
    category: "body",
    selectedId: "",
  });
};
const addAction = () => {
  const num = ("00" + cardList.value.length + 2).slice(-3);
  addCardList({
    id: `card${num}`,
    title: `kokoko${num}`,
    detail: "body",
    category: "body",
    selectedId: "",
  });
};
</script>

<template>
  <div class="content-bord">
    <div class="actions"><button @click="addAction">追加</button></div>
    <div class="content-bord__items">
      <BordCardView02 />
      <BordCardView :items="list01" />
      <BordCardView :items="list01" />
      <BordCardView :items="list" />
      <BordCardView :items="list01" />
      <BordCardView :items="list01" />
      <BordCardView :items="list01" />
      <BordCardView :items="list01" />
    </div>
  </div>
</template>
