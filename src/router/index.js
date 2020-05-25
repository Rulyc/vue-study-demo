import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/layout'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: '按钮',
    component: Layout,
    // redirect: '/',
    meta: { title: 'button组件' },
    children: [
      {
        path: '/',
        name: 'button案例',
        component: resolve => require(['@/view/biz/useComponents/button-demo'], resolve),
        meta: { title: 'button组件案例' },
      },
      {
        path: '/buttonMd',
        name: 'button案例',
        component: resolve => require(['@/view/biz/useComponents/button-md'], resolve),
        meta: { title: 'button组件案例' },
      },
    ]
  },
  {
    path: '/form',
    name: '表单',
    component: Layout,
    // redirect: '/',
    meta: { title: 'form表单组件' },
    children: [
      {
        path: '/form',
        name: 'form案例',
        component: resolve => require(['@/view/biz/useComponents/form-demo'], resolve),
        meta: { title: 'form表单案例' },
      },
    ]
  // },
  // {
  //   path: '/communication',
  //   name: '组件通信',
  //   component: Layout,
  //   // redirect: '/',
  //   meta: { title: '组件通信' },
  //   children: [
  //     {
  //       path: '/patentDemo01',
  //       name: '父子组件通信',
  //       component: resolve => require(['@/view/biz/componentCommunication/parent-son-demo01/parent'], resolve),
  //       meta: { title: '父子组件通信' },
  //     },
  //     {
  //       path: '/patentDemo02',
  //       name: 'patentDemo02',
  //       component: resolve => require(['@/view/biz/componentCommunication/parent-son-demo02/parent'], resolve),
  //       meta: { title: 'dispatch 和 broadcast' },
  //     },
  //   ]
  },
]

export default new Router({
  routes: constantRouterMap
});
