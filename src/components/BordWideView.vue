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
    <ul class="wide-list">
      <li class="wide-item">
        01
        <div class="filelds">
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
        </div>
      </li>
      <li class="wide-item">
        02
        <div class="filelds">
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
        </div>
      </li>
      <li class="wide-item">
        03
        <div class="filelds">
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
        </div>
      </li>
      <li class="wide-item">
        04
        <div class="filelds">
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
          <div class="fileld">
            <label for="" class="label">label</label>
            <input type="text" class="input" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
