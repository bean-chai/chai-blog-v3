<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-12-16 18:35:23
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-01-29 16:02:53
 * @FilePath: \chaichaiBlog\src\views\friend\FriendView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="friend-box">
    <div class="friend-left">
      <chai-card :friendList="friendList" @checkUrl="checkUrl"></chai-card>
    </div>
    <div class="friend-right">
      <!-- <div class="img-box"> -->
      <!-- <img :src="showUrl" alt="" style="width: 100%" /> -->
      <div class="ld-box" v-show="loading">
        <div class="loading-box shake"></div>
        <div class="loading-text shake">just a moment ...</div>
      </div>
      <iframe
        ref="myIframe"
        v-show="!loading"
        class="img-box"
        :src="showBlog"
        frameborder="0"
      ></iframe>
      <!-- </div> -->
      <div class="visit-button">
        <chai-button @click="visiteFriend">拜访他们！</chai-button>
        <chai-button @click="backHome" plain>返回首页</chai-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import chaiCard from "@/components/card/card.vue";
import chaiButton from "@/components/button/button.vue";
const router = useRouter();
const friendList = [
  {
    name: "猫猫",
    url: "https://file.fishpi.cn/2022/07/MOSHED2022621164630-1b1ec532.gif?imageView2/1/w/210/h/210/interlace/0/q/100",
    text: "可爱又迷人的反派角色",
    blogUrl: "https://stillwarter.github.io/",
  },
  {
    name: "三月柳絮四月雨",
    url: "https://lemon-cxh.github.io/images/avatar.jpg",
    text: "我年华虚度，空有一身疲惫",
    blogUrl: "https://chenxiaohui.eu.org/",
  },
  {
    name: "百梦",
    url: "https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/mari.jpeg",
    text: "A Front-end web developer",
    blogUrl: "https://marrydream.top/",
  },
  {
    name: "bulabula",
    url: "https://pwl.stackoverflow.wiki/2021/09/bulabula1-98fde124.png?imageView2/1/w/210/h/210/interlace/0/q/100",
    text: "这个人很懒，没有留下什么",
    blogUrl: "https://fishpi.cn/member/bulabula",
  },
  {
    name: "鼠鼠在碎觉",
    url: "https://tmx.fishpi.cn/image/head.jpg",
    text: "我是不慎落入世界的一滴水墨",
    blogUrl: "https://www.sszsj.cc",
  },
  {
    name: "小七",
    url: "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/avatar-sevecn.png",
    text: "一个有柴柴站岗的博客！",
    blogUrl: "https://x7blog.com/",
  },
];
// const showUrl = ref("");
const showBlog = ref("");
const loading = ref(false);

const myIframe = ref(null);

let timePick;

const checkUrl = (blogValue, status) => {
  showBlog.value = blogValue;
  loading.value = status;
  let isReady = false;
  if (timePick) {
    clearTimeout(timePick);
  }
  if (myIframe.value.isConnected) {
    isReady = true;
  }
  // myIframe.value.addEventListener("load", (res) => {
  //   console.log(res, "ress");

  //   console.log(isReady, "alodIs");
  // });
  timePick = setTimeout(() => {
    if (isReady === true) {
      loading.value = false;
      clearTimeout(timePick);
    }
  }, 2000);
};

const visiteFriend = () => {
  // window.location.href = showBlog.value;
  window.open(showBlog.value, "_blank");
};

const clickBefor = () => {
  loading.value = true;
  // 监听iframe加载，但是效果太差了，暂时不用，别给我删了
  myIframe.value.addEventListener("load", (res) => {
    // console.log(res, "res");
    // console.log(myIframe, "myifrea");
    // console.log("页面加载完毕");
    loading.value = false;
  });
  // setTimeout(() => {
  //   loading.value = false;
  // }, 2000);
};
const backHome = () => {
  router.back();
};
</script>

<style lang="scss">
.shake {
  animation-name: shake;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  // animation: shake cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  // transform: translate3d(0, 0, 0);
}
@keyframes shake {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
.friend-box {
  height: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: nowrap;
}
.loading-box {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid var(--base-color);
  background-image: url(https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/loading.jpg);
  background-size: cover;
  margin: 0 auto;
  margin-top: 200px;
}
.loading-text {
  margin-top: 30px;
  font-family: Impact, Haettenschweiler, Charcoal, "Helvetica Inserat",
    "Arial Black", "sans serif";
  letter-spacing: 1px;
}
.ld-box {
  width: 100%;
  // height: calc(100% - 90px);
  flex: 1;
  border: 2px solid var(--base-color);
  text-align: center;
}
.friend-left {
  flex-shrink: 0;
  height: 100%;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.friend-right {
  width: 100%;
  height: 100%;
  border-left: 2px solid var(--base-color);
  margin-left: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  .img-box {
    width: 100%;
    // height: calc(100% - 90px);
    flex: 1;
    border: 2px solid var(--base-color);
  }
  .visit-button {
    // margin-top: 35px;
    display: flex;
    justify-content: space-between;
  }
}
</style>