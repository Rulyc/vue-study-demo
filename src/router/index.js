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
        path: '/',
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
    ]
  },
  {
    path: '/burnoutChart',
    name: 'elementUI表格中的实例',
    component: Layout,
    redirect: '/',
    meta: { title: 'elementUI表格中的实例' },
    children: [
      {
        path: '/burnoutChart',
        name: '燃尽图/步骤条',
        component: resolve => require(['@/view/biz/table/table-burnout-chart'], resolve)
      },
      {
        path: '/tableCol',
        name: 'tree表格动态合并',
        component: resolve => require(['@/view/biz/table/table'], resolve)
      },
      {
        path: '/tableAll',
        name: 'tree表格合计总数',
        component: resolve => require(['@/view/biz/table/table-all'], resolve)
      },
    ]
  },
  {
    path: '/tinymce',
    name: '富文本实例',
    component: Layout,
    redirect: '/',
    meta: { title: '富文本实例' },
    children: [
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
