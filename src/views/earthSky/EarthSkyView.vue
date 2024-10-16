
<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-01-23 09:06:30
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-01-25 13:04:05
 * @FilePath: \chaichaiBlog\src\views\earthSky\EarthSkyView.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="sky-father">
    <div class="sky-header">
      <div class="header-left">TIME</div>
      <div>
        <div class="year-box">
          <div
            v-for="(item, index) in yearsArr"
            :class="defaulrYear === index ? 'check-year' : 'year-item'"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <div class="mon-box">
          <div
            v-for="(item, index) in nonthArr"
            :class="defaulrYear === index ? 'check-mon' : 'mon-item'"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="rbox-cos"></div>
      <div class="header-text">
        <div>ヾ(•ω•`)o</div>
        <div>✦世界树✦ -- 最好的伙伴！ 大好き！</div>
      </div>
    </div>
    <div class="sky-content">
      <div v-for="(item, index) in imgArr" :key="index" class="img-box">
        <div class="img-content">
          <img
            v-if="
              item.imgUrl.split('.')[item.imgUrl.split('.').length - 1] ===
                'jpg' ||
              item.imgUrl.split('.')[item.imgUrl.split('.').length - 1] ===
                'JPG' ||
              item.imgUrl.split('.')[item.imgUrl.split('.').length - 1] ===
                'png' ||
              item.imgUrl.split('.')[item.imgUrl.split('.').length - 1] ===
                'PNG'
            "
            :src="item.imgUrl"
            alt=""
          />
          <div v-else>
            <video controls loop muted>
              <source :src="item.imgUrl" type="video/mp4" />
              您的浏览器不支持 HTML5 视频。
            </video>
          </div>
        </div>
        <div class="info-box">
          <div class="info-title">{{ item.text }}</div>
          <div class="info-right">
            <div class="logo-box"></div>
            <div class="info-item">
              <div @click="clickZip" class="zip-box">
                材质包：ComplementaryUnbound_r5.1.1 ↓
              </div>
              <div class="time-box">{{ item.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tip-box" :style="{ display: displayDefault }">
      <span>柴柴小提示：鼠标长按图片可以预览哦~</span>
      <span style="margin-left: 3rem" @click="clickShot">×</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const defaulrYear = ref(0);

const displayDefault = ref("block");

const yearsArr = ["2024", "2023", "……"];
const nonthArr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
const imgArr = [
  // {
  //   imgUrl:
  //     "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/17/64/1399566417/1399566417-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1706166004&gen=playurlv2&os=08cbv&oi=3062330491&trid=dad9a78dff464a0c8fc3dc9e4c7acc05h&mid=0&platform=html5&upsig=13e9d3ac7f746a8251d8dad309d466f7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&f=h_0_0&bw=36886&logo=80000000",
  //   text: "小七：你们先打我好困，先睡会儿",
  //   time: "2024.1.25",
  // },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/7sleep.jpg",
    text: "小七：你们先打我好困，先睡会儿",
    time: "2024.1.25",
  },
  {
    imgUrl: "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/wc.png",
    text: "怎么会有人在别人脑袋里修厕所的啊？",
    time: "2024.1.25",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/445.png",
    text: "随拍",
    time: "2024.1.25",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/sky4.jpg",
    text: "绿野仙踪 二",
    time: "2024.1.25",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/sky3.jpg",
    text: "绿野仙踪 一",
    time: "2024.1.25",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/goodBye.jpg",
    text: "全球畅销小说————再见面时，我们就是敌人了",
    time: "2024.1.24",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/sunDown.jpg",
    text: "相伴朝朝暮暮 二",
    time: "2024.1.24",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/sunUp.jpg",
    text: "相伴朝朝暮暮 一",
    time: "2024.1.24",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/sky2.jpg",
    text: "世界树空岛实拍图（晚）",
    time: "2024.1.24",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/sky1.jpg",
    text: "世界树空岛实拍图（早）",
    time: "2024.1.24",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/watermallen.jpg",
    text: "地空吃瓜小组集合！",
    time: "2024.1.24",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/ourThree.JPG",
    text: "《我们仨》",
    time: "2024.1.23",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/772nai.png",
    text: "小七：人手 *2 奶",
    time: "2024.1.23",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/7FF.mp4",
    text: "七七发癫日常",
    time: "2024.1.10",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/waterRR.mp4",
    text: "头条！辣条恶魔浸猪笼！(VCR)",
    time: "2024.1.8",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/waterRR.jpg",
    text: "头条！辣条恶魔浸猪笼！",
    time: "2024.1.8",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/dreamChai1.jpg",
    text: "一只有梦想的柴 一",
    time: "2024.1.6",
  },
  {
    imgUrl:
      "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/dreamChai2.jpg",
    text: "一只有梦想的柴 二",
    time: "2024.1.6",
  },
];

const clickZip = () => {
  window.open(
    "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/earthSky/ComplementaryUnbound_r5.1.1.zip"
  );
};

const clickShot = () => {
  displayDefault.value = "none";
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.sky-father {
  width: 100%;
  height: 100%;
}
.sky-header {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 15rem;
  border-bottom: 0.2rem solid var(--base-color);
}
.header-left {
  text-align: center;
  width: 20%;
  line-height: 15rem;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.1rem;
  font-size: 2.8rem;
  border-right: 0.2rem solid var(--base-color);
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
  background-size: 2rem 2rem;
  -webkit-text-stroke: 1px var(--base-color);
}
.header-text {
  // line-height: 18rem;
  // margin-left: 8rem;
  margin-top: 5rem;
  font-size: 2rem;
  color: var(--base-color);
  div {
    font-weight: 600;
  }
}
.rbox-cos {
  width: 30rem;
  margin-left: 15rem;
  border-color: var(--base-color);
  background: linear-gradient(
    to bottom right,
    transparent 0%,
    transparent calc(50% - 0.1rem),
    var(--base-color) 50%,
    transparent calc(50% + 0.1rem),
    transparent 100%
  );
}

.year-box {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 3rem;
  color: var(--base-color);
}
.year-item {
  margin-left: 4rem;
  font-size: 1.8rem;
}
.check-year {
  margin-left: 4rem;
  font-size: 1.8rem;
  font-weight: 700;
  border-bottom: 0.1rem solid var(--base-color);
}
.mon-box {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 2rem;
  color: var(--base-color);
}
.mon-item {
  margin-left: 4rem;
  font-size: 1.8rem;
}
.check-mon {
  margin-left: 4rem;
  font-size: 1.8rem;
  font-weight: 700;
  border-bottom: 0.1rem solid var(--base-color);
}
.sky-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;
  text-align: center;
}
.img-box {
  width: 48%;
  border: 0.2rem solid var(--base-color);
  margin: 0 auto;
  margin-bottom: 3rem;
  box-shadow: rgba(0, 0, 0, 0.03) 0rem 0.1rem 0.2rem 0rem,
    rgba(0, 0, 0, 0.04) 0rem 0.4rem 1.6rem 0rem;
}
.img-content {
  border-bottom: 0.2rem solid var(--base-color);
  width: 100%;
  height: 60rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:active {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 99999;
      // left: 20px;
      // top: 20px;
      width: 80%;
      height: 80%;
    }
  }
}
.info-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 3rem;
  padding-bottom: 1rem;
  background: #fff;
}
.info-title {
  color: var(--base-color);
  font-size: 1.7rem;
  // margin-left: 3rem;
  font-weight: 600;
  margin-top: 1.5rem;
}
.info-right {
  display: flex;
  flex-wrap: nowrap;
}
.logo-box {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-image: url(https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/loading.jpg);
  background-size: cover;
  margin-top: 1.5rem;
  margin-right: 4rem;
  &:after {
    content: "";
    margin-left: 5.5rem;
    margin-top: -0.5rem;
    border-left: 0.2rem solid var(--base-color);
    height: 5rem;
    display: inline-block;
    vertical-align: middle;
  }
}
.info-item {
  color: var(--base-color);
  display: flex;
  flex-direction: column !important;
  // padding-right: 3rem;
}
.zip-box {
  font-size: 1.4rem;
  margin-top: 1rem;
  font-weight: 600;
}
.time-box {
  text-align: left;
  font-size: 1.2rem;
  margin-top: 1rem;
}
// .split-Lbox {
//   width: 30rem;
//   border-color: var(--base-color);
//   background-image: linear-gradient(
//     -45deg,
//     var(--base-color) 25%,
//     transparent 0,
//     transparent 50%,
//     var(--base-color) 0,
//     var(--base-color) 75%,
//     transparent 0
//   );
//   background-size: 2rem 2rem;
// }
video {
  width: 100% !important;
  height: 60rem !important;
}
.tip-box {
  // display: flex;
  // flex-wrap: nowrap;
  // justify-content: space-between;
  background: #fff;
  border: 2px solid var(--base-color);
  color: var(--base-color);
  position: fixed;
  top: 20rem;
  right: 0rem;
  padding: 2rem 3rem;
}
</style>