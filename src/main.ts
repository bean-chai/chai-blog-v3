/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-01-30 14:24:18
 * @FilePath: \chaichaiBlog\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import './assets/base.css'
//兼容globalthis
import 'globalthis/auto'


import { createApp } from 'vue'
// import { createStore } from './stores'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// const pinia = createStore()
// import { dispatchEventStrage } from '@/utils/localStorageReview'
import highlight from 'highlight.js'
import "highlight.js/styles/atom-one-dark.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(dispatchEventStrage)
// app.use(pinia)

app.directive("highlight", function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: HTMLElement) => {
        highlight.highlightBlock(block);
    })
})


app.mount('#app')
