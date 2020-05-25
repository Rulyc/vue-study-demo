// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/common.scss'
import './assets/style/all-style.scss'
import 'prismjs/themes/prism.css'; /* 解析md,高亮显示且解析slot */
import './assets/icon/iconfont.css';
import components from './components/index.js'
Vue.use(components)

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
