<template>
  <!-- <div class="bg">
    <span>( •̀ ω •́ )✧</span>
  </div> -->
  <div class="render-box">
    <MdPreview :modelValue="state.text" :editorId="state.id" class="text-box" />
  </div>
  <MdCatalog
    class="mulu"
    :editorId="state.id"
    @onClick="onClick"
    @onActive="onActive"
    :scrollElement="scrollElement"
  />
  <!-- <div class="author-box">
    <div class="little-box">1</div>
    <div class="little-box">2</div>
  </div> -->
</template>
  
  <script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
import router from "@/router";

const state = reactive({
  text: ref(`

## ​ 序言

- 在工作室的发展中，我们急需一个更加简单便捷，高效，适用于团队内部交流的组织平台。
- 起因是我们团队一直是直接使用 QQ 进行活动，发现 QQ 很多功能不是很方便并且过于臃肿，越来越不契合工作室的生产环境，于是开始了解 IM 系统。
- 这里就需要引入一个概念去中心化（Decentralization）。去中心化，不是不要中心，而是由节点来自由选择中心、自由决定中心。简单地说，中心化的意思，是中心决定节点。节点必须依赖中心，节点离开了中心就无法生存。在去中心化系统中，任何人都是一个节点，任何人也都可以成为一个中心。任何中心都不是永久的，而是阶段性的，任何中心对节点都不具有强制性。
- 起先使用的是 Matrix，个人的感觉是操作过于繁琐，对于很多新人或者急性子来说不太友好，尤其是端对端加密，本该是优点功能，但却导致他人使用上会不理解这个功能，不会操作，导致很多人消息都看不到，再加上移动设备上支持的不太好，使用了一段时间后便放弃了。

## 一、首次接触 voceChat 

之后便很偶然的看到了 voceChat，并且有很好的中文支持，经过了解后果断作为了我的最佳解决方案 [voceChat 官方网站](https://voce.chat/zh-CN)

> VoceChat  是一款支持独立部署的个人云社交媒体聊天服务。15MB 的大小可部署在任何的服务器上，部署简单，很少需要维护。前端可以内嵌到自己的网站下，数据完全由用户自己掌握，传输过程加密。VoceChat 从  Slack, Discord, RocketChat, Solid, Matrix  等产品和规范中博采众长，适用于团队内部交流，个人聊天服务，网站客服，网站内嵌社区的场景。
> 我们认为 Web 3.0 去中心化的第一步是基于个人云的去平台化，通过个性化的计算与个性化的存储，让个人和组织拥有自己的平台，所以 VoceChat 的定位是能轻易部署在私有云上的社交协作程序。

## 二、voceChat 个人使用体验

### 1.界面简洁美观，一目了然

![1](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-51-01.png)

### 2.操作简单清晰

![2](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-52-32.png)
![3](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-52-52.png)
![4](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-53-12.png)

### 3.配置丰富，每个配置都配有官方使用文档及相关介绍，极其贴心

![5](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-53-24.png)
![6](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-53-38.png)

### 4.聊天页面功能丰富

支持 md
![7](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-54-43.png)
常用@、置顶、转发、删除
![8](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-54-59.png)
文档、图片、音频文件发送后自动保存到文件夹
![9](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-55-14.png)
支持屏幕共享、语音、视频
![10](<http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/EWQ4OLL(1OJL%7B1I%7B)%5BEW52S.png>)
支持机器人
![11](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/6719dfe2-7f9e-409d-9dd0-980e8c242cfc.png)

### 5.支持 IOS、安卓 APP

![12](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/e08e935a253195555975172a0ac56036.jpg)

### 6.支持 iframe 引入

![13](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/Snipaste_2024-05-14_14-57-48.png)

### 7.支持网页聊天挂件
![14](http://4433studio.oss-cn-hangzhou.aliyuncs.com/vocePic/widget.demo.chaichai.jpg)

## 三、总结

使用近一个月下来，非常的称心如意，完美的适配了我们的所有需求，从部署到配置到正式启用，非常的简洁丝滑，没有过多的繁琐操作，极为的方便。

无论是摸鱼聊天、网页客服、分组合作，都能完美胜任。并且开发者们亲切友善，至今仍然高度活跃，这也无疑给使用者增添了极大的产品信心。

值得一提的是，免费版人数限制为 20 人，pro 版及定制版无人数限制，具体需求可根据自己的实际情况在官网首页进行查看。

​
`),
  id: "my-editor",
});

onMounted(() => {
  const render = ref<HTMLElement | null>(null);
  const bg: HTMLElement | null = document.querySelector(".bg");
  const box: HTMLElement | null = document.querySelector(".border-box");
  render.value = document.querySelector(".text-box");
  //   const mulu: HTMLElement | null = document.querySelector(".mulu");

  //   if (Number(bg?.style.height) <= box.scrollTop) {
  //     mulu?.style.position = "fixed";
  //   }

  if (box !== null && bg !== null) {
    box.addEventListener("scroll", function (e) {
      if (box.scrollTop != 0) {
        bg.style.backgroundPosition =
          "calc(50% + " +
          box.scrollTop +
          "px) calc(50% + " +
          box.scrollTop +
          "px)";
      } else {
        bg.style.backgroundPosition = "";
      }
    });
  }
  nextTick(() => {
    if (render.value !== null) {
      console.log(render.value.scrollTop, "render.value.scrollTop");

      render.value.scrollTop = 0;
    }
  });
});

const scrollElement = document.documentElement;

const onClick = (e: any, t: any) => {
  const baseColor = localStorage.activeColor as string;

  var element = document.getElementById(`${t.text}`);

  const spanList = document.querySelectorAll(".md-editor-catalog-link > span");

  for (let i = 0; i < spanList.length; i++) {
    (spanList[i] as HTMLElement).style.color = "";
    (spanList[t.index - 1] as HTMLElement).style.color = baseColor;
  }

  setTimeout(() => {
    toH(element);
  }, 100); // 延迟100毫秒执行滚动操作
};

const toH = (element: HTMLElement | null) => {
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const onActive = (heading: any) => {
  console.log(heading, "head");
};
</script>

<style lang="scss">
.box1 {
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.render-box {
  //   width: 50%;
  //   margin: 0 auto;
  //   position: relative;
  padding-top: 20px;
}
.text-box {
  width: 50%;
  position: relative;
  margin: 0 auto;
  border: 2px solid var(--base-color);
  border-top: 15px solid var(--base-color);
}
.mulu {
  position: fixed;
  width: 300px;
  top: 42px;
  left: 100px;
  //   right: 0;
  overflow-y: hidden;
  background: #fff;
  border: 2px solid var(--base-color);
  padding: 20px;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}
.md-editor-catalog-active > span {
  color: #000;
}
.md-editor-catalog-link span:hover {
  color: var(--base-color) !important;
}
.bg {
  background-image: url("http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg14.png");
  background-size: cover;
  background-position: 50% 50%;
  height: 100vh;
  font-size: 450px;
  font-weight: 900;
  text-align: center;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  padding-top: 100px;
}
.bg::before {
  content: "";
  /* 背景图片继承父元素 */
  background-image: inherit;

  background-size: cover;
  background-position: 50% 50%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -99;
}
.author-box {
  position: fixed;
  top: 42px;
  right: 60px;
  display: flex;
  flex-direction: column;
  width: 400px;
}
.little-box {
  background: #fff;
  height: 300px;
  border: 2px solid var(--base-color);
  margin-bottom: 20px;
  transition: all 0.2s;
  transform-style: preserve-3d;
  // box-shadow: inset 0 0 30px rgb(83, 83, 82);
}
</style>