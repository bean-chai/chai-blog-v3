<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-10-16 17:08:08
 * @FilePath: \chai-blog-new\src\views\home\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div class="img">
    <div>
      <span>
        <img class="b2" src="@/assets/yezi.gif" alt="" />
      </span>
    </div>

    <!-- 顶部 -->
    <div class="title-box">
      <div class="title-fbox"></div>
      <div class="title-mbox">
        Sound
        <div class="loader" @click="togglePlay">
          <div
            class="outer"
            :style="{
              animationPlayState: isPlay ? 'running' : 'paused !important',
            }"
          ></div>
          <div
            class="middle"
            :style="{
              animationPlayState: isPlay ? 'running' : 'paused !important',
            }"
          ></div>
          <div
            class="inner"
            :style="{
              animationPlayState: isPlay ? 'running' : 'paused !important',
            }"
          ></div>
        </div>
      </div>
      <div class="title-lbox" @click="goTest">
        <div class="show-title">Profile</div>
      </div>
      <div class="title-ebox" :style="{ 'border-color': color, color: color }">
        Notice
        <div class="dots">
          <div class="dots-item"></div>
          <div class="dots-item"></div>
          <div class="dots-item"></div>
          <div class="dots-item"></div>
          <div class="dots-item"></div>
          <div class="dots-item"></div>
          <div class="dots-item"></div>
          <div class="dots-item"></div>
          <div class="dots-item"></div>
        </div>
      </div>
    </div>

    <!-- 左侧作者 -->
    <div class="author">
      <div class="touxiang">
        <!-- <div class="touxiang-cover"></div> -->
      </div>
      <div class="touxiang-color">
        <div class="name">柴柴</div>
        <div class="name-slip"></div>
        <div class="sign">生命久如暗室</div>
        <div class="sign">不妨我明写春诗</div>
      </div>

      <div class="sm-tab">
        <div class="sm-box">
          <div class="tab-num">50</div>
          <div class="tab-name">文章</div>
        </div>
        <div class="sm-box">
          <div class="tab-num">6</div>
          <div class="tab-name">分类</div>
        </div>
        <div>
          <div class="tab-num">41</div>
          <div class="tab-name">标签</div>
        </div>
      </div>

      <div class="icon-box">
        <div class="github-box" @click="goGithub">
          <div class="github"></div>
        </div>
      </div>

      <div class="cc-box">
        <div class="ct-cc-box4"></div>
        <div class="ct-cc-box5"></div>
        <div class="ct-cc-box6"></div>
        <div class="ct-cc-box7"></div>
        <div class="ct-cc-box8"></div>
        <div class="bt-cc">
          <div class="ct-cc-box1"></div>
          <div class="ct-cc-box2"></div>
          <div class="ct-cc-box3"></div>
        </div>
      </div>
    </div>

    <!-- 右侧轮播 -->
    <div class="banner-box">
      <div class="banner-left">
        <div
          class="split-Lbox"
          :style="{
            'border-color': color,
            backgroundImage: `linear-gradient(-45deg, ${color} 25%, transparent 0, transparent 50%, ${color} 0, ${color} 75%, transparent 0)`,
            backgroundSize: '20px 20px',
          }"
        ></div>
      </div>
      <div class="banner">
        <div class="left-top-fl">
          <svg
            t="1729060898418"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5059"
            width="200"
            height="200"
          >
            <path
              d="M281.608238 895.2865l0-110.25101001-91.336218 1e-8 0 35.756365 36.684504 0 0.071631 18.968004L117.418758 839.759859l0-91.676979L281.608238 748.08288l0.054235-72.655763 37.024242 0.054235c0 0 0 145.57861 0 219.806171L958.278671 895.287523l0-165.18925-146.025795 0 0 90.122577 36.613896 0 0-35.809577 72.94126599 0 0 55.348586-146.29287699 0-1e-8-110.233614c0 0-109.215424 0-164.65406099 0l0-108.928898c-11.251252 0.14223999-72.941266 0-72.941266 0l0-128.754432-164.902724 0 0-91.12337-73.189929 0 0-109.411899c0 0-124.504642 0-182.461635 0l0-91.641163c43.364647 0 146.097426 0 146.097426 0l-0.034792 18.396999-18.414395-1e-8 0 36.34579001 54.74074201 0 0.07265498-109.680005-237.50629898 0L62.320882 895.2865 281.608238 895.2865zM610.896916 784.409227L720.701764 784.409227l0 55.348586-109.840664-1e-8L610.896916 784.409227zM226.9555 693.143617L117.418758 693.143617l0-91.176582L226.9555 601.96703399 226.9555 693.143617zM483.196489 546.779108l0 73.852008-54.812373 0c0 49.829895 0 164.349115 0 164.349115l54.402027 0c0 0 0-72.655763 0-109.55516199 29.166273 0 73.26360699 0 73.263607-1e-8l0.05321201 164.332742L373.071346 839.757812l-0.054235-292.979728C373.01711 546.779108 441.70756199 546.779108 483.196489 546.779108zM318.685691 455.317023c0 0 0 105.071034 0 165.31409301-19.61064 0-37.07745301 0-37.077453-1e-8l0-73.709769c0 0-49.25889 0-73.012897 0 0-33.773198 0-91.60534799 0-91.605348L318.685691 455.316zM117.365546 345.672834L245.262448 345.672834l0 55.04568699c0 0-61.349253 0-91.139743 1e-8L154.122705 546.922371c-11.68104001 0-36.75715901 0-36.757159 0L117.365546 345.672834z"
              p-id="5060"
            ></path>
          </svg>
        </div>
        <div class="left-bottom-fl">
          <svg
            t="1729060898418"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5059"
            width="200"
            height="200"
          >
            <path
              d="M281.608238 895.2865l0-110.25101001-91.336218 1e-8 0 35.756365 36.684504 0 0.071631 18.968004L117.418758 839.759859l0-91.676979L281.608238 748.08288l0.054235-72.655763 37.024242 0.054235c0 0 0 145.57861 0 219.806171L958.278671 895.287523l0-165.18925-146.025795 0 0 90.122577 36.613896 0 0-35.809577 72.94126599 0 0 55.348586-146.29287699 0-1e-8-110.233614c0 0-109.215424 0-164.65406099 0l0-108.928898c-11.251252 0.14223999-72.941266 0-72.941266 0l0-128.754432-164.902724 0 0-91.12337-73.189929 0 0-109.411899c0 0-124.504642 0-182.461635 0l0-91.641163c43.364647 0 146.097426 0 146.097426 0l-0.034792 18.396999-18.414395-1e-8 0 36.34579001 54.74074201 0 0.07265498-109.680005-237.50629898 0L62.320882 895.2865 281.608238 895.2865zM610.896916 784.409227L720.701764 784.409227l0 55.348586-109.840664-1e-8L610.896916 784.409227zM226.9555 693.143617L117.418758 693.143617l0-91.176582L226.9555 601.96703399 226.9555 693.143617zM483.196489 546.779108l0 73.852008-54.812373 0c0 49.829895 0 164.349115 0 164.349115l54.402027 0c0 0 0-72.655763 0-109.55516199 29.166273 0 73.26360699 0 73.263607-1e-8l0.05321201 164.332742L373.071346 839.757812l-0.054235-292.979728C373.01711 546.779108 441.70756199 546.779108 483.196489 546.779108zM318.685691 455.317023c0 0 0 105.071034 0 165.31409301-19.61064 0-37.07745301 0-37.077453-1e-8l0-73.709769c0 0-49.25889 0-73.012897 0 0-33.773198 0-91.60534799 0-91.605348L318.685691 455.316zM117.365546 345.672834L245.262448 345.672834l0 55.04568699c0 0-61.349253 0-91.139743 1e-8L154.122705 546.922371c-11.68104001 0-36.75715901 0-36.757159 0L117.365546 345.672834z"
              p-id="5060"
            ></path>
          </svg>
        </div>
        <div class="right-top-fl">
          <svg
            t="1729060898418"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5059"
            width="200"
            height="200"
          >
            <path
              d="M281.608238 895.2865l0-110.25101001-91.336218 1e-8 0 35.756365 36.684504 0 0.071631 18.968004L117.418758 839.759859l0-91.676979L281.608238 748.08288l0.054235-72.655763 37.024242 0.054235c0 0 0 145.57861 0 219.806171L958.278671 895.287523l0-165.18925-146.025795 0 0 90.122577 36.613896 0 0-35.809577 72.94126599 0 0 55.348586-146.29287699 0-1e-8-110.233614c0 0-109.215424 0-164.65406099 0l0-108.928898c-11.251252 0.14223999-72.941266 0-72.941266 0l0-128.754432-164.902724 0 0-91.12337-73.189929 0 0-109.411899c0 0-124.504642 0-182.461635 0l0-91.641163c43.364647 0 146.097426 0 146.097426 0l-0.034792 18.396999-18.414395-1e-8 0 36.34579001 54.74074201 0 0.07265498-109.680005-237.50629898 0L62.320882 895.2865 281.608238 895.2865zM610.896916 784.409227L720.701764 784.409227l0 55.348586-109.840664-1e-8L610.896916 784.409227zM226.9555 693.143617L117.418758 693.143617l0-91.176582L226.9555 601.96703399 226.9555 693.143617zM483.196489 546.779108l0 73.852008-54.812373 0c0 49.829895 0 164.349115 0 164.349115l54.402027 0c0 0 0-72.655763 0-109.55516199 29.166273 0 73.26360699 0 73.263607-1e-8l0.05321201 164.332742L373.071346 839.757812l-0.054235-292.979728C373.01711 546.779108 441.70756199 546.779108 483.196489 546.779108zM318.685691 455.317023c0 0 0 105.071034 0 165.31409301-19.61064 0-37.07745301 0-37.077453-1e-8l0-73.709769c0 0-49.25889 0-73.012897 0 0-33.773198 0-91.60534799 0-91.605348L318.685691 455.316zM117.365546 345.672834L245.262448 345.672834l0 55.04568699c0 0-61.349253 0-91.139743 1e-8L154.122705 546.922371c-11.68104001 0-36.75715901 0-36.757159 0L117.365546 345.672834z"
              p-id="5060"
            ></path>
          </svg>
        </div>
        <div class="right-bottom-fl">
          <svg
            t="1729060898418"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5059"
            width="200"
            height="200"
          >
            <path
              d="M281.608238 895.2865l0-110.25101001-91.336218 1e-8 0 35.756365 36.684504 0 0.071631 18.968004L117.418758 839.759859l0-91.676979L281.608238 748.08288l0.054235-72.655763 37.024242 0.054235c0 0 0 145.57861 0 219.806171L958.278671 895.287523l0-165.18925-146.025795 0 0 90.122577 36.613896 0 0-35.809577 72.94126599 0 0 55.348586-146.29287699 0-1e-8-110.233614c0 0-109.215424 0-164.65406099 0l0-108.928898c-11.251252 0.14223999-72.941266 0-72.941266 0l0-128.754432-164.902724 0 0-91.12337-73.189929 0 0-109.411899c0 0-124.504642 0-182.461635 0l0-91.641163c43.364647 0 146.097426 0 146.097426 0l-0.034792 18.396999-18.414395-1e-8 0 36.34579001 54.74074201 0 0.07265498-109.680005-237.50629898 0L62.320882 895.2865 281.608238 895.2865zM610.896916 784.409227L720.701764 784.409227l0 55.348586-109.840664-1e-8L610.896916 784.409227zM226.9555 693.143617L117.418758 693.143617l0-91.176582L226.9555 601.96703399 226.9555 693.143617zM483.196489 546.779108l0 73.852008-54.812373 0c0 49.829895 0 164.349115 0 164.349115l54.402027 0c0 0 0-72.655763 0-109.55516199 29.166273 0 73.26360699 0 73.263607-1e-8l0.05321201 164.332742L373.071346 839.757812l-0.054235-292.979728C373.01711 546.779108 441.70756199 546.779108 483.196489 546.779108zM318.685691 455.317023c0 0 0 105.071034 0 165.31409301-19.61064 0-37.07745301 0-37.077453-1e-8l0-73.709769c0 0-49.25889 0-73.012897 0 0-33.773198 0-91.60534799 0-91.605348L318.685691 455.316zM117.365546 345.672834L245.262448 345.672834l0 55.04568699c0 0-61.349253 0-91.139743 1e-8L154.122705 546.922371c-11.68104001 0-36.75715901 0-36.757159 0L117.365546 345.672834z"
              p-id="5060"
            ></path>
          </svg>
        </div>
        <div class="text-box">
          <div class="cbox-content text-focus-in">风 若 有 约</div>
          <div class="cbox-content1">
            <span class="text-focus-inS"
              >花 当 不 误 <span class="sakura"></span
            ></span>
          </div>
        </div>
        <div
          class="banner-img"
          :style="{ 'background-image': `url(${pickList[index + 1]})` }"
        ></div>
        <div class="cover"></div>
      </div>
    </div>

    <!-- 公告 -->
    <div class="split-box">
      <div class="split-lbox" :style="{ 'border-color': color, color: color }">
        Notice
      </div>
      <div
        class="split-rbox"
        :style="{
          'border-color': color,
          backgroundImage: `radial-gradient(${color} 40%, transparent 0)`,
        }"
      >
        <div class="notice-title">公告:</div>
        <div class="notice-text">
          正在全面动工中！请期待最终结果吧！这下下定决心不能再鸽了╰(￣ω￣ｏ)
        </div>
        <div class="split-point" :style="{ color: color }">→</div>
      </div>
    </div>

    <chai-footer></chai-footer>
    <voceChat />
  </div>
</template>

<script setup lang="ts">
import chaiFooter from "@/components/footer/index.vue";
import { useCounterStore } from "@/stores/index.ts";
import { storeToRefs } from "pinia";
import { onBeforeUnmount, onMounted, ref } from "vue";
import router from "../../router";
const counter = useCounterStore();
let { color, isPlay } = storeToRefs(counter);
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";
import banner4 from "@/assets/banner4.png";
import banner5 from "@/assets/banner5.png";
import banner6 from "@/assets/banner6.png";
import banner7 from "@/assets/banner7.png";
import banner8 from "@/assets/banner8.png";
import banner9 from "@/assets/banner9.png";
import banner10 from "@/assets/banner10.png";
import banner11 from "@/assets/banner11.png";
import banner12 from "@/assets/banner12.png";
import banner13 from "@/assets/banner13.png";
import banner14 from "@/assets/banner14.png";
import banner15 from "@/assets/banner15.png";
import banner16 from "@/assets/banner16.png";
import banner17 from "@/assets/banner17.png";

const pickList = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
  banner11,
  banner12,
  banner13,
  banner14,
  banner15,
  banner16,
  banner17,
];

const index = ref(1);

const timer = ref();

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});

const getImageUrl = (index: any) => {
  return require(`@/assets/banner${index}.png`);
};

const goGithub = () => {
  window.open("https://github.com/bean-chai", "_blank");
};

const startTimer = () => {
  timer.value = setInterval(() => {
    console.log("定时器触发");
    if (index.value == 17) {
      index.value = 1;
    } else {
      index.value++;
    }
  }, 6000);
};

const goTest = () => {
  router.push("componentsTest");
};

const goFriend = () => {
  console.log(1111);

  router.push("friend");
};

const goSky = () => {
  router.push("earthSky");
};

// 改变音频播放状态
const togglePlay = () => {
  isPlay.value = !isPlay.value;
};
</script>

<style scoped lang="less">
.img {
  color: var(--base-color);
  position: relative;
  /* width: 100%; */
  /* height: 100vh; */
  overflow: hidden;
  box-sizing: border-box;
}

.img img {
  position: absolute;
}

.img .b2 {
  z-index: 9999;
  left: 1050px;
  transform-origin: left;
  transform: skew(30deg);
  filter: grayscale(400%) blur(10px) opacity(15%);
}

.title-box {
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 9999;
  width: calc(100% - 42px);
  border-right: 2px solid var(--base-color);
  border-bottom: 2px solid;
  height: 150px;
  background: url("@/assets/bgTexture.webp");
  // flex-direction: row;
}

.title-fbox {
  width: 28rem;
  /* flex: 12.5; */
  border-right: 2px solid;
  // border-bottom: 2px solid;
  border-color: var(--base-color);
  background-image: linear-gradient(
    45deg,
    var(--base-color) 25%,
    transparent 0,
    transparent 50%,
    var(--base-color) 0,
    var(--base-color) 75%,
    transparent 0
  );
  background-size: 40px 40px;
  flex-shrink: 0;
}

.title-mbox {
  // width: 150px;
  width: 130px;
  /* flex: 7; */
  text-align: center;
  font-weight: 700;
  padding-top: 20px;
  // border-bottom: 2px solid;
  border-right: 2px solid;
  border-color: var(--base-color);
  color: var(--base-color);
}

.title-lbox {
  color: var(--base-color);
  width: calc(100% - 48rem);
  /* flex: 48; */
  // border-bottom: 2px solid;
  border-right: 2px solid;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
  transition: background-color 0.4s linear, width 0.6s cubic-bezier(1, 0, 0, 1),
    transform 0.6s cubic-bezier(1, 0, 0, 1),
    -webkit-transform 0.6s cubic-bezier(1, 0, 0, 1);
  pointer-events: none;
}

.show-title {
  font-weight: 700;
}

.dots-item {
  background-color: var(--base-color);
}

dots-item1 {
  background-color: #fff;
}

.title-ebox {
  width: 90px;
  // flex: 9;
  flex-shrink: 0;
  // border-bottom: 2px solid;
  // border-right: 2px solid;
  font-weight: 700;
  padding-top: 20px;
  text-align: center;
}

.loader {
  position: relative;
  margin-top: 50px;
  cursor: pointer;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
  border-top-color: var(--base-color);
  border-right-color: var(--base-color);
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
  border-top-color: var(--base-color);
  border-right-color: var(--base-color);
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
  border-top-color: var(--base-color);
  border-right-color: var(--base-color);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.dots {
  width: 3em;
  height: 3em;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  margin: 20px auto;
}

.dots > div {
  width: 0.5em;
  height: 0.5em;

  border-radius: 50%;
  animation: fade 1.5s alternate ease-in-out infinite;
}

.dots > div:nth-of-type(2),
.dots > div:nth-of-type(4) {
  animation-delay: 0.25s;
}

.dots > div:nth-of-type(3),
.dots > div:nth-of-type(5),
.dots > div:nth-of-type(7) {
  animation-delay: 0.5s;
}

.dots > div:nth-of-type(6),
.dots > div:nth-of-type(8) {
  animation-delay: 0.75s;
}

.dots > div:nth-of-type(9) {
  animation-delay: 1s;
}

@keyframes fade {
  to {
    opacity: 0.2;
  }
}

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes vibrate-1 {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes wordsLoop {
  0% {
    transform: translateX(200px);
    -webkit-transform: translateX(200px);
  }

  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}

@-webkit-keyframes wordsLoop {
  0% {
    transform: translateX(200px);
    -webkit-transform: translateX(200px);
  }

  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}

.banner-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 148px;
  height: calc(100vh - 190px);
  border-bottom: 2px solid;
}

.banner-left {
  width: 28rem;
  position: relative;
}
.split-Lbox {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 250px;
  border-bottom: 2px solid var(--base-color);
  border-right: 2px solid var(--base-color);
  border-top: 2px solid var(--base-color);
  border-color: var(--base-color);
  background-image: linear-gradient(
    -45deg,
    var(--base-color) 25%,
    transparent 0,
    transparent 50%,
    var(--base-color) 0,
    var(--base-color) 75%,
    transparent 0
  );
  // background-size: "3px 3px";
}
.banner {
  width: calc(100% - 28rem);
  position: relative;
  overflow: hidden;
  // margin-left: 28rem;
  // transition: all 0.6s ease-in-out 0s;
}
.left-top-fl {
  z-index: 9;
  width: 250px;
  height: 250px;
  // background-image: url("@/assets/ch.svg");
  transform: rotate(90deg);
  color: var(--base-color);
  // fill: var(--base-color);
  background-size: cover;
  position: absolute;
  top: -17px;
  left: -38px;
  overflow: hidden;
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
.left-bottom-fl {
  z-index: 9;
  width: 250px;
  height: 250px;
  // background-image: url("@/assets/ch.svg");
  transform: scaleY(-1) rotate(90deg);
  color: var(--base-color);
  // fill: var(--base-color);
  background-size: cover;
  position: absolute;
  // top: -17px;
  bottom: -19px;
  left: -38px;
  overflow: hidden;
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
.right-top-fl {
  z-index: 9;
  width: 250px;
  height: 250px;
  // background-image: url("@/assets/ch.svg");
  transform: scaleX(-1) rotate(90deg);
  color: var(--base-color);
  // fill: var(--base-color);
  background-size: cover;
  position: absolute;
  // top: -17px;
  top: -19px;
  right: -38px;
  overflow: hidden;
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
.right-bottom-fl {
  z-index: 9;
  width: 250px;
  height: 250px;
  // background-image: url("@/assets/ch.svg");
  transform: scaleY(-1) scaleX(-1) rotate(90deg);
  color: var(--base-color);
  // fill: var(--base-color);
  background-size: cover;
  position: absolute;
  // top: -17px;
  bottom: -19px;
  right: -38px;
  overflow: hidden;
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
.banner-img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  content-visibility: auto;
  transition: all 0.3s ease-in-out 0.2s;
  animation: imageAnimation 16s linear infinite 0s;
}
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}

@keyframes imageAnimation {
  0% {
    transform: scale(1.05);
    animation-timing-function: ease-in;
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }
}

.text-box {
  color: #fff;
  position: absolute;
  top: 100px;
  z-index: 999;
  margin-left: 100px;
}

.cbox-content {
  // position: absolute;
  z-index: 99;
  font-size: 60px;
  font-weight: 700;
  margin-left: 15rem;
  margin-top: 200px;
  // animation: flicker 2s infinite;
}

.cbox-content1 {
  font-size: 18rem;
  font-weight: 700;
  margin-left: 30rem;
  margin-top: 30px;
  // animation: flicker 2s infinite;
}

.text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.text-focus-inS {
  font-size: 80px;
  animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.sakura {
  width: 10rem;
  height: 10rem;
  display: inline-block;
  animation: spin 2s linear infinite;
  background-image: url("@/assets/sakura.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.author {
  z-index: 9999;
  position: fixed;
  top: 170px;
  width: 28rem;
  height: calc(100vh - 394px);
  border-right: 2px solid;
  border-top: 2px solid;
  background: url("@/assets/bgTexture.webp");
  background-size: cover;
  border-bottom: 2px solid;
  text-align: center;
  overflow: hidden;
  // background-color: pink;
}

.touxiang {
  margin: 0 auto;
  margin-top: 60px;
  position: relative;
  z-index: 99;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  border: 2px solid;
  background-image: url("@/assets/touxiang.jpg");
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
  }
}
.touxiang-color {
  width: 200px;
  position: absolute;
  z-index: 9;
  border-radius: 10px;
  top: 190px;
  left: 50%;
  margin-left: -100px;
  background: var(--base-color);
  text-align: center;
  color: #fff;
  padding: 10px 5px;
  padding-top: 60px;
}

.touxiang-cover {
  position: absolute;
  left: -28px;
  top: -28px;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  background-image: url("@/assets/txk.png");
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
  img {
    width: 100%;
    height: 100%;
  }
}

.name {
  width: 100%;
  font-size: 18px;
  font-weight: 550;
  margin-top: 10px;
}
.name-slip {
  width: 30px;
  height: 3px;
  border-radius: 3px;
  background: #fff;
  // background: var(--base-color);
  // border-bottom: 1px solid;
  margin: 0 auto;
  margin-bottom: 15px;
}
.sign {
  font-size: 18px;
}
.sm-tab {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 130px;
}

.sm-box {
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid;
}

.tab-num {
  font-size: 20px;
  font-weight: 550;
}
.icon-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 10px;
}
.cc-box {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.bt-cc {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.ct-cc-box1 {
  z-index: 99;
  margin-bottom: -40px;
  margin-left: -20px;
  width: 140px;
  height: 140px;
  transform: rotate(30deg);
  background-image: url("@/assets/cc1.png");
  background-size: cover;
}
.ct-cc-box2 {
  z-index: 99;
  width: 150px;
  height: 150px;
  background-image: url("@/assets/cc2.png");
  background-size: cover;
}
.ct-cc-box3 {
  z-index: 99;
  width: 140px;
  height: 140px;
  margin-bottom: -30px;
  margin-right: -20px;
  transform: rotate(-35deg);
  background-image: url("@/assets/cc3.png");
  background-size: cover;
}
.ct-cc-box4 {
  position: absolute;
  bottom: 120px;
  left: 110px;
  z-index: 9;
  transform: rotate(-15deg);
  width: 160px;
  height: 160px;
  background-image: url("@/assets/cc4.png");
  background-size: cover;
}
.ct-cc-box5 {
  position: absolute;
  bottom: 120px;
  left: 260px;
  z-index: 9;
  transform: rotate(25deg);
  width: 120px;
  height: 120px;
  background-image: url("@/assets/cc5.png");
  background-size: cover;
}
.ct-cc-box6 {
  position: absolute;
  bottom: 120px;
  left: 0px;
  z-index: 9;
  width: 130px;
  height: 130px;
  background-image: url("@/assets/cc6.png");
  background-size: cover;
}
.ct-cc-box7 {
  position: absolute;
  bottom: 220px;
  left: 240px;
  z-index: 8;
  width: 160px;
  height: 160px;
  background-image: url("@/assets/cc7.png");
  background-size: cover;
}
.ct-cc-box8 {
  position: absolute;
  bottom: 220px;
  left: 5px;
  z-index: 8;
  transform: rotate(-5deg);
  width: 130px;
  height: 130px;
  background-image: url("@/assets/cc8.png");
  background-size: cover;
}
.github-box {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid;
}
.github {
  width: 20px;
  height: 20px;
  background-image: url("@/assets/github.png");
  background-size: cover;
  cursor: pointer;
}

.split-box {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 100px;
}

.split-lbox {
  text-align: center;
  min-width: 28rem;
  border-bottom: 2px solid;
  border-right: 2px solid;
  font-family: QuincyCF, serif;
  font-style: italic;
  font-weight: 700;
  font-size: 4rem;
}

.split-rbox {
  position: relative;
  width: calc(100% - 28rem);
  border-bottom: 2px solid;
  background-size: 5px 5px;
}

.notice-title {
  font-size: 18px;
  margin: 8px 0 0 10px;
}
.notice-text {
  // margin: 0px 0 0 80px;
  padding: 0 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.split-point {
  position: absolute;
  font-size: 60px;
  bottom: -12%;
  right: 0px;
  transform: rotate(45deg);
}

// 移动端适配
@media screen and (max-width: 935px) {
  .title-box {
    height: 150px;
  }
  .title-lbox {
    display: none;
  }
  .title-fbox {
    width: calc(100% - 130px - 90px);
  }
  .split-point {
    display: none;
  }
  .author {
    display: none;
  }
  .banner-left {
    display: none;
  }
  .banner {
    width: 100%;
  }
  .split-lbox {
    display: none;
  }
  .split-rbox {
    width: 100%;
  }
  .cbox-content {
    margin-top: 0;
    font-size: 40px;
  }
  .text-focus-inS {
    font-size: 30px;
  }
  .text-box {
    margin-left: 50px;
  }
}
</style>
