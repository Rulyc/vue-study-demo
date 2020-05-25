/**
 * 描述： 所有组件的入口文件
 * 功能： 自动引入组件文件下所有的vue文件，进行全局注册
 * */

const requireComponent = require.context('./',true,/\.vue$/);
const install = (Vue) => {
  // 判断是否被注册过，如果注册过，直接返回否则注册一遍
  if(install.installed) return;
  install.installed;

  requireComponent.keys().forEach(fileName =>{
    const config = requireComponent(fileName); // 拿到第i个的vue文件的文件名
    const componentName = config.default.name; // 拿到第i个vue文件的默认name
    Vue.component(componentName, config.default||config)
  })
}

// 确保是正常环境
if(typeof window !== 'undefined' && window.Vue){
  install(install(window.Vue))
}

export default {
  install
}

