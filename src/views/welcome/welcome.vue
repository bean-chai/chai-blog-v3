<template>
  <div class="alert-box">
    <div class="alert-text">为了您的浏览体验，是否需要为您开启背景音乐</div>
    <div class="btn-box">
      <span class="alert-btn" @click="playRedio(true)">yes</span>
      <span class="alert-btn" @click="playRedio(false)">no</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/index";
import { storeToRefs } from "pinia";
import router from "@/router";

const counter = useCounterStore();
let { isPlay } = storeToRefs(counter);

/**
 * @description: 开始摇头
 * @return {*}
 */
const playRedio = (status: boolean) => {
  isPlay.value = status;
  router.push("/home");
};
</script>


<style scoped>
.alert-box {
  width: 100%;
  text-align: center;
  color: var(--base-color);
}

.alert-text {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 200px;
}

.btn-box {
  margin: 0 auto;
  width: 250px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 100px;
}

/* .alert-btn1 {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  transition: 0.5s all;
} */

.alert-btn {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 2px solid var(--base-color);
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  transition: 0.5s all;
}

.alert-btn:hover {
  /* width: 120px;
  height: 120px;
  line-height: 120px; */
  transform: scale(1.2);
}

/* .alert-btn2:hover {
  width: 120px;
  height: 120px;
  line-height: 120px;
} */
</style>
