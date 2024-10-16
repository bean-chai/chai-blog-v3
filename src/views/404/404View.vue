<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-01-29 17:31:49
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-01-29 17:34:47
 * @FilePath: \chaichaiBlog\src\views\404\404View.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="not-box">
    <img
      src="http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/404.png"
      alt=""
    />
    <div style="margin-bottom: 40px">根本找不到这个页面啊笨蛋！</div>
    <div>
      <chai-button @click="$router.push('home')">返回首页</chai-button>
    </div>
  </div>
</template>

<script setup>
import chaiButton from "@/components/button/button.vue";
</script>

<style lang="scss">
.not-box {
  width: 100%;
  height: 100%;
  background-color: #fff;
  text-align: center;
  padding-top: 200px;
}
</style>