<script lang="ts" setup>
import { ref, onMounted } from "vue";
const switchMenu = ref(false);
const addPath = ref("");
const updatePath = ref("");
import list from "../json/pash.json";

const iframeBoxs = ref([{ boxId: "1", path: "/" }]);

const addAction = () => {
  iframeBoxs.value = [
    ...iframeBoxs.value,
    { boxId: `${iframeBoxs.value.length + 1}`, path: addPath.value },
  ];
};

const updateAction = (id: string) => {
  const list = iframeBoxs.value.map((item) => {
    if (item.boxId === id) {
      item.path = updatePath.value;
    }
    return item;
  });
  iframeBoxs.value = list;
};
</script>

<template>
  <div class="comparing">
    <div class="comparing-actions">
      {{ addPath }}
      <div class="add-action">
        <select v-model="addPath">
          <option v-for="item in list" :value="item.path">
            {{ item.path }}
          </option>
        </select>
        <button @click="addAction">add</button>
      </div>
    </div>
    <div class="comparing-list">
      <div v-for="item in iframeBoxs" class="comparing-item">
        <div class="struct">
          <iframe :src="item.path" frameborder="0" class="iframe" />
        </div>
        <div class="update-action">
          <select v-model="updatePath">
            <option v-for="item in list" :value="item.path">
              {{ item.path }}
            </option>
          </select>
          <button @click="() => updateAction(item.boxId)">update</button>
        </div>
      </div>
      <div class="comparing-item">
        <div class="struct">
          <iframe src="/selectView" frameborder="0" class="iframe"></iframe>
        </div>
      </div>
      <div class="comparing-item">
        <div class="struct">gggh</div>
      </div>
      <div class="comparing-item">
        <div class="struct">gggh</div>
      </div>
    </div>
  </div>
</template>
