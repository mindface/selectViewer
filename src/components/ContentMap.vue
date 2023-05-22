<script lang="ts" setup>
import { onMounted, computed, ref } from "vue";
import { GChart } from 'vue-google-charts'
import datajson2010 from '../json/data2010.json'
const targetElement = ref();
const dataYear = ref(datajson2010.year);
const infoTitle = ref(datajson2010.infoTitle);
const infoTotal = ref(datajson2010.total);
const d = ref(false);
const dataList = ref<[string,(number|string),(number|string)][]>([]);
const selectList = [
  {id:"1",year:"2010"},
  {id:"2",year:"2011"},
  {id:"3",year:"2012"},
  {id:"4",year:"2013"},
  {id:"5",year:"2014"},
  {id:"6",year:"2015"},
  {id:"7",year:"2016"},
  {id:"8",year:"2017"},
  {id:"9",year:"2018"},
  {id:"10",year:"2019"},
];

type DataList = {
  "areaId": string;
  "area": string;
  "number": string;
}

const fetchSelectData = (year: string) => {
  (async() => {
    const res = await fetch(`http://localhost:5173/test/data${year}.json`)
    res.json().then((res) => {
      setList(res.areaList);
    })
  })();
}

const setList = (dataArray:DataList[]) => {
  const list: [string,(number|string),(number|string)][] = [['都道府県', '人口','nnn']];
  dataArray.forEach((item) => {
    list.push([item.area,Number(item.number.replace(',','')),30]);
  });
  if(list.length > 40) {
    d.value = true;
    dataList.value = list;
  }
}

onMounted(async () => {
  fetchSelectData("2010");
  // .forEach((item) => {
  //   list.push([item.area,Number(item.number.replace(',',''))]);
  // });
  // console.log(list);
  // if(list.length > 40) {
  //   d.value = true;
  //   dataList.value = list;
  // }
});
  // Set chart options
  let options = {
      chart: {
          title: "関西地地方の都道府県の基準地価 - 2020年",
        },
        width: 1200,
        height: 700,
        region: 'JP',
        resolution: 'provinces',
    };
  const selectChangeAction = (e:Event) => {
    console.log(e)
    const element = e.target as HTMLSelectElement
    fetchSelectData(element?.value);
  } 
</script>

<template>
<div class="item-method">
  <div class="title">{{ infoTitle }} | {{ dataYear }}</div>
  <div class="select-box">
     <select name="" id="" @change="selectChangeAction" >
      <option v-for="item in selectList" :value="item.year">{{ item.year }}</option>
     </select>
  </div>
  <div class="item-method__inner">
    <div v-if="d" ref="targetElement" class="" id="google-charts">
      <GChart
        :settings="{ packages: ['geochart', 'table', 'map'], mapsApiKey: 'AIzaSyBtB5YhAvaOXrLMOm_kWm3LT7fME8xHlzU' }"
        type="GeoChart"
        :data="dataList"
        :options="options"
      />
      {{ infoTotal }}
    </div>
  </div>
</div>
</template>
