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
    meta: { title: 'echarts实例' },
    children: [
      {
        path: '/',
        name: '柱状图',
        component: resolve => require(['@/view/biz/echarts/one'], resolve),
        meta: { title: '柱状图' },
        // redirect: '/',
      },
      {
        path: '/two',
        name: '折线图',
        component: resolve => require(['@/view/biz/echarts/two'], resolve),
        meta: { title: '折线图' },
      },
      {
        path: '/three',
        name: '圆形图',
        component: resolve => require(['@/view/biz/echarts/three'], resolve),
        meta: { title: '圆形图' },
      },
      {
        path: '/ranjin',
        name: '燃尽图',
        component: resolve => require(['@/view/biz/echarts/ranjin'], resolve),
        meta: { title: '燃尽图' },
      },
    ]
  },
  {
    path: '/table',
    name: 'elementUI表格中的实例',
    component: Layout,
    // redirect: '/',
    meta: { title: 'elementUI表格中的实例' },
    children: [
      {
        path: '/burnoutChart',
        name: '燃尽图/步骤条',
        component: resolve => require(['@/view/biz/table/table-burnout-chart'], resolve),
        meta: { title: '燃尽图/步骤条' },
      },
      {
        path: '/tableCol',
        name: 'tree表格动态合并',
        component: resolve => require(['@/view/biz/table/table'], resolve),
        meta: { title: 'tree表格动态合并' },
      },
      {
        path: '/tableAll',
        name: 'tree表格合计总数',
        component: resolve => require(['@/view/biz/table/table-all'], resolve),
        meta: { title: 'tree表格合计总数' },
      },
    ]
  },
  {
    path: '/tiny',
    name: '富文本实例',
    component: Layout,
    // redirect: '/',
    meta: { title: '富文本实例' },
    children: [
      {
        path: '/tinymce',
        name: '富文本',
        component: resolve => require(['@/view/biz/tinymce/tinymce'], resolve),
        meta: { title: '富文本' },
      },
    ]
  },
  {
    path: '/components',
    name: '封装组件',
    component: Layout,
    // redirect: '/',
    meta: { title: '封装组件' },
    children: [
      {
        path: '/Demo01',
        name: '封装组件第一篇',
        component: resolve => require(['@/view/biz/useComponents/Demo01'], resolve),
        meta: { title: '封装组件第一篇' },
      },
    ]
  },
  {
    path: '/communication',
    name: '组件通信',
    component: Layout,
    // redirect: '/',
    meta: { title: '组件通信' },
    children: [
      {
        path: '/patentDemo01',
        name: '父子组件通信',
        component: resolve => require(['@/view/biz/componentCommunication/parent-son-demo01/parent'], resolve),
        meta: { title: '父子组件通信' },
      },
    ]
  },
]

export default new Router({
  routes: constantRouterMap
});
