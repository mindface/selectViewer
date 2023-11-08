import type { Ref, reactive } from "vue";
import { ItemCards, ItemCard } from "../types/ItemCard";

const list = [
  {
    id: "card01",
    title: "kokoko",
    detail: "body",
    category: "body",
    selectedId: "",
  },
  {
    id: "card02",
    title: "kokoko2",
    detail: "body",
    category: "body",
    selectedId: "",
  },
];

export const useCardStore = () => {
  const cardList: Ref<ItemCards> = useState("cardList", () => list);
  const addCardList = (cardList: Ref<ItemCards>) => (card: ItemCard) => {
    console.log(card);
    cardList.value = [...cardList.value, card];
  };
  const updateCardList = (cardList: Ref<ItemCards>) => (card: ItemCard) => {
    cardList.value = [...cardList.value, card];
  };
  return {
    cardList: readonly(cardList),
    addCardList: addCardList(cardList),
    updateCardList: updateCardList(cardList),
  };
};
