import type { Ref, reactive } from "vue";

interface History {
  id: string;
  path: string;
  category: string;
  pathId: string;
}

type Historylist = History[];

export const useHistoryStore = () => {
  const historyList: Ref<Historylist> = useState("historyList", () => []);
  const addHistoryList = (historyList: Ref<Historylist>) => (item: History) => {
    historyList.value = [...historyList.value, item];
  };
  const updateHistoryList =
    (historyList: Ref<Historylist>) => (item: History) => {
      historyList.value = [...historyList.value, item];
    };
  return {
    historyList: readonly(historyList),
    addHistoryList: addHistoryList(historyList),
    updateHistoryList: updateHistoryList(historyList),
  };
};
