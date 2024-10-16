<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-10-15 16:20:22
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-10-15 19:17:51
 * @FilePath: \chai-blog-new\src\components\them\them.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div class="title-text">welcome to {{ host }}</div>
  <div class="change-them">
    color palette:
    <div class="them-box" style="cursor: point">
      <span
        class="them-item"
        v-for="(item, index) in themList"
        :key="index"
        :style="{ background: item }"
        :class="{ isActive: item === activeColor }"
        @click="changeThem(item)"
      ></span>
      <chai-color
        @changeThem="changeThem"
        style="margin-bottom: 10px"
      ></chai-color>
    </div>
  </div>
</template>

<script setup lang="ts">
import chaiColor from "@/components/colorPick/colorPick.vue";
import { onMounted, ref } from "vue";
const index = ref(1);
const timer = ref(0);

const body = document.body;

const host = ref(window.location.host);

const themList = [
  "#dd9b9b",
  "#697f9a",
  "#4b9674",
  "#90a085",
  "#cea54f",
  "#272624",
];
let activeColor = ref("");

if (
  localStorage.activeColor === undefined ||
  localStorage.activeColor === null
) {
  localStorage.setItem("activeColor", themList[0]);
  body.style.setProperty("--base-color", themList[0], "");
} else {
  activeColor.value = localStorage.activeColor as string;
  body.style.setProperty("--base-color", activeColor.value, "");
}

/**
 * @description: 切换主题色
 * @param {*} item
 * @return {*}
 */
const changeThem = (item: string): any => {
  localStorage.setItem("activeColor", item);
  activeColor.value = item;
  body.style.setProperty("--base-color", item, "");
};
</script> 

<style lang="scss">
.change-them {
  position: fixed;
  color: var(--base-color);
  /* top: 10px; */
  right: 20px;
  display: flex;
  flex-wrap: nowrap;
  font-size: 10px;
  border: none !important;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  letter-spacing: 0.015em;
}

.base-color {
  color: var(--borderColor);
  --border-color: var("borderColor");
}

.title-text {
  position: fixed;
  left: 23rem;
  font-size: 10px;
  /* font-family: serif; */
  font-weight: 700;
  font-style: italic;
  text-align: center;
  letter-spacing: 0.015em;
  color: var(--base-color);
}

.them-box {
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 6px;
}

.them-box span {
  width: 8px;
  height: 8px;
  cursor: pointer;
}

.isActive {
  height: 16px !important;
}
</style>
