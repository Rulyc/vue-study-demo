// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/common.scss'
import showdown from 'showdown'// 引入md文件
import 'prismjs/themes/prism.css';
Vue.use(showdown)
Vue.use(ElementUI)
Vue.config.productionTip = false
process.env.Mock && require('./mock.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
