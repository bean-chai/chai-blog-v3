<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-01-30 11:13:37
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-01-31 17:05:09
 * @FilePath: \chaichaiBlog\src\views\blog\editor\EditorView.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="editor-box">
    <MdEditor
      class="editor"
      v-model="text"
      :footers="footers"
      :showToolbarName="true"
      :autoDetectCode="true"
      :scrollAuto="isAuto"
      :toolbarsExclude="toolbarsExclude"
      :formatCopiedText="formatCopiedText"
      @onSave="onSave"
    >
      <template #defFooters>
        <span class="footer-text">{{ warmText }}</span>
        <span class="footer-text">{{ nowTime }}</span>
      </template>
    </MdEditor>
  </div>
</template>
  
  <script setup lang="ts">
import { ref, onBeforeMount, onUnmounted, onMounted } from "vue";
import { MarkdownItConfigPlugin, MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { config } from "md-editor-v3";
import { lineNumbers } from "@codemirror/view";

config({
  codeMirrorExtensions(_theme, extensions) {
    return [...extensions, lineNumbers()];
  },
});

const isAuto = ref(false);

onBeforeMount(() => {});

const nowTime = ref("");
let timeM: number | null | undefined = null;

onMounted(() => {
  // eslint-disable-next-line no-const-assign
  timeM = setInterval(() => {
    timeBean();
  }, 1000);
  isAuto.value = true;
});

// 下标
const footers = ["markdownTotal", 0, "=", 1, "scrollSwitch"];

//排除工具栏
const toolbarsExclude = ["github"];

//自动格式化代码
const formatCopiedText = (text: any) => {
  return `${text}  - from md-editor-v3`;
};

//默认内容
const text = ref("Hello Editor!");

const onSave = (v: MarkdownItConfigPlugin, h: Promise<string>) => {
  console.log(v);

  h.then((html: string) => {
    console.log(html);
  });
};

const warmText = ref("");

const timeBean = () => {
  const currentDate = ref(new Date());
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth() + 1; // 月份从 0 开始，所以需要加 1
  const day = currentDate.value.getDate();
  const hours = currentDate.value.getHours();
  const minutes = currentDate.value.getMinutes();
  const seconds = currentDate.value.getSeconds();

  switch (true) {
    case hours >= 0 && hours < 12:
      warmText.value = "早上好呀柴柴~今天也请好好努力哦！";
      break;
    case hours >= 12 && hours < 18:
      warmText.value = "中午好，吃过饭了吗！要不要睡会儿呢，那……咖啡呢！";
      break;
    case hours >= 18 && hours < 24:
      warmText.value =
        "晚上好，请好好爱惜自己，不要熬夜太晚了哦，记得早睡，永远爱你";
      break;
    default:
      warmText.value = "加载中……";
      break;
  }

  const daysOfWeek = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const dayOfWeek = daysOfWeek[currentDate.value.getDay()];

  nowTime.value = `${year}年${month}月${day}日   ${
    String(hours).split("").length === 1 ? "0" + hours : hours
  }:${String(minutes).split("").length === 1 ? "0" + minutes : minutes}:${
    String(seconds).split("").length === 1 ? "0" + seconds : seconds
  }   ${dayOfWeek}    `;
};

onUnmounted(() => {
  clearInterval(timeM);
});
</script>

<style lang="scss">
.editor-box {
  width: 100%;
  height: 100%;
}
.editor {
  height: 100% !important;
  color: var(--base-color);
}
.footer-text {
  color: var(--base-color);
}
.md-editor-footer {
  color: var(--base-color) !important;
}
</style>