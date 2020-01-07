/**
 * 代码的复用起见，将复用性代码封装在混合mixins中
 * 包含方法有： dispatch 用于向上级派发事件， broadcast 用于向下广播
 *
 * 解释 apply 与 call
 *    1、 每个函数都包含两个非继承而来的方法： call() 和 apply
 *    2、他们的作用是一样的，都是再特定的作用域中调用函数，等于设置函数体内的this对象的值，
 *        以扩充函数赖以运行的作用域； 他们第一位参数都是代表的this
 *    3、区别：只是接受的参数方式不一样
 *       函数名.call(this, arg1,arg2)
 *       函数名.apply(this, [arg1,arg2])
 *
 *    * */

function broadcast(componentName, eventName, params){
  // 遍历当前组件的所有孩子节点
  this.$children.forEach(child => {
    const name = child.$options.name // 获取组件标识name名称
    if(name === componentName){ // 找到与传入组件名相同的组件
      console.log(child,[eventName].concat(params),'if')
      // 等同于在子组件中this.$emit('click',params),这里的child相当于this
      child.$emit.apply(child,[eventName].concat(params))
    }else{
      // 递归调用 broadcast方法，apply的所有参数都必须放在数组中,第一位代表this
      broadcast.apply(child, [componentName,eventName].concat([params]));
    }
  })
}

export  default {
  methods:{
    /** 子给父传递消息 派发 */
    dispatch(componentName,eventName,params){
      let parent = this.$parent || this.$root; // 获取根节点
      let name = parent.$options.name; // 获取根节点的名字
      while (parent && (!name || name !== componentName)) { // 当根节点及名字存在，且名字不为传入的名字
        parent = parent.$parent; // 获取根节点的父级
        if(parent){
          name = parent.$options.name; // 获取根节点的父级名称
        }
      }
      if(parent){ // 祖父节点
        // 触发当前实例上的事件
        parent.$emit.apply(parent,[eventName].concat(params))
      }
    },
    /** 父给子传递消息 广播 */
    broadcast(componentName,eventName,params){
      // 递归调用broadcast方法，call的第一位为this,后面依次跟参数，参数与参数之间用逗号隔开
      broadcast.call(this,componentName,eventName,params)
    }
  }
}
