<script lang="ts" setup>
import { onMounted, ref, defineComponent } from "vue";
import { useFabric } from "../lib/fabric";

const fb = useFabric("canvas");
const canvasBox = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();
const addText = ref("");
const addColor = ref("#000");
const w = ref(0);
const h = ref(0);

const addTextAction = () => {
  fb.addTextAction(addText.value, addColor.value);
};

const addRectAction = () => {
  fb.makeRect(10, 10, 100, 100, addColor.value);
};

const chnageFIleAction = (inputElement: HTMLInputElement) => {
  if (!inputElement?.files) return;
  fb.chnageFIleAction(inputElement);
};

const deleteAction = () => {
  fb.deleteObjrct();
};

onMounted(() => {
  w.value = canvasBox.value?.clientWidth ?? 0;
});

const imgDownload = () => {
  const a = document.createElement("a");
  const hrefData = canvas.value?.toDataURL("image/png");
  if (!hrefData) return;
  a.href = hrefData;
  a.download = "canvas.png";
  a.click();
};
</script>

<template>
  <div class="make-imager">
    <div ref="canvasBox" class="view-fabric">
      <canvas :width="w" height="600" ref="canvas" id="canvas"></canvas>
    </div>
    <div class="input-box">
      <div class="input-text">
        <input type="text" v-model="addText" />
        <button class="btn" @click="addTextAction">add</button>
      </div>
      <div class="input-color">
        <input type="color" v-model="addColor" />
      </div>
      <div class="input-rect">
        <button class="btn" @click="addRectAction">rect</button>
      </div>
      <div class="input-file">
        <input
          type="file"
          @change="($event) => {
            chnageFIleAction(($event?.currentTarget as HTMLInputElement))
          }"
        />
        <button class="btn" @click="addRectAction">file</button>
        <button class="btn" @click="imgDownload">Download</button>
        <button class="btn" @click="deleteAction">deleteAction</button>
      </div>
    </div>
  </div>
</template>
