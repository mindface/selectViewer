<script lang="ts" setup>
import { ref } from "vue";
import { ItemCards, ItemCard } from "../types/ItemCard";
interface Props {
  items?: ItemCards;
}
const props = defineProps<Props>();
const { items } = props;
const viewSwitch = ref(false);
const item = ref<ItemCard>({
  id: "",
  title: "",
  detail: "",
  category: "",
  selectedId: "",
});

onMounted(() => {
  if (props.items) {
    item.value = props.items[0];
  }
});

const viewSwitchAction = () => {
  viewSwitch.value = !viewSwitch.value;
};
</script>

<template>
  <div :class="viewSwitch ? 'item-card total' : 'item-card top-only'">
    <div class="card-btns">
      <button class="btn" @click="viewSwitchAction">
        {{ viewSwitch ? "total" : "top" }}
      </button>
    </div>
    <div v-if="!viewSwitch" class="face">
      <h3 class="title">{{ item.title }}</h3>
      <div class="detail">{{ item.detail }}</div>
      <div class="category">
        <span v-for="c in item.category.split(',')" class="s">{{ c }}</span>
      </div>
    </div>
    <div v-else class="cards-box">
      <div
        class="cards flex"
        :style="{ width: `${(items ?? []).length * 328}px` }"
      >
        <div v-for="card in items" class="card">
          <h3 class="title">{{ card.title }}</h3>
          <div class="detail">{{ card.detail }}</div>
          <div class="category">
            <span v-for="c in card.category.split(',')" class="s">{{ c }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
