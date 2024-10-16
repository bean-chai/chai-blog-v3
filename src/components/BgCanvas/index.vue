<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2023-12-20 15:06:20
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-01-30 17:11:46
 * @FilePath: \chaichaiBlog\src\components\BgCanvas\index.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <canvas id="canvas"></canvas>
</template>

<script setup lang="ts">
import { CanvasHTMLAttributes, onBeforeUnmount, onMounted, ref } from "vue";
import { drawCircle, clearCanvas } from "@/utils";

let activeColor = ref("");

activeColor.value = localStorage.activeColor as string;

const draw = (canvas: HTMLCanvasElement) => {
  document.addEventListener("mousemove", (e) => {
    clearCanvas(canvas);
    drawCircle(canvas, e.clientX, e.clientY, 3, activeColor.value);
    drawCircle(canvas, e.clientX, e.clientY, 20, activeColor.value, false);
  });
};

const handleResize = () => {
  const canvas: HTMLCanvasElement = document.querySelector(
    "#canvas"
  ) as HTMLCanvasElement;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw(canvas);
};

onMounted(() => {
  const canvas: HTMLCanvasElement = document.querySelector(
    "#canvas"
  ) as HTMLCanvasElement;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw(canvas);

  // document.addEventListener("mousemove", (e) => {
  //   clearCanvas(canvas);
  //   drawCircle(canvas, e.clientX, e.clientY, 3, activeColor.value);
  //   drawCircle(canvas, e.clientX, e.clientY, 20, activeColor.value, false);
  // });
  window.addEventListener("resize", handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
// canvas
canvas {
  position: fixed;
  z-index: 9999999999;
  left: 0;
  height: 0;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
}
</style>