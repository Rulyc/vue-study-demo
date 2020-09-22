import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/layout'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'echarts实例',
    component: Layout,
    // redirect: '/',
    hidden: true,
    meta: { title: '空架子' },
    children: [
      {
        path: '/',
        name: 'demo01',
        component: resolve => require(['@/view/biz//demo01'], resolve),
        meta: { title: 'demo01' },
        // redirect: '/',
      },
      {
        path: '/two',
        name: 'demo02',
        component: resolve => require(['@/view/biz/demo02'], resolve),
        meta: { title: 'demo02' },
      },
      {
        path: '/vIFvFor',
        name: 'vue-demo01',
        component: resolve => require(['@/view/biz/vue-demo01'], resolve),
        meta: { title: 'demo02' },
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
});
