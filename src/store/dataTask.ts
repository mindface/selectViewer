import type { Ref } from "vue";
import { ItemTask, ItemsTask, ItemModel } from "../types/task";

const list = [
  {
    id: "card01",
    title: "kokoko",
    detail: "body",
    category: "body",
    selectedId: "",
    status: "run",
  },
  {
    id: "card02",
    title: "kokoko2",
    detail: "body",
    category: "body",
    selectedId: "",
    status: "end",
  },
];

export const useTaskStore = () => {
  const loading: Ref<boolean> = useState("loading", () => false);
  const taskList: Ref<ItemsTask> = useState("taskList", () => list);
  const modelList: Ref<ItemModel[]> = useState("modelList", () => []);
  const getModeList = async () => {
    loading.value = true;
    const res = await fetch("http://localhost:5173/vuejsons/data.json");
    setTimeout(() => {
      res.json().then((res) => {
        modelList.value = res;
        loading.value = false;
      });
    }, 1000);
  };
  const getTaskList = async () => {
    const res = await fetch("http://localhost:5173/vuejsons/task.json");
    res.json().then((res) => {
      taskList.value = res;
    });
  };
  const addTaskList = (taskList: Ref<ItemsTask>) => (task: ItemTask) => {
    taskList.value = [...taskList.value, task];
  };
  const updateTaskList = (taskList: Ref<ItemsTask>) => (task: ItemTask) => {
    taskList.value = [...taskList.value, task];
  };
  return {
    loading: readonly(loading),
    taskList: readonly(taskList),
    modelList: readonly(modelList),
    getModeList: getModeList,
    getTaskList: getTaskList,
    addtaskList: addTaskList(taskList),
    updatetaskList: updateTaskList(taskList),
  };
};
