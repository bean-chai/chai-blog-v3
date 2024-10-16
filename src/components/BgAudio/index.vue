<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-12-14 22:17:03
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-06-24 16:09:08
 * @FilePath: \chai-blog\chaichaiBlog\src\components\BgAudio\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <!-- so la wa a -->
  <!-- src="http://music.163.com/song/media/outer/url?id=1327341487.mp3" -->
  <!-- src="http://music.163.com/song/media/outer/url?id=2106445969.mp3" 空中散步-->
  <!-- src="http://music.163.com/song/media/outer/url?id=2095883494.mp3" -->
  <!-- src="http://music.163.com/song/media/outer/url?id=2005862572.mp3" -->
  <!-- src="http://music.163.com/song/media/outer/url?id=2036445126.mp3" -->
  <!-- src="https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/FuwaMoco%20sing%20Wannabe_1.m4a" -->

  <audio
    src="http://music.163.com/song/media/outer/url?id=2036445126.mp3"
    loop
    ref="au"
  ></audio>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useCounterStore } from "@/stores";
const counter = useCounterStore();
let { isPlay } = storeToRefs(counter);

const au = ref<InstanceType<typeof HTMLAudioElement> | null>(null);

watch(isPlay, (newV) => {
  console.log(newV);
  if (newV) {
    au.value.play();
  } else {
    au.value.pause();
  }
});
</script>