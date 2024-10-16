<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-10-10 08:56:16
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-10-10 09:25:27
 * @FilePath: \chai-blog\chaichaiBlog\src\views\maomao\maomaoView.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <video id="myVideo" muted autoplay loop src="@/assets/maomao.mp4"></video>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const body = document.querySelector("body");
  const iframes = body.querySelectorAll("iframe");
  console.log(body, "body");
  console.log(iframes, "iframes");
  iframes.style.display = "none";
});
</script>

<style>
#myVideo {
  width: 100%;
  height: 100%;
  /* object-fit: cover; 保持视频比例并填充整个容器 */
}
#VOCECHAT_WIDGET {
  display: none;
}
</style>