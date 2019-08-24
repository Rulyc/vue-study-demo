import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/layout'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'echarts实例',
    component: Layout,
    redirect: '/',
    meta: { title: 'echarts实例' },
    children: [
      {
        path: '/one',
        name: '柱状图',
        component: resolve => require(['@/view/biz/echarts/one'], resolve)
      },
      {
        path: '/two',
        name: '折线图',
        component: resolve => require(['@/view/biz/echarts/two'], resolve)
      },
      {
        path: '/three',
        name: '圆形图',
        component: resolve => require(['@/view/biz/echarts/three'], resolve)
      },
      {
        path: '/ranjin',
        name: '燃尽图',
        component: resolve => require(['@/view/biz/echarts/ranjin'], resolve)
      },
      {
        path: '/tinymce',
        name: '富文本',
        component: resolve => require(['@/view/biz/tinymce/tinymce'], resolve)
      },
    ]
  },
]

export default new Router({
  routes: constantRouterMap
});
