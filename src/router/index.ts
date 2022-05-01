/**
 * 自动注册至路由，
 * 此文件只针对于无法使用自动注册的组件手动添加路由逻辑
 * 自动注册请在对应Vue文件中使用
 *  name: 'tts', //路由组件名称
 *  isRouter: true,  //是否自动为路由
 *  isComponents: false,  // 是否自动注册为公共组件
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { vueRouters } from './global'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'course',
      component: () => import('@/views/tools/tts.vue')
    },
    ...vueRouters()
  ]
})

export default router
