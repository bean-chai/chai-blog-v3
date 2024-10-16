<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2023-12-20 15:06:20
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-10-15 10:50:19
 * @FilePath: \chai-blog-new\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="main-box root">
    <!-- 主题色 -->
    <chai-them></chai-them>
    <!-- 主体 -->
    <div class="border-box">
      <!-- <div class="tip-box">
        <img
          src="http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/chaiTip1.png"
          alt=""
        />
      </div> -->
      <div class="container" v-if="showSlide">
        <!-- --t是自定义属性，通过var函数可调用 -->
        <li style="--t: 20%">
          <a @click="$router.push('home')">
            <i class="" aria-hidden="true">首页</i>
          </a>
        </li>
        <li style="--t: 30%">
          <a @click="$router.push('friend')">
            <i class="" aria-hidden="true">友链</i>
          </a>
        </li>
        <li style="--t: 40%">
          <a @click="$router.push('earthSky')">
            <i class="" aria-hidden="true">地空</i>
          </a>
        </li>
        <li style="--t: 50%">
          <a @click="$router.push('music')">
            <i class="" aria-hidden="true">音乐盒</i>
          </a>
        </li>
        <li style="--t: 60%">
          <a @click="$router.push('aichat')">
            <i class="" aria-hidden="true">柴GPT</i>
          </a>
        </li>
        <li style="--t: 70%">
          <a @click="$router.push('editor')">
            <i class="" aria-hidden="true">富文本</i>
          </a>
        </li>
        <li style="--t: 80%; padding-bottom: 20px">
          <a>
            <chai-them aria-hidden="true"></chai-them>
          </a>
        </li>
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
      <router-view v-slot="{ Component }">
        <transition name="bounce" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <!-- canvas绘制鼠标 -->
    <bg-canvas></bg-canvas>
    <!-- 背景音 -->
    <bg-audio></bg-audio>
  </div>
</template>
 
<script setup lang="ts">
import chaiThem from "@/components/them/them.vue";
import { fitRem } from "@/hook";
import { BgAudio } from "@/components/BgAudio";
import { BgCanvas } from "@/components/BgCanvas";
import router from "./router";
import { onMounted, ref, watch } from "vue";
import { getIPs } from "@/utils/getUserIp";

getIPs((ip) => {
  console.log(ip);
});

const showSlide = ref(false);

watch(
  () => router.currentRoute.value,
  (newvaue) => {
    if (newvaue.name === "welcome" || newvaue.name === "maomao") {
      showSlide.value = false;
    } else {
      showSlide.value = true;
    }
  },
  { immediate: true }
);

// 适配rem字体
fitRem(document, window);
</script>


<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: #383c93;
  text-decoration: none;
}

.main-box {
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background: url("@/assets/bgTexture.webp");
}

.root::before {
  content: "";
  position: fixed;
  z-index: 80;
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/noise.png");
  background-position: 0 0, 0 0;
  background-size: 250px 250px, 500px 500px;
  will-change: background-position;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  animation: noiseTextureAnim2 0.35s steps(1) infinite;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  pointer-events: none !important;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes noiseTextureAnim2 {
  0% {
    background-position: 0 0, 0 0;
  }

  10% {
    background-position: 10px 10px, 0 0;
  }

  20% {
    background-position: 150px 20px, 0 0;
  }

  30% {
    background-position: 125px 125px, 0 0;
  }

  40% {
    background-position: 40px 170px, 0 0;
  }

  50% {
    background-position: 125px 125px, 0 0;
  }

  60% {
    background-position: 90px 10px, 0 0;
  }

  70% {
    background-position: 60px 100px, 0 0;
  }

  80% {
    background-position: 20px 70px, 0 0;
  }

  90% {
    background-position: 120px 80px, 0 0;
  }

  to {
    background-position: 0 250px, 0 0;
  }
}

.border-box {
  position: fixed;
  z-index: 999999999999;
  top: 20px;
  right: 20px;
  left: 20px;
  bottom: 20px;
  border: 2px solid var(--base-color);
  overflow-x: hidden;
  overflow-y: scroll;
}

.border-box::-webkit-scrollbar {
  display: none !important;
}
a {
  text-decoration: none;
}
.container {
  width: 15px;
  height: 500px;
  position: fixed;
  z-index: 999999;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--base-color);
  /* 右上右下圆角 */
  border-radius: 0 15px 15px 0;
  overflow: hidden;
  transition: 0.3s;
}
.container:hover {
  /* 鼠标移入，展开+改变圆角大小 */
  width: 130px;
  border-radius: 0 30px 30px 0;
}
.container:hover li a {
  /* 鼠标移入，改变字体颜色 */
  color: #fff;
}
.container::before {
  content: "";
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: var(--base-color);
}
.container .top {
  width: calc(100% - 30px);
  margin-left: 30px;
  height: 20%;
  background-color: #222;
  border-radius: 0 0 0 20px;
  transition: 0.2s;
}
.container .middle {
  width: calc(100% - 60px);
  height: 10%;
  background-color: var(--base-color);
  margin-left: 40px;
  border-radius: 20px;
}
.container .bottom {
  width: calc(100% - 30px);
  height: 100%;
  margin-left: 30px;
  background-color: #222;
  border-radius: 20px 0 0 0;
}
.container li {
  position: absolute;
  /* 通过var函数调用自定义属性--t */
  top: var(--t);
  width: 100%;
  height: 10%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container li a {
  /* 字体颜色透明 */
  color: transparent;
  transition: 0.3s;
}
/* 分别为每一个li元素设置.top的高度 */
/* ~是兄弟选择器 */
.container li:nth-child(1):hover ~ .top {
  height: 20%;
}
.container li:nth-child(2):hover ~ .top {
  height: 30%;
}
.container li:nth-child(3):hover ~ .top {
  height: 40%;
}
.container li:nth-child(4):hover ~ .top {
  height: 50%;
}
.container li:nth-child(5):hover ~ .top {
  height: 60%;
}
.container li:nth-child(6):hover ~ .top {
  height: 70%;
}
.container li:nth-child(7):hover ~ .top {
  height: 80%;
}

.tip-box {
  width: 300px;
  position: fixed;
  top: 0;
  left: 0px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
