/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-10-09 15:52:20
 * @FilePath: \chai-blog\chaichaiBlog\src\router\index.ts
 * @Description:
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/welcome/welcome.vue')
    },
    {
      path: '/componentsTest',
      name: 'test',
      component: () => import('../views/test.vue')
    },
    {
      path: '/home',
      name: 'homepage',
      component: () => import('../views/home/HomeView.vue')
    },
    {
      path: '/friend',
      name: 'friendPage',
      component: () => import('../views/friend/FriendView.vue')
    },
    {
      path: '/earthSky',
      name: 'earthSky',
      component: () => import('../views/earthSky/EarthSkyView.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/musicBox/musicBoxView.vue')
    },
    {
      path: '/newMusic',
      name: 'newMusic',
      component: () => import('../views/newMusic/newMusicView.vue')
    },
    {
      path: '/maomao',
      name: 'maomao',
      component: () => import('../views/maomao/maomaoView.vue')
    },
    {
      path: '/aichat',
      name: 'aichat',
      component: () => import('../views/Aichat/AichatView.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('../views/blog/editor/EditorView.vue')
    },
    {
      path: '/render',
      name: 'render',
      component: () => import('../views/blog/editorRender/EditorRenderView.vue')
    },
    {
      path: '/money',
      name: 'money',
      component: () => import('../views/moneyList/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404/404View.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]
})

export default router
