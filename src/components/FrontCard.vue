<script lang="ts" setup>
import { ref } from "vue";
import InfoUser from "./InfoUser.vue";
import TaskCard from "../components/TaskCard.vue";
import userData from "../json/userData.json";
const cardViewClass = ref(false);

const cardViewAction = () => {
  cardViewClass.value = !cardViewClass.value;
};
const list = [
  { id: 1, type: "none", description: "タスク因子No01" },
  { id: 2, type: "zip", description: "タスク因子No02" },
  { id: 3, type: "none", description: "タスク因子No03" },
];
</script>

<template>
  <div :class="cardViewClass ? 'front-card view' : 'front-card'">
    <div class="front-card__inner">
      <div class="front-card__info">
        <div class="icon-box pointer" @click="cardViewAction">
          <div class="icon front-card--icon">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 0V4.5C0.5 5.60457 1.39543 6.5 2.5 6.5C3.60457 6.5 4.5 5.60457 4.5 4.5V1.5C4.5 0.947715 4.05228 0.5 3.5 0.5C2.94772 0.5 2.5 0.947715 2.5 1.5V5M6 0.5H12.5C13.0523 0.5 13.5 0.947715 13.5 1.5V13.5C13.5 14.0523 13.0523 14.5 12.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V8M11 4.5H7M11 7.5H7M11 10.5H4"
                stroke="white"
              />
            </svg>
          </div>
        </div>
        <div class="front-card__detail">
          <h3 class="title">プロジェクト名</h3>
          <div class="description">
            <p>テキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div class="info-box">
            <div class="info">
              <div class="caption">
                <span class="en">total</span><span class="ja">総数</span>
              </div>
              <div class="number">233</div>
            </div>
            <div class="info">
              <div class="caption">
                <span class="en">running</span><span class="ja">実行中</span>
              </div>
              <div class="number">233</div>
            </div>
            <div class="info">
              <div class="caption">
                <span class="en">achievement</span><span class="ja">達成</span>
              </div>
              <div class="number">33</div>
            </div>
          </div>
          <div class="info-detail-box">
            <TaskCard
              v-if="cardViewClass"
              v-for="item in list"
              :type="item.type"
              :description="item.description"
            />
          </div>
        </div>
      </div>
      <div class="front-card__users">
        <h3 class="description">アサイン's</h3>
        <InfoUser
          v-for="user in userData"
          :userInfo="user"
          :detail="cardViewClass"
        />
      </div>
    </div>
  </div>
</template>
