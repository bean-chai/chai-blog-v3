<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-10-18 16:53:40
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-10-18 18:00:23
 * @FilePath: \chai-blog-new\src\components\article\articleView.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="article-father">
    <div class="article-box" v-for="(item, index) in articleList" :key="index">
      <div class="article-one" v-if="index % 2 === 0">
        <div class="one-left border-right">
          <div class="year-num-right">{{ item.time }}</div>
        </div>
        <div class="one-right"></div>
      </div>
      <div class="article-one" v-else>
        <div class="one-right border-right">333</div>
        <div class="one-left">
          <div class="year-num-left">{{ item.time }}</div>
        </div>
      </div>
      <div class="article-two" v-if="index % 2 === 0">
        <div class="two-left border-right"></div>
        <div class="two-right">阅读文章</div>
      </div>
      <div class="article-two" v-else>
        <div class="two-right border-right">阅读文章</div>
        <div class="two-left"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const articleList = [
  {
    time: 2024,
    title: "voceChat - 支持独立部署的个人云社交媒体聊天服务1", //标题
    label: ["voceChat", "IM", "云社交"], //标签
    abstract: "VoceChat使用体验，IM，聊天室，去中心化，云社交", //摘要
    num: "1300",
    visite: "1.2k",
  },
  {
    time: 2023,
    title: "voceChat - 支持独立部署的个人云社交媒体聊天服务2", //标题
    label: ["voceChat", "IM", "云社交"], //标签
    abstract: "VoceChat使用体验，IM，聊天室，去中心化，云社交", //摘要
    num: "1300",
    visite: "1.2k",
  },
  {
    time: 2022,
    title: "voceChat - 支持独立部署的个人云社交媒体聊天服务3", //标题
    label: ["voceChat", "IM", "云社交"], //标签
    abstract: "VoceChat使用体验，IM，聊天室，去中心化，云社交", //摘要
    num: "1300",
    visite: "1.2k",
  },
  {
    time: 2021,
    title: "voceChat - 支持独立部署的个人云社交媒体聊天服务4", //标题
    label: ["voceChat", "IM", "云社交"], //标签
    abstract: "VoceChat使用体验，IM，聊天室，去中心化，云社交", //摘要
    num: "1300",
    visite: "1.2k",
  },
];
</script>

<style lang="scss">
.article-father {
  width: 100%;
}

.article-box {
  display: flex;
  flex-wrap: wrap;
}

.article-one {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 427px;
}

.article-two {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 67px;
  border-bottom: 2px solid;
}
.one-left {
  position: relative;
  width: 300px;
  height: 100%;
  overflow: hidden;
}
.one-right {
  position: relative;

  width: calc(100% - 300px);
  height: 100%;
}
.border-right {
  border-right: 2px solid;
}
.two-left {
  border-top: 2px solid;
  width: calc(100% - 300px);
  height: 100%;
  background-size: 3px 3px;
  border-color: var(--base-color);
  background-image: radial-gradient(var(--base-color) 40%, transparent 0);
}
.two-right {
  width: 300px;
  height: 100%;
  border-top: none;
}
.year-num-left {
  position: absolute;
  font-size: 160px;
  font-weight: 550;
  font-style: italic;
  right: 75%;
  top: 60%;
  bottom: auto;
  left: auto;
  -webkit-transform: translate(50%, -50%) rotate(-90deg) translateY(-16%);
  transform: translate(50%, -50%) rotate(-90deg) translateY(-16%);
}
.year-num-right {
  position: absolute;
  font-size: 160px;
  font-weight: 550;
  font-style: italic;
  right: 0;
  top: 60%;
  bottom: auto;
  left: auto;
  -webkit-transform: translate(50%, -50%) rotate(-90deg) translateY(-16%);
  transform: translate(50%, -50%) rotate(-90deg) translateY(-16%);
}
</style>