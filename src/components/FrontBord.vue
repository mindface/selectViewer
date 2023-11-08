<script lang="ts" setup>
import { ref, computed } from "vue";
import DialogBase from "./DialogBase.vue";
import DialogSide from "./DialogSide.vue";
const runtimeConfig = useRuntimeConfig();

import { useCardStore } from "../store/dataCard";
interface Props {
  switch?: boolean;
}
import { useTaskStore } from "../store/dataTask";
const { taskList, modelList, getModeList, getTaskList } = useTaskStore();
const title = ref();
const detail = ref();
const category = ref();
const status = ref();
const dialog = ref();
const _list = computed(() => {
  return [];
});

const sendAction = () => {
  const item = {
    title: title.value,
    name: "name",
    text: "text",
    disc: "disc",
    imgPath: "imgPath",
  };
  console.log(item);
  fetch("http://localhost:8080/api/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: from
    body: JSON.stringify(item),
  }).then((res) => {
    res.json().then((r) => {
      console.log(r);
    });
  });
};

const getBookAction = async () => {
  const res = await fetch("http://localhost:8080/api/book");
  const data = await res.json();
  console.log(JSON.parse(data.list));
  // return { data };
};

const getAction = async () => {
  const res = await fetch(runtimeConfig.apiUrl ?? "", {
    headers: { "X-API-KEY": runtimeConfig.apiKey ?? "" },
  });
  const data = await res.json();
  return { data };
};

const addAction = async () => {
  const sendItem = {
    title: title.value,
    detail: detail.value,
    category: category.value,
    selectId: 100,
    status: status.value,
  };
  const res = await fetch(runtimeConfig.apiUrl ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "X-API-KEY": runtimeConfig.apiKey ?? "",
      "X-MICROCMS-API-KEY": runtimeConfig.apiKey ?? "",
    },
    body: JSON.stringify(sendItem),
  });
  const data = await res.json();
  console.log(data);
  return { data };
};

const props = defineProps<Props>();
const emitAction = defineEmits(["switchAction"]);
onMounted(async () => {
  await getAction();
  await getBookAction();
  getModeList();
});

const list = [
  {
    type: "select-phase",
    caption: "製造過程(カテゴリとidで判別)",
    phaseItems: [
      {
        title: "01 info title LTspice",
        detail:
          "Linear Technologyが開発した高性能のスパイスシミュレータです。アナログIC設計に特化しています。無料で使用することができます",
        tag: "repo",
      },
      {
        title: "02 info title KiCad",
        detail:
          "オープンソースの回路図作成とPCB（プリント基板）レイアウト設計ソフトウェアです。",
        tag: "repo",
      },
      {
        title: "03 info title EAGLE",
        detail:
          "Autodeskが提供する強力なPCBデザインソフトウェア。回路図作成とPCBレイアウト設計が可能です。無料版と有料版があります。",
        tag: "repo",
      },
      {
        title: "04 info title Proteus",
        detail:
          "Labcenter Electronicsが提供する統合型の電子設計自動化ソフトウェア。回路図設計、PCBレイアウト設計、およびバーチャルモデルによるシミュレーションが可能です。",
        tag: "repo",
      },
    ],
  },
  {
    type: "select-phase",
    caption: "ユーザー操作フロー",
    phaseItems: [
      {
        title: "01 info title LTspice",
        detail:
          "Linear Technologyが開発した高性能のスパイスシミュレータです。アナログIC設計に特化しています。無料で使用することができます",
        tag: "repo",
      },
      {
        title: "02 info title KiCad",
        detail:
          "オープンソースの回路図作成とPCB（プリント基板）レイアウト設計ソフトウェアです。",
        tag: "repo",
      },
      {
        title: "03 info title EAGLE",
        detail:
          "Autodeskが提供する強力なPCBデザインソフトウェア。回路図作成とPCBレイアウト設計が可能です。無料版と有料版があります。",
        tag: "repo",
      },
      {
        title: "04 info title Proteus",
        detail:
          "Labcenter Electronicsが提供する統合型の電子設計自動化ソフトウェア。回路図設計、PCBレイアウト設計、およびバーチャルモデルによるシミュレーションが可能です。",
        tag: "repo",
      },
    ],
  },
  {
    type: "select-phase",
    caption: "過程情報",
    phaseItems: [
      {
        title: "01 info title LTspice",
        detail:
          "Linear Technologyが開発した高性能のスパイスシミュレータです。アナログIC設計に特化しています。無料で使用することができます",
        tag: "repo",
      },
      {
        title: "02 info title KiCad",
        detail:
          "オープンソースの回路図作成とPCB（プリント基板）レイアウト設計ソフトウェアです。",
        tag: "repo",
      },
      {
        title: "03 info title EAGLE",
        detail:
          "Autodeskが提供する強力なPCBデザインソフトウェア。回路図作成とPCBレイアウト設計が可能です。無料版と有料版があります。",
        tag: "repo",
      },
      {
        title: "04 info title Proteus",
        detail:
          "Labcenter Electronicsが提供する統合型の電子設計自動化ソフトウェア。回路図設計、PCBレイアウト設計、およびバーチャルモデルによるシミュレーションが可能です。",
        tag: "repo",
      },
    ],
  },
  {
    type: "select-phase",
    caption: "過程情報",
    phaseItems: [
      {
        title: "01 info title LTspice",
        detail:
          "Linear Technologyが開発した高性能のスパイスシミュレータです。アナログIC設計に特化しています。無料で使用することができます",
        tag: "repo",
      },
      {
        title: "02 info title KiCad",
        detail:
          "オープンソースの回路図作成とPCB（プリント基板）レイアウト設計ソフトウェアです。",
        tag: "repo",
      },
      {
        title: "03 info title EAGLE",
        detail:
          "Autodeskが提供する強力なPCBデザインソフトウェア。回路図作成とPCBレイアウト設計が可能です。無料版と有料版があります。",
        tag: "repo",
      },
      {
        title: "04 info title Proteus",
        detail:
          "Labcenter Electronicsが提供する統合型の電子設計自動化ソフトウェア。回路図設計、PCBレイアウト設計、およびバーチャルモデルによるシミュレーションが可能です。",
        tag: "repo",
      },
    ],
  },
];
</script>

<template>
  <div class="content-front-bord">
    <div class="actions"><button @click="">追加</button></div>
    <div class="content-front-bord__items">
      <div class="bords">
        <div class="bord-showcase">
          <div class="item">
            <h3 class="title">title1</h3>
            <div class="detail">
              <span class="aid">詳細</span>detaildetaildetaildetail
            </div>
            <div class="detail">
              <span class="aid">タスクカテゴリ</span>メンテナンスタスク
            </div>
            <div class="status"><span class="aid">ステータス</span>end</div>
          </div>
          <div class="caption">
            case | バージョン01 <br />技術者ベース
            <DialogBase ref="dialog">
              <div class="front-bord-dialog">
                <div class="front-bord-dialog__detail">
                  <div v-for="item in modelList" class="item">
                    <h3 class="title">{{ item.title }}</h3>
                    <DialogBase ref="dialog">
                      <div class="front-bord-dialog">
                        <div class="front-bord-dialog__selector">
                          <h3 class="title">{{ item.title }}</h3>
                          <div v-for="item in list" class="select-phase">
                            <p class="caption">{{ item.caption }}</p>
                            <div class="phase">
                              <div
                                v-for="k in item.phaseItems"
                                class="phase-item"
                              >
                                <DialogSide :btnlabel="k.title">
                                  <div class="dialog-phase">
                                    <div class="phase-title">{{ k.title }}</div>
                                    <div class="phase-detail">
                                      {{ k.detail }}
                                    </div>
                                  </div>
                                </DialogSide>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogBase>
                  </div>
                </div>
              </div>
            </DialogBase>
          </div>
        </div>
        <div class="bord-showcase">
          <div class="item">
            <h3 class="title">title1</h3>
            <div class="detail">
              <span class="aid">詳細</span>detaildetaildetaildetail
            </div>
            <div class="detail">
              <span class="aid">タスクカテゴリ</span>メンテナンスタスク
            </div>
            <div class="status"><span class="aid">ステータス</span>end</div>
          </div>
          <div class="caption">
            case | バージョン02 <br />PM<button class="btn">view</button>
          </div>
        </div>
        <div class="bord-showcase">
          <div class="item">
            <h3 class="title">title1</h3>
            <div class="detail">
              <span class="aid">詳細</span>detaildetaildetaildetail
            </div>
            <div class="status"><span class="aid">素材</span>プラチナ合金</div>
          </div>
          <div class="caption">
            case | バージョン03 <br />プロダクト構成<button class="btn">
              view
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="fields">
      <div class="field">title<input type="text" v-model="title" /></div>
      <div class="field">detail<input type="text" v-model="detail" /></div>
      <div class="field">category<input type="text" v-model="category" /></div>
      <div class="field">
        run |
        <input type="radio" name="status" value="run" v-model="status" />
        stop |
        <input type="radio" name="status" value="stop" v-model="status" />
        {{ status }}
      </div>
      <button @click="sendAction">add</button>
    </div>
  </div>
</template>
