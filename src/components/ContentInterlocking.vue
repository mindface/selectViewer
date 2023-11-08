<script lang="ts" setup>
import { ref, reactive, computed, onMounted, watch } from "vue";
import { ItemModel, ItemsTask } from "../types/task";
import { useTaskStore } from "../store/dataTask";

type TypeNumber = "number01" | "number02" | "number03" | "number04";
type SetKey = "d" | "m" | "t" | "all";
const { taskList, modelList, getModeList, getTaskList } = useTaskStore();
const selectModel = ref("");
const selectViewItemModel = ref<SetKey>("all");
const runTaskList = ref<ItemsTask>([]);
const endTaskList = ref<ItemsTask>([]);
const _cunter = ref<{ d: number; m: number; t: number }>({ d: 0, m: 0, t: 0 });
const setModelItems = ref<{
  d: ItemModel[];
  m: ItemModel[];
  t: ItemModel[];
  all: ItemModel[];
}>({ d: [], m: [], t: [], all: [] });

const selectItemModel = ref<ItemModel>({
  modelId: "",
  title: "",
  belongId: "",
  structInfo: "",
  structCategory: "",
  result: 0,
  status: "",
  createAt: "",
  updateAt: "",
});
const state = reactive({
  number01: 0,
  number02: 0,
  number03: 0,
  number04: 0,
});

const reTaskList = computed(() => {
  const _run: ItemsTask = [];
  const _end: ItemsTask = [];
  const list = taskList.value.filter((item) => {
    if (selectModel.value === item.selectedId && item.status === "run")
      _run.push(item);
    if (selectModel.value === item.selectedId && item.status === "end")
      _end.push(item);
    if (selectModel.value === item.selectedId) {
      return item;
    }
  });
  runTaskList.value = _run;
  endTaskList.value = _end;
  return list;
});

const reSetModelItems = () => {
  setModelItems.value = { d: [], m: [], t: [], all: [] };
};

const setCounter = () => {
  reSetModelItems();
  modelList.value.forEach((item) => {
    if (item.result < 30) {
      _cunter.value.d += 1;
      setModelItems.value.d.push(item); // = [...setModelItems.value.d,item];
    } else if (item.result < 60) {
      _cunter.value.m += 1;
      setModelItems.value.m.push(item);
    } else if (item.result >= 60) {
      _cunter.value.t += 1;
      setModelItems.value.t.push(item);
    }
  });
  setModelItems.value.all = modelList.value as ItemModel[];
};
watch(modelList, () => {
  setCounter();
});
const stateNumber01 = ref(0);
const stateNumber02 = ref(0);
const stateNumber03 = ref(0);
const stateNumber04 = ref(0);

const chnageAction = (type: TypeNumber, value: string) => {
  state[type] = Number(value);
  if (type === "number01") stateNumber01.value = Number(value);
  if (type === "number02") stateNumber02.value = Number(value);
  if (type === "number03") stateNumber03.value = Number(value);
  if (type === "number04") stateNumber04.value = Number(value);
};

onMounted(async () => {
  await getModeList();
  await getTaskList();
});

const selectedAction = (item: ItemModel) => {
  selectModel.value = item.modelId;
  selectItemModel.value = item;
};

const viewAction = (id: SetKey) => {
  selectViewItemModel.value = id;
  setCounter();
};
</script>

<template>
  <div class="content-list">
    <div class="content-list__items">
      <div class="item">
        <input
          type="range"
          :value="stateNumber01"
          @change="(e: Event) => chnageAction('number01',(e?.target as HTMLInputElement).value)"
          id=""
        />
        {{ stateNumber01 }}
      </div>
      <div class="item">
        <input
          type="range"
          :value="stateNumber02"
          @change="(e: Event) => chnageAction('number02',(e?.target as HTMLInputElement).value)"
          id=""
        />
        {{ 0.8 + stateNumber01 }}
      </div>
      <div class="item">
        <input
          type="range"
          :value="stateNumber03"
          @change="(e: Event) => chnageAction('number03',(e?.target as HTMLInputElement).value)"
          id=""
        />
        {{ 1.2 * stateNumber02 }}
      </div>
      <div class="item">
        <input
          type="range"
          :value="stateNumber04"
          @change="(e: Event) => chnageAction('number04',(e?.target as HTMLInputElement).value)"
          id=""
        />
        {{ stateNumber01 - stateNumber03 * 0.2 }}
      </div>
      <div class="result-goal">
        <div class="models-select-list">
          <div class="models-select-item">
            <button class="btn" @click="() => viewAction('d')">set d</button>
            <button class="btn" @click="() => viewAction('m')">set m</button>
            <button class="btn" @click="() => viewAction('t')">set t</button>
            <button class="btn" @click="() => viewAction('all')">
              set all
            </button>
          </div>
        </div>
      </div>
      <div class="result-goal">
        目的のゴール | {{ selectItemModel.title }}
        <div class="models-list">
          <p
            v-for="item in setModelItems[selectViewItemModel]"
            class="models-item btn"
            @click="() => selectedAction(item)"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
      <div class="view-bord-card">
        <div class="bord-cards">
          <div class="bord-card">
            <button class="btn">view</button>
            <span class="label">run total</span>
            <div class="runtask">実行中 {{ runTaskList.length }}</div>
          </div>
          <div class="bord-card">
            <span class="label">total</span>
            <div class="runtask">実行総タスク {{ reTaskList.length }}</div>
          </div>
          <div class="bord-card">
            <span class="label">end task</span>
            <div class="runtask">終了タスク {{ endTaskList.length }}</div>
          </div>
        </div>
        <div class="bord-model-info">
          <div class="info-view">
            {{ selectItemModel.modelId ?? "" }}
          </div>
        </div>
      </div>
      <div class="view-bord-task">
        <ul class="task-list">
          <li v-for="item in reTaskList" class="task-item">
            <h3 class="title">{{ item.title }}</h3>
            <div class="detail">{{ item.detail }}</div>
            <div class="category">{{ item.category }}</div>
            <div class="status">{{ item.status }}</div>
            <div class="users"></div>
          </li>
          <li class="item"></li>
          <li class="item"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
