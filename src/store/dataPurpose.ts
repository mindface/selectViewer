import type { Ref, reactive } from "vue";
import { ItemPurposes, ItemPurpose } from "../types/ItemPurpose";

const setPurposeList: ItemPurposes = [
  {
    id: "card01",
    title: "kokoko",
    detail: "body",
    category: "body",
    continuity: [
      {
        id: "0",
        title: "構成因子01",
        detail: "構成因子01",
        category: "",
      },
    ],
    ways: [],
  },
  {
    id: "card02",
    title: "kokoko2",
    detail: "body",
    category: "body",
    continuity: [],
    ways: [
      {
        id: "1",
        title: "title",
        info: "info",
      },
    ],
  },
];

export const usePurposeStore = () => {
  const purposeList: Ref<ItemPurposes> = useState(
    "purposeList",
    () => setPurposeList
  );
  const addPurposeList =
    (purposeList: Ref<ItemPurposes>) => (purposeItem: ItemPurpose) => {
      purposeList.value = [...purposeList.value, purposeItem];
    };
  const updatePurposeList =
    (purposeList: Ref<ItemPurposes>) => (purposeItem: ItemPurpose) => {
      purposeList.value = purposeList.value.map((item) => {
        if (item.id === purposeItem.id) {
          return purposeItem;
        }
        return item;
      });
    };
  return {
    purposeList: purposeList,
    addPurposeList: addPurposeList(purposeList),
    updatePurposeList: updatePurposeList(purposeList),
  };
};
