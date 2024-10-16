/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-10-16 20:25:38
 * @FilePath: \chaichaiBlog\src\stores\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  // const color = ref("");
  const activeColor = ref("#cea54f");
  const isPlay = ref(false)
  const themList = ref([
    "#cea54f",
    "#697f9a",
    "#4b9674",
    "#90a085",
    "#99a6a1",
    "#272624",
  ]);
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, themList, activeColor, isPlay }
})
