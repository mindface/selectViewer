<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import { Way } from "../types/ItemPurpose";
import { usePurposeStore } from "../store/dataPurpose";
import type { ItemPurposes, ItemPurpose } from "../types/ItemPurpose";
const { purposeList, addPurposeList } = usePurposeStore();

import DialogBase from "./DialogBase.vue";
interface Props {
  switch?: boolean;
}

const purposeStructList = ref<ItemPurposes>(purposeList.value ?? []);
const dialog = ref();
const title = ref("");
const detail = ref();
const categoryText = ref("");
const category = ref<string[]>([]);

const wayObj = reactive({
  title: "",
  info: "",
});
const continuityObj = reactive({
  title: "",
  detail: "",
});
const wayObjList = ref<Way[]>([]);

const props = defineProps<Props>();

const addWayAction = () => {
  const wayItem = {
    id: `${wayObjList.value.length + 1}`,
    title: wayObj.title,
    info: wayObj.info,
  };
  const list = [...wayObjList.value, wayItem];
  wayObjList.value = list as Way[];
};

const addCategoryTextAction = () => {
  category.value = [...category.value, categoryText.value];
};

const addPurposeAction = () => {
  const addItem = {
    id: `${purposeList.value.length + 1}`,
    title: title.value,
    detail: detail.value,
    category: category.value.join(","),
    continuity: [],
    ways: wayObjList.value,
  };
  addPurposeList(addItem);
};

const addContinuity = (id: string) => {
  const list = purposeStructList.value.map((item) => {
    const reItem = item;
    const addObj = {
      id: `${reItem.continuity.length + 1}`,
      title: continuityObj.title,
      detail: continuityObj.detail,
      category: "",
    };
    if (item.id === id) {
      reItem.continuity = [...reItem.continuity, addObj];
    }
    return reItem;
  });
  console.log("addContinuity-----");
  console.log(purposeStructList.value);
  purposeStructList.value = list;
};

onMounted(() => {
  purposeStructList.value = purposeList.value;
});
</script>

<template>
  <div class="content-purpose">
    <div class="content-purpose-inner">
      <div class="action-btns">
        <DialogBase btnlabel="目的追加" ref="dialog">
          <div class="purpose-dialog">
            <div class="purpose-dialog__detail">
              <div class="fields">
                <div class="field">
                  <label for="title" class="label">目的タイトル</label>
                  <input type="text" id="title" class="input" v-model="title" />
                </div>
                <div class="field">
                  <p>目的詳細</p>
                  <textarea
                    class="textarea"
                    id=""
                    cols="30"
                    rows="10"
                    v-model="detail"
                  ></textarea>
                </div>
                <div class="field">
                  <p>カテゴリ</p>
                  <input
                    type="text"
                    id="title"
                    class="input"
                    v-model="categoryText"
                  />
                  <button @click="addCategoryTextAction">add</button>
                  <p>
                    <span class="categoryItem" v-for="l in category"
                      >{{ l }},</span
                    >
                  </p>
                </div>
                <div class="field">
                  <div class="add-area">
                    <input
                      type="text"
                      id="methodTitle"
                      class="input"
                      placeholder="手段タイトル"
                      v-model="wayObj.title"
                    />
                    <textarea
                      class="textarea"
                      id="methodInfo"
                      cols="3"
                      rows="30"
                      placeholder="手段詳細"
                      v-model="wayObj.info"
                    ></textarea>
                    <button class="btn" @click="addWayAction">追加</button>
                  </div>
                  <div class="way-list">
                    <div class="caption">
                      <p class="way-title">手段タイトル</p>
                      <p class="way-info">手段情報</p>
                    </div>
                    <div class="way-item" v-for="l in wayObjList">
                      <p class="way-title">{{ l.title }}</p>
                      <p class="way-info">{{ l.info }}</p>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <button class="btn" @click="addPurposeAction">
                    目的情報の追加
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogBase>
      </div>
      <div class="purpose-and-struct">
        <div class="purpose-and-struct--item" v-for="l in purposeStructList">
          <div class="purpose-and-struct__purpose">
            <h3 class="title">目的の構造</h3>
            <div class="detail">
              {{ l.title }}
            </div>
            <DialogBase btnlabel="構成要素" ref="dialog">
              <div class="struct-dialog">
                <div class="add-fields">
                  <div class="fields">
                    <div class="field">
                      タイトル :
                      <input
                        type="text"
                        placeholder="構成要素タイトル"
                        v-model="continuityObj.title"
                      />
                    </div>
                    <div class="field">
                      詳細 :
                      <textarea
                        v-model="continuityObj.detail"
                        placeholder="構成要素詳細"
                        cols="30"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="field">
                      <button class="btn" @click="() => addContinuity(l.id)">
                        追加
                      </button>
                    </div>
                  </div>
                </div>
                <div class="struct-dialog">
                  <ul class="struct-list">
                    <li class="struct-item" v-for="k in l.continuity">
                      <p class="title">{{ k.title }}</p>
                      <p class="detail">{{ k.detail }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </DialogBase>
          </div>
          <div class="purpose-and-struct__struct">
            <h3 class="title">使う手段</h3>
            <div class="ways">
              <div class="way" v-if="l.ways.length > 0" v-for="k in l.ways">
                <p class="title">{{ k.title }}</p>
                <p class="info">{{ k.info }}</p>
              </div>
              <div v-else>no data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
