
<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-10-16 20:04:37
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-10-16 23:08:59
 * @FilePath: \chaichaiBlog\src\components\colorPick\colorPick.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <input
    type="color"
    id="color"
    :value="colorSelected"
    @input="colorChange($event)"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["changeThem"]);

const colorSelected = ref("");

colorSelected.value = localStorage.getItem("activeColor") as string;

const colorChange = (event: { target: { value: string } }) => {
  colorSelected.value = event.target.value;
  emit("changeThem", event.target.value);
};
</script>

<style lang="scss" scoped>
#color {
  position: relative;
  cursor: pointer;
  right: 2px;
  top: -4px;
  border: 0;
  width: 12px;
  height: 16px;
  background: #ffffff00;
}
</style>